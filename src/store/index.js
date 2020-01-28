import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentKit: {
      kitname: "",
      kitType: "",
      menuIng: ""
    },
    currentArea: {
      areaName: ""
    },
    users: [{
      id: 0,
      name: "Admin",
      lastName: "Master",
      email: "admin@admin.admin",
      password: "123",
      number: "123",
      userType: "admin"
    }],
    kits: [{
        id: 0,
        name: "Base",
        drinks: ["Café", "Leite", "Chá", "Sumo de Laranja", "Água"],
        food: ["Triângulos Mistos"],
        type: "Coffee Break",
        img: require('../assets/menuBase.jpg'),
        popularity: 30
      },
      {
        id: 1,
        name: "Estudante",
        drinks: ["Café", "Leite", "Chá", "Sumo de Laranja", "Água"],
        food: ["Triângulos Mistos", "Fruta da Época"],
        type: "Coffee Break",
        img: require('../assets/menuEstudante.jpg'),
        popularity: 60
      },
      {
        id: 2,
        name: "Executivo",
        drinks: ["Café", "Leite", "Chá", "Sumo de Laranja", "Água", "Água Gaseificada"],
        food: ["Triângulos Mistos", "Fruta da Época", "Natinhas com Canela", "Queijadas"],
        type: "Coffee Break",
        img: require('../assets/MenuExecutivo.jpg'),
        popularity: 120
      },
      {
        id: 3,
        name: "Supremo",
        drinks: ["Café", "Leite", "Chá", "Sumo de Laranja", "Água", "Água Gaseificada", "Sumo de Morango e Goiaba"],
        food: ["Triângulos Mistos", "Fruta da Época", "Natinhas com Canela", "Queijadas", "Pães variados", "Compotas variadas", "Queijo fresco", "Mini Croissants"],
        type: "Coffee Break",
        img: require('../assets/menuSupremo.jpg'),
        popularity: 100
      },
      {
        id: 4,
        name: "Base",
        drinks: ["Café", "Leite", "Chá", "Sumo de Laranja", "Água", "Água Gaseificada"],
        food: ["Pães variados", "Mini Croissants", "Compotas variadas", "Manteigas variadas"],
        type: "Pequeno Almoço",
        img: require('../assets/basePA.png'),
        popularity: 55
      },
      {
        id: 5,
        name: "Total",
        drinks: ["Café", "Leite", "Chá", "Sumo de Laranja", "Água", "Água Gaseificada", "Nectar de Manga"],
        food: ["Fiambre", "Pães variados", "Mini Croissants", "Compotas variadas", "Manteigas variadas", "Queijo fresco", "Salada de Fruta", "Corn Flakes", "Iogurtes"],
        type: "Pequeno Almoço",
        img: require('../assets/completoPA.jpg'),
        popularity: 130
      },
      {
        id: 6,
        name: "Base",
        drinks: ["Sumo de Laranja", "Água"],
        food: ["Fruta da Época", "Sanduiche Mista"],
        type: "Almoços",
        img: require('../assets/baseAlmoço.jpg'),
        popularity: 23
      },
      {
        id: 7,
        name: "Piquenique",
        drinks: ["Sumo de Laranja", "Água", "Água Gaseificada", "Nectar de Manga"],
        food: ["Fruta da Época", "Sanduiche Mista", "Misto de Salgados"],
        type: "Almoços",
        img: require('../assets/piqueniqueAL.jpg'),
        popularity: 5
      },
      {
        id: 8,
        name: "Base",
        drinks: ["Café", "Sumo de Laranja", "Água", "Água Gaseificada", "Vinho Branco", "Vinho Tinto", "Sangria Branca", "Sangria Tinta", "Sangria Rosé"],
        food: ["Bacalhau com migas de broa", "Arroz de Marisco", "Strogonoff de Frango", "Carne de Porco Alentejana", "Salada de Polvo", "Creme de cenoura", "Creme de ervilhas"],
        type: "Buffet",
        img: require('../assets/baseBuffet.jpg'),
        popularity: 73
      }
    ],
    workshops: [{
        id: 0,
        name: "Criação de inquéritos",
        date: "21/06/2020",
        time: "12h - 14h",
        teacher: "LimeSurvey",
        description: "Neste workshop será facultada uma formação na construção e implementação de questionários eletrónicos. Esta formação incluirá a necessária abordagem dos requisitos metodológicos de base na aplicação de questionários eletrónicos e a explicitação do funcionamento prático da aplicação LimeSurvey.",
        img: require('../assets/workshop1.jpg'),
        inscriptions: [],
        vacancies: 50
      },
      {
        id: 1,
        name: "Gastronómico",
        date: "20/04/2021",
        time: "13h - 15h",
        teacher: "Rui Rodrigues",
        description: "O evento integra uma mostra de gastronomia típica de Vila do Conde e Póvoa de Varzim que todos os visitantes poderão degustar, e ainda duas atividades de Showcooking em que estarão presentes, para além dos docentes de cozinha, dois chefes convidados: Rui Rodrigues, Chef executivo do grupo M e o Chef Eduardo Rodrigues do Republikarestaurante.",
        img: require('../assets/workshop3.jpg'),
        inscriptions: [],
        vacancies: 50
      },
      {
        id: 2,
        name: "Comida Italiana",
        date: "15/10/2020",
        time: "10h - 12h",
        teacher: "Chef Camilo Jaña",
        description: "Aprenda a arte de fazer massa fresca com os mais diversas bases e sabores com o nosso chef chileno Camilo Jaña! Responsável pela cozinha dos clássicos da Foz – Cafeína, Portarossa, Casa Vasco e Terra, Camilo Janã vai encher a nossa cozinha de ritmo, energia e um sotaque espanhol, num workshop divertido e eletrizante que lhe vai revelar os segredos das massas frescas italianas. Inscreva-se e venha passar uma tarde incrível, com um dos chefs mais reconhecidos da cidade!",
        img: require('../assets/workshop2.jpg'),
        inscriptions: [],
        vacancies: 50
      }
    ],
    areas: [{
        id: 0,
        name: "Restaurante de Aplicação",
        description: "Restaurante com capacidade para 50 pessoas, onde são aplicados os métodos de serviço leccionados nas UC de Práticas Hoteleiras.",
        img: require('../assets/restaurante.jpg'),
      },
      {
        id: 1,
        name: "Bar de Aplicação",
        description: "No Bar Aplicação, os estudantes poêm em prática os conhecimentos de serviço de bar, obtidos nas aulas da Licenciatura. É um espaço agradável e acolhedor. ",
        img: require('../assets/bar.png'),
      },
      {
        id: 2,
        name: "Cozinha de Aplicação",
        description: "Possuimos uma cozinha totalmente equipada e preparada para os mais diversos serviços.",
        img: require('../assets/cozinhaFinal.jpg'),
      }
    ],
    x: 0,
    logged: false,
    loggedUser: [],
    notLogged: "Entrar",
    userExists: false,
    bookings: [],
    areaBookings: [],
    menuTypes: [],
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
        name: "Chá",
        type: "Drink",
      }, {
        id: 5,
        name: "Sumo de Laranja",
        type: "Drink",
      }, {
        id: 6,
        name: "Triângulos Mistos",
        type: "Food",
      },
      {
        id: 7,
        name: "Água",
        type: "Drink",
      }, {
        id: 8,
        name: "Pastelaria seca variada",
        type: "Food",
      },
      {
        id: 9,
        name: "Fruta da Época",
        type: "Food",
      },
      {
        id: 10,
        name: "Água Gaseificada",
        type: "Drink",
      },
      {
        id: 11,
        name: "Natinhas com Canela",
        type: "Food"
      },
      {
        id: 12,
        name: "Queijadas",
        type: "Food"
      },
      {
        id: 13,
        name: "Sumo de Morango e Goiaba",
        type: "Drink"
      },
      {
        id: 14,
        name: "Pães variados",
        type: "Food"
      },
      {
        id: 15,
        name: "Compotas variadas",
        type: "Food"
      },
      {
        id: 16,
        name: "Queijo fresco",
        type: "Food"
      },
      {
        id: 17,
        name: "Mini Croissants",
        type: "Food"
      },
      {
        id: 18,
        name: "Iogurtes",
        type: "Food"
      },
      {
        id: 19,
        name: "Manteigas variadas",
        type: "Food"
      },
      {
        id: 20,
        name: "Fiambre",
        type: "Food"
      },
      {
        id: 21,
        name: "Corn Flakes",
        type: "Food"
      },
      {
        id: 22,
        name: "Folhados doces",
        type: "Food"
      },
      {
        id: 23,
        name: "Salada de fruta",
        type: "Food"
      },
      {
        id: 24,
        name: "Nectar de Manga",
        type: "Drink"
      },
      {
        id: 25,
        name: "Tostas",
        type: "Food"
      },
      {
        id: 26,
        name: "Misto de Salgados",
        type: "Food"
      },
      {
        id: 27,
        name: "Ovos mexidos",
        type: "Food"
      },
      {
        id: 28,
        name: "Salsichas",
        type: "Food"
      },
      {
        id: 29,
        name: "Bacalhau com natas",
        type: "Food"
      },
      {
        id: 30,
        name: "Bolo de bolacha",
        type: "Food"
      },
      {
        id: 31,
        name: "Sanduiche mista",
        type: "Food"
      },
      {
        id: 32,
        name: "Cerveja nacional",
        type: "Drink"
      },
      {
        id: 33,
        name: "Vinho Branco",
        type: "Drink"
      },
      {
        id: 34,
        name: "Vinho Tinto",
        type: "Drink"
      },
      {
        id: 35,
        name: "Sangria Branca",
        type: "Drink"
      },
      {
        id: 36,
        name: "Sangria Tinta",
        type: "Drink"
      },
      {
        id: 37,
        name: "Sangria Rosé",
        type: "Drink"
      },
      {
        id: 38,
        name: "Creme de ervilhas",
        type: "Food"
      },
      {
        id: 39,
        name: "Creme de cenoura",
        type: "Food"
      },
      {
        id: 40,
        name: "Salada de Polvo",
        type: "Food"
      },
      {
        id: 41,
        name: "Bacalhau com migas de broa",
        type: "Food"
      },
      {
        id: 42,
        name: "Arroz de Marisco",
        type: "Food"
      },
      {
        id: 43,
        name: "Strogonoff de Frango",
        type: "Food"
      },
      {
        id: 44,
        name: "Carne de Porco Alentejana",
        type: "Food"
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
        name: "Atuação Gatunos"
      },
      {
        id: 3,
        name: "Atuação Afrodituna"
      }
    ],
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
        source: require('../assets/farda01.png'),
        name: "Completa"
      },
      {
        id: 1,
        source: require('../assets/farda03.png'),
        name: "Sem colete"
      },
      {
        id: 2,
        source: require('../assets/farda04.png'),
        name: "Sem casaco"
      },
      {
        id: 3,
        source: require('../assets/farda02.png'),
        name: "Sem colete e casaco"
      },
      {
        id: 4,
        source: require('../assets/farda05.png'),
        name: "Cozinha"
      },
      {
        id: 5,
        source: require('../assets/farda06.png'),
        name: "Cozinha sem avental"
      }
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
      },
      {
        id: 3,
        name: "ISEP"
      }, {
        id: 4,
        name: "ISCAP"
      }, {
        id: 5,
        name: "ESE"
      },
      {
        id: 6,
        name: "ESMAI"
      },
      {
        id: 7,
        name: "ESTG"
      }
    ]
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
          Swal.fire({
            icon: 'error',
            text: 'As palavras-passe não coincidem!'
          })
        } else {
          let imgProfile
          if (payload.gender == "Masculino") {
            imgProfile = require('../assets/male.svg')
          } else if (payload.gender == "Feminino") {
            imgProfile = require('../assets/female.svg')
          }
          state.users.push({
            id: payload.id,
            name: payload.name,
            lastName: payload.lastName,
            birthDate: payload.birthDate,
            gender: payload.gender,
            email: payload.email,
            password: payload.password,
            number: payload.number,
            school: payload.school,
            img: imgProfile,
            userType: "cliente",
            notifications: [],
            archivations: [],
          });
          localStorage.setItem("users", JSON.stringify(state.users));
          Swal.fire({
            icon: 'success',
            text: 'Registado com sucesso!'
          })
          router.push({
            name: 'login'
          })
        }
      } else {
        Swal.fire({
          icon: 'error',
          text: 'Este email já está a ser usado!'
        })
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
            birthDate: user.birthDate,
            gender: user.gender,
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
                text: "Tem " + state.loggedUser.notifications.length + " Notificações!",
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
          }
          break
        } else {
          state.userExists = false;
        }
      }
      if (state.userExists === false) {
        Swal.fire({
          icon: 'error',
          text: 'Credenciais erradas!'
        })
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
          img: payload.img,
          popularity: 0
        });
        localStorage.setItem("kits", JSON.stringify(state.kits));
      } else {
        Swal.fire({
          icon: 'warning',
          text: 'Já existe um menu com esse nome!'
        })
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
        Swal.fire({
          icon: 'warning',
          text: 'Já existe um workshop com esse nome!'
        })
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
        Swal.fire({
          icon: 'warning',
          text: 'Já existe um espaço com esse nome!'
        })
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
        Swal.fire({
          icon: 'warning',
          text: 'Já existe este ingrediente!'
        })
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
    getNumberNotifications(state) {
      if (state.loggedUser.notifications) {
        if (state.loggedUser.notifications.length != 0) {
          return true
        } else {
          return false
        }
      }
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