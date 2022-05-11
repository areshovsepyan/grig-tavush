export const state = () => ({
  data: {}
})

export const getters = {
  getLandingData(state) {
    return state.data
  }
}

export const mutations = {
  SET_LANDING_DATA(state, data) {
    state.data = data
  }
}

export const actions = {
  async fetchLandingData({ state, commit }) {
    try {
      const response = await fetch(
        'https://tavush-chobanyan-default-rtdb.firebaseio.com/tavush.json'
      )
      const data = await response.json()

      commit('SET_LANDING_DATA', data)
    } catch (e) {
      //
    }
  }
}
