<template lang="pug">
  #app
    Header
    .container
      .row
        .col-sm-12.col-md-6
          Form
        .col-sm-12.col-md-6
          Table
</template>

<script>
import Form from './components/Form';
import Header from './components/Header';
import Table from './components/Table';

export default {
  name: 'App',
  components: {
    Form,
    Header,
    Table,
  },
};
</script>

<style>
@import './assets/css/bootstrap.min.css';
@import './assets/css/font-awesome.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
