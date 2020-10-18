const {
  handleConvertWeightToAdamantPlatebodies,
  handleKeyWords
} = require('../messageHandlers')

module.exports = (msg) => {
  // if a weight is mentioned, it gets converted into the
  // number of Adamant Platebodies with the same weight
  handleConvertWeightToAdamantPlatebodies(msg)

  // TODO: potentially update to individual commands
  // TODO: potentially update to accept list of words
  handleKeyWords(msg)
}
