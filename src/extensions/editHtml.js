const HtmlClass = require('./src/HTML')
module.exports = toolbox => {
    const { cleanHtmlString, concatExtension, filesystem, template } = toolbox
    toolbox.edithtml = async function (htmlFile, lang, title) {
        if (!htmlFile) throw 'HTML file name must be specified'
        htmlFile = concatExtension(htmlFile, 'html')

        const htmlFileNotExists = ! await filesystem.exists(htmlFile)
        if (htmlFileNotExists) throw `${htmlFile} not exists in this folder.`

        const html = new HtmlClass(htmlFile)

        if (!lang && !title) return

        await filesystem.remove(htmlFile)

        const htmlString = cleanHtmlString(await template.generate({
            template: 'html.ejs',
            props: { lang, title, body: html.bodyString }
        }))

        await filesystem.write(htmlFile, htmlString)

        return `${htmlFile} was updated`
    }
}