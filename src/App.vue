<template>
  <div id="app">
    <el-menu
      :default-active="'1'"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">首页</el-menu-item>
      <el-submenu index="2" style="float:right;">
        <template slot="title">qsqs.myvue</template>
        <el-menu-item index="2-1">个人中心</el-menu-item>
        <router-link :to="{name:'Upload',params:{}}">
          <el-menu-item index="2-2">上传资源</el-menu-item>
        </router-link>
      </el-submenu>
    </el-menu>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  body, html {
    margin: 0;
    padding: 0;
  }

  .el-row {
    margin-bottom: 20px;
  &:last-child {
     margin-bottom: 0;
   }
  }

  .el-col {
    margin-top: 20px;
    border-radius: 4px;
  }

  a {
    text-decoration: none;
  }

  .router-link-active {
    text-decoration: none;
  }
</style>
