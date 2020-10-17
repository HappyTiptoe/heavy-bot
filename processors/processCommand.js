const {
  handleDecide,
  handleHelp,
  handlePopeyes,
  handlePrefix
} = require('../commandHandlers')

module.exports = (msg) => {
  const [command, ...args] = msg.content.substr(1).split(' ')

  switch (command.toLowerCase()) {
    case 'decide':
      handleDecide(msg)
      break

    case 'help':
      handleHelp(msg)
      break

    case 'popeyes':
      handlePopeyes(msg)
      break

    case 'prefix':
      handlePrefix(msg, args[0])
      break
  }

  console.log(`[DEBUG] command: ${command} | args: ${args} `)
}
