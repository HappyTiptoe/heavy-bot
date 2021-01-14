const getRandomFace = () => {
  // prettier-ignore
  // eslint-disable-next-line
  const faces = ['(・\`ω´・)', ';;w;;', 'owo', 'UwU', '>w<', '^w^']
  return faces[Math.floor(Math.random() * faces.length)]
}

const stutter = (word) => {
  return word[0] + '-' + word
}

const shouldStutter = (word) => {
  const isFirstCharALetter = /[a-z]/i.test(word[0])
  return Math.floor(Math.random() * 8) === 0 && isFirstCharALetter
}

module.exports = (msg, args) => {
  const owoifiedMsg = args
    .map((word) => (shouldStutter(word) ? stutter(word) : word))
    .join(' ')
    .replace(/(?:r|l)/g, 'w')
    .replace(/(?:R|L)/g, 'W')
    .replace(/n([aeiou])/g, 'ny$1')
    .replace(/N([aeiou])/g, 'Ny$1')
    .replace(/n([AEIOU])/g, 'nY$1')
    .replace(/N([AEIOU])/g, 'NY$1')
    .replace(/ove/g, 'uv')
    .split('')
    .map((c) => {
      return c === '!' ? `${' '.repeat(args.length > 1)}${getRandomFace()}` : c
    })
    .join('')

  msg.channel.send(owoifiedMsg || '_ _')
}
