module.exports = toolbox => {
    toolbox.cleanHtmlString = function(htmlString){
        return htmlString
            .replace(/&amp;/g, '&')
            .replace(/&gt;/g, '>')
            .replace(/&lt;/g, '<')
            .replace(/&quot;/g, '"')
            .replace(/&#34;/g, '"')
    }
}