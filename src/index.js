'use strict'

// load .env variables
require('dotenv').config()

// create Discord client instance
const Discord = require('discord.js')
const client = new Discord.Client()

const { processCommand, processMessage } = require('./processors')
const { getters } = require('./state')

client.on('message', (msg) => {
  if (msg.author === client.user) return

  // reply to mathy if in study mode
  if (getters.getIsStudying() && msg.author.id === process.env.MATHY && msg.content !== '!study disable') {
    msg.reply('GET OFF OF DISCORD :point_right: :regional_indicator_a: :regional_indicator_n: :regional_indicator_k: :regional_indicator_i:')
    return
  }

  // reply to tame if in study mode
  if (getters.getIsTameStudying() && msg.author.id === process.env.TAME && msg.content !== '!study disable') {
    msg.reply('Stay focussed you muppet.\n>i want to be reminded that i\'m doing this because i hate my job')
    return
  }

  if (msg.content.startsWith(getters.getPrefix())) {
    processCommand(msg)
  } else {
    processMessage(msg)
  }
})

client.on('ready', () => {
  client.user.setActivity('my weight.', { type: 'WATCHING' })
  console.log('HEAVY BOT is ready to receive your orders...')
})

client.login(process.env.SECRET_TOKEN)
