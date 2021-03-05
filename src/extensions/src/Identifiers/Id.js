Array.prototype.removeEmptyStrings = function () {
    return this.filter(elem => elem !== '')
}

String.prototype.toId = function () {
    return '#' + this
}

const fs = require('fs')
const Selector = require('../Selector')
const selector = new Selector()

class IdIdentifier {
    constructor(layers, ignoredIds) {
        this.layers = layers
        this.ignoredIds = ignoredIds
    }

    writeSelectors(fileName) {
        fs.writeFileSync(fileName, '// ID \n', { flag: 'a' })
        selector.write(fileName, this.idInfo, 'unique')
    }

    get idInfo() {
        const getFormatedId = ids => ids.map(name => '#' + name)
        return {
            names: this.names,
            identifierNames: getFormatedId(this.ids)
        }
    }

    get names() {
        return this.ids.getFormatedNames()
    }

    get ids() {
        return this.layers.getAttribute('id', this.ignoredIds) 
    }
}

module.exports = IdIdentifier