module.exports = (msg) => {
  const { content } = msg
  const matches = content.match(
    ///(\d*\.?\d+)[\s]*(lbs?|pounds?|kgs?|gs?)/i
    /(\d*\.?\d+)[\s]*(lbs?|pounds?|kgs?)/i
  )

  if (matches !== null) {
    // eslint-disable-next-line
    const [_, value, unit] = matches
    switch (unit) {
      case 'kgs':
      case 'kg':
        msg.reply(`actually, you mean ${(value / 11.339).toFixed(2)} Adamant Platebodies.`)
        break

      case 'pounds':
      case 'pound':
      case 'lbs':
      case 'lb':
        msg.reply(`actually, you mean ${(value / 25.0).toFixed(2)} Adamant Platebodies.`)
        break

      // case 'gs':
      // case 'g':
      //   msg.reply(`actually, you mean ${(value / 11339).toFixed(2)} Adamant Platebodies.`)
      //   break

      default:
        break
    }
  }
}
