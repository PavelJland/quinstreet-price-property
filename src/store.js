import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    priced: [
      {
        id: 0,
        data: {},
        price: 0,
      }
    ],
  },
  actions: {
    newPrice() {
      
    }
  },
  mutations: {
    addPriced(state) {
      state.count += 1;
    },
  },
});
