const state = {
  prefix: '!'
}

const actions = {
  setPrefix: function (payload) {
    state.prefix = payload
  }
}

const getters = {
  getPrefix: () => state.prefix
}

module.exports = { actions, getters }
