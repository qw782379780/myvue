import logoImg from '../assets/logo.png';
import api from './api'

const state = {
  videos: null
}

const actions = {
  getVideoPage: function ({commit},id) {
  api.getVideoPage(id, function (res) {
      commit('getVideoPage', res)
    })
  // commit('getVideo', state.videos)
}
}
const getters = {
  getVideoPage: state => state.videos
}
const mutations = {
  getVideoPage (state, res) {
    var plist = [];
    for(var i=0;i<res.length;i++){
      var fp = "  ./static"+res[i].filePath.split("static")[1]
      console.log(fp)
      var p = {video: {
        quality: [{
          name: '240P',
          url: fp,
        },{
          name: '360P',
          url: 'https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8',
        },{
          name: '720P',
          url: 'https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8',
        }],
          pic: 'http://static.smartisanos.cn/pr/img/video/video_03_cc87ce5bdb.jpg',
          defaultQuality: 0,
          thumbnails: logoImg,
          type: 'normal'
      },
        video_name: res[i].title}
        plist[i] = p
    }
    state.videos = plist
  }
}
export default {
  state,
  actions,
  getters,
  mutations
}
