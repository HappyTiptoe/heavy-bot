module.exports = (msg) => {
  const embed = {
    color: '#0099ff',
    // title: 'Heavy Bot Commands',
    fields: [
      {
        name: 'Available Commands:',
        value: `
          !help: This command
          !choose: Picks between space-separated choices
          !decide: Performs a coin flip
          !popeyes: Generates a random popeyes meal
          !prefix: Sets prefix for HEAVY BOT commands
          !say: Repeats what you say
          !study: Discourages Discord use
          !submit egg: Submits an egg
        `
      }
    ]
  }

  msg.channel.send({ embed })
}
