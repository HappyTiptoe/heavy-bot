const { actions, getters } = require('../state')

module.exports = (msg, args) => {
  if (args.length === 1 && (args[0].toLowerCase() === 'egg' || args[0].toLowerCase() === 'egg.')) {
    const eggs = getters.getEggs()
    const newEggs = eggs + 1
    actions.setEggs(newEggs)
    msg.channel.send(`Egg submitted! (${newEggs} ${newEggs === 1 ? 'egg' : 'eggs'} submitted)`)
  } else if (args.length === 1 && args[0].toLowerCase() === 'eggs') {
    msg.channel.send('Only one egg may be submitted at a time.')
  } else if (args.length === 1 && !isNaN(args[0])) {
    if (msg.author.id === process.env.USER_EB) {
      const eggs = args[0]
      actions.setEggs(+eggs)
      msg.channel.send(`Set eggs to: ${eggs}`)
    } else {
      msg.channel.send('This command is for resetting eggs after a bot reset and is for the use of [eb] only.')
    }
  } else {
    msg.channel.send('Sorry, you may only submit egg.')
  }
}

