import { createStore } from 'vuex'
import products from '../data/data.json'

export default createStore({
  state: {
    products: [...products],
    cart: [],
    cartTotal: null,
  },

  getters: {
    getProducts(state) {
      return state.products;
    },
    getCart(state) {
      return state.cart;
    },
    getTotal(state) {
      return state.cartTotal;
    },
  },

  mutations: {
    ADD_PRODUCT(state, product) {
      if (!state.cart.find((item) => item.id === product.id)) {
        state.cart.push(product);
      } else {
        state.cart.find((item) => item.id === product.id).qty += 1;
      }
      product.total = product.qty * product.price;
      state.cartTotal += Number(product.total);
    },

    INCREMENT_PRODUCT(state, product) {
      product = state.cart.find((item) => item.id === product.id);
      product.qty += 1;
      product.total = product.qty * product.price;
      state.cartTotal += product.total;
    },

    DECREMENT_PRODUCT(state, product) {
      product = state.cart.find((item) => item.id === product.id);
      product.qty--;
      product.total = product.qty * product.price;
      state.cartTotal += product.total;
      if (product.qty === 0) {
        state.cart.splice(state.cart.indexOf(product), 1);
      }
    },
  },


  actions: {
    addProduct(context, product) {
      context.commit("ADD_PRODUCT", product);
    },

    incrementProduct(context, payload) {
      const item = payload;
      const itemInCart = context.getters["getCart"];
      const product = itemInCart.find((product) => product.id === item);
      context.commit("INCREMENT_PRODUCT", product);
    },

    decrementProduct(context, payload) {
      const item = payload;
      const itemInCart = context.getters["getCart"];
      const product = itemInCart.find((product) => product.id === item);
      context.commit("DECREMENT_PRODUCT", product);
    },
  },
});