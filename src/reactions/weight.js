const { reply } = require('../util')

const weight = (message) => {
  const matches = message.content.toLowerCase().match(
    ///(\d*\.?\d+)[\s]*(lbs?|pounds?|kgs?|gs?)/i
    /(\d*\.?\d+)[\s]*(lbs?|pounds?|kgs?)/i
  )

  if (matches) {
    // eslint-disable-next-line
    const [_, value, unit] = matches
    switch (unit) {
      case 'kgs':
      case 'kg':
        reply(
          message,
          `actually, you mean ${(value / 11.339).toFixed(
            2
          )} Adamant Platebodies.`
        )
        break

      case 'pounds':
      case 'pound':
      case 'lbs':
      case 'lb':
        reply(
          message,
          `actually, you mean ${(value / 25.0).toFixed(2)} Adamant Platebodies.`
        )
        break

      // case 'gs':
      // case 'g':
      //   reply(message,`actually, you mean ${(value / 11339).toFixed(2)} Adamant Platebodies.`)
      //   break

      default:
        break
    }
  }
}

module.exports = weight
