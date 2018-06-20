// 所有数据的修改都尽量放在mutations，将mutation写成一个对象,它同步操作，不能有异步的代码在里面
export default{
  // 只能有两个参数
  updateCount (state, num) {
    state.count = num
  }
}
