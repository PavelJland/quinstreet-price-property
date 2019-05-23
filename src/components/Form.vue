<template lang="pug">
.main-form
  .search-input
    vue-google-autocomplete.form-control#map(
      :country="['us']"
      ref="address",
      placeholder='What property you want to price?',
      v-on:placechanged='getAddressData')
  LabeledInput(:label='"Street address"', :value='address.streetaddr')
  LabeledInput(:label='"City"', :value='address.locality')
  .row.no-gutters
    .col-6: LabeledInput(:label='"State"', :value='address.administrative_area_level_1')
    .col-6: LabeledInput(:label='"Zip"', :value='address.postal_code')
  LabeledInput(:label='"Country"', :value='address.country')
  .price-input
    money.input-group(v-model='price', v-bind='money') {{price}}
    button.fw-btn(@click="addPrice") ADD
</template>

<script>
import VueGoogleAutocomplete from 'vue-google-autocomplete';
import { Money } from 'v-money';
import { mapState } from 'vuex';
import LabeledInput from './LabeledInput';

export default {
  components: { VueGoogleAutocomplete, Money, LabeledInput },
  computed: {
    ...mapState(['address']),
  },
  data() {
    return {
      price: 0,
      money: {
        thousands: ',',
        prefix: '$ ',
        precision: 0,
        masked: false,
      },
    };
  },

  mounted() {
    this.$refs.address.focus();
  },

  methods: {
    getAddressData(addressData) {
      this.$store.dispatch('setAddress', addressData);
    },
    addPrice() {
      this.$store.dispatch('addPriced', {
        address: this.address,
        price: this.price,
      });
    },
  },
};
</script>

<style lang="scss">
.main-form {
  background: #cccccc;
  border-radius: 5px;
  padding: 10px;
  .search-input {}
  .fw-btn {
    background: #006b6b;
    width: 100%;
    color: white;
    padding: 10px;
    border: none !important;
  }
  .price-input {
    padding: 20px;
    background: #006b6b;
    input {
      border-radius: 5px;
    }
  }
}
</style>
