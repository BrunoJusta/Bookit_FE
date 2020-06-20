import { shallowMount } from '@vue/test-utils'
import error from '@/views/ErrorPage.vue'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {loggedUser:{type:0}},
})

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => { 
    
    const wrapper = shallowMount(error, {store})
    expect(wrapper.data).not.toBeNull()
  })
})
