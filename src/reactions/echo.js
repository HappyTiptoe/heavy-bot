const { send } = require('../util')

const echo = (message, store) => {
  const [first, last] = store.getPreviousMessages()
  const { author, content } = message

  const isDifferentAuthors =
    first?.author?.id !== last?.author?.id &&
    first?.author?.id !== author.id &&
    last?.author?.id !== author.id

  const isSameContent =
    first?.content === last?.content &&
    first?.content === content &&
    last?.content === content

  if (isDifferentAuthors && isSameContent) {
    send(message, content)
    store.updatePreviousMessages({})
  } else {
    store.updatePreviousMessages({ author, content })
  }
}

module.exports = echo
