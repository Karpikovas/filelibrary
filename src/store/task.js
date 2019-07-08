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
        'completed': true,
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
      payload.id = Math.random()
      commit('newTask', payload)
    }
  },
  getters: {
    tasks (state) {
      return state.tasks
    },
    taskCompleted (state) {
      return state.tasks.filter(task => {
        return task.completed
      })
    },
    taskNoCompleted (state) {
      return state.tasks.filter(task => {
        return task.completed === false
      })
    }
  }
}
