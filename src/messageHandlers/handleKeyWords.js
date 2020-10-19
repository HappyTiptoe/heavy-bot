module.exports = (msg) => {
  // 73
  if (msg.content.toLowerCase().match(/(?<!\d)73(?!\d)/g)) {
    msg.react('😂')
  }

  // heavy
  if (msg.content.toLowerCase().includes('heavy')) {
    msg.react('745365421611417749')
  }

  // light
  if (msg.content.toLowerCase().includes('light')) {
    msg.react('745377252396630176')
  }
}
