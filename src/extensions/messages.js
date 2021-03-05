module.exports = toolbox => {
    const messages = {
        success: {
            domConfigWasCreated: '\n  dom.config.json was created.',
            domConfingWasRemoved: '\n  dom.config.json was removed.'
        },

        error: {
            errorCreatingConfig: '\n  \033[31mthere was an error creating the dom.config.json file.\033[0m',
            configNotExists: "\n  \033[33mConfigError: Not is possible create the selector file because the dom.config.json file not exists.\033[0m",
            anyParameterIsEmpty:  "\n  \033[33mNot is possible create the selector file because any parameter is empty. Please type again.\033[0m",
            errorGeneratingSelectors: '\n  \033[31mThere was an error generating selector file.\033[0m'
        },

        info: {
            configNotExists: "\n  Type \"\033[36mdom init\033[0m\" to create a config file.",
            welcome: "\n  Welcome to \033[36melements.dom\033[0m!",
            typeInformation: "\n\n  type \"\033[33mdom -h\033[0m\" for more information.",
            templateOfGenerateCommand: "\n  Example of parameters: \"dom generate \033[36mindex.html elements.js\033[0m\""
        }

    }

    toolbox.messages = messages
}