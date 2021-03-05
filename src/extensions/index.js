const fs = require('fs')
const Selector = require('./src/Selector')
const HTML = require('./src/HTML')

const ClassIdentifier = require('./src/Identifiers/Class')
const IdIdentifier = require('./src/Identifiers/Id')
const TagIdentifier = require('./src/Identifiers/Tag')
const NameIdentifier = require('./src/Identifiers/Name')

let classIden
let idIden
let tagIden
let nameIden

String.prototype.concatExtension = function (extension) {
    const regex = RegExp(`.${extension}+`, 'gi')
    const cleanFilename = this.replace(regex, '')
    return cleanFilename + `.${extension}`
}

Array.prototype.containsIden = function (iden) {
    return this.some(e => e === iden)
}

Array.prototype.getAllNames = function () {
    const idens = [
        [true, 'html', 'body'],
        [this.containsIden('class'), ...classIden.names.unique, ...classIden.names.multiple],
        [this.containsIden('id'), ...idIden.names],
        [this.containsIden('tag'), ...tagIden.multipleTags, ...tagIden.uniqueTags],
        [this.containsIden('name'), ...nameIden.multipleNames, ...nameIden.uniqueNames]
    ]

    const allNames = idens
        .filter(([condition,]) => condition)
        .flatMap(iden => iden.slice(1))

    return allNames
}

Array.prototype.getAttribute = function (attribute, ignoreAttributes) {
    const removeIgnoredAtrributes = attr => !ignoreAttributes.some(iAttr => iAttr === attr)
    const getAttributesValue = layer => {
        const attrStartValueIndex = layer.match(`${attribute}="`).index + attribute.length + 2
        const startString = layer.substring(attrStartValueIndex)
        return startString.substring(0, startString.indexOf('"'))
    }

    const attributesValue = this
        .filter(layer => !!layer.match(`${attribute}="`))
        .map(getAttributesValue)
        .removeEmptyStrings()
        .filter(removeIgnoredAtrributes)

    return attributesValue
}

Array.prototype.repeat = function (value) {
    return this.reduce((acc, openTag) => openTag === value ? acc + 1 : acc, 0)
}

fs.clearFile = function (path) {
    this.writeFileSync(path, '')
}

module.exports = toolbox => {
    const { filesystem } = toolbox

    function generateSelectors(path, fileName, config = {}) {
        return new Promise((resolve, reject) => {
            fileName = fileName.concatExtension('js')
            path = path.concatExtension('html')

            const resolveMsg = filesystem.exists(fileName) ?
                `\n  ${fileName} was updated.` :
                `\n  ${fileName} was created.`

            try {
                const html = new HTML(path, fileName)
                const selector = new Selector(fileName)

                const {
                    exports,
                    identifiers,
                    link,
                    ignore
                } = config

                classIden = new ClassIdentifier(html.layers, ignore.classes)
                idIden = new IdIdentifier(html.layers, ignore.ids)
                tagIden = new TagIdentifier(html.layers, ignore.tags)
                nameIden = new NameIdentifier(html.layers, ignore.names)

                fs.clearFile(fileName)

                selector.writeMainSelectors()

                if (identifiers.containsIden('id')) idIden.writeSelectors(fileName)
                if (identifiers.containsIden('class')) classIden.writeSelectors(fileName)
                if (identifiers.containsIden('tag')) tagIden.writeSelectors(fileName)
                if (identifiers.containsIden('name')) nameIden.writeSelectors(fileName)

                if (exports) selector.export(identifiers.getAllNames())
                if (html.notContainsLink) html.writeLink()
                if (!link) html.removeLink()

            } catch (err) {
                reject('\n  There was an error generating selector file.')
            }

            resolve(resolveMsg)
        })
    }

    toolbox.generateSelectors = generateSelectors
}