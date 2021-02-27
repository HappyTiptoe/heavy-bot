const { getRandomArrayItem, send } = require('../util')
const _quotesRegex = /\s*((?:\w(?!\s+")+|\s(?!\s*"))+\w)\s*/g

const choose = (message, content) => {
  const choices = content.match(_quotesRegex)

  if (!choices) {
    send(message, '[choose]: Please provide a list of choices inside `"`s.')
  }

  const choice = getRandomArrayItem(choices)
  send(message, `[choose]: I have chosen... ${choice}`)
}

module.exports = choose
