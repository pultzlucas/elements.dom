module.exports = {
    name: 'rmhtml',
    description: 'Removes html file',
    run: toolbox => {
        const { removeHtml, parameters, print: { success, error } } = toolbox

        removeHtml(parameters.first)
            .then(msg => success(msg))
            .catch(err => error(err))
    }
}