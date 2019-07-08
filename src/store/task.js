export default {
  state: {
    tasks: [
      {
        'id': 1,
        'title': 'SOME',
        'description': 'It is smth',
        'whatWatch': 'Фильм',
        'completed': false,
        'editing': false
      },
      {
        'id': 2,
        'title': 'SOME 2',
        'description': 'It is smth 2',
        'whatWatch': 'Сериал',
        'completed': false,
        'editing': false
      }
    ]
  },
  mutations: {
    newTask (state, payload) {
      state.tasks.push(payload)
    }
  },
  actions: {
    newTask ({commit}, payload) {
      commit('newTask', payload)
    }
  },
  getters: {
    tasks (state) {
      return state.tasks
    }
  }
}
