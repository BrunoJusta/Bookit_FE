import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/' ,
    name: 'home',
    component: Home,
    beforeEnter(to, from, next) {
      let user
      if(localStorage.getItem("token")){
        let token = localStorage.getItem("token")
        let jwtToken = token.split(".")[1]
        user = JSON.parse(window.atob(jwtToken))
      }
      if (user && user.type == 0) {
        next("/pageNotFound");
      } else {
        next()
      }
    }
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/Register.vue"),
    beforeEnter(to, from, next) {
      let user
      if(localStorage.getItem("token")){
        let token = localStorage.getItem("token")
        let jwtToken = token.split(".")[1]
        user = JSON.parse(window.atob(jwtToken))
      }
      if (user && user.length != 0) {
        next("/pageNotFound");
      } else {
        next()
      }
    }
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
    beforeEnter(to, from, next) {
      let user
      if(localStorage.getItem("token")){
        let token = localStorage.getItem("token")
        let jwtToken = token.split(".")[1]
        user = JSON.parse(window.atob(jwtToken))
      }
      if (user && user.length != 0) {
        next("/pageNotFound");
      } else {
        next()
      }
    }
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/Profile.vue"),
    beforeEnter(to, from, next) {
      let user
      if(localStorage.getItem("token")){
        let token = localStorage.getItem("token")
        let jwtToken = token.split(".")[1]
        user = JSON.parse(window.atob(jwtToken))
      }
      if (!user || user.length == 0) {
        next("/pageNotFound")
      } else {
        next()
      }
    }
  },
  {
    path: "/menuGallery",
    name: "menuGallery",
    component: () => import("../views/MenuGallery.vue")
  },
  {
    path: "/workshops",
    name: "workshops",
    component: () => import("../views/WorkshopGallery.vue")
  },
  {
    path: "/choose",
    name: "choose",
    component: () => import("../views/Choose.vue")
  },
  {
    path: "/areasGallery",
    name: "areasGallery",
    component: () => import("../views/AreasGallery.vue")
  },
  {
    path: "/menuDetail",
    name: "menuDetail",
    component: () => import("../views/MenuDetail.vue"),
    beforeEnter(to, from, next) {
      let user
      if(localStorage.getItem("token")){
        let token = localStorage.getItem("token")
        let jwtToken = token.split(".")[1]
        user = JSON.parse(window.atob(jwtToken))
      }
      if (!user || user.length == 0) {
        next("/login");
      } else {
        next()
      }
    }
  },
  {
    path: "/workshopDetail",
    name: "workshopDetail",
    component: () => import("../views/WorkshopDetail.vue"),
    beforeEnter(to, from, next) {
      let user
      if(localStorage.getItem("token")){
        let token = localStorage.getItem("token")
        let jwtToken = token.split(".")[1]
        user = JSON.parse(window.atob(jwtToken))
      }
      if (!user || user.length == 0) {
        next("/login");
      } else {
        next()
      }
    }
  },
  {
    path: "/areaDetail",
    name: "areaDetail",
    component: () => import("../views/AreasDetail.vue"),
    beforeEnter(to, from, next) {
      let user
      if(localStorage.getItem("token")){
        let token = localStorage.getItem("token")
        let jwtToken = token.split(".")[1]
        user = JSON.parse(window.atob(jwtToken))
      }
      if (!user || user.length == 0) {
        next("/login");
      } else {
        next()
      }
    }
  },
  {
    path: "/adminHome",
    name: "adminHome",
    component: () => import("../views/AdminHome.vue"),
    beforeEnter(to, from, next) {
      let user
      if(localStorage.getItem("token")){
        let token = localStorage.getItem("token")
        let jwtToken = token.split(".")[1]
        user = JSON.parse(window.atob(jwtToken))
      }
      if (!user || user.length == 0) {
        next("/pageNotFound");
      } else if (user.type == 1) {
        next("/pageNotFound");
      } else {
        next()
      }
    }
  },
  {
    path: "/workshopTable",
    name: "workshopTable",
    component: () => import("../views/WorkshopTable.vue"),
    beforeEnter(to, from, next) {
      let user
      if(localStorage.getItem("token")){
        let token = localStorage.getItem("token")
        let jwtToken = token.split(".")[1]
        user = JSON.parse(window.atob(jwtToken))
      }
      if (!user || user.length == 0) {
        next("/pageNotFound");
      } else if (user.type == 1) {
        next("/pageNotFound");
      } else {
        next()
      }
    }
  },
  {
    path: "/booking",
    name: "booking",
    component: () => import("../views/Booking.vue"),
    beforeEnter(to, from, next) {
      let user
      if(localStorage.getItem("token")){
        let token = localStorage.getItem("token")
        let jwtToken = token.split(".")[1]
        user = JSON.parse(window.atob(jwtToken))
      }
      if (!user || user.length == 0) {
        next("/login")
      } else {
        next()
      }
    }
  },
  {
    path: "/menuManager",
    name: "menuManager",
    component: () => import("../views/MenuManager.vue"),
    beforeEnter(to, from, next) {
      let user
      if(localStorage.getItem("token")){
        let token = localStorage.getItem("token")
        let jwtToken = token.split(".")[1]
        user = JSON.parse(window.atob(jwtToken))
      }
      if (!user || user.length == 0) {
        next("/pageNotFound");
      } else if (user.userType == 1) {
        next("/pageNotFound");
      } else {
        next()
      }
    }
  },
  {
    path: "/WorkshopManager",
    name: "WorkshopManager",
    component: () => import("../views/WorkshopManager.vue"),
    beforeEnter(to, from, next) {
      let user
      if(localStorage.getItem("token")){
        let token = localStorage.getItem("token")
        let jwtToken = token.split(".")[1]
        user = JSON.parse(window.atob(jwtToken))
      }
      if (!user || user.length == 0) {
        next("/pageNotFound");
      } else if (user.userType == 1) {
        next("/pageNotFound");
      } else {
        next()
      }
    }
  },
  {
    path: "/areasbooking",
    name: "areasbooking",
    component: () => import("../views/AreasBooking.vue"),
    beforeEnter(to, from, next) {
      let user
      if(localStorage.getItem("token")){
        let token = localStorage.getItem("token")
        let jwtToken = token.split(".")[1]
        user = JSON.parse(window.atob(jwtToken))
      }
      if (!user || user.length == 0) {
        next("/pageNotFound");
      } else {
        next()
      }
    }
  },
  {
    path: "/bookingTables",
    name: "bookingTables",
    component: () => import("../views/BookingTable.vue"),
    beforeEnter(to, from, next) {
      let user
      if(localStorage.getItem("token")){
        let token = localStorage.getItem("token")
        let jwtToken = token.split(".")[1]
        user = JSON.parse(window.atob(jwtToken))
      }
      if (!user || user.length == 0) {
        next("/pageNotFound");
      } else if (user.type == 1) {
        next("/pageNotFound");
      } else {
        next()
      }
    }
  },
  {
    path: "/userTables",
    name: "userTables",
    component: () => import("../views/UserTable.vue"),
    beforeEnter(to, from, next) {
      let user
      if(localStorage.getItem("token")){
        let token = localStorage.getItem("token")
        let jwtToken = token.split(".")[1]
        user = JSON.parse(window.atob(jwtToken))
      }
      if (!user || user.length == 0) {
        next("/pageNotFound");
      } else if (user.type == 1) {
        next("/pageNotFound");
      } else {
        next()
      }
    }
  },
  {
    path: "/areasManager",
    name: "areasManager",
    component: () => import("../views/AreasManager.vue"),
    beforeEnter(to, from, next) {
      let user
      if(localStorage.getItem("token")){
        let token = localStorage.getItem("token")
        let jwtToken = token.split(".")[1]
        user = JSON.parse(window.atob(jwtToken))
      }
      if (!user || user.length == 0) {
        next("/pageNotFound");
      } else if (user.userType == 1) {
        next("/pageNotFound");
      } else {
        next()
      }
    }
  },
  {
    path: "/menuAddOns",
    name: "menuAddOns",
    component: () => import("../views/MenuAddOns.vue"),
    beforeEnter(to, from, next) {
      let user
      if(localStorage.getItem("token")){
        let token = localStorage.getItem("token")
        let jwtToken = token.split(".")[1]
        user = JSON.parse(window.atob(jwtToken))
      }
      if (!user || user.length == 0) {
        next("/pageNotFound");
      } else if (user.type == 1) {
        next("/pageNotFound");
      } else {
        next()
      }
    }
  },
  {
    path: "/pageNotFound",
    name: "pageNotFound",
    component: () => import("../views/ErrorPage.vue")
  },
  {
    path: "*",
    component: () => import("../views/ErrorPage.vue")
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    }
  },
})

export default router