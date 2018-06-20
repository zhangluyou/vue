// 和computer一样，都是对后台返回的数据做处理，只是这个可以应用多个页面
export default {
  fullName (state) {
    const name = state.firstName + state.lastName
    return name
  }
}
