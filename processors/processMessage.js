const {
  handleConvertWeightToAdamantPlatebodies
} = require('../messageHandlers')

module.exports = (msg) => {
  // if a weight is mentioned, it gets converted into the
  // number of Adamant Platebodies with the same weight
  handleConvertWeightToAdamantPlatebodies(msg)
}
