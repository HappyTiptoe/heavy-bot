const { actions } = require('../state')
const _validPrefixes = ['!', '?', '#', '-', '$']

module.exports = (msg, newPrefix) => {
  if (_validPrefixes.includes(newPrefix)) {
    actions.setPrefix(newPrefix)
    msg.channel.send('Prefix updated to: `' + newPrefix + '`')
  }
}
