const state = {
  prefix: '!',
  isTameStudying: false,
  isStudying: false,
  tameStudyTimeout: null,
  studyTimeout: null,
  eggs: 0,
  previousMessages: [{}, {}]
}

const actions = {
  setEggs: function (payload) {
    state.eggs = payload
  },

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

  setIsTameStudying: function (payload) {
    state.isTameStudying = payload
  },

  setTameStudyTimeout: function (payload) {
    state.tameStudyTimeout = payload
  },

  clearTameStudyTimeout: function () {
    clearTimeout(state.tameStudyTimeout)
  },

  updatePreviousMessages: function (payload) {
    state.previousMessages[1] = state.previousMessages[0]
    state.previousMessages[0] = payload
  }
}

const getters = {
  getEggs: () => state.eggs,
  getPrefix: () => state.prefix,
  getIsStudying: () => state.isStudying,
  getIsStudyTimeoutActive: () => Boolean(
    state.studyTimeout && !state.studyTimeout._destroyed
  ),
  getIsTameStudying: () => state.isTameStudying,
  getIsTameStudyTimeoutActive: () => Boolean(
    state.tameStudyTimeout && !state.tameStudyTimeout._destroyed
  ),
  getPreviousMessages: () => state.previousMessages
}

module.exports = { actions, getters }
