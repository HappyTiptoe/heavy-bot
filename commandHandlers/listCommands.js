module.exports = (msg) => {
  const embed = {
    color: '#0099ff',
    // title: 'Heavy Bot Commands',
    fields: [
      {
        name: 'Available Commands:',
        value: `
          !commands: This command
          !prefix: Sets new prefix for commands
        `
      }
    ]
  }

  msg.channel.send({ embed })
}
