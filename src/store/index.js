import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [{
      id: 0,
      name: "Admin",
      lastName: "Istrador",
      email: "admin@admin.admin",
      password: "123",
      number: "123",
      userType: "admin"
    }],
    kits: [{
        id: 0,
        name: "menu A",
        drinks:["café", "leite"],
        food:["bolo"],
        type: "cB"
      },
      {
        id: 1,
        name: "menu B",
        drinks:["café", "leite"],
        food:["bolo"],
        type: "cB"

      },
      {
        id: 2,
        name: "menu B",
        drinks:["café", "leite"],
        food:["bolo"],
        type: "cB"

      },
      {
        id: 3,
        name: "menu A",
        drinks:["café", "leite"],
        food:["bolo"],
        type: "jG"

      },
      {
        id: 4,
        name: "menu B",
        drinks:["café", "leite"],
        food:["bolo"],
        type: "jG"

      },
      {
        id: 5,
        name: "menu C",
        drinks:["café", "leite"],
        food:["bolo"],
        type: "jG"

      }
    ],
    workshops: [{
        id: 0,
        name: "Workshop A",
        date: "20/12/2019",
        time: "12h - 14h",
        teacher: "João"
      },
      {
        id: 1,
        name: "Workshop B",
        date: "20/12/2019",
        time: "12h - 14h",
        teacher: "João"

      },
      {
        id: 2,
        name: "Workshop C",
        date: "20/12/2019",
        time: "12h - 14h",
        teacher: "João"


      }
    ],
    areas: [{
        id: 0,
        name: "Restaurante de Aplicação",
      },
      {
        id: 1,
        name: "Bar de Aplicação",
      },
      {
        id: 2,
        name: "Cozinha de Aplicação",
      },
      {
        id: 3,
        name: "Restaurante da ESHT",
      }
    ],
    x: 0,
    logged: false,
    loggedUser: [],
    userExists: false,
    bookings: [],
    inscriptions:[],
    ingredients: [
      {
        id:0,
        name: "Café",
        type: "Drink",
      }, {
        id:1,
        name: "Leite",
        type: "Drink",
      }, {
        id:2,
        name: "Bolo",
        type: "Food",
      }, {
        id:3,
        name: "Bolachas",
        type: "Food",
      },
    ]
  },

  mutations: {
    STORE_ITEMS(state) {
      localStorage.setItem("kits", JSON.stringify(state.kits));
      localStorage.setItem("workshops", JSON.stringify(state.workshops));
      localStorage.setItem("areas", JSON.stringify(state.areas));
      localStorage.setItem("ingredients", JSON.stringify(state.ingredients));


    },
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
            number: payload.number,
            userType: "cliente"

          });
          localStorage.setItem("users", JSON.stringify(state.users));
          alert("Registado");
          router.push({name:'login'})

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
          sessionStorage.setItem("userOn", user.name)
          state.userExists = true;
          if (user.userType === "admin") {
            router.push({name:'adminHome'})
          } else if (user.userType === "cliente") {
            router.push({name:'home'})
          }

          if (state.userExists === false) {
            alert("Credenciais Inválidas");
          } else {
            state.userExists = false;
          }
        }
      }

    },
    ADD_WORKSHOP_ATENDER(state, payload) {
      if (!state.inscriptions.some(b => b.Inscrito === payload.clientName) || !state.inscriptions.some(b => b.Workshop === payload.workshopName)){
          state.inscriptions.push({
            workshopName:  payload.workshopName,
            date:  payload.date,
            time:  payload.time,
            clientName:  payload.clientName,
          });
          localStorage.setItem("inscriptions", JSON.stringify(state.inscriptions));
          alert("RESERVA CONCLUIDA COM SUCESSO")
      } else {
        alert("Já Inscrito");
      }

    },
    LOGOUT(state) {
      state.loggedUser.pop();
      localStorage.removeItem("loggedUser", JSON.stringify(state.loggedUser));
      sessionStorage.removeItem("userOn");
      state.logged = false;
      router.push({name:'home'})

    }
  },
  getters: {
    lastId(state) {
      if (state.users.length) {
        return state.users[state.users.length - 1].id;
      } else {
        return 0;
      }
    },
    getUserOn(state) {
      if (state.loggedUser.length) {
        state.logged = true
        return state.logged;
      } else {
        state.logged = false
        return state.logged;
      }
    },
    getName(state){
      return state.loggedUser[0].name
    }
  }
})