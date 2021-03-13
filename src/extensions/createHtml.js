module.exports = toolbox => {
    
    toolbox.createHtml = async function (htmlName, lang, title) {
        
        const { edithtml, concatExtension, template, filesystem, print: {success, error} } = toolbox

        if (!htmlName) throw 'HTML file name must be specified'

        htmlName = concatExtension(htmlName, 'html')
        lang = !lang ? 'en' : lang
        title = !title ? 'Document' : title

        const htmlFileAlreadyExists = filesystem.exists(htmlName)

        if (htmlFileAlreadyExists) {
            return await edithtml(htmlName, lang, title)
        }else{
            await template.generate({
                template: 'html.ejs',
                target: htmlName,
                props: { lang, title }
            })
            
            return `${htmlName} was created`
        }

    }
}