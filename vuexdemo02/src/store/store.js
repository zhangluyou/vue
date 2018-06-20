import Vuex from 'vuex'
import defaultState from './state/state.js'
import mutations from './mutations/mutations'
import getters from './getters/getters.js'
import actions from './actions/actions.js'
// 通过函数，返回一个store
export default () => {
  return new Vuex.Store({
    state: defaultState,
    mutations,
    getters,
    actions,
    // 加入模块功能，两个模块a,b
    modules: {
      a: {
        namespaced: true,
        state: {
          text: 1
        },
        mutations: {
          // 这里的state指的是a模块的state
          updateText (state, text) {
            console.log('a.state', state)
            state.text = text
          }
        },
        getters: {
          textPlus (state, getter, rootState) {
            return state.text + 1 + rootState.count
          }
        },
        actions: {
          add ({state, commit, rootState}) {
            commit('updateText', rootState.count)
          }
        }
      },
      b: {
        state: {
          text: 2
        }
      }
    }
  })
}
