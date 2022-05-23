// import getters from './getters'
// import mutations from './mutations'
// import actions from './actions'

export const state = () => ({
  URL: 'https://tavush-chobanyan-default-rtdb.firebaseio.com/tavush.json',
  data: {},
  filteredData: {},
  map: {
    zoom: 11,
    initCoord: [40.9, 45],
    mapURL: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
    options: {
      zoomControl: false,
      pan: {
        duration: 10
      }
    }
  },
  coords: []
})

export const getters = {
  getPostsCoords(state) {
    return state.coords
  },
  getLandingPageData(state) {
    return state.data
  },
  getFilteredData(state) {
    return state.filteredData
  },
  getMapOptions(state) {
    return state.map
  }
}

export const mutations = {
  SET_VIEW_COORDS(state, data) {
    state.map.initCoord = data
  },
  SET_POST_COORDS(state, data) {
    data.forEach(post => {
      if (post.latlng) {
        state.coords.push(post.latlng)
      }
    })
  },
  SET_SELECTED_FILES_ARRAY(state, data) {
    data.forEach(element => {
      state.selectedFilesArray.push(element)
    })
  },
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
      commit('SET_POST_COORDS', data.posts)
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
