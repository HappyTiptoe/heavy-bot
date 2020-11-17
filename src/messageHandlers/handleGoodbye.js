module.exports = (msg) => {
  const regex = /\b(goodbye|bye|cya|farewell)\b/gi
  if (msg.content.match(regex)) {
    // image
    msg.channel.send({ files: ['dist/img/bye.png'] })

    // emoji
    // msg.channel.send('<:bye:777721406699208734>')
  }
}
