import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/Register.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/Profile.vue")
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
    component: () => import("../views/kitDetail.vue")
  },
  {
    path: "/workshopDetail",
    name: "workshopDetail",
    component: () => import("../views/WorkshopDetail.vue")
  }
  ,
  {
    path: "/areaDetail",
    name: "areaDetail",
    component: () => import("../views/AreaDetail.vue")
  },
  {
    path: "/adminHome",
    name: "adminHome",
    component: () => import("../views/AdminHome.vue")
  },
  {
    path: "/inscriptions",
    name: "inscriptions",
    component: () => import("../views/Inscriptions.vue")
  },
  {
    path: "/booking",
    name: "booking",
    component: () => import("../views/Booking.vue")
  },
  {
    path: "/kitManeger",
    name: "kitManeger",
    component: () => import("../views/KitManeger.vue")
  },
  {
    path: "/WorkshopManeger",
    name: "WorkshopManeger",
    component: () => import("../views/WorkshopManeger.vue")
  },
  {
    path: "/areasbooking",
    name: "areasbooking",
    component: () => import("../views/AreasBooking.vue")
  },
  {
    path: "/bookingTables",
    name: "bookingTables",
    component: () => import("../views/BookingTable.vue")
  },
  {
    path: "/userTables",
    name: "userTables",
    component: () => import("../views/UserTable.vue")
  }
]

const router = new VueRouter({
  routes
})

export default router
