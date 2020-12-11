module.exports = (msg) => {
  msg.channel.send({ files: ['dist/img/unk.png'] })
    .then((sentMsg) => {
      sentMsg.react('🇭')
      sentMsg.react('🇴')
      sentMsg.react('🇹')
      sentMsg.react('786788680966340638')
    })
}
