const { splitOnFirstSpace, send, reply } = require('../util')

const remind = (message, client, content) => {
  const [time, reminder] = splitOnFirstSpace(content)

  if (isNaN(time) || time <= 0) {
    send(message, '[remind]: Please provide a valid time (in minutes).')
    return
  }

  if (time >= 1440) {
    send(
      message,
      '[remind]: Warning - reminders longer than 24 hours may be forgotten.'
    )
  }

  send(message, `[remind]: Reminder set for ${time} minutes.`)

  client.setTimeout(() => {
    reply(message, `here is your reminder: ${reminder || '<no reminder set.>'}`)
  }, time * 60000)
}

module.exports = remind
