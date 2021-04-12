import Vuex from 'vuex'
import Vue from 'vue'
import { BootstrapVue } from "bootstrap-vue";
import { shallowMount } from '@vue/test-utils'
import Input from '@/components/Input.vue'
import VuexStore from '@/store/index'


Vue.use(Vuex);
Vue.use(BootstrapVue)
const store = new Vuex.Store(VuexStore);

it('load vuex store', () => {
    const wrapper = shallowMount(Input, { store })
});

it('description clear', () => {
    const wrapper = shallowMount(Input, { store });
    expect(wrapper.vm.product).toEqual({ description: '', price: '', paid: false });
});

it('description valid', () => {
    const wrapper = shallowMount(Input, { store })
    wrapper.find('.form-description').setValue('Producto')
    wrapper.find('.form-price').setValue('500');
    wrapper.find('.form-add-btn').trigger('click');

    expect(store.state.products.length).toEqual(1);
    expect(store.state.products).toEqual({
        description: 'Producto',
        price: '500',
        paid: false
    })
})
