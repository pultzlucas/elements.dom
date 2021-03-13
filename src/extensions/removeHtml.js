
module.exports = toolbox => {
    toolbox.removeHtml = async function (htmlFile) {
        const { concatExtension, filesystem } = toolbox

        if (!htmlFile) throw 'HTML file name must be specified'
        htmlFile = concatExtension(htmlFile, 'html')

        const htmlNotExists = !filesystem.exists(htmlFile)
        if (htmlNotExists) throw `${htmlFile} does not exists in this folder.`

        filesystem.remove(htmlFile)
        return `${htmlFile} was removed.`
    }
}