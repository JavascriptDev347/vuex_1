import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    characters: [],
    charactersFilter: []
  },
  mutations: {
    setCharacters(state, payload) {
      state.characters = payload
    },
    setCharactersFilter(state, payload) {
      state.charactersFilter = payload
    }
  },
  actions: {
    async getCharacters({
      commit
    }) {
      try {
        const res = await fetch('https://rickandmortyapi.com/api/character')
        const data = await res.json()
        console.log(data.results);
        commit('setCharacters', data.results)
        commit('setCharactersFilter', data.results)
      } catch (error) {
        console.log(error);
      }
    },
    filterByStatus({
      commit,
      state
    }, status) {
      const results = state.characters.filter((character) => {
        return character.status.includes(status)
      })
      commit('setCharactersFilter', results)
    },

    filterByName({
      commit,
      state
    }, name) {
      const formatName = name.toLowerCase()
      const filter = state.characters.filter((character) => {
        const characterName = character.name.toLowerCase()
        if (characterName.includes(formatName)) {
          return character
        }
      })
      commit('setCharactersFilter', filter)
    }
  },
  getters: {},
  modules: {}
})