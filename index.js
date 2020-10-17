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
  const prefix = getters.getPrefix()

  if (msg.content.startsWith(prefix)) {
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
