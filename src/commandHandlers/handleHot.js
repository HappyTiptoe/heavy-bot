module.exports = (msg) => {
  msg.channel.send({ files: ['dist/img/unk.png'] })
    .then((sentMsg) => {
      sentMsg.react('🇭')
      sentMsg.react('🇴')
      sentMsg.react('🇹')
    })
}
