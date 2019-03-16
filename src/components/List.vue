<template>
  <div class="list">
      <div class="el-col-xl-4 el-col-lg-6 el-col-md-8 el-col-sm-12 el-col-xs-24" v-for="item in video_list" style="padding: 10px 10px 10px 10px;">
        <router-link :to="{name:'Video',params:{id:item.fdId,episode: 0,title:item.title}}">
          <el-card shadow="hover" :body-style="{ padding: '0px' }">
            <img src="../assets/logo.png" class="image" style="max-height: 50%;max-width: 50%;">
            <div style="padding: 14px;">
              <div style="text-align: left;height: 30px;width: 90%;">
                <span>{{item.title}}</span>
              </div>
              <div class="" style="text-align: center;float: right;display: block;width: 116px;">
                <time class="time"></time>
                <el-menu
                  class="el-menu-demo"
                  mode="horizontal"
                  @select="handleSelect"
                  background-color="#fffff"
                  text-color="#000000"
                  active-text-color="#fffff">
                  <el-submenu :index="item.fdId+'_0'">
                    <template slot="title">操作按钮</template>
                    <el-menu-item :index="item.fdId+'_1'" style="width: 116px;">删除</el-menu-item>
                  </el-submenu>
                </el-menu>
              </div>
            </div>
          </el-card>
        </router-link>
      </div>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'List',
    data() {
      return {}
    },
    created: function () {
      let id = this.$route.params.id;
      this.$store.dispatch('getVideoList', id)
    },
    computed: {
      ...mapGetters({
        video_list: 'getVideoList',
        isDeleteSuccess: 'isDeleteSuccess'
      })
    },
    components: {},
    methods: {
      handleSelect(key, keyPath) {
        console.log(key)
        if (key.indexOf('_1') != -1) {
          let id = key.replace('_1', '');
          console.log(id)
          this.$store.dispatch('deleteVideo', id)
          console.log(this.isDeleteSuccess)
        }
      }
    },
    mounted() {
    }
  }
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
