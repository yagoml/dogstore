import Vue from 'vue'
import Vuex from 'vuex'
import { listBreeds } from '@/services/dog-api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    breeds: {},
    loading: false,
    images: {}
  },

  mutations: {
    setBreeds(state, breeds) {
      state.breeds = breeds
    },
    setLoading(state, status) {
      state.loading = status
    },
    setImage(state, params) {
      state.images[params.breed] = params.image
    }
  },

  actions: {
    async getBreeds({commit}) {
      commit('setLoading', true)
      const breeds = await listBreeds()
      commit('setBreeds', breeds)
      commit('setLoading', false)
    }
  }
})

export default store