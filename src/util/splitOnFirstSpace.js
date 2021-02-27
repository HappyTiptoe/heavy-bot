const splitOnFirstSpace = (str) => {
  if (!str || str.length === 0) {
    return ['', '']
  }

  const [firstWord, ...rest] = str.split(/(?<=^\S+)\s/)
  return [firstWord, rest[0]]
}

module.exports = splitOnFirstSpace
