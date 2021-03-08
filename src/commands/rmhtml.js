module.exports = {
    name: 'rmhtml',
    description: 'removes html file',
    run: toolbox => {
        const { concatExtension, messages, parameters, filesystem, print: { success, error } } = toolbox
        let { first: htmlFile } = parameters

        if (!htmlFile) {
            error(messages.error.htmlMustBeSpecified)
            return
        }

        htmlFile = concatExtension(htmlFile, 'html')
        const htmlNotExists = !filesystem.exists(htmlFile)

        if (htmlNotExists) {
            error(`${htmlFile} does not exists in this folder.`)
            return
        }

        filesystem.remove(htmlFile)

        success(`${htmlFile} was removed.`)
    }
}