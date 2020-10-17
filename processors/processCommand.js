const {
  handleDecide,
  handleHelp,
  handleHot,
  handlePopeyes,
  handlePrefix,
  handleSay,
  handleStudy
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

    case 'hot':
      if (msg.channel.id !== process.env.GENERAL) {
        handleHot(msg)
      }
      break

    case 'popeyes':
      handlePopeyes(msg)
      break

    case 'prefix':
      handlePrefix(msg, args[0])
      break

    case 'say':
      handleSay(msg, args)
      break

    case 'study':
      if (msg.author.id === process.env.MATHY) {
        handleStudy(msg, args[0])
      }
      break
  }

  console.log(`[DEBUG] command: ${command} | args: ${args} `)
}
