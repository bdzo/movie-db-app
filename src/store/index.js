import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    popular: [],
    topRated: [],
    upcomings: []
  },

  mutations: {
    SET_POPULAR(state, popular) {
      state.popular.push(popular[0]);
    },

    SET_TOPRATED(state, topRated) {
      state.topRated.push(topRated[0]);
    },

    SET_UPCOMING(state, upcomings) {
      state.upcomings.push(upcomings[0]);
    }
  },

  actions: {
    setPopular({ commit }, pageNum) {
      axios
        .get('https://api.themoviedb.org/3/movie/popular?api_key=6fa7ab7aeacd59b453d8dbb3b3d65234&language=en-US&page=' + pageNum)
        .then(response => {
          let popular = [];
          popular.push(response.data.results);
          commit('SET_POPULAR', popular);
        })
        .catch(error => console.log(error))
    },

    setTopRated({ commit }, pageNum) {
      axios
        .get('https://api.themoviedb.org/3/movie/top_rated?api_key=6fa7ab7aeacd59b453d8dbb3b3d65234&language=en-US&page=' + pageNum)
        .then(response => {
          let topRated = [];
          topRated.push(response.data.results);
          commit('SET_TOPRATED', topRated);
        })
        .catch(error => console.log(error))
    },

    setUpcoming({ commit }, pageNum) {
      axios
        .get('https://api.themoviedb.org/3/movie/upcoming?api_key=6fa7ab7aeacd59b453d8dbb3b3d65234&language=en-US&page=' + pageNum)
        .then(response => {
          let upcomings = []; 
          upcomings.push(response.data.results);
          commit('SET_UPCOMING', upcomings);
        })
        .catch(error => console.log(error))
    }
  },

  modules: {
  }
})
