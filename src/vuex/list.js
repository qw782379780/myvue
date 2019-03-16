import api from './api'

const state = {
  video_list: [],
  isDeleteSuccess: null
}

const actions = {
  getVideoList: function ({commit}) {
    api.getVideoList(1, function (res) {
      commit('getVideoList', res)
    })
    // commit('getVideoList', [{id: 0,name: '第一个'},{id: 1,name: '第二个'},{id: 2,name: '第三个'},{id: 3,name: '第四个'},{id: 4,name: '第五个'},{id: 5,name: '第六个'},{id: 6,name: '第七个'},{id: 7,name: '第八个'},{id: 8,name: '第九个'}])
  },
  deleteVideo: function ({commit}, id) {
    api.deleteVideo(id, function (res) {
      commit('deleteVideo', res)
    })
  }
}
const getters = {
  getVideoList: state => state.video_list,
  isDeleteSuccess: state => state.isDeleteSuccess
}
const mutations = {
  getVideoList(state, res) {
    // state.video_list = state.video_list.concat(res)
    state.video_list = res
  },
  deleteVideo(state, res) {
    state.isDeleteSuccess = res
  }
}
export default {
  state,
  actions,
  getters,
  mutations
}
