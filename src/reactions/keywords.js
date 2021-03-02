const keywords = (message) => {
  const content = message.content.toLowerCase()

  // 73
  if (content.match(/(?<!\d)73(?!\d)/g)) {
    message.react('😂')
  }

  // bill wibbly
  if (
    content.includes('bill') ||
    content.includes('wibbly') ||
    content.includes('bibbly')
  ) {
    message.react('756948138102882335')
  }

  // heavy
  if (content.includes('heavy')) {
    message.react('745365421611417749')
  }

  // light
  if (content.includes('light')) {
    message.react('745377252396630176')
  }

  // hot
  if (content.match(/(?<!\w)hot(?!\w)/gi)) {
    message.react('786788680966340638')
  }

  // uh oh
  if (content.match(/(?<!\w)uh oh(?!\w)/gi)) {
    message.react('5️⃣')
    message.react('8️⃣')
    message.react('2️⃣')
    message.react('4️⃣')
  }
}

module.exports = keywords
