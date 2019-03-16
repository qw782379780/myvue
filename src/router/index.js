import Vue from 'vue'
import Router from 'vue-router'
import Video from '../components/Video'
import Home from '../components/Home'
import List from '../components/List'
import Upload from '../components/Upload'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/video',
      name: 'Video',
      component: Video
    },
    {
      path: '/upload',
      name: 'Upload',
      component: Upload
    }
  ]
})
