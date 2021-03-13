const fs = require('fs')

class HTML {
    constructor(path, fileName) {
        this.path = path
        this.fileName = fileName
        this.linkString = `<script src="${this.fileName}"></script>\n`
        this.string = fs.readFileSync(this.path, 'utf8', err => {
            console.log(err.message)
        })
    }

    writeLink() {
        const [string1, string2] = this.HTMLStrings

        const fullHTMLwLink = string1 + this.linkString + string2

        fs.writeFileSync(this.path, fullHTMLwLink)
    }

    removeLink() {
        const linkRegex = RegExp(this.linkString, 'gi')
        const HTMLNoLinked = this.string.replace(linkRegex, '')
        console.log(linkRegex)
        fs.writeFileSync(this.path, HTMLNoLinked)
    }

    get layers() {
        const removeComments = layer =>
            !RegExp('<!--').test(layer) && !RegExp('-->').test(layer)

        const matchLayers = regex => [...this.bodyString.matchAll(regex)]

        const ltRegex = RegExp('<', 'gi')
        const gtRegex = RegExp('>', 'gi')

        const layersStartIndex = matchLayers(ltRegex).map(match => match.index)
        const layersEndIndex = matchLayers(gtRegex).map(match => match.index + 1)

        const indexStructure = layersStartIndex.map((indexStart, index) =>
            [indexStart, layersEndIndex[index]]
        )

        const layers = indexStructure.map(([startLayer, endLayer]) =>
            this.bodyString.substring(startLayer, endLayer)
        ).filter(removeComments)


        return layers
    }

    get htmlWithoutComments() {
        const commentsStartIndexs = [...this.string.matchAll('<!--')].map(match => match.index)

        const arrayIndexs = commentsStartIndexs.map(match =>
            [match, match + this.string.substring(match).indexOf('-->') + 3])

        const htmlWithoutComments = arrayIndexs.reduce((acc, [startComment, endComment]) => {
            let commentString = this.string.substring(startComment, endComment)
            return acc = acc.replace(commentString, '')
        }, this.string)

        return htmlWithoutComments
    }

    get notContainsLink() {
        const regex = RegExp(`<script src="${this.fileName}"></script>`, 'gi')
        return !regex.test(this.string)
    }

    get bodyString() {
        const html = this.htmlWithoutComments
        const start = html.match(/<body>/).index + 6
        const end = html.match(RegExp('</body>')).index
        const body = html.substring(start, end)
        return body
    }

    get HTMLStrings() {
        return [
            this.string.substring(0, this.linkIndex),
            this.string.substring(this.linkIndex)
        ]
    }

    get linkIndex() {
        const bodyTagIndex = this.string.match(RegExp('</body>')).index
        const HTMLContainsScriptOnBody = /<script/.test(this.string)

        if (HTMLContainsScriptOnBody)
            return this.string.match(/<script/).index

        return bodyTagIndex
    }
}

module.exports = HTML