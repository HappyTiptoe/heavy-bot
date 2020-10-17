const { actions, getters } = require('../state')

module.exports = (msg, arg) => {
  const isStudying = getters.getIsStudying()

  if (!arg) {
    msg.channel.send('[study - error: invalid syntax]\nPlease use `!study [enable / disable / (number > 0)]`')
    return
  }

  switch (arg.toLowerCase()) {
    case 'enable':
      if (isStudying) {
        msg.channel.send('[study - error: session already in progress]')
        break
      }

      actions.setIsStudying(true)
      msg.channel.send('[study - enabled]')
      break

    case 'disable':
      if (!isStudying) {
        msg.channel.send('[study - error: no active session]')
        break
      }

      actions.setIsStudying(false)
      actions.clearStudyTimeout()
      msg.channel.send('[study - disabled]')
      break

    default:
      // if not 'enable' or 'disable', ensure argument is a number
      if (isNaN(arg) || arg <= 0) {
        msg.channel.send('[study - error: invalid syntax]\nPlease use `!study [enable / disable / (number > 0)]`')
        break
      }

      if (isStudying) {
        msg.channel.send('[study - error: session already in progress]')
        break
      }

      actions.setIsStudying(true)
      actions.setStudyTimeout(
        setTimeout(() => {
          actions.setIsStudying(false)
          actions.clearStudyTimeout()
          msg.channel.send('[study - disabled]')
        }, arg * 60000)
      )
      msg.channel.send(`[study - enabled for ${arg} minutes]`)
      break
  }
}
