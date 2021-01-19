const generateRandomNumber = require('../util/generateRandomNumberUpTo')
const { entrees, sides, drinks } = require('../db/popeyes.json')

const selectRandomArrayItem = (array) => {
  const index = generateRandomNumber(array.length)
  return array[index]
}

module.exports = (msg) => {
  const entree = selectRandomArrayItem(entrees)
  const side = selectRandomArrayItem(sides)
  const drink = selectRandomArrayItem(drinks)
  const popeyesLogoURL =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Popeyes_Logo_With_Symbol_2019.svg/1024px-Popeyes_Logo_With_Symbol_2019.svg.png'

  const embed = {
    color: '#FF7C00',
    title: 'Order up!',
    fields: [
      {
        name: 'Entree',
        value: `${entree.name} (${entree.cal}cal)`,
        inline: true
      },
      { name: 'Side', value: `${side.name} (${side.cal}cal)`, inline: true },
      { name: 'Drink', value: `${drink.name} (${drink.cal}cal)`, inline: true },
      { name: 'Total Calories', value: entree.cal + side.cal + drink.cal }
    ],
    image: {
      url: popeyesLogoURL
    }
  }

  msg.channel.send({ embed })
}
