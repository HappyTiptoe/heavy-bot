const {
  handleChoose,
  handleDecide,
  handleHelp,
  handleHot,
  handleOWO,
  handlePopeyes,
  handlePrefix,
  handleSay,
  handleStudy,
  handleSubmit,
  handleUnkify,
  handleUnkifyN
} = require('../commandHandlers')

module.exports = (msg) => {
  const [command, ...args] = msg.content.substr(1).split(' ')
  const filteredArgs = args.filter((arg) => arg !== '')

  switch (command) {
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

    case 'owo':
      handleOWO(msg, args)
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

    case 'unkify':
      handleUnkify(msg, args)
      break

    case 'unkifyN':
      handleUnkifyN(msg, args)
      break
  }

  console.log(
    `[DEBUG]: author: ${msg.author.username} | channel: ${msg.channel.name} | command: ${command} | filteredArgs: [${filteredArgs}] | args: [${args}]`
  )
}
