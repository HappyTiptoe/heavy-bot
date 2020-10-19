const state = {
  prefix: '!',
  isStudying: false,
  studyTimeout: null,
  previousMessages: [{}, {}]
}

const actions = {
  setPrefix: function (payload) {
    state.prefix = payload
  },

  setIsStudying: function (payload) {
    state.isStudying = payload
  },

  setStudyTimeout: function (payload) {
    state.studyTimeout = payload
  },

  clearStudyTimeout: function () {
    clearTimeout(state.studyTimeout)
  },

  updatePreviousMessages: function (payload) {
    state.previousMessages[1] = state.previousMessages[0]
    state.previousMessages[0] = payload
  }
}

const getters = {
  getPrefix: () => state.prefix,
  getIsStudying: () => state.isStudying,
  getIsStudyTimeoutActive: () => Boolean(
    state.studyTimeout && !state.studyTimeout._destroyed
  ),
  getPreviousMessages: () => state.previousMessages
}

module.exports = { actions, getters }
