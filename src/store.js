import Vue from 'vue'
import Vuex from 'vuex'
import { listBreeds } from '@/services/dog-api'
import { setPrices, getPrices } from '@/services/local-storage'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    breeds: {},
    loading: false,
    images: {},
    form: {}
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
    },
    setForm(state, form) {
      state.form = form
    },
    setLSPrices(state) {
      const prices = getPrices()
      if (prices && prices.length) return
      setPrices(state.breeds)
    }
  },

  actions: {
    async loadBreeds({commit}) {
      commit('setLoading', true)
      const breeds = await listBreeds()
      commit('setBreeds', breeds)
      commit('setLSPrices')
      commit('setLoading', false)
    }
  }
})

export default store