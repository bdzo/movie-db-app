import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    popular: null,
    topRated: null,
    upcomings: null
  },

  mutations: {
    SET_POPULAR(state, popular) {
      state.popular = popular;
    },

    SET_TOPRATED(state, topRated) {
      state.topRated = topRated;
    },

    SET_UPCOMING(state, upcomings) {
      state.upcomings = upcomings;
    }
  },

  actions: {
    setPopular({ commit }) {
      axios
        .get('https://api.themoviedb.org/3/movie/popular?api_key=6fa7ab7aeacd59b453d8dbb3b3d65234&language=en-US&page=1')
        .then(response => {
          let popular = response.data.results;
          commit('SET_POPULAR', popular);
        })
        .catch(error => console.log(error))
    },

    setTopRated({ commit }) {
      axios
        .get('https://api.themoviedb.org/3/movie/top_rated?api_key=6fa7ab7aeacd59b453d8dbb3b3d65234&language=en-US&page=1')
        .then(response => {
          let topRated = response.data.results;
          commit('SET_TOPRATED', topRated);
        })
        .catch(error => console.log(error))
    },

    setUpcoming({ commit }) {
      axios
        .get('https://api.themoviedb.org/3/movie/upcoming?api_key=6fa7ab7aeacd59b453d8dbb3b3d65234&language=en-US&page=1')
        .then(response => {
          let upcomings = response.data.results;
          commit('SET_UPCOMING', upcomings);
        })
        .catch(error => console.log(error))
    }
  },

  modules: {
  }
})
