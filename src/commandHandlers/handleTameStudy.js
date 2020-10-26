const { actions, getters } = require('../state')

module.exports = (msg, arg) => {
  const isStudying = getters.getIsTameStudying()

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

      actions.setIsTameStudying(true)
      msg.channel.send('[study - enabled]')
      break

    case 'disable':
      if (!isStudying) {
        msg.channel.send('[study - error: no active session]')
        break
      }

      actions.setIsTameStudying(false)
      actions.clearTameStudyTimeout()
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

      actions.setIsTameStudying(true)
      actions.setTameStudyTimeout(
        setTimeout(() => {
          actions.setIsTameStudying(false)
          actions.clearTameStudyTimeout()
          msg.channel.send('[study - disabled]\n<@!166606381024149506>, you are free!')
        }, arg * 60000)
      )
      msg.channel.send(`[study - enabled for ${arg} minutes]`)
      break
  }
}
