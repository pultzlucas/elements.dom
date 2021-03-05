module.exports = {
    name: 'rm',
    description: 'Remove the dom.config.json file',
    run: toolbox => {
        const {print: {success}, filesystem, messages} = toolbox
        filesystem.remove('dom.config.json')
        success(messages.success.domConfingWasRemoved)
    }
}