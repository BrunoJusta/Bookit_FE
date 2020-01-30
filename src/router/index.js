import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: Home,
    beforeEnter(to, from, next) {
      let user = JSON.parse(localStorage.getItem("loggedUser"))
      if (user && user.userType == "admin") {
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
      let user = JSON.parse(localStorage.getItem("loggedUser"))
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
      let user = JSON.parse(localStorage.getItem("loggedUser"))
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
      let user = JSON.parse(localStorage.getItem("loggedUser"))
      if (!user || user.length == 0) {
        next("/pageNotFound")
      } else {
        next()
      }
    }
  },
  {
    path: "/menuKits",
    name: "menuKits",
    component: () => import("../views/MenuKits.vue")
  },
  {
    path: "/workshops",
    name: "workshops",
    component: () => import("../views/Workshops.vue")
  },
  {
    path: "/choose",
    name: "choose",
    component: () => import("../views/Choose.vue")
  },
  {
    path: "/areas",
    name: "areas",
    component: () => import("../views/Areas.vue")
  },
  {
    path: "/kitDetail",
    name: "kitDetail",
    component: () => import("../views/kitDetail.vue"),
    beforeEnter(to, from, next) {
      let user = JSON.parse(localStorage.getItem("loggedUser"))
      if (!user || user.length == 0) {
        next("/pageNotFound");
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
      let user = JSON.parse(localStorage.getItem("loggedUser"))
      if (!user || user.length == 0) {
        next("/pageNotFound");
      } else {
        next()
      }
    }
  },
  {
    path: "/areaDetail",
    name: "areaDetail",
    component: () => import("../views/AreaDetail.vue"),
    beforeEnter(to, from, next) {
      let user = JSON.parse(localStorage.getItem("loggedUser"))
      if (!user || user.length == 0) {
        next("/pageNotFound");
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
      let user = JSON.parse(localStorage.getItem("loggedUser"))
      if (!user || user.length == 0) {
        next("/pageNotFound");
      } else if (user.userType == "cliente") {
        next("/pageNotFound");
      } else {
        next()
      }
    }
  },
  {
    path: "/inscriptions",
    name: "inscriptions",
    component: () => import("../views/Inscriptions.vue"),
    beforeEnter(to, from, next) {
      let user = JSON.parse(localStorage.getItem("loggedUser"))
      if (!user || user.length == 0) {
        next("/pageNotFound");
      } else if (user.userType != "admin") {
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
      let user = JSON.parse(localStorage.getItem("loggedUser"))
      if (!user || user.length == 0) {
        next("/login")
      }
       else {
        next()
      }
    }

  },
  {
    path: "/kitManeger",
    name: "kitManeger",
    component: () => import("../views/KitManeger.vue"),
    beforeEnter(to, from, next) {
      let user = JSON.parse(localStorage.getItem("loggedUser"))
      if (!user || user.length == 0) {
        next("/pageNotFound");
      } else if (user.userType != "admin") {
        next("/pageNotFound");
      } else {
        next()
      }
    }
  },
  {
    path: "/WorkshopManeger",
    name: "WorkshopManeger",
    component: () => import("../views/WorkshopManeger.vue"),
    beforeEnter(to, from, next) {
      let user = JSON.parse(localStorage.getItem("loggedUser"))
      if (!user || user.length == 0) {
        next("/pageNotFound");
      } else if (user.userType != "admin") {
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
      let user = JSON.parse(localStorage.getItem("loggedUser"))
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
      let user = JSON.parse(localStorage.getItem("loggedUser"))
      if (!user || user.length == 0) {
        next("/pageNotFound");
      } else if (user.userType != "admin") {
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
      let user = JSON.parse(localStorage.getItem("loggedUser"))
      if (!user || user.length == 0) {
        next("/pageNotFound");
      } else if (user.userType != "admin") {
        next("/pageNotFound");
      } else {
        next()
      }
    }
  },
  {
    path: "/addArea",
    name: "addArea",
    component: () => import("../views/AddArea.vue"),
    beforeEnter(to, from, next) {
      let user = JSON.parse(localStorage.getItem("loggedUser"))
      if (!user || user.length == 0) {
        next("/pageNotFound");
      } else if (user.userType != "admin") {
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
      let user = JSON.parse(localStorage.getItem("loggedUser"))
      if (!user || user.length == 0) {
        next("/pageNotFound");
      } else if (user.userType != "admin") {
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
  mode: "history",
  routes,
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    }
  },

})


export default router