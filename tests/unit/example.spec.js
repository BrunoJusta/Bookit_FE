import {
  shallowMount, mount
} from '@vue/test-utils'
// import error from '@/views/ErrorPage.vue'
// import login from '@/components/LoginForm.vue'
import nav from '@/components/NavBar.vue'
import menuCards from '@/components/MenuCards.vue'
import profile from '@/views/Profile.vue'



import store from '../../src/store/index.js'

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
let mocked = new Vuex.Store({
  state: {
    loggedUser: {
      id:2,
      name: 'João',
      lastName: "Pedroso",
      email:"9180234@esmad.ipp.pt",
      type: 0,
      noti: 30,
      school: "ESMAD",
      number: "912456123",
      birthDate:"12-03-2000"
    },
    userBookings:[{data:{name:"d",description:"s",date:"D",duration:"d",school:"e",state:"Concluído", opinion:"", decline_txt:"d"}}]
  },
  getters: {
    getName() {
      if (store.state.loggedUser != []) {
        return store.state.loggedUser.name
      } else {
        return 'Entrar'
      }
    },
    getNumberNotifications() {
      if (store.state.loggedUser != []) {
        return store.state.loggedUser.noti
      } else {
        return 0
      }
    },
    getUserType() {
      if (store.state.loggedUser != []) {
        return store.state.loggedUser.type
      } else {
        return 1
      }
    },
  }
})

describe("NAVBAR", () => {
  test("if logged in is false, send to login", () => {
    const wrapper = shallowMount(nav, {
      store
    });
    expect(wrapper.find("#icon").exists()).toBe(false);
  });
  test("if logged in, send to profile", () => {
    const wrapper = shallowMount(nav, {
      store: mocked
    });
    expect(wrapper.find("#icon").isVisible()).toBe(true);
  });
  test("if logged in is false, logout button isn't visible", () => {
    const wrapper = shallowMount(nav, {
      store
    });
    expect(wrapper.find("#logout-btn").exists()).toBe(false);
  });
  test("if logged in, logout button is visible", () => {
    const wrapper = shallowMount(nav, {
      store: mocked
    });
    expect(wrapper.find("#logout-btn").isVisible()).toBe(true);
  });
  test("if notifications equal to 0, notification bubble is off ", () => {
    const wrapper = shallowMount(nav, {
      store
    });
    expect(wrapper.find("#countTxt").exists()).toBe(false);
  });
  test("if notifications more than 0, notification bubble is on ", () => {
    const wrapper = shallowMount(nav, {
      store: mocked
    });
    expect(wrapper.find("#countTxt").isVisible()).toBe(true);
  });
  test("if logged is false, is not visible", () => {
    const wrapper = shallowMount(nav, {
      store
    });
    expect(wrapper.find("#routeAd").exists()).toBe(false);
  });
});
describe("MENU MAKER", () => {
  test("if the popularities are equal, return 0", () => {
    const wrapper = (menuCards.methods.comparePopularity(120, 120));
    expect(wrapper).toBe(0);
  });
  test("if first menu's popularity is greater, return -1", () => {
    const wrapper = (menuCards.methods.comparePopularity({name:"a", popularity:120}, {name:"a", popularity:10}));
    expect(wrapper).toBe(-1);
  });
  test("if second menu's popularity is greater, return 1", () => {
    const wrapper = (menuCards.methods.comparePopularity({name:"a", popularity:12}, {name:"a", popularity:100}));
    expect(wrapper).toBe(1);
  });
});

describe("PROFILE", () => {
  test("check if number belongs to user", () => {
    const wrapper = shallowMount(profile, {store: mocked});
    expect(wrapper.find("#contactTxt").text()).toEqual("912456123");
  });
  test("check if email belongs to user", () => {
    const wrapper = shallowMount(profile, {store: mocked});
    expect(wrapper.find("#emailTxt").text()).toEqual("9180234@esmad.ipp.pt");
  });
  test("check if user logged name is correct", () => {
    const wrapper = shallowMount(profile, {store: mocked});
    expect(wrapper.find("#nameTxt").text()).toEqual("João Pedroso");
  });
  test("if booking state is 'Concluído', opinion button must be visible", async () => {
    const wrapper = mount(profile, {store: mocked});
    await wrapper.setData({bookings:[{name:"d",description:"s",date:"D",duration:"d",school:"e",state:"Concluído", opinion:"", decline_txt:""}] })
    expect(wrapper.find("#opinion").exists()).toBe(true);
  });
  test("if booking already has an opinion, opinion button must be invisible", async () => {
    const wrapper = shallowMount(profile, {store});
    await wrapper.setData({bookings:[{name:"d",description:"s",date:"D",duration:"d",school:"e",state:"Concluído", opinion:"sd", decline_txt:"d"}] })
    expect(wrapper.find("#opinion").exists()).toBe(false);
  });
  test("if booking state is 'Recusado', show motive button must be visible", async () => {
    const wrapper = shallowMount(profile, {store: mocked});
    await wrapper.setData({bookings:[{name:"d",description:"s",date:"D",duration:"d",school:"e",state:"Recusado", opinion:"sd", decline_txt:""}] })
    expect(wrapper.find("#motive").exists()).toBe(false);
  });
  test("if booking doesn't has a refuse motive, show motive button must be invisible", async () => {
    const wrapper = mount(profile, {store: mocked});
    await wrapper.setData({bookings:[{name:"d",description:"s",date:"D",duration:"d",school:"e",state:"Recusado", opinion:"sd", decline_txt:""}] })
    expect(wrapper.find("#opinionTXT").exists()).toBe(false);
  });
});