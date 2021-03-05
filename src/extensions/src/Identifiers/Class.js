String.prototype.transformNameToClass = function () {
    const containsMoreNames = / +/.test(this)

    const clear = arr => arr.filter(e => e !== '')
    const concatDot = string => '.' + string
    const nameToClass = string => clear(string.split(' '))
        .map(name => concatDot(name)).join('')

    return containsMoreNames ? nameToClass(this) : concatDot(this)
}

String.prototype.upperFirstChar = function () {
    const StringArr = this.split('').map((char, idx) =>
        idx > 0 ? char : char.toUpperCase())
    return StringArr.join('')
}

String.prototype.splitName = function () {
    const classChars = RegExp(' +|-+|_+', 'gi')
    return this.replace(classChars, ' ').split(' ')
}

Array.prototype.toCamelCase = function () {
    const stringInCamelCase = this.map((string, index) =>
        index > 0 ? string.upperFirstChar() : string)
    return stringInCamelCase.join('')
}

Array.prototype.getFormatedNames = function () {
    return this.map(name => name.splitName().toCamelCase())
}

Array.prototype.getFormatedClasses = function () {
    return this.map(name => name.transformNameToClass())
}

Array.prototype.removeEmptyStrings = function () {
    return this.filter(elem => elem !== '')
}

const fs = require('fs')
const Selector = require('../Selector')
const selector = new Selector()

class ClassIdentifier {
    constructor(layers, ignoredClasses) {
        this.layers = layers
        this.ignoredClasses = ignoredClasses
    }

    writeSelectors(fileName) {
        fs.writeFileSync(fileName, '// CLASS \n', { flag: 'a' })
        selector.write(fileName, this.multipleClassesInfo, 'multiple')
        selector.write(fileName, this.uniqueClassesInfo, 'unique')
    }

    get multipleClassesInfo() {
        return {
            names: this.names.multiple,
            identifierNames: this.formatedClasses.multiple
        }
    }

    get uniqueClassesInfo() {
        return {
            names: this.names.unique,
            identifierNames: this.formatedClasses.unique
        }
    }

    get names() {
        return {
            unique: this.uniqueClasses.getFormatedNames(),
            multiple: this.multipleClasses.getFormatedNames(),
        }
    }

    get formatedClasses() {
        return {
            unique: this.uniqueClasses.getFormatedClasses(),
            multiple: this.multipleClasses.getFormatedClasses(),
        }
    }

    get uniqueClasses() {
        const multipleClasses = this.multipleClasses

        const notIsEqual = uClass => !multipleClasses.some(mClass => uClass === mClass)
        const cleanUniqueClasses = this.classes.filter(uClass => notIsEqual(uClass))
        return cleanUniqueClasses
    }

    get multipleClasses() {
        const splitClassesArray = this.classes.flatMap(string => string.split(' '))
        const allClassesArray = [...splitClassesArray, ...this.classes]

        const noRepetArray = Array.from(new Set(allClassesArray))
        const repetedClasses = noRepetArray.filter((className) => allClassesArray.repeat(className) > 2)

        return repetedClasses
    }

    get classes() {
        return this.layers.getAttribute('class', this.ignoredClasses)
    }
}

module.exports = ClassIdentifier