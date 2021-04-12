import Vuex from 'vuex'
import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import Input from '@/components/Input.vue'
import VuexStore from '@/store/index'

Vue.use(Vuex);
const store = new Vuex.Store(VuexStore);

it('load vuex store', () => {
    const wrapper = shallowMount(Input, { store })
});

it('description clear', () => {
    const wrapper = shallowMount(Input, { store });
    expect(wrapper.vm.product).toEqual({ description: '', price: '', paid: false });
})
