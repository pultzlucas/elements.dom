const { print } = require("gluegun")

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

        generateSelectors(parameters.first, parameters.second, configJSON)
            .then(successMsg => success(successMsg))
            .catch(errorMsg => error(errorMsg))
    }
}