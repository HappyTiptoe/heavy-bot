const {
  handlePrefixChange
} = require('../commandHandlers')

module.exports = (msg) => {
  const [command, ...args] = msg.content.substr(1).split(' ')

  switch (command.toLowerCase()) {
    case 'prefix':
      handlePrefixChange(msg, args[0])
      break
  }

  console.log(`[DEBUG] command: ${command} | args: ${args} `)
}
