module.exports = {
    name: 'crthtml',
    description: 'Creates a html5 file.',
    run: async toolbox => {
        const {
            createHtml,
            parameters,
            print: { success, error }
        } = toolbox

        const { first: name, second: lang, third: title } = parameters

        try {
            success(await createHtml(name, lang, title))
        } catch (err) {
            error(err)
        }
    }
}