module.exports = toolbox => {
    async function createHtml(htmlName, lang, title) {
        const {
            concatExtension,
            template,
            filesystem,
        } = toolbox

        try {
            if (!htmlName) throw 'HTML file name must be specified'

            htmlName = concatExtension(htmlName, 'html')
            lang = !lang ? 'en' : lang
            title = !title ? 'Document' : title

            const htmlFileAlreadyExists = filesystem.exists(htmlName)
            if (htmlFileAlreadyExists) throw `${htmlName} already exists.`

            await template.generate({
                template: 'html.ejs',
                target: htmlName,
                props: { lang, title }
            })

            return `${htmlName} was created`

        } catch (err) {
            throw err
        }
    }

    toolbox.createHtml = createHtml
}