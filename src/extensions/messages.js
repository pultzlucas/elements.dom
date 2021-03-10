module.exports = toolbox => {
    const { colorString } = toolbox

    const messages = {
        success: {
            domConfigWasCreated: 'dom.config.json was created.',
            domConfingWasRemoved: 'dom.config.json was removed.',
        },

        error: {
            errorCreatingConfig: colorString('there was an error creating the dom.config.json file.', 31),
            anyParameterIsEmpty: colorString('Not is possible create the selector file because some parameter is empty. Please type again.', 33),
            errorGeneratingSelectors: colorString('There was an error generating selector file.', 33),
        },

        info: {
            welcome: '\nWelcome to ' + colorString('elements.dom', 36) + '!',
            typeInformation: '\n\ntype ' + colorString('"dom -h"', 33) + ' for more information.',
            templateOfGenerateCommand: 'Example of parameters: "dom generate' + colorString(' index.html elements.js', 36) + '"',
            rememberToRestartWatch: colorString('When dom.config.json is changed remember to restart the method watch.\n', 35)
        }

    }

    toolbox.messages = messages
}