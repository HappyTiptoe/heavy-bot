const { getRandomNumber, send } = require('../util')

const decide = (message) => {
  const result = getRandomNumber(2)

  if (result) {
    send(message, '[decide]: yes!')
  } else {
    send(message, '[decide]: no.')
  }
}

module.exports = decide
