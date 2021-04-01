'use strict'

// load .env variables
require('dotenv').config()

// create Discord client instance
const Discord = require('discord.js')
const client = new Discord.Client()

// create new Store
const Store = require('./store')
const store = new Store()

const { handleCommand, handleReactions } = require('./handlers')

client.on('message', (message) => {
  // prevent bot from handling its own messages
  if (message.author === client.user) return

  const isStudying = store.getIsStudying(message.author.id)

  if (
    message.content.startsWith(process.env.PREFIX) ||
    (isStudying && message.content.startsWith('!study'))
  ) {
    handleCommand(message, store, client)
  } else if (isStudying) {
    // TODO: get custom messages
    message.reply('YOU SHOULD BE STUDYING <:grr:810963998777671690>')
  } else {
    handleReactions(message, store, client)
  }
})

client.on('ready', () => {
  const generalChannel = client.channels.cache.get(process.env.CHAN_GENERAL)
  generalChannel.startTyping()
  // const botsChannel = client.channels.cache.get(process.env.CHAN_BOTS)
  client.user.setActivity('MY WEIGHT.', { type: 'WATCHING' })
  console.log('HEAVY BOT online.')
})

client.login(process.env.SECRET_TOKEN)
