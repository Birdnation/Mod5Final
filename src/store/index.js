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
    },
    total: 0,
    pagar: 0,
    pagado: 0,
  },
  mutations: {
    addProduct(state) {
      const desc = state.product.description;
      const price = state.product.price;
      if (desc.length > 0 && price > 0) {
        state.products.push({ description: desc, price: price, paid: false });
        state.pagar = state.pagar + parseInt(state.product.price);
        state.total = state.pagar + state.pagado;
        state.product.description = '';
        state.product.price = '';
      } else {
        state.product.description = '';
        state.product.price = '';
      }
    },
    deleteProduct(state, index) {
      state.products.splice(index, 1);
    },
    updatePaid(state, index) {
      state.products[index].paid = !state.products[index].paid
      console.log(index)

      if (state.products[index].paid) {
        state.pagado = state.pagado + parseInt(state.products[index].price);
        state.pagar = state.pagar - parseInt(state.products[index].price);
      } else {
        state.pagado = state.pagado - parseInt(state.products[index].price);
        state.pagar = state.pagar + parseInt(state.products[index].price);
      }
      
    }
  },
  actions: {
  },
  modules: {
  }
})
