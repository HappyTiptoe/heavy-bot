const {
  handleDecide,
  handleHelp,
  handleHot,
  handlePopeyes,
  handlePrefix,
  handleSay,
  handleStudy,
  handleTameStudy,
  handleSubmit
} = require('../commandHandlers')

module.exports = (msg) => {
  const [command, ...args] = msg.content.substr(1).split(' ')
  const filteredArgs = args.filter((arg) => arg !== '')

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
      handlePrefix(msg, filteredArgs[0])
      break

    case 'say':
      handleSay(msg, args)
      break

    // TODO improve study
    case 'study':
      if (msg.author.id === process.env.MATHY) {
        handleStudy(msg, filteredArgs[0])
      } else if (msg.author.id === process.env.TAME) {
        handleTameStudy(msg, filteredArgs[0])
      }
      break

    case 'submit':
      handleSubmit(msg, filteredArgs)
      break
  }

  console.log(`[DEBUG] command: ${command} | filteredArgs: [${filteredArgs}] | args: [${args}] `)
}
