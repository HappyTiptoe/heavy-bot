const { actions, getters } = require('../state')

module.exports = (msg) => {
  const [last, sndLast] = getters.getPreviousMessages()
  const { author, content } = msg

  const isDifferentAuthors = sndLast?.author?.id !== last?.author?.id &&
    sndLast?.author?.id !== author.id &&
    last?.author?.id !== author.id

  const isSameContent = sndLast?.content === last?.content &&
    sndLast?.content === content &&
    last?.content === content

  if (isDifferentAuthors && isSameContent) {
    msg.channel.send(content)
    actions.updatePreviousMessages({})
  } else {
    actions.updatePreviousMessages({ author, content })
  }
}
