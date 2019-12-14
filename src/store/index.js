import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    x: 0,
    logged: false,
    loggedUser: [],
    userExists: false,
  },
  mutations: {
    ADD_USER(state, payload) {
      if (!state.users.some(user => user.email === payload.email)) {
        if (payload.password != payload.confPassword) {
          alert("PASSWORDS DIFERENTES");
        } else {
          state.users.push({
            id: payload.id,
            name: payload.name,
            email: payload.email,
            password: payload.password,
            number: payload.number
          });
          localStorage.setItem("users", JSON.stringify(state.users));
          alert("Registado");
        }
      } else {
        alert("E-MAIL JÁ EXISTENTE");
      }
    },
    LOGIN(state, payload) {
      for (const user of state.users) {
        if (
          user.email === payload.email &&
          user.password === payload.password
        ) {
          state.loggedUser.push({
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password
          });
          localStorage.setItem("loggedUser", JSON.stringify(state.loggedUser));
          alert("LOGIN");
          state.existUser = true;
        }
      }
      if (state.existUser === false) {
        alert("Credenciais Inválidas");
      } else {
        state.existUser = false;
      }
    }
  },
  getters: {
    lastId(state) {
      if (state.users.length) {
        return state.users[state.users.length - 1].id;
      } else {
        return 0;
      }
    }
  }
})
