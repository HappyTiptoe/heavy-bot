class Store {
  constructor() {
    this.studySessions = []
    this.previousMessages = [{}, {}]
  }

  /* actions */
  addStudySession(newSession) {
    this.studySessions = [...this.studySessions, newSession]
  }

  removeStudySession(userID) {
    const session = this.studySessions.find((s) => s.userID === userID)
    if (session.timeoutID) {
      clearTimeout(session.timeoutID)
    }
    this.studySessions = this.studySessions.filter((s) => s !== session)
  }

  updatePreviousMessages(newMessage) {
    const last = this.previousMessages[1]
    this.previousMessages = [last, newMessage]
  }

  /* getters */
  getIsStudying(id) {
    return this.studySessions.some((s) => s.userID === id)
  }

  getPreviousMessages() {
    return this.previousMessages
  }
}

module.exports = Store
