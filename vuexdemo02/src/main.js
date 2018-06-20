// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import createStore from './store/store'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = createStore()

store.registerModule('c', {
  state: {
    text: 3
  }
})
// 解绑model store.unregisterModule('c')
// 参数是state方法，=>代表返回值指向，第二个参数也是一个方法，相当于方法一的回调函数
// store.watch((state) => state.count + 1, (newCount) =>
//   console.log('new count watched:', newCount)
// )
// 订阅，会拿到所有mutations的变化，执行回调函数
store.subscribe((mutation, state) => {
  // mutation的名字
  console.log(mutation.type)
  // mutation的参数
  console.log(mutation.payload)
})
store.subscribeAction((action, state) => {
  console.log(action.type)
  console.log(action.payload)
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
