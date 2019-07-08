export default {
  state: {
    tags: [
      {
        title: 'Мелодрама',
        use: false
      },
      {
        title: 'Комедия',
        use: false
      },
      {
        title: 'Приключения',
        use: false
      }
    ]
  },
  mutations: {
    newTag (state, payload) {
      state.tags.push(payload)
    }
  },
  actions: {
    newTag ({commit}, payload) {
      commit('newTag', payload)
    }
  },
  getters: {
    tags (state) {
      return state.tags
    }
  }
}
