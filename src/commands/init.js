module.exports = {
    name: 'init',
    description: 'Create dom.config.json file',
    run: async toolbox => {
        const { messages, filesystem, template, print: { success, error } } = toolbox
        const domConfigNotExists = !filesystem.exists('dom.config.json')

        if (domConfigNotExists) {
            template.generate({
                template: 'dom-config.json',
                target: 'dom.config.json'
            })
                .then(() => success(messages.success.domConfigWasCreated))
                .catch(() => error(messages.error.errorCreatingConfig))
        }
    }
}