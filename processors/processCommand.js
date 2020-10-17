const {
  handleDecide,
  handleHelp,
  handlePrefix
} = require('../commandHandlers')

module.exports = (msg) => {
  const [command, ...args] = msg.content.substr(1).split(' ')

  switch (command.toLowerCase()) {
    case 'help':
      handleHelp(msg)
      break

    case 'prefix':
      handlePrefix(msg, args[0])
      break

    case 'decide':
      handleDecide(msg)
      break
  }

  console.log(`[DEBUG] command: ${command} | args: ${args} `)
}
