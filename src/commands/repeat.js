const { send } = require('../util')

const repeat = (message, content) => {
  send(message, content)
}

module.exports = repeat
