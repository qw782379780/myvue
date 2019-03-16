<template>
  <div>
    <el-row v-for="i in list">
      <el-col :span="12" :offset="6">
        <router-link :to="{name:'List',params:{type:i.id}}">
          <el-card shadow="hover" :body-style="{ padding: '0px' }">
            <img src="../assets/logo.png" class="image">
            <div style="padding: 14px;">
              <span>{{i.name}}</span>
              <div class="bottom clearfix">
                这个分区有一些东西
              </div>
            </div>
          </el-card>
        </router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'Home',
    data() {
      return {
        list: [{id: 0, name: '第一个分区'}, {id: 1, name: '第二个分区'}]
      }
    },
    created: function () {
    },
    computed: mapGetters({}),
    components: {},
    methods: {
      handleSelect: function () {
        return
      }
    },
    mounted() {
    }
  }
</script>

<style scoped>
</style>
