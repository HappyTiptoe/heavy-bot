const { splitOnFirstSpace } = require('../util')
const {
  choose,
  decide,
  owo,
  popeyes,
  remind,
  roll,
  repeat,
  study,
  _this,
  unkify
} = require('../commands')

const handleCommand = (message, store, client) => {
  const [command, content] = splitOnFirstSpace(message.content.substr(1))

  switch (command.toLowerCase()) {
    case 'choose':
      choose(message, content)
      break

    case 'decide':
    case 'yn':
      decide(message)
      break

    case 'owo':
      owo(message, content)
      break

    // TODO
    case 'popeyes':
      popeyes(message)
      break

    case 'remind':
    case 'remindme':
      remind(message, client, content)
      break

    case 'roll':
      roll(message)
      break

    case 'say':
    case 'repeat':
      repeat(message, content)
      break

    case 'study':
      study(message, store, content)
      break

    case 'this':
      _this(message, store)
      break

    case 'unkify':
      unkify(message, content)
      break
  }
}

module.exports = handleCommand
