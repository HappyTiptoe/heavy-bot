const { getRandomNumber, send } = require('../util')

const roll = (message) => {
  const roll = getRandomNumber(100)

  if (roll >= 54) {
    send(message, `[roll]: You have WON with a roll of: ${roll}`)
  } else {
    send(message, `[roll]: You have LOST with a roll of: ${roll}`)
  }

  if (roll === 73) {
    message.react('😂')
  }
}

module.exports = roll
