module.exports = toolbox => {
    function concatExtension (fileName, extension) {
        const regex = RegExp(`.${extension}+`, 'gi')
        const filenameWithoutExtension = fileName.replace(regex, '')
        return filenameWithoutExtension + `.${extension}`
    }

    toolbox.concatExtension = concatExtension
}