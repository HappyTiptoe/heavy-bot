const { splitOnFirstSpace, send, reply } = require('../util')

const study = (message, store, content) => {
  const userID = message.author.id
  const isStudying = store.getIsStudying(userID)
  const [studyArg] = splitOnFirstSpace(content || '')

  switch (studyArg) {
    case 'enable':
      if (isStudying) {
        reply(message, 'you already have a study session active.')
      } else {
        store.addStudySession({ userID })
        reply(message, 'your study session has begun. Have fun!')
      }
      break

    case 'disable':
      if (!isStudying) {
        reply(message, "you don't have any active study sessions.")
      } else {
        store.removeStudySession(userID)
        reply(message, 'your study session has ended!')
      }
      break

    default:
      if (isStudying) {
        reply(message, 'you already have a study session active.')
      } else if (isNaN(studyArg) || !studyArg) {
        send(
          message,
          '[study]: Please provide a valid time (in minutes), or use `!study enable`'
        )
      } else {
        const sessionLength = studyArg * 60000
        const timeoutID = setTimeout(() => {
          reply(message, 'your study session has ended!')
        }, sessionLength)
        store.addStudySession({ timeoutID, userID })
        reply(message, 'your study session has begun. Have fun!')
      }
      break
  }
}

module.exports = study
