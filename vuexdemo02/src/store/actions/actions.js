// 和mutations差不多，区别是是action可以存放异步的代码
export default {
  updateCountAsync (store, data) {
    setTimeout(() => (
      store.commit('updateCount', data.num)
    ), data.time)
  }
}
