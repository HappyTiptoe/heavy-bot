const { echo, goodbye, keywords, weight } = require('../reactions')

const handleReactions = (message, store) => {
  echo(message, store)
  goodbye(message)
  keywords(message)
  weight(message)
}

module.exports = handleReactions
