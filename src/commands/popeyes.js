const { getRandomArrayItem, send } = require('../util')
const { entrees, sides, drinks } = require('../assets/data/popeyes.json')

const POPEYES_LOGO_URL =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Popeyes_Logo_With_Symbol_2019.svg/1024px-Popeyes_Logo_With_Symbol_2019.svg.png'

const popeyes = (message) => {
  const entree = getRandomArrayItem(entrees)
  const side = getRandomArrayItem(sides)
  const drink = getRandomArrayItem(drinks)

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
      url: POPEYES_LOGO_URL
    }
  }

  send(message, { embed })
}

module.exports = popeyes
