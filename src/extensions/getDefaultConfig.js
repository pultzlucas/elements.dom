function getDefaultConfig() {
    const config = {
        exports: false,
        link: true,
        identifiers: ['class', 'id', 'tag', 'name'],
        ignore: {
            classes: [''],
            ids: [''],
            tags: [''],
            names: ['']
        }
    }

    return config
}

module.exports = toolbox => {
    toolbox.getDefaultConfig = getDefaultConfig
}