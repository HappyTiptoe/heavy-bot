'use strict'

// load .env variables
require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client()

client.on('message', (msg) => {
  if (msg.author === client.user) return
})

client.on('ready', () => {
  client.user.setActivity('my weight.', { type: 'WATCHING' })
  console.log('HEAVY BOT is ready to receive your orders...')
})

client.login(process.env.SECRET_TOKEN)
