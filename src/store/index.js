import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    kits:[{
      id:0,
      name: "menu A",
      type: "cB"
    },
    {
      id:1,
      name: "menu B",
      type: "cB"

    },
    {
      id:2,
      name: "menu B",
      type: "cB"

    },
    {
      id:3,
      name: "menu A",
      type: "jG"

    },
    {
      id:4,
      name: "menu B",
      type: "jG"

    },
    {
      id:5,
      name: "menu C",
      type: "jG"

    }],
    x: 0,
    logged: false,
    loggedUser: [],
    userExists: false
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
            lastName: payload.lastName,
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
            lastName: user.lastName,
            email: user.email,
            password: user.password
          });
          localStorage.setItem("loggedUser", JSON.stringify(state.loggedUser));
          state.logged = true;
          alert("LOGIN");
          alert("user.name" + user.name);
          sessionStorage.setItem("userOn", user.name)
          state.userExists = true;
        }
      }
      if (state.userExists === false) {
        alert("Credenciais Inválidas");
      } else {
        state.userExists = false;
      }
      window.location.href = "../views/Home.vue"

    },
    LOGOUT(state) {
      state.loggedUser.pop();
      localStorage.removeItem("loggedUser", JSON.stringify(state.loggedUser));
      sessionStorage.removeItem("userOn");
      state.logged = false;
      window.location.href = "../views/Home.vue"
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
