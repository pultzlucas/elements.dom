module.exports = toolbox => {
    function color(string, colorId) {
        return "\033[" + colorId + "m" + string + "\033[0m"
    }

    toolbox.colorString = color
}
