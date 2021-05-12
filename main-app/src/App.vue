<template>
<div>
  <ul class="mainapp-sidemenu">
      <!-- <li @click="push('/vue3')">Vue3</li>
      <li @click="push('/vue3/about')">vue3 about</li> -->
      <li @click="push('/vue-test')">vue-cli</li>
      <li @click="push('/vite1')">vite</li>
      <!-- <li @click="push('/vitechild')">vite1</li> -->
    </ul>
  <div id="subapp-viewport"></div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },
  methods: {
    push(subapp) {
      history.pushState(null, subapp, subapp)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
