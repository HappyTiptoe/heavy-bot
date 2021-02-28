const { send } = require('../util')

const repeat = (message, content) => {
  send(message, content)
  message.delete()
}

module.exports = repeat
