const {
  handleChoose,
  handleDecide,
  handleHelp,
  handleHot,
  handlePopeyes,
  handlePrefix,
  handleSay,
  handleStudy,
  handleSubmit
} = require('../commandHandlers')

module.exports = (msg) => {
  const [command, ...args] = msg.content.substr(1).split(' ')
  const filteredArgs = args.filter((arg) => arg !== '')

  switch (command.toLowerCase()) {
    case 'choose':
      handleChoose(msg, filteredArgs)
      break

    case 'decide':
      handleDecide(msg)
      break

    case 'help':
      handleHelp(msg)
      break

    case 'hot':
      if (msg.channel.id !== process.env.CHAN_GENERAL) {
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

    case 'study':
      handleStudy(msg, filteredArgs[0])
      break

    case 'submit':
      handleSubmit(msg, filteredArgs)
      break
  }

  console.log(`[DEBUG]: author: ${msg.author.username} | channel: ${msg.channel.name} | command: ${command} | filteredArgs: [${filteredArgs}] | args: [${args}]`)
}
