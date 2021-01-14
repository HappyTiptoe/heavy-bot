const randomNumUpTo = require('../util/randomNumUpTo')
const shuffleArray = require('../util/shuffleArray')

const getRandomLetter = () => {
  // const isCapital = randomNumUpTo(2)
  const letterCharCode = randomNumUpTo(26) + 97
  // const letterCharCode = randomNumUpTo(26) + 65 + !isCapital * 32

  return String.fromCharCode(letterCharCode)
}

const addRandomLetter = (word) => {
  const randomIndex = randomNumUpTo(word.length)
  const randomLetter = getRandomLetter()

  return word.slice(0, randomIndex) + randomLetter + word.slice(randomIndex)
}

const changeRandomLetter = (word) => {
  const randomIndex = randomNumUpTo(word.length)
  const randomLetter = getRandomLetter()

  return word.slice(0, randomIndex) + randomLetter + word.slice(randomIndex + 1)
}

const deleteRandomLetter = (word) => {
  const randomIndex = randomNumUpTo(word.length)
  return word.slice(0, randomIndex) + word.slice(randomIndex + 1)
}

const shuffleInnerLetters = (word) => {
  const firstLetter = word[0]
  const lastLetter = word[word.length - 1]
  const shuffledInnerLetters = shuffleArray(
    word.split('').slice(1, word.length - 1)
  ).join('')

  return firstLetter + shuffledInnerLetters + lastLetter
}

const stutter = (word) => {
  return word[0] + '-' + word
}

const breakWord = (word) => {
  if (!word.length) {
    return word
  }

  const rand = Math.floor(Math.random() * 10)

  switch (rand) {
    case 0:
      return addRandomLetter(word)

    case 1:
      return changeRandomLetter(word)

    case 2:
      if (word.length > 1) {
        return deleteRandomLetter(word)
      } else {
        return word
      }

    case 3:
      return shuffleInnerLetters(word)

    case 4:
      return stutter(word)

    default:
      return word
  }
}

module.exports = (msg, args) => {
  const unkiePrefix = '<:unkie:742854278930104355>:mega: '
  const unkified = args.map(breakWord).join(' ')
  msg.channel.send(unkiePrefix + unkified || '_ _')
}
