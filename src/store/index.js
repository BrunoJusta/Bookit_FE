import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentKit: {
      kitname: "",
      kitType: ""
    },
    currentArea: {
      areaName: ""
    },
    users: [{
      id: 0,
      name: "Admin",
      lastName: "Istrador",
      email: "admin@admin.admin",
      password: "123",
      number: "123",
      img: require('../assets/logo.png'),
      userType: "admin"
    }],
    kits: [{
        id: 0,
        name: "Menu A",
        drinks: ["café", "leite"],
        food: ["bolo"],
        type: "Coffee Break",
        img: require('../assets/eventosCatering.png'),
      },
      {
        id: 1,
        name: "menu B",
        drinks: ["café", "leite"],
        food: ["bolo"],
        type: "Coffee Break",
        img: require('../assets/eventosCatering.png')

      },
      {
        id: 2,
        name: "menu C",
        drinks: ["café", "leite"],
        food: ["bolo"],
        type: "Coffee Break",
        img: require('../assets/eventosCatering.png')

      },
      {
        id: 3,
        name: "menu A",
        drinks: ["café", "leite"],
        food: ["bolo"],
        type: "Jantar de Gala",
        img: require('../assets/eventosCatering.png')

      },
      {
        id: 4,
        name: "menu B",
        drinks: ["café", "leite"],
        food: ["bolo"],
        type: "Jantar de Gala",
        img: require('../assets/eventosCatering.png')

      },
      {
        id: 5,
        name: "Menu C",
        drinks: ["café", "leite"],
        food: ["bolo"],
        type: "Jantar de Gala",
        img: require('../assets/eventosCatering.png')

      }
    ],
    workshops: [{
        id: 0,
        name: "Workshop A",
        date: "20/12/2021",
        time: "12h - 14h",
        teacher: "João",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        img: require('../assets/workshopTemplate.png'),
        inscriptions: [],
        vacancies: 50


      },
      {
        id: 1,
        name: "Workshop B",
        date: "20/12/2019",
        time: "12h - 14h",
        teacher: "João",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        img: require('../assets/workshopTemplate.png'),
        inscriptions: [],
        vacancies: 50


      },
      {
        id: 2,
        name: "Workshop C",
        date: "20/12/2019",
        time: "12h - 14h",
        teacher: "João",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        img: require('../assets/workshopTemplate.png'),
        inscriptions: [],
        vacancies: 50


      }
    ],
    areas: [{
        id: 0,
        name: "Restaurante de Aplicação",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        img: require('../assets/bar.png'),
      },
      {
        id: 1,
        name: "Bar de Aplicação",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        img: require('../assets/bar.png'),

      },
      {
        id: 2,
        name: "Cozinha de Aplicação",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        img: require('../assets/bar.png'),

      },
      {
        id: 3,
        name: "Restaurante da ESHT",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        img: require('../assets/bar.png'),

      }
    ],
    x: 0,
    logged: false,
    loggedUser: [],
    notLogged: "Entrar",
    userExists: false,
    bookings: [],
    areaBookings: [],
    menuTypes: ['Coffee Break', 'Jantar de Gala', 'Porto de Honra'],
    ingredients: [{
        id: 0,
        name: "Sem Bebida",
        type: "Drink",
      }, {
        id: 1,
        name: "Sem Comida",
        type: "Food",
      },
      {
        id: 2,
        name: "Café",
        type: "Drink",
      }, {
        id: 3,
        name: "Leite",
        type: "Drink",
      }, {
        id: 4,
        name: "Bolo",
        type: "Food",
      }, {
        id: 5,
        name: "Bolachas",
        type: "Food",
      }
    ],
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
    ],
    schools: [{
      id: 0,
      name: "ESMAD"
    }, {
      id: 1,
      name: "ESHT"
    }, {
      id: 2,
      name: "ESS"
    }]
  },
  mutations: {
    STORE_ITEMS(state) {
      if (!localStorage.getItem("users")) {
        localStorage.setItem("users", JSON.stringify(state.users));
      }
      if (!localStorage.getItem("kits")) {
        localStorage.setItem("kits", JSON.stringify(state.kits));
      }
      if (!localStorage.getItem("workshops")) {
        localStorage.setItem("workshops", JSON.stringify(state.workshops));
      }
      if (!localStorage.getItem("areas")) {
        localStorage.setItem("areas", JSON.stringify(state.areas));
      }
      if (!localStorage.getItem("bookings")) {
        localStorage.setItem("bookings", JSON.stringify(state.bookings));
      }
      if (!localStorage.getItem("ingredients")) {
        localStorage.setItem("ingredients", JSON.stringify(state.ingredients));
      }
      if (!localStorage.getItem("extras")) {
        localStorage.setItem("extras", JSON.stringify(state.extras));
      }
      if (!localStorage.getItem("decor")) {
        localStorage.setItem("decor", JSON.stringify(state.decor));
      }
      if (!localStorage.getItem("outfits")) {
        localStorage.setItem("outfits", JSON.stringify(state.outfits));
      }
      if (!localStorage.getItem("menuTypes")) {
        localStorage.setItem("menuTypes", JSON.stringify(state.menuTypes));
      }
      localStorage.setItem("schools", JSON.stringify(state.schools));
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
            school: payload.school,
            img: require('../assets/logo.png'),
            userType: "cliente",
            notifications: [],
            archivations: [],
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
          state.loggedUser = ({
            id: user.id,
            name: user.name,
            lastName: user.lastName,
            email: user.email,
            password: user.password,
            number: user.number,
            img: user.img,
            school: user.school,
            userType: user.userType,
            notifications: user.notifications
          });
          state.userExists = true
          localStorage.setItem("loggedUser", JSON.stringify(state.loggedUser));
          if (user.userType === "admin") {
            router.push({
              name: 'adminHome',
            })
          } else if (user.userType === "cliente") {
            router.push({
              name: 'home',
            })
            if (state.loggedUser.notifications.length != 0) {
              alert("Tem " + state.loggedUser.notifications.length + " Notificações!")
            }
          }
          break
        } else {
          state.userExists = false;
        }
      }
      if (state.userExists === false) {
        alert("Credenciais Inválidas");
      }
    },
    LOGOUT(state) {
      state.loggedUser = []
      localStorage.removeItem("loggedUser", JSON.stringify(state.loggedUser));
      router.push({
        name: 'home'
      })
    },
    ADD_KIT(state, payload) {
      if (!state.kits.some(kit => kit.name === payload.name)) {
        state.kits.push({
          id: payload.id,
          name: payload.name,
          type: payload.type,
          drinks: payload.drinks,
          food: payload.food,
          img: payload.img
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
          description: payload.description,
          img: payload.img
        });
        localStorage.setItem("workshops", JSON.stringify(state.workshops));
      } else {
        alert("Workshop já existe!");
      }
    },
    ADD_AREA(state, payload) {
      if (!state.areas.some(a => a.name === payload.name)) {
        state.areas.push({
          id: payload.id,
          name: payload.name,
          description: payload.description,
          img: payload.img
        });
        localStorage.setItem("areas", JSON.stringify(state.areas));
      } else {
        alert("Area já existe!");
      }
    },
    ADD_BOOKING(state, payload) {
      state.bookings.push({
        id: payload.id,
        userName: payload.userName,
        userEmail: payload.userEmail,
        kitName: payload.kitName,
        kitType: payload.kitType,
        kitImg: payload.kitImg,
        reason: payload.reason,
        date: payload.date,
        duration: payload.duration,
        numberPeople: payload.numberPeople,
        location: payload.location,
        drinks: payload.drinks,
        food: payload.food,
        extras: payload.extras,
        decor: payload.decor,
        outfit: payload.outfit,
        state: payload.state,

      });
      localStorage.setItem("bookings", JSON.stringify(state.bookings));
    },
    ADD_AREA_BOOKING(state, payload) {
      state.areaBookings.push({
        id: payload.id,
        userName: payload.userName,
        userEmail: payload.userEmail,
        areaName: payload.areaName,
        areaImg: payload.areaImg,
        reason: payload.reason,
        date: payload.date,
        duration: payload.duration,
        state: payload.state,

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
    extrasLastId(state) {
      if (state.extras.length) {
        return state.extras[state.extras.length - 1].id;
      } else {
        return 0;
      }
    },
    outfitLastId(state) {
      if (state.outfits.length) {
        return state.outfits[state.outfits.length - 1].id;
      } else {
        return 0;
      }
    },
    decorLastId(state) {
      if (state.decor.length) {
        return state.decor[state.decor.length - 1].id;
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
    areaBookingLastId(state) {
      if (state.areaBookings.length) {
        return state.areaBookings[state.areaBookings.length - 1].id;
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
      if (state.loggedUser.length == 0) {
        return state.notLogged
      } else {
        return state.loggedUser.name

      }
    },
    getUserType(state) {
      return state.loggedUser.userType
    },
    getLastName(state) {
      return state.loggedUser.lastName
    },
    getEmail(state) {
      return state.loggedUser.email
    },
    getContact(state) {
      return state.loggedUser.number
    },
    getSchool(state){
      return state.loggedUser.school
    },
    getUserImg(state) {
      return state.loggedUser.img
    },
    getCurrentKitName(state) {
      return state.currentKit.kitname
    },
    getCurrentKitType(state) {
      return state.currentKit.kitType
    },
    getCurrentArea(state) {
      return state.currentArea.areaName
    },
    getCurrentKitImg(state) {
      return state.currentKit.kitImg
    },
    getCurrentAreaImg(state) {
      return state.currentArea.areaImg
    },
    getCurrentDate() {
      var today = new Date();
      var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
      return date
    },
    getAreaLastId(state) {
      if (state.areas.length) {
        return state.areas[state.areas.length - 1].id;
      } else {
        return 0;
      }
    }
  }
})