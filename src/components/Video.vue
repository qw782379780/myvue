<template>
  <div class="player">
    <el-card shadow="hover" :body-style="{ padding: '0px' }" v-if="video!=null">
      <div class="title">{{video.video_name}}</div>
      <d-player ref="player" @play="play" :logo="logo" :lang="lang" :video="video.video"
                :contextmenu="contextmenu"></d-player>
    </el-card>
    <div style="margin-left:-20px;margin-top:20px;">
      <div v-for="(v,index) in videos" style="margin-left:20px;float:left;">
        <el-button plain @click.native="change(index)">{{(index+1)+'. '+v.video_name}}</el-button>
      </div>
    </div>
  </div>

</template>

<script>
  import VueDPlayer from './VueDPlayerHls';
  import logoImg from '../assets/logo.png';
  import logoshimakaze from '../assets/shimakaze.png';
  import {mapGetters} from 'vuex'

  export default {
    name: 'Video',
    data() {
      return {
        video: null,
        id: null,
        episode: null,
        lang: 'zh-cn',
        logo: logoshimakaze,
        autoplay: false,
        player: null,
        contextmenu: [
          {
            text: '博客园',
            link: 'http://www.cnblogs.com/maqingyuan/'
          }, {
            text: '博客园',
            link: 'http://www.cnblogs.com/maqingyuan/'
          }, {
            text: '博客园',
            link: 'http://www.cnblogs.com/maqingyuan/'
          }
        ]
      }
    },
    components: {
      'd-player': VueDPlayer
    },
    methods: {
      play() {
        // console.log('开始播放...')
      },
      change(index) {
        this.video = this.videos[index]
        this.player.switchVideo(this.video.video.quality[0])
      }
    },
    mounted() {
      // var hls = new Hls();
      // hls.loadSource('https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8');
      // hls.attachMedia(this.player);
    },
    created: function () {
      this.id = this.$route.params.id
      this.episode = this.$route.params.episode
      this.$store.dispatch('getVideoPage', this.id)
    },
    computed: {
      ...mapGetters({
        videos: 'getVideoPage'
      })
    },
    watch: {
      videos: {
        handler: function (val, oldval) {
          this.$nextTick(function () {
            this.player = this.$refs.player.dp
          })
          this.video = val[0]
        },
        deep: true
      }
    }
  }
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .player {
    width: 750px;
    margin: 0 auto 50px;
  }

  .title {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  @media only screen and (max-width: 640px) {
    .hello {
      width: 100%;
    }
  }
</style>
