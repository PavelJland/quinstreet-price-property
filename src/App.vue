<template>
  <div id="app">
    <Logo/>
    <Form/>
  </div>
</template>

<script>
/* eslint-disable */ 
import Form from './components/Form'
import Logo from './components/Logo'

export default {
  name: 'App',
  components: {
    Form,
    Logo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
