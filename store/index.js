export const state = () => ({
  URL: 'https://tavush-chobanyan-default-rtdb.firebaseio.com/tavush.json',
  data: {},
  filteredData: {}
})

export const getters = {
  getLandingPageData(state) {
    return state.data
  },
  getFilteredData(state) {
    return state.filteredData
  }
}

export const mutations = {
  SET_LANDING_PAGE_DATA(state, data) {
    state.data = data
    state.filteredData = data
  },
  PUT_NEW_POST_DATA(state, data) {
    state.data.posts.push(data)
  },
  FILTER_POST_DATA(state, value) {
    const newData = {
      posts: []
    }

    newData.posts = state.data.posts.filter(post => {
      return post.title.toLowerCase().includes(value.toLowerCase())
    })

    state.filteredData = newData
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
  async postNewData({ state }, data) {
    try {
      await fetch(state.URL, {
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
