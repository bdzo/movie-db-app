import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { MoviesSevice } from '../services/movies'

Vue.use(Vuex)
const baseUrl = 'https://api.themoviedb.org/3/movie/'
const apiKey = '6fa7ab7aeacd59b453d8dbb3b3d65234'
const language = 'en-US'

const movieService = new MoviesSevice(baseUrl, apiKey, language)

export default new Vuex.Store({
  state: {
    popular: [],
    topRated: [],
    upcomings: [],
    singleMovieData: null,
    searchResults: null
  },

  mutations: {
    SET_POPULAR(state, popular) {
      state.popular.push(popular)
    },

    SET_TOPRATED(state, topRated) {
      state.topRated.push(topRated);
    },

    SET_UPCOMING(state, upcomings) {
      state.upcomings.push(upcomings[0]);
    },

    SET_SIGLE_MOVIE_DATE(state, singleMovieData) {
      state.singleMovieData = singleMovieData;
    },

    SET_SEARCH_RESULTS(state, searchResults) {
      state.searchResults = searchResults;
    }
  },

  actions: {
    setPopular({ commit }, pageNum) {
      movieService
        .popular( pageNum )
        .then( (results) => {
          commit('SET_POPULAR', results)
        })
        .catch(error => console.log(error))
    },

    setTopRated({ commit }, pageNum) {
      axios
        .get(`https://api.themoviedb.org/3/movie/top_rated?api_key=6fa7ab7aeacd59b453d8dbb3b3d65234&language=en-US&page=${pageNum}`)
        .then(response => {
          commit('SET_TOPRATED', response.data.results);
        })
        .catch(error => console.log(error))
    },

    setUpcoming({ commit }, pageNum) {
      axios
        .get(`https://api.themoviedb.org/3/movie/upcoming?api_key=6fa7ab7aeacd59b453d8dbb3b3d65234&language=en-US&page=${pageNum}`)
        .then(response => {
          let upcomings = []; 
          upcomings.push(response.data.results);
          commit('SET_UPCOMING', upcomings);
        })
        .catch(error => console.log(error))
    },

    getSingleMovieData({commit}, id) {
      axios
        .get(`https://api.themoviedb.org/3/movie/${id}?api_key=6fa7ab7aeacd59b453d8dbb3b3d65234&language=en-US`)
        .then(response => {
          let singleMovieData = response.data;
          commit('SET_SIGLE_MOVIE_DATE', singleMovieData)
        })
        .catch(error => console.log(error))
    },

    getSearchResults({commit}, searchInput) {
      axios
        .get(`https://api.themoviedb.org/3/search/movie?api_key=6fa7ab7aeacd59b453d8dbb3b3d65234&query=${searchInput}`)
        .then(response => {
          let searchResults = response.data.results;
          commit('SET_SEARCH_RESULTS', searchResults);
          console.log(searchResults);
        })
        .catch(error => console.log(error));
    }
  },

  modules: {
  }
})
