<template lang="pug">
table.table
  thead
    tr
      th(scope='col') #
      th(scope='col') Street address
      th(scope='col') Price
      th(scope='col') Map
  tbody
    tr(v-for="(entry, index) in priced")
      th(scope='row') {{index}}
      td {{entry.address.streetaddr}}
      td {{entry.price}}
      td
        a(:href='`https://www.google.com/maps/?q=${entry.address.latitude},${entry.address.longitude}`' target='_blank'): i.fa.fa-map
</template>

<script>
import { mapState } from 'vuex';

export default {
  created() {
    this.$store.dispatch('getPriced');
  },
  computed: {
    ...mapState(['priced']),
  },
};
</script>

<style lang="scss">
thead {
    margin-top: 5px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background: #006b6b;
    color: white;
}
</style>
