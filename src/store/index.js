import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    product: {
      description: '',
      price: '',
      paid:false
    }
  },
  mutations: {
    addProduct(state) {
      const desc = state.product.description;
      const price = state.product.price;
      if (desc.length > 0 && price > 0) {
        state.products.push({ description: desc, price: price, paid: false });
        state.product.description = '';
        state.product.price = '';
      } else {
        state.product.description = '';
        state.product.price = '';
      }
      
    }
  },
  actions: {
  },
  modules: {
  }
})
