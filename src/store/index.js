/* eslint-disable no-undef */
import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router';

import bookitService from "@/API/bookitService.js"


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    menus: [],
    areas: [],
    workshops: [],
    currentWorkshop: [],
    x: 0,
    numNotifications: 0,
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
    userWorkshops: [],
    userNotifications: [],
    userArchivations: [],
    userImage: ""
  },
  mutations: {
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
      state.token = data.token
      localStorage.setItem("token", state.token);

      let jwtToken = state.token.split(".")[1]
      state.loggedUser = JSON.parse(window.atob(jwtToken))

      state.numNotifications = state.loggedUser.notifications
      if (state.loggedUser.notifications != 0) {
        const toast = swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true
        });

        toast.fire({
          icon: 'success',
          title: 'Bem-vindo ' + state.loggedUser.name,
          text: "Tem " + state.loggedUser.notifications + " Notificações!",
        })
      } else {
        const toast = swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: true
        });

        toast.fire({
          icon: 'success',
          title: 'Bem-vindo ' + state.loggedUser.name,
        })
      }
      if (state.loggedUser.type === 0) {
        router.push("/adminHome")
      } else if (state.loggedUser.type === 1) {
        router.push("/")
      }
    },
    LOGOUT(state) {
      bookitService.logout(state.token)
      state.token = []
      state.loggedUser = []
      localStorage.removeItem("token", JSON.stringify(state.token));
      router.push({
        name: 'home'
      })
    },
    ADD_BOOKING() {
      Swal.fire({
        icon: 'success',
        text: "Pedido de reserva enviado"
      })
      router.push({
        name: 'menuGallery'
      })
    },
    ADD_AREA_BOOKING() {
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
    SET_USER_NOTIFICATIONS(state, data) {
      state.userNotifications = []
      state.userNotifications = data
    },
    SET_USER_ARCHIVATIONS(state, data) {
      state.userArchivations = []
      state.userArchivations = data
    },
    SET_USER_IMAGE(state, data) {
      state.userImage = data
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
    EDIT_USERS(state, data) {
      if(!(data.token === null || data.token === "" || data.token === undefined)){
        state.token = data.token
        localStorage.setItem("token", state.token);
        let jwtToken = state.token.split(".")[1]
        state.loggedUser = JSON.parse(window.atob(jwtToken))
      }
      Swal.fire({
        icon: 'success',
        text: data.message
      })
    },
    CHANGE_AVATAR(state, data) {
      Swal.fire({
        icon: 'success',
        text: data.message
      })
      router.push({
        name: 'profile'
      })
    },
    DELETE_USER(state, data) {
      Swal.fire({
        icon: 'success',
        text: data.message
      })
    },
    DELETE_MENU_BOOKING(state, data) {
      Swal.fire({
        icon: 'success',
        text: data.message
      })
    },
    DELETE_AREA_BOOKING(state, data) {
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
    EDIT_MENU_BOOKINGS(state, data) {
      Swal.fire({
        icon: 'success',
        text: data.message
      })
    },
    EDIT_AREA_BOOKINGS(state, data) {
      Swal.fire({
        icon: "success",
        text: data.message
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
      Swal.fire({
        icon: 'success',
        text: "Workshop Atualizado"
      })
      router.push({
        name: 'workshops'
      })
    },
    ADD_INSCRIPTION() {
      router.push({
        name: 'workshops'
      })
    },
    ARCHIVE_NOTIFICATION(state, data) {
      state.token = data.token
      localStorage.setItem("token", state.token);

      let jwtToken = state.token.split(".")[1]
      state.loggedUser = JSON.parse(window.atob(jwtToken))

      state.numNotifications = state.loggedUser.notifications
      Swal.fire({
        icon: "success",
        text: "Notificação arquivada"
      })
    },
    DELETE_NOTIFICATION(state, data) {
      state.token = data.token
      localStorage.setItem("token", state.token);

      let jwtToken = state.token.split(".")[1]
      state.loggedUser = JSON.parse(window.atob(jwtToken))

      state.numNotifications = state.loggedUser.notifications
      Swal.fire({
        icon: "success",
        text: "Notificação eliminada"
      })
    },
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
    async fetchUserNotifications({
      commit
    }) {
      commit("SET_USER_NOTIFICATIONS", await bookitService.getUserNotifications())
    },
    async fetchUserArchivations({
      commit
    }) {
      commit("SET_USER_ARCHIVATIONS", await bookitService.getUserArchivations())
    },
    async fetchUserImage({
      commit
    }, payload) {
      commit("SET_USER_IMAGE", await bookitService.getUserImage(payload.id))
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
      commit("EDIT_USERS", await bookitService.editUsers(payload.id, payload.oldPassword, payload.newPassword, payload.newPassword2, payload.number, payload.userType))
    },
    async deleteUser({
      commit
    }, payload) {
      commit("DELETE_USER", await bookitService.deleteUser(payload.id))
    },
    async changeAvatar({
      commit
    }, payload) {
      commit("CHANGE_AVATAR", await bookitService.changeAvatar(payload.newImg))
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
    async archiveNotification({
      commit
    }, payload) {
      commit("ARCHIVE_NOTIFICATION", await bookitService.archiveNotification(payload.userID, payload.id))
    },
    async deleteNotification({
      commit
    }, payload) {
      commit("DELETE_NOTIFICATION", await bookitService.deleteNotification(payload.userID, payload.id))
    },
  },
  getters: {
    getMenus: state => state.menus,
    getUserBookings: state => state.userBookings,
    getUserAreaBookings: state => state.userAreaBookings,
    getUserWorkshops: state => state.userWorkshops,
    getUserNotifications: state => state.userNotifications,
    getUserArchivations: state => state.userArchivations,
    getUserImage: state => state.userImage,
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
    getNumberNotifications: state => state.numNotifications,
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
    getCurrentAreaImg(state) {
      return state.currentArea.areaImg
    },
    getCurrentDate() {
      var today = new Date();
      var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
      return date
    }
  }
})