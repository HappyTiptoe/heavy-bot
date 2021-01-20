const generateRandomNumberUpTo = require('../util/generateRandomNumberUpTo')
const shuffleArray = require('../util/shuffleArray')
const DICTIONARY = require('../constants/unkieDictionary')
const TYPOS = require('../constants/typos')

/* getters */
const getRandomArrayItem = (array) =>
  array[generateRandomNumberUpTo(array.length)]

const getRandomCharIndex = (word) => generateRandomNumberUpTo(word.length)

const getMiddleOfWord = (word) => word.slice(1, word.length - 1)

const getIsInDictionary = (word) => Object.keys(DICTIONARY).includes(word)

const getTypo = (char) =>
  /[a-zA-Z]/.test(char) ? getRandomArrayItem(TYPOS[char]) : char

/* corruptors */
const typoInWord = (word, position = word.length, shouldReplaceChar) =>
  word.slice(0, position) +
  getTypo(word.charAt(position)) +
  word.slice(position + shouldReplaceChar)

const deleteCharFromWord = (word, position) =>
  word.slice(0, position) + word.slice(position + 1)

const shuffleString = (string) => shuffleArray(string.split('')).join('')

const shuffleMiddleOfWord = (word) =>
  word[0] + shuffleString(getMiddleOfWord(word)) + word[word.length - 1]

/* main functions */
const corrupt = (word) => {
  // ensure _some_ readability
  if (word.length < 2) return word

  // random chance out of 10 for corruption
  const randomNumber = generateRandomNumberUpTo(16)
  const randomPosition = getRandomCharIndex(word)

  switch (randomNumber) {
    case 0:
      return typoInWord(word, randomPosition, false)
    case 1:
      return typoInWord(word, randomPosition, true)
    case 2:
      return deleteCharFromWord(word, randomPosition)
    case 3:
      return shuffleMiddleOfWord(word)
    default:
      return word
  }
}

const unkify = (word) => {
  if (getIsInDictionary(word.toLowerCase())) {
    return DICTIONARY[word.toLowerCase()]
  } else {
    return corrupt(word)
  }
}

module.exports = (msg, args) => {
  const unkiePrefix = '<:unkie:742854278930104355>:mega: '
  const unkified = args.map(unkify).join(' ')
  msg.channel.send(unkiePrefix + unkified || '_ _')
}
