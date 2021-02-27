const { getRandomNumber, send } = require('../util')
const STUTTER_CHANCE = 10

const getRandomFace = () => {
  const faces = ["(・'ω'・)", ';;w;;', 'owo', 'UwU', '>w<', '^w^']
  const randomFaceIndex = getRandomNumber(faces.length)
  return faces[randomFaceIndex]
}

const stutter = (word) => {
  const isFirstCharALetter = /[a-z]/i.test(word[0])
  return isFirstCharALetter ? `${word[0]}-${word}` : word
}

const owoifyWord = (word) => {
  const owoifiedWord = word
    .replace(/n([aeiou])/g, 'ny$1')
    .replace(/N([aeiou])/g, 'Ny$1')
    .replace(/n([AEIOU])/g, 'nY$1')
    .replace(/N([AEIOU])/g, 'NY$1')
    .replace(/(?:r|l)/g, 'w')
    .replace(/(?:R|L)/g, 'W')
    .replace(/ove/g, 'uv')
    .replace(/!/g, ` ${getRandomFace()}`)

  const shouldStutterWord = getRandomNumber(STUTTER_CHANCE)
  return shouldStutterWord === 0 ? stutter(owoifiedWord) : owoifiedWord
}

const owo = (message, content) => {
  const owoifiedContent = content.split(' ').map(owoifyWord).join(' ').trim()
  send(message, owoifiedContent)
}

module.exports = owo
