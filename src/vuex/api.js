/**
 * Create bu zechun.chen on 2016/12/22
 * api配置
 */
import axios from 'axios'
import qs from 'qs'

// let url = process.env.NODE_ENV !== 'production' ? '/api/' : 'http://m.maizuo.com/v4/api/'
// let url = 'http://m.maizuo.com/v4/api/'
let url = 'http://121.43.174.193:8080/myVideoWeb/'
// let url = 'http://localhost:9999/'
// let url = '/api/'
let funcAxios = (api, cb) => {
  axios.get(api).then(function (res) {
    if (res.status >= 200 && res.status < 300) {
      cb(res.data)
    }
  }).catch((error) => {
    // new Error('desc');
    return Promise.reject(error)
  })
}

let funcAxios_1 = (api, data, cb) => {
  axios.get(api, {
    params:{
      ids: data
    },
    paramsSerializer: function(params) {
      return Qs.stringify(params, {arrayFormat: 'repeat'})
    }
  }).then(function (res) {
    if (res.status >= 200 && res.status < 300) {
      cb(res.data)
    }
  }).catch((error) => {
    // new Error('desc');
    return Promise.reject(error)
  })
}

export default {
  /**
     * 获取video_list
     */
  getVideoList: (page, cb) => funcAxios(url + 'videoController/videoList?page=' + page + '&count=10', cb),

  /**
   * 获取video_page
   */
  getVideoPage: (id, cb) => funcAxios(url + 'videoController/videoPage?id=' + id, cb),

  /**
   * 删除video_page
   */
  deleteVideo: (id, cb) => funcAxios(url + 'videoController/delete?id=' + id, cb),

  /**
   * 删除多个video_page
   */
  deleteVideoAll: (ids, cb) => funcAxios_1(url + 'videoController/deleteAll', ids, cb)
}
