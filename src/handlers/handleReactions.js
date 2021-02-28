const { echo, goodbye, keywords, weight } = require('../reactions')

const handleReactions = (message, store) => {
  console.log(
    'Before Echo',
    store.getPreviousMessages().map((m) => m.content)
  )
  echo(message, store)
  console.log(
    'After Echo',
    store.getPreviousMessages().map((m) => m.content)
  )
  goodbye(message)
  keywords(message)
  weight(message)
}

module.exports = handleReactions
