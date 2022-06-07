import { createStore } from 'vuex'
import Vue from 'vue'
import axios, {Axios} from 'axios'

let cart = window.localStorage.getItem('cart');
let cartCount = window.localStorage.getItem('cartCount');

export default createStore({
    state: {
      catalogs:[], articles:[],
        cart: cart ? JSON.parse(cart) : [],
        cartCount: cartCount ? parseInt(cartCount) : 0,

  },
  getters: {},
  mutations: {
      addItem(state, catalogs) {
          state.cart.product.push(catalogs)
          state.cart.count++
      },
      addToCart(state, item) {
          let found = state.cart.find(catalogs => catalogs.id == item.id);

          if (found) {
              found.quantity ++;
              found.totalPrice = found.quantity * found.price;
          } else {
              state.cart.push(item);
              item['quantity'] = 1;
              item['totalPrice'] = item.price;
          }

          state.cartCount++;
          this.commit('saveCart');
      },
      removeFromCart(state, item) {
          let index = state.cart.indexOf(item);

          if (index > -1) {
              let product = state.cart[index];
              state.cartCount -= product.quantity;

              state.cart.splice(index, 1);
          }
          this.commit('saveCart');
      },
      saveCart(state) {
          window.localStorage.setItem('cart', JSON.stringify(state.cart));
          window.localStorage.setItem('cartCount', state.cartCount);
      }
  },
  actions: {

  },
  modules: {
  }
})
