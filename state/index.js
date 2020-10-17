const state = {
  prefix: '!',
  isStudying: false,
  studyTimeout: null
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
  }
}

const getters = {
  getPrefix: () => state.prefix,
  getIsStudying: () => state.isStudying,
  getIsStudyTimeoutActive: () => Boolean(
    state.studyTimeout && !state.studyTimeout._destroyed
  )
}

module.exports = { actions, getters }
