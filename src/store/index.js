import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router';

import bookitService from "@/apis/bookitService.js"


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    menus: [],
    areas: [],
    workshops: [],
    currentWorkshop: [],
    x: 0,
    logged: false,
    loggedUser: [],
    notLogged: "Entrar",
    userExists: false,
    userBlocked: false,
    bookings: [],
    bookingsDecor: [],
    bookingsExtra: [],
    bookingsAddOns: [],
    areaBookings: [],
    menuTypes: [],
    ingredients: [],
    extras: [],
    decor: [],
    outfits: [],
    schools: [],
    token: [],
    currentMenu: [],
    currentMenuIngs: [],
    currentArea: [],
    userBookings: [],
    userAreaBookings: [],
    userWorkshops: []
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
      localStorage.setItem("schools", JSON.stringify(state.schools));
    },
    ADD_USER(state, data) {
      Swal.fire({
        icon: 'success',
        text: data.message
      })
      router.push({
        name: 'login'
      })
    },
    LOGIN(state, data) {
      state.loggedUser = data.user
      localStorage.setItem("loggedUser", JSON.stringify(state.loggedUser));
      if (state.loggedUser.type === 0) {
        Swal.fire({
          icon: 'success',
          text: data.message
        })
        router.push("/adminHome")
      } else if (state.loggedUser.type === 1) {
        Swal.fire({
          icon: 'success',
          text: data.message
        })
        router.push("/")
      }
    },
    LOGOUT(state) {
      bookitService.logout()
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
          img: payload.img,
          popularity: 0
        });
        localStorage.setItem("kits", JSON.stringify(state.kits));
        router.push({
          name: 'menuGallery'
        })
      } else {
        Swal.fire({
          icon: 'warning',
          text: 'Já existe um menu com esse nome!'
        })
      }
    },
    ADD_BOOKING(data) {
      Swal.fire({
        icon: 'success',
        text: "Pedido de reserva enviado"
      })
      router.push({
        name: 'areasGallery'
      })
    },
    ADD_AREA_BOOKING(data) {
      Swal.fire({
        icon: 'success',
        text: "Pedido de reserva enviado"
      })
      router.push({
        name: 'areasGallery'
      })
    },
    SET_MENUS(state, data) {
      state.menus = data
    },
    SET_USER_BOOKINGS(state, data) {
      state.userBookings = []
      state.userBookings = data
    },
    SET_USER_AREABOOKINGS(state, data) {
      state.userAreaBookings = []
      state.userAreaBookings = data
    },
    SET_USER_WORKSHOPS(state, data) {
      state.userWorkshops = []
      state.userWorkshops = data
    },
    SET_MENU_BOOKINGS(state, data) {
      state.bookings = data
    },
    SET_BOOKINGS_DECOR(state, data) {
      state.bookingsDecor = data
    },
    SET_BOOKINGS_EXTRA(state, data) {
      state.bookingsExtra = data
    },
    SET_BOOKINGS_ADDONS(state, data) {
      state.bookingsAddOns = data
    },
    SET_AREA_BOOKINGS(state, data) {
      state.areaBookings = data
    },
    SET_MENU_TYPES(state, data) {
      state.menuTypes = data
    },
    SET_AREAS(state, data) {
      state.areas = data
    },
    SET_WORKSHOPS(state, data) {
      state.workshops = data

    },
    SET_WORKSHOP_BY_ID(state, data) {
      state.currentWorkshop = data.data
      localStorage.setItem("currentWorkshop", JSON.stringify(state.currentWorkshop));
    },
    SET_USERS(state, data) {
      state.users = data
    },
    SET_CURRENT_MENU(state, data) {
      state.currentMenu = data.menu
      localStorage.setItem("currentMenu", JSON.stringify(state.currentMenu));
    },
    SET_CURRENT_AREA(state, data) {
      state.currentArea = data.data[0]
      localStorage.setItem("currentArea", JSON.stringify(state.currentArea));
    },
    SET_CURRENT_MENU_INGS(state, data) {
      state.currentMenuIngs = data.ingredients
      localStorage.setItem("currentMenuIngs", JSON.stringify(state.currentMenuIngs))
    },
    SET_SCHOOLS(state, data) {
      state.schools = data.data

    },
    SET_INGREDIENTS(state, data) {
      state.ingredients = data.data

    },
    SET_EXTRAS(state, data) {
      state.extras = data.data

    },
    SET_DECORATIONS(state, data) {
      state.decor = data.data

    },
    SET_OUTFITS(state, data) {
      state.outfits = data.data

    },
    EDIT_USERS(data) {
      Swal.fire({
        icon: 'success',
        text: data.message
      })
    },
    DELETE_USER(data) {
      Swal.fire({
        icon: 'success',
        text: data.message
      })
    },
    DELETE_MENU_BOOKING(data) {
      Swal.fire({
        icon: 'success',
        text: data.message
      })
    },
    DELETE_AREA_BOOKING(data) {
      Swal.fire({
        icon: 'success',
        text: data.message
      })
    },
    EDIT_MENU() {
      Swal.fire({
        icon: 'success',
        text: "Menu Atualizado"
      })
      router.push({
        name: 'menuGallery'
      })
    },
    DELETE_MENU() {
      Swal.fire({
        icon: 'success',
        text: "Menu Eliminado"
      })
    },
    EDIT_AREA() {
      Swal.fire({
        icon: 'success',
        text: "Area Atualizado"
      })
      router.push({
        name: 'areasGallery'
      })
    },
    DELETE_AREA() {
      Swal.fire({
        icon: 'success',
        text: "Area Eliminado"
      })
    },
    EDIT_MENU_BOOKINGS() {
      Swal.fire({
        icon: 'success',
        text: "Reserva do menu Atualizado"
      })
    },
    EDIT_AREA_BOOKINGS() {
      Swal.fire({
        icon: "success",
        text: "Reserva da area Atualizada"
      })
    },
    DELETE_WORKSHOP() {
      Swal.fire({
        icon: 'success',
        text: "Workshop Eliminado"
      })
    },
    ADD_INGREDIENT() {
      Swal.fire({
        icon: 'success',
        text: "Ingrediente adicionado!"
      })
    },
    DELETE_INGREDIENT() {
      Swal.fire({
        icon: 'success',
        text: "Ingrediente Eliminado"
      })
    },
    ADD_EXTRA() {
      Swal.fire({
        icon: 'success',
        text: "Extra adicionado!"
      })
    },
    DELETE_EXTRA() {
      Swal.fire({
        icon: 'success',
        text: "Extra Eliminado"
      })
    },
    ADD_DECOR() {
      Swal.fire({
        icon: 'success',
        text: "Decoração adicionado!"
      })
    },
    DELETE_DECOR() {
      Swal.fire({
        icon: 'success',
        text: "Decoração Eliminado"
      })
    },
    ADD_OUTFIT() {
      Swal.fire({
        icon: 'success',
        text: "Farda adicionada!"
      })
    },
    DELETE_OUTFIT() {
      Swal.fire({
        icon: 'success',
        text: "Farda Eliminada"
      })
    },
    ADD_MENU() {
      Swal.fire({
        icon: 'success',
        text: "Menu Adicionado!"
      })
    },
    ADD_AREA() {
      Swal.fire({
        icon: 'success',
        text: "Espaço Adicionado!"
      })
    },
    ADD_WORKSHOP() {
      Swal.fire({
        icon: 'success',
        text: "Workshop Adicionado!"
      })
    },
    EDIT_WORKSHOP() {
      console.log("aqui")
      Swal.fire({
        icon: 'success',
        text: "Workshop Atualizado"
      })
      router.push({
        name: 'workshops'
      })
    },
    ADD_INSCRIPTION() {
      console.log("aqui")
      Swal.fire({
        icon: 'success',
        text: "Inscreveu-se no Workshop"
      })
      router.push({
        name: 'workshops'
      })
    }
  },
  actions: {
    async fetchMenus({
      commit
    }) {
      commit("SET_MENUS", await bookitService.getMenus())
    },
    async fetchUserBookings({
      commit
    }) {
      commit("SET_USER_BOOKINGS", await bookitService.getUserBookings())
    },
    async fetchUserAreaBookings({
      commit
    }) {
      commit("SET_USER_AREABOOKINGS", await bookitService.getUserAreaBookings())
    },
    async fetchUserWorkshops({
      commit
    }) {
      commit("SET_USER_WORKSHOPS", await bookitService.getUserWorkshops())
    },
    async fetchMenuBookings({
      commit
    }) {
      commit("SET_MENU_BOOKINGS", await bookitService.getMenuBookings())
    },
    async fetchBookingsDecor({
      commit
    }) {
      commit("SET_BOOKINGS_DECOR", await bookitService.getBookingsDecor())
    },
    async fetchBookingsExtra({
      commit
    }) {
      commit("SET_BOOKINGS_EXTRA", await bookitService.getBookingsExtra())
    },
    async fetchBookingsAddOns({
      commit
    }) {
      commit("SET_BOOKINGS_ADDONS", await bookitService.getBookingsAddOns())
    },
    async fetchAreaBookings({
      commit
    }) {
      commit("SET_AREA_BOOKINGS", await bookitService.getAreaBookings())
    },
    async fetchSchools({
      commit
    }) {
      commit("SET_SCHOOLS", await bookitService.getSchools())
    },
    async fetchUsers({
      commit
    }) {
      commit("SET_USERS", await bookitService.getUsers())
    },
    async fetchMenuTypes({
      commit
    }) {
      commit("SET_MENU_TYPES", await bookitService.getMenuTypes())
    },
    async fetchAreas({
      commit
    }) {
      commit("SET_AREAS", await bookitService.getAreas())
    },
    async fetchWorkshops({
      commit
    }) {
      commit("SET_WORKSHOPS", await bookitService.getWorkshops())
    },
    async fetchWorkshopById({
      commit
    }, payload) {
      commit("SET_WORKSHOP_BY_ID", await bookitService.getWorkshopsById(payload.id))
    },
    async fetchIngredients({
      commit
    }) {
      commit("SET_INGREDIENTS", await bookitService.getIngredients())
    },
    async postUser({
      commit
    }, payload) {
      commit("ADD_USER", await bookitService.registerUser(payload.name, payload.lastName, payload.number, payload.email, payload.birthDate, payload.gender, payload.password, payload.password2))
    },
    async postBooking({
      commit
    }, payload) {
      commit("ADD_BOOKING", await bookitService.addBooking(payload.id, payload.reason, payload.date, payload.school, payload.initHour, payload.endHour, payload.numberPeople, payload.outfit, payload.observations, payload.menu, payload.decor, payload.extras, payload.ing))
    },
    async login({
      commit
    }, payload) {
      commit("LOGIN", await bookitService.login(payload.email, payload.password))
    },
    async fetchCurrentMenu({
      commit
    }, payload) {
      commit("SET_CURRENT_MENU", await bookitService.getCurrentMenu(payload.id))
    },
    async fetchCurrentArea({
      commit
    }, payload) {
      commit("SET_CURRENT_AREA", await bookitService.getCurrentArea(payload.id))
    },
    async fetchCurrentMenuIngs({
      commit
    }, payload) {
      commit("SET_CURRENT_MENU_INGS", await bookitService.getCurrentMenuIngs(payload.id))
    },
    async editUsers({
      commit
    }, payload) {
      commit("EDIT_USERS", await bookitService.editUsers(payload.id, payload.newPassword, payload.number, payload.userType))
    },
    async deleteUser({
      commit
    }, payload) {
      commit("DELETE_USER", await bookitService.deleteUser(payload.id))
    },
    async deleteMenu({
      commit
    }, payload) {
      commit("DELETE_MENU", await bookitService.deleteMenu(payload.id))
    },
    async deleteMenuBooking({
      commit
    }, payload) {
      commit("DELETE_MENU_BOOKING", await bookitService.deleteMenuBooking(payload.id))
    },
    async deleteAreaBooking({
      commit
    }, payload) {
      commit("DELETE_AREA_BOOKING", await bookitService.deleteAreaBooking(payload.id))
    },
    async fetchExtras({
      commit
    }) {
      commit("SET_EXTRAS", await bookitService.getExtras())
    },
    async fetchDecorations({
      commit
    }) {
      commit("SET_DECORATIONS", await bookitService.getDecorations())
    },
    async fetchOutfits({
      commit
    }) {
      commit("SET_OUTFITS", await bookitService.getOutfits())
    },
    async editMenu({
      commit
    }, payload) {
      commit("EDIT_MENU", await bookitService.editMenu(payload.id, payload.name, payload.type, payload.ings))
    },
    async editArea({
      commit
    }, payload) {
      commit("EDIT_AREA", await bookitService.editArea(payload.id, payload.name, payload.description))
    },
    async postAreaBooking({
      commit
    }, payload) {
      commit("ADD_AREA_BOOKING", await bookitService.areaBooking(payload.id, payload.area, payload.reason, payload.date, payload.initHour, payload.endHour))
    },
    async deleteArea({
      commit
    }, payload) {
      commit("DELETE_AREA", await bookitService.deleteArea(payload.id))
    },
    async editMenuBookings({
      commit
    }, payload) {
      commit("EDIT_MENU_BOOKINGS", await bookitService.editMenuBookings(payload.id, payload.state, payload.decline, payload.opinion))
    },
    async editAreaBookings({
      commit
    }, payload) {
      commit("EDIT_AREA_BOOKINGS", await bookitService.editAreaBookings(payload.id, payload.state, payload.decline, payload.opinion))
    },
    async deleteWorkshop({
      commit
    }, payload) {
      commit("DELETE_WORKSHOP", await bookitService.deleteWorkshop(payload.id))
    },
    async postIngredient({
      commit
    }, payload) {
      commit("ADD_INGREDIENT", await bookitService.addIngredient(payload.name, payload.type))
    },
    async deleteIngredient({
      commit
    }, payload) {
      commit("DELETE_INGREDIENT", await bookitService.deleteIngredient(payload.id))
    },
    async postExtra({
      commit
    }, payload) {
      commit("ADD_EXTRA", await bookitService.addExtra(payload.name))
    },
    async deleteExtra({
      commit
    }, payload) {
      commit("DELETE_EXTRA", await bookitService.deleteExtra(payload.id))
    },
    async postDecor({
      commit
    }, payload) {
      commit("ADD_DECOR", await bookitService.addDecor(payload.name))
    },
    async deleteDecor({
      commit
    }, payload) {
      commit("DELETE_DECOR", await bookitService.deleteDecor(payload.id))
    },
    async postOutfit({
      commit
    }, payload) {
      commit("ADD_OUTFIT", await bookitService.addOutfit(payload.name, payload.img))
    },
    async deleteOutfit({
      commit
    }, payload) {
      commit("DELETE_OUTFIT", await bookitService.deleteOutfit(payload.id))
    },
    async postMenu({
      commit
    }, payload) {
      commit("ADD_MENU", await bookitService.addMenu(payload.name, payload.type, payload.newType, payload.img, payload.menuIng))
    },
    async postArea({
      commit
    }, payload) {
      commit("ADD_AREA", await bookitService.addArea(payload.name, payload.img, payload.description))
    },
    async postWorkshop({
      commit
    }, payload) {
      commit("ADD_WORKSHOP", await bookitService.addWorkshops(payload.name, payload.teacher, payload.date, payload.description, payload.hi, payload.hf, payload.vacancies, payload.img))
    },
    async editWorkshop({
      commit
    }, payload) {
      commit("EDIT_WORKSHOP", await bookitService.editWorkshop(payload.id, payload.name, payload.teacher, payload.date, payload.description, payload.time, payload.vacancies))
    },
    async workshopInscription({
      commit
    }, payload) {
      commit("ADD_INSCRIPTION", await bookitService.workshopInscription(payload.idUser, payload.idWorkshop))
    },

  },
  getters: {
    getMenus: state => state.menus,
    getUserBookings: state => state.userBookings,
    getUserAreaBookings: state => state.userAreaBookings,
    getUserWorkshops: state => state.userWorkshops,
    getAllMenuBookings: state => state.bookings,
    getAllBookingsDecor: state => state.bookingsDecor,
    getAllBookingsExtra: state => state.bookingsExtra,
    getAllBookingsAddOns: state => state.bookingsAddOns,
    getAllAreaBookings: state => state.areaBookings,
    getMenuTypes: state => state.menuTypes,
    getAreas: state => state.areas,
    getSchools: state => state.schools,
    getWorkshops: state => state.workshops,
    getAllUsers: state => state.users,
    getCurrentMenu: state => state.currentMenu,
    getCurrentArea: state => state.currentArea,
    getCurrentMenuIngs: state => state.currentMenuIngs,
    getIngredients: state => state.ingredients,
    getExtras: state => state.extras,
    getDecorations: state => state.decor,
    getOutfits: state => state.outfits,
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
      return state.loggedUser.type
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
    getSchool(state) {
      return state.loggedUser.school
    },
    getBirthDate(state) {
      return state.loggedUser.birthDate
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
    getCurrentKitIng(state) {
      return state.currentKit.menuIng
    },
    /*     getCurrentArea(state) {
          return state.currentArea.areaName
        }, */
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
    getNumberNotifications(state) {
      if (state.loggedUser.notifications) {
        if (state.loggedUser.notifications.length != 0) {
          return true
        } else {
          return false
        }
      }
    }
  }
})