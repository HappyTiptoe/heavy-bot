const { actions } = require('../state')
const _validPrefixes = ['!', '?', '#', '-', '$']

module.exports = (msg, newPrefix) => {
  if (_validPrefixes.includes(newPrefix)) {
    actions.setPrefix(newPrefix)
    // watch out for backticks
    msg.channel.send('[prefix - updated prefix to `' + newPrefix + '`]')
  } else {
    msg.channel.send(
      '[prefix - error: invalid prefix]\nApproved prefixes: `! ? # - $`'
    )
  }
}
