const state = {
  prefix: '!',
  previousMessages: [{}, {}],
  eggs: 0,
  studySessions: []
}

const actions = {
  setPrefix: function (payload) {
    state.prefix = payload
  },

  setEggs: function (payload) {
    state.eggs = payload
  },

  updatePreviousMessages: function (payload) {
    state.previousMessages[1] = state.previousMessages[0]
    state.previousMessages[0] = payload
  },

  addStudySession: function (payload) {
    state.studySessions = [...state.studySessions, payload]
  },

  removeStudySession: function (payload) {
    const session = state.studySessions.find((studySession) => studySession.studentId === payload)
    clearTimeout(session.timeoutId)
    state.studySessions = state.studySessions.filter((studySession) => studySession !== session)
  }
}

const getters = {
  getPrefix: () => state.prefix,
  getPreviousMessages: () => state.previousMessages,
  getEggs: () => state.eggs,
  getIsStudying: (id) => state.studySessions.some((studySession) => studySession.studentId === id)
}

module.exports = { actions, getters }
