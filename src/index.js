'use strict'

// load .env variables
require('dotenv').config()

// create Discord client instance
const Discord = require('discord.js')
const client = new Discord.Client()

const { processCommand, processMessage } = require('./processors')
const { getters } = require('./state')

const STUDY_MESSAGES = {
  USER_MATHY: 'GET OFF OF DISCORD :point_right: :regional_indicator_a: :regional_indicator_n: :regional_indicator_k: :regional_indicator_i:',
  USER_TAME: 'Stay focussed you muppet.\n> i want to be reminded that i\'m doing this because i hate my job'
}

client.on('message', (msg) => {
  if (msg.author === client.user) return

  // reply to user if in study mode
  if (getters.getIsStudying(msg.author.id) && msg.content !== '!study disable') {
    const user = Object.keys(process.env).find((key) => process.env[key] === msg.author.id)
    msg.reply(STUDY_MESSAGES[user] || 'you should be studying <:grr:765369824762527774>')
    return
  }

  if (msg.content.startsWith(getters.getPrefix())) {
    processCommand(msg)
  } else {
    processMessage(msg)
  }
})

client.on('ready', () => {
  // const generalChannel = client.channels.cache.get(process.env.CHAN_GENERAL)
  // const botsChannel = client.channels.cache.get(process.env.CHAN_BOTS)

  client.user.setActivity('my weight.', { type: 'WATCHING' })

  console.log('HEAVY BOT is ready to receive your orders...')
})

client.login(process.env.SECRET_TOKEN)
