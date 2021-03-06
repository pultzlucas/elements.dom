const fs = require('fs')

String.prototype.concatExtension = function (extension) {
    const regex = RegExp(`.${extension}+`, 'gi')
    const cleanFilename = this.replace(regex, '')
    return cleanFilename + `.${extension}`
}

module.exports = {
    name: 'generate',
    description: 'Generates selectors file',
    run: async toolbox => {
        const { generateSelectors, parameters, messages, print: { success, info, error }, filesystem } = toolbox
        const configJSON = await filesystem.read('dom.config.json', 'json')

        
        const domConfigNotExists = !filesystem.exists('dom.config.json')
        
        if (domConfigNotExists) {
            error(messages.error.configNotExists)
            info(messages.info.configNotExists)
            return
        }
        
        const anyParameterIsEmpty = parameters.first === undefined || parameters.second === undefined
        
        if (anyParameterIsEmpty) {
            error(messages.error.anyParameterIsEmpty)
            info(messages.info.templateOfGenerateCommand)
            return
        }
        
        const htmlFile = parameters.first.concatExtension('html')
        const jsFile = parameters.second.concatExtension('js')
        
        const generate = () => {
            generateSelectors(htmlFile, jsFile, configJSON)
                .then(successMsg => success(successMsg))
                .catch(errorMsg => error(errorMsg))
        }

        if (!!parameters.options.watch) {
            info('Watching \033[36m' + htmlFile + '\033[0m')
            info(messages.info.rememberToRestartWatch)

            fs.watchFile(htmlFile, () => generate())
        }

        generate()
    }
}