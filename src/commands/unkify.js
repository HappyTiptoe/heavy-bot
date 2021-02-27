const { typos, unkieDictionary } = require('../assets/data')
const {
  getRandomArrayItem,
  getRandomNumber,
  send,
  shuffleArray,
  splitOnFirstSpace
} = require('../util')

/* corruptors */
const typoWord = (word, shouldReplaceChar) => {
  const typoPosition = getRandomNumber(word.length)
  const letterToTypo = word[typoPosition]
  const typo = /[a-zA-Z]/.test(letterToTypo)
    ? getRandomArrayItem(typos[letterToTypo])
    : letterToTypo

  return (
    word.slice(0, typoPosition) +
    typo +
    word.slice(typoPosition + +shouldReplaceChar)
  )
}

const deleteChar = (word) => {
  const deletePosition = getRandomNumber(word.length)
  return word.slice(0, deletePosition) + word.slice(deletePosition + 1)
}

const shuffleWord = (word) => {
  const wordMiddle = word.slice(1, word.length - 1)
  const shuffledWordMiddle = shuffleArray(wordMiddle.split('')).join('')
  return word[0] + shuffledWordMiddle + word[word.length - 1]
}

/* main functions */
const corrupt = (word) => {
  // if word has been predefined, skip corruptions
  const isInDictionary = Object.keys(unkieDictionary).includes(
    word.toLowerCase()
  )
  if (isInDictionary) {
    return unkieDictionary[word.toLowerCase()]
  }

  // ensure _some_ readability
  if (word.length <= 2) return word

  const randomNumber = getRandomNumber(15)

  switch (randomNumber) {
    case 0:
      return typoWord(word, false)
    case 1:
      return typoWord(word, true)
    case 2:
      return deleteChar(word)
    case 3:
      return shuffleWord(word)
    default:
      return word
  }
}

const unkifyContent = (content, timesToRepeat) => {
  let unkifiedContent = content

  for (let i = 0; i < timesToRepeat; i++) {
    unkifiedContent = unkifiedContent.split(' ').map(corrupt).join(' ')
  }

  return unkifiedContent
}

const unkify = (message, content) => {
  if (!content) {
    send(message, '[unkify]: Please provide a phrase to unkify.')
    return
  }

  const [unkifyArg, restOfContent] = splitOnFirstSpace(content)
  let unkifiedContent = ''

  if (isNaN(unkifyArg)) {
    unkifiedContent = unkifyContent(`${unkifyArg} ${restOfContent || ''}`, 1)
  } else if (unkifyArg <= 0) {
    unkifiedContent = unkifyContent(restOfContent, 1)
  } else if (unkifyArg > 100) {
    unkifiedContent = unkifyContent(restOfContent, 100)
  } else {
    unkifiedContent = unkifyContent(restOfContent, unkifyArg)
  }

  send(message, '[unkify]: ' + unkifiedContent)
}

module.exports = unkify
