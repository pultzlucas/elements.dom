Array.prototype.removeChar = function (...chars) {
    return chars.reduce((acc, char) =>
        acc.map(elem => elem.replace(RegExp(char, 'g'), ''))
        , this)
}

Array.prototype.repeat = function (value) {
    return this.reduce((acc, openTag) => openTag === value ? acc + 1 : acc, 0)
}

const fs = require('fs')
const Selector = require('../Selector')
const selector = new Selector()

class TagIdentifier {
    constructor(layers, ignoredTags) {
        this.layers = layers
        this.ignoredTags = ignoredTags
    }

    writeSelectors(fileName) {
        fs.writeFileSync(fileName, '// TAG \n', { flag: 'a' })
        selector.write(fileName, this.multipleTagsInfo, 'multiple')
        selector.write(fileName, this.uniqueTagsInfo, 'unique')
    }

    get multipleTagsInfo() {
        return {
            names: this.multipleTags,
            identifierNames: this.multipleTags
        }
    }

    get uniqueTagsInfo() {
        return {
            names: this.uniqueTags,
            identifierNames: this.uniqueTags
        }
    }

    get multipleTags() {
        const openTags = this.tags.filter(tag => !/\//.test(tag))
        const noRepeatedTags = [...new Set(openTags)]
        const repetedTags = noRepeatedTags.filter(tag => openTags.repeat(tag) > 1)

        return repetedTags
    }

    get uniqueTags() {
        const multipleTags = this.multipleTags
        const tags = [...new Set(this.tags.removeChar('/'))]
        const notIsEqual = tag => !multipleTags.some(mtag => tag === mtag)
        const uniqueTags = tags.filter(tag => notIsEqual(tag))
        return uniqueTags
    }

    get tags() {
        const layersWithoutTokens = this.layers.removeChar('<', '>')
        const removeScriptTag = tag => tag !== 'script' && tag !== '/script'
        const removeIgnoredTag = tag => 
            !this.ignoredTags.some(ignoredTag => tag === ignoredTag || tag === `/${ignoredTag}`)

        const tags = layersWithoutTokens
            .map(layer => layer.match(' ')
                ? layer.substring(0, layer.match(' ').index)
                : layer
            )
            .filter(removeScriptTag)
            .filter(removeIgnoredTag)

        return tags
    }
}

module.exports = TagIdentifier