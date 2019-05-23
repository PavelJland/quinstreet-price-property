import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    address: {
      street_number: '',
      route: '',
      locality: '',
      administrative_area_level_2: '',
      administrative_area_level_1: '',
      country: '',
      postal_code: '',
      latitude: 0,
      longitude: 0,
      streetaddr: '',
    },
    priced: [
    ],
  },
  actions: {
    getPriced({ commit }) {
      // add GET request to the server here indead if the mock data
      // eslint-disable-next-line
      let data = [{"address":{"street_number":"950","route":"Tower Lane","locality":"Foster City","administrative_area_level_1":"CA","country":"Соединенные Штаты Америки","postal_code":"94404","latitude":37.55779759999999,"longitude":-122.27690849999999,"streetaddr":"950 Tower Lane"},"price":100000000,"date":""},{"address":{"street_number":"6600","route":"Dumbarton Circle","locality":"Fremont","administrative_area_level_2":"__vue_devtool_undefined__","administrative_area_level_1":"CA","country":"Соединенные Штаты Америки","postal_code":"94555","latitude":37.5486997,"longitude":-122.05897529999999,"streetaddr":"6600 Dumbarton Circle"},"price":100000000,"date":""}]
      commit('SET_PRICED', data);
    },
    setAddress({ commit }, addressData) {
      commit('SET_ADDRESS', addressData);
    },
    addPriced({ commit }, form) {
      // add POST request for the new entry here
      // if success then commit PUSH_PRICED
      commit('PUSH_PRICED', form);
    },
  },
  mutations: {
    SET_PRICED(state, data) {
      state.priced = data;
    },
    SET_ADDRESS(state, data) {
      state.address = data;
      state.address.streetaddr = `${data.street_number} ${data.route}`;
    },
    PUSH_PRICED(state, form) {
      state.priced.push(form);
    },
  },
});
