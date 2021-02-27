const send = (message, content) => {
  message.channel.send(content || '_ _')
}

module.exports = send
