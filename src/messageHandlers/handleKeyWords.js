module.exports = (msg) => {
  const lowerContent = msg.content.toLowerCase()
  // 73
  if (lowerContent.match(/(?<!\d)73(?!\d)/g)) {
    msg.react('😂')
  }

  // bill wibbly
  if (
    lowerContent.includes('bill') ||
    lowerContent.includes('wibbly') ||
    lowerContent.includes('bibbly')
  ) {
    msg.react('756948138102882335')
  }

  // heavy
  if (lowerContent.includes('heavy')) {
    msg.react('745365421611417749')
  }

  // light
  if (lowerContent.includes('light')) {
    msg.react('745377252396630176')
  }
  
  // hot
  if (lowerContent.match(/(?<!\w)hot(?!\w)/gi)) {
    msg.react('786788680966340638')
  }
}
