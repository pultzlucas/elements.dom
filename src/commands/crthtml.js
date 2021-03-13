module.exports = {
    name: 'crthtml',
    description: 'Creates a html5 file.',
    run: async toolbox => {
        const {
            createHtml,
            filesystem,
            parameters: { first: name, second: lang, third: title },
            print: { success, error }
        } = toolbox

        createHtml(name, lang, title)
            .then(msg => success(msg))
            .catch(err => error(err))
    }
}