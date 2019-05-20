<template lang="pug">
.main-form
  .search-input
    places(v-model='form.country.label',
      placeholder='What property you want to rate?',
      @change='val => { form.country.data = val }',
      :options="{ countries: ['US'] }")
    button.fw-btn(@click="reveal") SET
  input.ap-input(type='text', v-model='form.country.data.city' placeholder='city')
  .price-input
    input.ap-input(type="number", placeholder='Name your price')

</template>

<script>
/* eslint-disable */
import Places from 'vue-places'

export default {
  data() {
    return {
      form: {
        country: {
          label: null,
          data: {},
        },
      },
    };
  },
  methods: {
	reveal() {
		console.log(this.form);
	}
 },
  components: {
    Places,
  }
}
</script>

<style lang="scss">
.main-form {
  background: #006b6b;
  border-radius: 5px;
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
  }
}
</style>