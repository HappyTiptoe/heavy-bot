const { getters } = require('../state')

module.exports = (msg) => {
  const embed = {
    color: '#0099ff',
    // title: 'Heavy Bot Commands',
    fields: [
      {
        name: 'Available Commands:',
        value: `
          ${getters.getPrefix}help: This command
          ${getters.getPrefix}choose: Picks between space-separated choices
          ${getters.getPrefix}decide: Performs a coin flip
          ${getters.getPrefix}owo: Makes text a li'l more weeby
          ${getters.getPrefix}popeyes: Generates a random popeyes meal
          ${getters.getPrefix}prefix: Sets prefix for HEAVY BOT commands
          ${getters.getPrefix}say: Repeats what you say
          ${getters.getPrefix}study: Discourages Discord use
          ${getters.getPrefix}submit egg: Submits an egg
          ${getters.getPrefix}unkify: i'nm soryr
        `
      }
    ]
  }

  msg.channel.send({ embed })
}
