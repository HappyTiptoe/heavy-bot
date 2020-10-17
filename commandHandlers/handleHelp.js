module.exports = (msg) => {
  const embed = {
    color: '#0099ff',
    // title: 'Heavy Bot Commands',
    fields: [
      {
        name: 'Available Commands:',
        value: `
          !help: This command
          !prefix: Sets new prefix for commands
          !decide: Performs a coin flip
          !popeyes: Generates a random popeyes meal
        `
      }
    ]
  }

  msg.channel.send({ embed })
}
