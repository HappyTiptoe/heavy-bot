const getRandomFace = () => {
  const faces = ['(・\`ω´・)', ';;w;;', 'owo', 'UwU', '>w<', '^w^']
  return faces[Math.floor(Math.random() * faces.length)]
}

module.exports = (msg, args) => {
  const owoifiedMsg = args.join(' ')
    .replace(/(?:r|l)/g, 'w')
    .replace(/(?:R|L)/g, 'W')
    .replace(/n([aeiou])/g, 'ny$1')
    .replace(/N([aeiou])/g, 'Ny$1')
    .replace(/n([AEIOU])/g, 'nY$1')
    .replace(/N([AEIOU])/g, 'NY$1')
    .replace(/ove/g, 'uv')
    .split('')
    .map((c) => {
      return c === '!'
        ? `${' '.repeat(args.length > 1)} ${getRandomFace()}`
        : c
    })
    .join('')

  msg.channel.send(owoifiedMsg || '_ _')
}
