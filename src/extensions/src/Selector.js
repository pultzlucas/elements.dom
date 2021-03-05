const fs = require('fs')

class Selector {
    constructor(fileName){
        this.fileName = fileName
    }

    getSelectorString(name, className, mode = 'unique') {
        if (mode === 'unique') return `const ${name} = document.querySelector('${className}')\n`
        if (mode === 'multiple') return `const ${name} = document.querySelectorAll('${className}')\n`
    }

    export(allNames) {
        const data = ['\nexport {\n    ', ...allNames.join(',\n    ') , '\n}']
        data.forEach(string => fs.writeFileSync(this.fileName, string, { flag: 'a' }))
    }

    write(fileName, objInfo, mode) {
        objInfo.names.forEach((name, index) => fs.writeFileSync(
            fileName, this.getSelectorString(name, objInfo.identifierNames[index], mode), { flag: 'a' }
        ))
    }

    writeMainSelectors() {
        fs.writeFileSync(this.fileName, '// MAIN \n', { flag: 'a' })
        fs.writeFileSync(this.fileName, this.getSelectorString('html', 'html'), { flag: 'a' })
        fs.writeFileSync(this.fileName, this.getSelectorString('body', 'body'), { flag: 'a' })
    }
}

module.exports = Selector
