export const state = () => ({
  URL: 'https://tavush-chobanyan-default-rtdb.firebaseio.com/tavush.json',
  data: {},
  filteredData: {},
  map: {
    zoom: 10,
    initCoord: [40.9, 45],
    mapURL: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
    options: {
      zoomControl: false,
      pan: {
        duration: 10
      }
    }
  },
  coords: [],
  singlePostId: null,
  loading: false
})

export const getters = {
  getLoading(state) {
    return state.loading
  },
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
  },
  getActiveId(state) {
    return state.singlePostId
  }
}

export const mutations = {
  SET_SINGLE_ID(state, data) {
    state.singlePostId = data
  },
  SET_VIEW_SINGLE_POST(state, data) {
    state.map.zoom = 14
    state.map.initCoord = data.coords
    state.singlePostId = data.id
  },
  RESET_INIT_COORDS(state) {
    state.map.zoom = 10
    state.map.initCoord = [40.9, 45]
    state.singlePostId = null
  },
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
  },
  START_LOADING(state, data) {
    state.loading = data
  }
}

export const actions = {
  async getNewCoordinates({ state, commit }, payload) {
    try {
      const apiKey = '20767a320457ecc9715cbb5c02f38e7d'
      const response = await fetch(
        `http://api.positionstack.com/v1/forward?access_key=${apiKey}&query=${payload}`
      )
      const data = await response.json()
      const lat = data.data[0].latitude
      const long = data.data[0].longitude
      return [lat, long]
    } catch (e) {
      console.log(e)
    }
  },
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
