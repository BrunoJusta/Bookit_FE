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
        drinks: ["café", "leite"],
        food: ["bolo"],
        type: "Coffee Break"
      },
      {
        id: 1,
        name: "menu B",
        drinks: ["café", "leite"],
        food: ["bolo"],
        type: "Coffee Break"

      },
      {
        id: 2,
        name: "menu B",
        drinks: ["café", "leite"],
        food: ["bolo"],
        type: "Coffee Break"

      },
      {
        id: 3,
        name: "menu A",
        drinks: ["café", "leite"],
        food: ["bolo"],
        type: "Jantar de Gala"

      },
      {
        id: 4,
        name: "menu B",
        drinks: ["café", "leite"],
        food: ["bolo"],
        type: "Jantar de Gala"

      },
      {
        id: 5,
        name: "menu C",
        drinks: ["café", "leite"],
        food: ["bolo"],
        type: "Jantar de Gala"

      }
    ],
    workshops: [{
        id: 0,
        name: "Workshop A",
        date: "20/12/2019",
        time: "12h - 14h",
        teacher: "João",
        description: "wow"
      },
      {
        id: 1,
        name: "Workshop B",
        date: "20/12/2019",
        time: "12h - 14h",
        teacher: "João",
        description: "wow"

      },
      {
        id: 2,
        name: "Workshop C",
        date: "20/12/2019",
        time: "12h - 14h",
        teacher: "João",
        description: "wow"


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
    areaBookings: [],
    inscriptions: [],
    drinks: ["café", "chá"],
    food: ["bolachas", "bolo"],
    ingredients: [{
      id: 0,
      name: "Café",
      type: "Drink",
    }, {
      id: 1,
      name: "Leite",
      type: "Drink",
    }, {
      id: 2,
      name: "Bolo",
      type: "Food",
    }, {
      id: 3,
      name: "Bolachas",
      type: "Food",
    }],
    extras: [{
      id: 0,
      name: "Babysiting"
    }, {
      id: 1,
      name: "Palhaços"
    }, {
      id: 2,
      name: "Atuação Musical"
    }],
    decor: [{
      id: 0,
      name: "Centros de Mesa"
    }, {
      id: 1,
      name: "Lounge"
    }, {
      id: 2,
      name: "Fitas Coloridas"
    }],

    outfits: [{
        id: 0,
        source: "https://i.pinimg.com/736x/fb/53/67/fb536700b0fc7f07b7e7542835103eb7--uniform-design-uniform-ideas.jpg",
        name: "Outfit_1"
      },
      {
        id: 1,
        source: "https://i.pinimg.com/736x/fb/53/67/fb536700b0fc7f07b7e7542835103eb7--uniform-design-uniform-ideas.jpg",
        name: "Outfit_2"

      },
      {
        id: 2,
        source: "https://i.pinimg.com/736x/fb/53/67/fb536700b0fc7f07b7e7542835103eb7--uniform-design-uniform-ideas.jpg",
        name: "Outfit_3"

      },
    ]
  },
  mutations: {
    STORE_ITEMS(state) {
      localStorage.setItem("workshops", JSON.stringify(state.workshops));
      localStorage.setItem("areas", JSON.stringify(state.areas));
      localStorage.setItem("ingredients", JSON.stringify(state.ingredients));
      localStorage.setItem("outfits", JSON.stringify(state.outfits));
      localStorage.setItem("extras", JSON.stringify(state.extras));
      localStorage.setItem("decor", JSON.stringify(state.decor));
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
          router.push({
            name: 'login'
          })
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
          sessionStorage.setItem("userOn", user.name)
          state.userExists = true;
          if (user.userType === "admin") {

            router.push({
              name: 'adminHome',
            }) //Nao atualiza o nome de utilizador ao fazer o push pq nao atualiza a pagina
          } else if (user.userType === "cliente") {
            window.location = "../views/Home.vue"
            /*  router.push({ name: 'home'})  Nao atualiza o nome de utilizador ao fazer o push pq nao atualiza a pagina*/

          }
          if (state.userExists === false) {
            alert("Credenciais Inválidas");
          } else {
            state.userExists = false;
          }
        }
      }
    },
    LOGOUT(state) {
      state.loggedUser.pop();
      localStorage.removeItem("loggedUser", JSON.stringify(state.loggedUser));
      sessionStorage.removeItem("userOn");
      state.logged = false;
      router.push({
        name: 'home'
      })
    },
    ADD_WORKSHOP_ATENDER(state, payload) {
      if (!state.inscriptions.some(b => b.clientName === payload.clientName) || !state.inscriptions.some(b => b.workshopName === payload.workshopName)) {
        state.inscriptions.push({
          workshopName: payload.workshopName,
          date: payload.date,
          time: payload.time,
          clientName: payload.clientName,
        });
        localStorage.setItem("inscriptions", JSON.stringify(state.inscriptions));
        alert("RESERVA CONCLUIDA COM SUCESSO")
      } else {
        alert("Já Inscrito");
      }
    },
    ADD_KIT(state, payload) {
      if (!state.kits.some(kit => kit.name === payload.name)) {
        state.kits.push({
          id: payload.id,
          name: payload.name,
          type: payload.type,
          drinks: payload.drinks,
          food: payload.food
        });
        localStorage.setItem("kits", JSON.stringify(state.kits));
      } else {
        alert("Nome já em uso!");
      }
    },
    ADD_WORKSHOP(state, payload) {
      if (!state.workshops.some(w => w.name === payload.name)) {
        state.workshops.push({
          id: payload.id,
          name: payload.name,
          teacher: payload.teacher,
          date: payload.date,
          time: payload.time,
          description: payload.description
        });
        localStorage.setItem("workshops", JSON.stringify(state.workshops));
      } else {
        alert("Workshop já existe!");
      }
    },
    ADD_BOOKING(state, payload) {
      state.bookings.push({
        id: payload.id,
        userName: payload.userName,
        userEmail: payload.userEmail,
        kitName: payload.kitName,
        kitType: payload.kitType,
        reason: payload.reason,
        date: payload.date,
        duration: payload.duration,
        numberPeople: payload.numberPeople,
        drinks: payload.drinks,
        food: payload.food,
        extras: payload.extras,
        decor: payload.decor,
        outfit: payload.outfit,
      });
      localStorage.setItem("bookings", JSON.stringify(state.bookings));
    },
    ADD_AREA_BOOKING(state, payload) {
      state.areaBookings.push({
        id: payload.id,
        userName: payload.userName,
        userEmail: payload.userEmail,
        areaName: payload.areaName,
        reason: payload.reason,
        date: payload.date,
        duration: payload.duration,
      });
      localStorage.setItem("areaBookings", JSON.stringify(state.areaBookings));
    },
    ADD_INGREDIENT(state, payload) {
      if (!state.ingredients.some(ing => ing.name === payload.name)) {
        state.ingredients.push({
          id: payload.id,
          name: payload.name,
          type: payload.type,
        });
        localStorage.setItem("ingredients", JSON.stringify(state.ingredients));
      } else {
        alert("Ingrediente já existe!");
      }
    },
  },
  getters: {
    lastId(state) {
      if (state.users.length) {
        return state.users[state.users.length - 1].id;
      } else {
        return 0;
      }
    },
    kitLastId(state) {
      if (state.kits.length) {
        return state.kits[state.kits.length - 1].id;
      } else {
        return 0;
      }
    },
    workshopLastId(state) {
      if (state.workshops.length) {
        return state.workshops[state.workshops.length - 1].id;
      } else {
        return 0;
      }
    },
    ingredientLastId(state) {
      if (state.ingredients.length) {
        return state.ingredients[state.ingredients.length - 1].id;
      } else {
        return 0;
      }
    },
    bookingLastId(state) {
      if (state.bookings.length) {
        return state.bookings[state.bookings.length - 1].id;
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
    getName(state) {
      return state.loggedUser[0].name
    },
    getLastName(state) {
      return state.loggedUser[0].lastName
    },
    getEmail(state) {
      return state.loggedUser[0].email
    }
  }
})