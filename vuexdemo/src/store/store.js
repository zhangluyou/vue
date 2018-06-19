import Vuex from 'vuex'
// 通过函数，返回一个store
export default () => {
  return new Vuex.Store({
    state: {
      count: 0
    },
    mutations: {
      updateCount (state, num) {
        state.count = num
      }
    },
    computer: {
      count () {
        return this.$store.state.count
      }
    }
  })
}
