import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const LOGIN = "LOGIN";
const LOGIN_SUCCESS ="LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";


export default new Vuex.Store({
  state: {
    user: [],
    isLoggedIn: !!localStorage.getItem("token")
  },
  mutations: {
    [LOGIN](state){
      state.pending = true;
    },
  },
  getters: {
  }
})
