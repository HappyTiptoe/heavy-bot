const _this = (message, store) => {
  const lastMessage = store.getPreviousMessages()[1]

  if (lastMessage.react) {
    lastMessage.react('☝️')
    lastMessage.react('👆')
    lastMessage.react('☑️')
    lastMessage.react('✅')
    lastMessage.react('✔️')
    lastMessage.react('🏁')
  }
}

module.exports = _this
