const generateRandomNumber = require('../util/generateRandomNumber')

module.exports = (msg) => {
  const flip = generateRandomNumber(2)

  if (flip === 0) {
    msg.reply('yes!')
  } else {
    msg.reply('no.')
  }
}
