export const state = () => ({
  URL: 'https://tavush-chobanyan-default-rtdb.firebaseio.com/tavush.json',
  data: {}
})

export const getters = {
  getLandingPageData(state) {
    return state.data
  }
}

export const mutations = {
  SET_LANDING_PAGE_DATA(state, data) {
    state.data = data
  },
  PUT_NEW_POST_DATA(state, data) {
    state.data.posts.push(data)
  }
}

export const actions = {
  async fetchLandingPageData({ state, commit }) {
    try {
      const response = await fetch(state.URL)
      const data = await response.json()

      commit('SET_LANDING_PAGE_DATA', data)
    } catch (e) {
      //
    }
  },
  async postNewData({ state, commit }, data) {
    try {
      const response = await fetch(state.URL, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
    } catch (e) {
      //
    }
  }
}
