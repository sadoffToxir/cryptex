const initialState = { searchHistory: [] }

const getters = {}
const mutations = {
  addHistory(state: typeof initialState, searchHistory: any) {
    state.searchHistory.unshift(searchHistory)
  },
  setHistory(state, searchHistory) {
    state.searchHistory = searchHistory
    setStore('searchHistory', searchHistory)
  },
}
const actions = {}

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations
}
