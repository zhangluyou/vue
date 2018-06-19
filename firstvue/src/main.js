// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 入口
import Vue from 'vue'
import App from './App'
import iView from 'iview'
// 路由
import VueRouter from 'vue-router'
import routes from './router'
// vue状态管理
import Vuex from 'vuex'
// 引入样式
import './assets/css/normal.css'
import './assets/css/bootstrap.css'
import ref from './assets/js/Tool'
import store from './vuex/store'
import sstore from '@/store/store.js'

Vue.use(ref)
Vue.use(Vuex)
Vue.use(iView)
Vue.use(VueRouter)
Vue.config.productionTip = false
/* eslint-disable no-new */
const router = new VueRouter({
  routes,
  mode: 'history'
})
/**
 * 获取地址参数
 */
// var getQueryString = function () {
//   // let reg = new RegExp("(^|&)" + name + "([^&])(&|$)");
//   // debugger
//   let param = window.location.href.split('?')[1]
//   let strs = param.split('&')
//   let request = {}
//   for (let i = 0; i < strs.length; i++) {
//     request[strs[i].split('=')[0]] = strs[i].split('=')[1]
//   }
//   return request
// }
/**
 * 全局创建一个加载进度条，用于路由切换和ajax
 */
router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  next()
})
router.afterEach((to, from, next) => {
  iView.LoadingBar.finish()
  // 定位到页面头部
  window.scrollTo(0, 0)
})
new Vue({
  el: '#app',
  router,
  store,
  sstore,
  // mode: 'history',
  base: '/firstvue/',
  components: { App },
  template: '<App/>'
})
