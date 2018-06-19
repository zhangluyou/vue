import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Second from '@/components/Second'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/secondvue/',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
      // linkActiveClass
      // linkExactActiveClass
    },
    {
      path: '/second',
      name: 'Second',
      component: Second
    }
  ]
})
