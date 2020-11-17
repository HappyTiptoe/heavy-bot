module.exports = (msg) => {
  const embed = {
    color: '#0099ff',
    // title: 'Heavy Bot Commands',
    fields: [
      {
        name: 'Available Commands:',
        value: `
          !help: This command
          !decide: Performs a coin flip
          !popeyes: Generates a random popeyes meal
          !prefix: Sets new prefix for commands
          !say: Repeats what you say
          !study: Encourages Mathy/TMW
          !submit egg: Submits an egg
        `
      }
    ]
  }

  msg.channel.send({ embed })
}
