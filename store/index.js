export const state = () => ({
  data: {},
  title: 'HAXARCIIN VANK'
})

export const getters = {
  getLandingPageData(state) {
    return state.data
  },
  getSinglePageTitle(state) {
    return state.title
  }
}

export const mutations = {
  SET_LANDING_PAGE_DATA(state, data) {
    state.data = data
  }
}

export const actions = {
  async fetchLandingPageData({ state, commit }) {
    try {
      const response = await fetch(
        'https://tavush-chobanyan-default-rtdb.firebaseio.com/tavush.json'
      )
      const data = await response.json()

      commit('SET_LANDING_PAGE_DATA', data)
    } catch (e) {
      //
    }
  }
}
