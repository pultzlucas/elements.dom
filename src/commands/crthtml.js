module.exports = {
    name: 'crthtml',
    description: 'Creates a html5 file.',
    run: toolbox => {
        const {
            concatExtension,
            parameters,
            messages, 
            template, 
            print: { success, error }
        } = toolbox

        let { first: name, second: lang, third: title } = parameters

        if (!name) {
            error(messages.error.htmlMustBeSpecified)
            return
        }
        name = concatExtension(name, 'html')
        lang = !lang ? 'en' : lang
        title = !title ? 'Document' : title

        template.generate({
            template: 'html.ejs',
            target: name,
            props: { lang, title }
        })
            .then(() => success(`${name} was created`))
            .catch(() => error(messages.error.errorCreatingHtmlFile))
    }
}