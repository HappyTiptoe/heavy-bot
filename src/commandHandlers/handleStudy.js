const { actions, getters } = require('../state')

const endStudySession = (msg, studentId) => {
  actions.removeStudySession(studentId)
  msg.reply('your study session has finished!')
}

const initStudySession = (msg, studentId, lengthInMinutes = undefined) => {
  if (lengthInMinutes !== undefined) {
    const lengthInMs = lengthInMinutes * 60000
    const timeoutId = setTimeout(() => endStudySession(msg, studentId), lengthInMs)
    actions.addStudySession({ studentId, timeoutId })
    msg.reply(`your study session for ${lengthInMinutes} ${lengthInMinutes === 1 ? 'minute' : 'minutes'} has begun. Have fun!`)
  } else {
    actions.addStudySession({ studentId, studyTimeout: null })
    msg.reply('your study session has begun. Have fun!')
  }
}

module.exports = (msg, arg) => {
  const { author } = msg
  const isStudying = getters.getIsStudying(author.id)

  if (!arg) {
    msg.channel.send('[study - error: invalid syntax]\nPlease use `!study [enable / disable / (number > 0)]`')
    return
  }

  switch (arg.toLowerCase()) {
    case 'enable':
      initStudySession(msg, author.id)
      break

    case 'disable':
      if (!isStudying) {
        msg.reply('you don\'t have an active study session for me to disable.')
        break
      }

      endStudySession(msg, author.id)
      break

    default:
      // if not 'enable' or 'disable', ensure argument is a valid number
      if (isNaN(arg) || arg <= 0) {
        msg.channel.send('[study - error: invalid syntax]\nPlease use `!study [enable / disable / (number > 0)]`')
        break
      }

      initStudySession(msg, author.id, arg)
      break
  }
}
