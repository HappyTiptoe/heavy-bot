const getRandomNumber = require('./getRandomNumber')

const getRandomArrayItem = (array) => {
  if (!array.length) {
    return null
  }

  const randomIndex = getRandomNumber(array.length)
  return array[randomIndex]
}

module.exports = getRandomArrayItem
