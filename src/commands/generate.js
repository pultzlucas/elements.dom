const fs = require('fs')

module.exports = {
    name: 'generate',
    description: 'Generates selectors file',
    run: async toolbox => {
        const {
            generateSelectors,
            concatExtension,
            colorString,
            parameters,
            messages,
            print: { success, info, error },
            filesystem
        } = toolbox
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

        const htmlFile = concatExtension(parameters.first, 'html')
        const jsFile = concatExtension(parameters.second, 'js')

        const generate = () => {
            generateSelectors(htmlFile, jsFile, configJSON)
                .then(successMsg => success(successMsg))
                .catch(errorMsg => error(errorMsg))
        }

        if (!!parameters.options.watch) {
            info('Watching' + colorString(htmlFile, 36))
            info(messages.info.rememberToRestartWatch)

            fs.watchFile(htmlFile, () => generate())
        }

        generate()
    }
}