module.exports = toolbox => {
    const { colorString } = toolbox

    const messages = {
        success: {
            domConfigWasCreated: 'dom.config.json was created.',
            domConfingWasRemoved: 'dom.config.json was removed.',
        },

        error: {
            errorCreatingConfig: colorString('there was an error creating the dom.config.json file.', 31),
            configNotExists: colorString('Not is possible create the selector file because the dom.config.json file not exists.', 33),
            anyParameterIsEmpty: colorString('Not is possible create the selector file because some parameter is empty. Please type again.', 33),
            errorGeneratingSelectors: colorString('There was an error generating selector file.', 33),
            errorCreatingHtmlFile: 'There was an error generating the HTML',
            htmlMustBeSpecified: 'HTML file name must be specified'
        },

        info: {
            welcome: '\nWelcome to ' + colorString('elements.dom', 36) + '!',
            typeInformation: '\n\ntype ' + colorString('"dom -h"', 33) + ' for more information.',
            configNotExists: 'Type ' + colorString('"dom init"', 36) + ' to create a config file.',
            templateOfGenerateCommand: 'Example of parameters: "dom generate' + colorString(' index.html elements.js', 36) + '"',
            rememberToRestartWatch: colorString('When dom.config.json is changed remember to restart the method watch.\n', 35)
        }

    }

    toolbox.messages = messages
}