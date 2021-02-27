const goodbye = (message) => {
  const regex = /\b(goodbye|bye|cya|farewell)\b/gi
  if (message.content.match(regex)) {
    // image
    // message.channel.send({ files: ['dist/img/bye.png'] })

    // emoji
    message.channel.send('<:bye:777721406699208734>')
  }
}

module.exports = goodbye
