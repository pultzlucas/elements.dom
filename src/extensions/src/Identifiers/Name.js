
const fs = require('fs')
const Selector = require('../Selector')
const selector = new Selector()

class NameIdentifier {
    constructor(layers, ignoredNames) {
        this.layers = layers
        this.ignoredNames = ignoredNames
    }

    writeSelectors(fileName){
        fs.writeFileSync(fileName, '// NAME \n', { flag: 'a' })
        selector.write(fileName, this.multipleNamesInfo, 'multiple')
        selector.write(fileName, this.uniqueNamesInfo, 'unique')
    }

    get multipleNamesInfo(){
        return {
            names: this.multipleNames,
            identifierNames: this.multipleNames,
        }
    }

    get uniqueNamesInfo(){
        this.uniqueNames
        return {
            names: this.uniqueNames,
            identifierNames: this.uniqueNames
        }
    }

    get uniqueNames(){
        const notIsEqual = name => !this.multipleNames.some(mName => name === mName)
        const uniqueNames = this.names.filter(name => notIsEqual(name))
        return uniqueNames
    }

    get multipleNames(){
        const noRepeatedNames = [...new Set(this.names)]
        const repetedNames = noRepeatedNames.filter(name => this.names.repeat(name) > 1)
        return repetedNames
    }
    
    get names() {
        return this.layers.getAttribute('name', this.ignoredNames)
    }
}

module.exports = NameIdentifier