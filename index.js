'use strict'

// load .env variables
require('dotenv').config()

// create Discord client instance
const Discord = require('discord.js')
const client = new Discord.Client()

const { processCommand, processMessage } = require('./processors')
const { getters } = require('./state')

client.on('message', (msg) => {
  // if (msg.author === client.user) return

  // @DEBUG only works for me
  if (msg.author.id !== process.env.EB) return

  // if in study mode, send message to Mathy only
  if (getters.getIsStudying() && msg.author.id === process.env.MATHY) {
    msg.reply('GET OFF OF DISCORD :point_right: :regional_indicator_a: :regional_indicator_n: :regional_indicator_k: :regional_indicator_i:')
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
