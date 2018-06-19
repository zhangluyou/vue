<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link to="/second">second</router-link>
    <router-view/>
    {{count}}
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    console.log(this.$store)
    let i = 1
    // 每隔一秒进行count+1
    setInterval(() => {
      this.$store.commit('updateCount', i++)
    }, 1000)
  },
  computed: {
    count () {
      return this.$store.state.count
    }
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
  margin-top: 60px;
}
</style>
