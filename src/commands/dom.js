const command = {
  name: 'dom',
  description: 'Main',
  run: toolbox => {
    const { print, messages: { info } } = toolbox

    print.info(info.welcome + info.typeInformation)
  }
}

module.exports = command
