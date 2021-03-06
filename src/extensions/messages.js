module.exports = toolbox => {
    const messages = {
        success: {
            domConfigWasCreated: 'dom.config.json was created.',
            domConfingWasRemoved: 'dom.config.json was removed.'
        },

        error: {
            errorCreatingConfig: '\033[31mthere was an error creating the dom.config.json file.\033[0m',
            configNotExists: "\033[33mConfigError: Not is possible create the selector file because the dom.config.json file not exists.\033[0m",
            anyParameterIsEmpty:  "\033[33mNot is possible create the selector file because some parameter is empty. Please type again.\033[0m",
            errorGeneratingSelectors: '\n  \033[31mThere was an error generating selector file.\033[0m'
        },

        info: {
            welcome: "\nWelcome to \033[36melements.dom\033[0m!",
            typeInformation: "\n\ntype \"\033[33mdom -h\033[0m\" for more information.",
            configNotExists: "Type \"\033[36mdom init\033[0m\" to create a config file.",
            templateOfGenerateCommand: "Example of parameters: \"dom generate \033[36mindex.html elements.js\033[0m\"",
            rememberToRestartWatch: '\033[35mWhen dom.config.json is changed remember to restart the method watch.\033[0m\n'
        }

    }

    toolbox.messages = messages
}