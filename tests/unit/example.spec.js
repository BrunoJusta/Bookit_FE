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

  test("if logged in is false, send to login", () => {
    const wrapper = shallowMount(nav, {
      store
    });
    expect(wrapper.find("#logout-btn").exists()).toBe(false);
  });

  test("if logged in, send to profile", () => {
    const wrapper = shallowMount(nav, {
      store: mocked
    });
    expect(wrapper.find("#logout-btn").isVisible()).toBe(true);
  });
  test("if logged in, send to profile", () => {
    const wrapper = shallowMount(nav, {
      store: mocked
    });
    expect(wrapper.find("#logout-btn").isVisible()).toBe(true);
  });
  test("if logged in is false, send to login", () => {
    const wrapper = shallowMount(nav, {
      store
    });
    expect(wrapper.find("#countTxt").exists()).toBe(false);
  });
  test("if logged in, send to profile", () => {
    const wrapper = shallowMount(nav, {
      store: mocked
    });
    expect(wrapper.find("#countTxt").isVisible()).toBe(true);
  });
  test("if logged in, send to profile", () => {
    const wrapper = shallowMount(nav, {
      store
    });
    expect(wrapper.find("#routeAd").exists()).toBe(false);
  });
});

describe("MENU MAKER", () => {
  test("if logged in is false, send to login", () => {
    const wrapper = (menuCards.methods.comparePopularity(120, 3));
    expect(wrapper).toBe(0);
  });

  test("if logged in is false, send to login", () => {
    const wrapper = (menuCards.methods.comparePopularity({name:"a", popularity:120}, {name:"a", popularity:10}));
    expect(wrapper).toBe(-1);
  });
  
  test("if logged in is false, send to login", () => {
    const wrapper = (menuCards.methods.comparePopularity({name:"a", popularity:12}, {name:"a", popularity:100}));
    expect(wrapper).toBe(1);
  });
  
 
  

});



describe("PROFILE", () => {
  test("if logged in is false, send to login", () => {
    const wrapper = shallowMount(profile, {store: mocked});
    expect(wrapper.find("#contactTxt").text()).toEqual("912456123");
  });
  test("if logged in is false, send to login", () => {
    const wrapper = shallowMount(profile, {store: mocked});
    expect(wrapper.find("#birthDateTxt").text()).toEqual("12-03-2000");
  });
  test("if logged in is false, send to login", () => {
    const wrapper = shallowMount(profile, {store: mocked});
    expect(wrapper.find("#emailTxt").text()).toEqual("9180234@esmad.ipp.pt");
  });
  test("if logged in is false, send to login", () => {
    const wrapper = shallowMount(profile, {store: mocked});
    expect(wrapper.find("#schoolTxt").text()).toEqual("ESMAD");
  });
  test("if logged in is false, send to login", () => {
    const wrapper = shallowMount(profile, {store: mocked});
    expect(wrapper.find("#nameTxt").text()).toEqual("João Pedroso");
  });
  test("if logged in is false, send to login", async () => {
    const wrapper = mount(profile, {store: mocked});
    await wrapper.setData({bookings:[{name:"d",description:"s",date:"D",duration:"d",school:"e",state:"Concluído", opinion:"", decline_txt:""}] })
    expect(wrapper.find("#opinion").exists()).toBe(true);

  });
  test("if logged in is false, send to login", async () => {
    const wrapper = shallowMount(profile, {store});
    await wrapper.setData({bookings:[{name:"d",description:"s",date:"D",duration:"d",school:"e",state:"Concluído", opinion:"sd", decline_txt:"d"}] })
    expect(wrapper.find("#opinion").exists()).toBe(false);

  });
  test("if logged in is false, send to login", async () => {
    const wrapper = shallowMount(profile, {store: mocked});
    await wrapper.setData({bookings:[{name:"d",description:"s",date:"D",duration:"d",school:"e",state:"Recudado", opinion:"sd", decline_txt:""}] })
    expect(wrapper.find("#motive").exists()).toBe(false);
  });
  test("if logged in is false, send to login", async () => {
    const wrapper = mount(profile, {store: mocked});
    await wrapper.setData({bookings:[{name:"d",description:"s",date:"D",duration:"d",school:"e",state:"Recudado", opinion:"sd", decline_txt:""}] })
    expect(wrapper.find("#opinionTXT").exists()).toBe(false);
  });

});



