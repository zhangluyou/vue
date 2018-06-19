<template>
  <div id="app">
    <!--<h1 v-text="title"></h1>-->
    <!--<input v-model="newItem" v-on:keyup.enter="addNew">-->
    <!--<ul>-->

      <!--<li v-for="item in items" :key="item.label" v-bind:class="{finished: item.isFinished}" v-on:click="toggleFinish(item)">-->
        <!--{{item.label}}-->
      <!--</li>-->
      <!--<h1>{{childWords}}</h1>-->
      <!--&lt;!&ndash;<component-a msgfromfather="you are young men" v-on:chiletellmesomthing="listenToMyBoy"></component-a>&ndash;&gt;-->
    <!--</ul>-->
    <router-view></router-view>
  </div>
</template>

<script>
import Store from './vuex/store.js'
import ComponentA from './components/componentA.vue'

export default {
  name: 'App',
  data () {
    return {
      title: 'this is a todo list',
      items: Store.fetch(),
      liClass: 'thisisliClass',
      newItem: '',
      childWords: ''
    }
  },
  // components: {ComponentA},
  watch: {
    items: {
      handler: function (items) {
        Store.save(items)
      },
      deep: true
    }
  },
  components: {
    ComponentA
  },
  mounted () {
    console.log(this.$store)
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    toggleFinish: function (item) {
      item.isFinished = !item.isFinished
    },
    addNew: function () {
      this.items.push({
        label: this.newItem,
        isFinished: false
      })
      this.newItem = ''
      console.log(this.newItem)
    },
    listenToMyBoy (msg) {
      console.log(msg)
      this.childWords = msg
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

  .finished {
    text-decoration: underline;
  }
</style>
