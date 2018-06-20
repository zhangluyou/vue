<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link to="/second">second</router-link>
    <router-view/>
    隔两秒变5：{{counter}} <p>拼接字符串getter:{{fullName}}</p>
    <p>分模块的state：{{testA}}</p>
    <p>分模块的getters：{{textPlus}}</p>
    <p>新模块的state:{{textC}}</p>
  </div>
</template>

<script>
import {
  mapState,
  mapGetters,
  mapMutations,
  mapActions
} from 'vuex'
export default {
  name: 'App',
  mounted () {
    console.log(this.$store)
    // let i = 1
    // actions异步处理,未使用mapActions
    // this.$store.dispatch('updateCountAsync', {
    //   num: 5,
    //   time: 2000
    // })
    // 使用mapActions,在调用方法的时候不用传方法名
    this.updateCountAsync(
      {
        num: 5,
        time: 2000
      })
    this['a/add']()
    // mutations同步处理，每隔一秒进行count+1
    // setInterval(() => {
    //   this.$store.commit('updateCount', i++)
    // }, 1000)
    this['a/updateText']('123')
  },
  computed: {
    // 通过模块具体路径调用textA () {
    //   return this.$store.state.a.text
    // },
    /*  count () {
      return this.$store.state.count
  },和下面的mapState功能一致 ...要使用命令
  npm i babel-preset-stage-1
*/
    ...mapState({
      // counter: 'count'和下面一样，只是这个是传对象，下面是传方法
      counter: (state) => state.count,
      // 上面textA的写法,通过对象的映射关系进行书写
      testA: (state) => state.a.text,
      textC: state => state.c.text

    }),
    ...mapGetters({
      'fullName': 'fullName',
      textPlus: 'a/textPlus'
    })
    // 和上面一样fullName () {
    //   return this.$store.getters.fullName
    // }
  },
  methods: {
    ...mapActions(['updateCountAsync', 'a/add']),
    ...mapMutations(['updateCount', 'a/updateText'])
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
