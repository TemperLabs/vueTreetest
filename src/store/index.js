import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: []
  },
  actions: {
    fetchUsers ({ commit }) {
      api.getUsers()
        .then(r => r.data)
        .then(usersData => {
          commit('SET_USERSDATA', usersData)
        })
    },
    fetchUser ({ commit }, id) {
      api.getUser(id)
        .then(r => r.data)
        .then(userData => {
          commit('SET_USERDATA', userData)
        })
    }
  },
  mutations: {
    SET_USERSDATA ({ state } , users) {
      state.users = users
    }
    // SET_USERDATA (state, users) {
    //   state.users = users
    // }
  }
})
