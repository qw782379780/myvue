<template>
  <div>
    <el-row>
      <el-col :span="2" :offset="6">
        标题：
      </el-col>
      <el-col :span="10" :offset="0">
        <el-input v-model="uploadData.title" placeholder="请输入标题"></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="2" :offset="6">
        标签：
      </el-col>
      <el-col :span="10" :offset="0">
        <el-input v-model="uploadData.tag" placeholder="请输入标签"></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="2" :offset="6">
        来源：
      </el-col>
      <el-col :span="10" :offset="0">
        <el-input v-model="uploadData.source" placeholder="请输入来源"></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="2" :offset="6">
        简介：
      </el-col>
      <el-col :span="10" :offset="0">
        <el-input type="textarea"
                  :rows="3" v-model="uploadData.summary" placeholder="请输入简介"></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-row>
        <el-col :span="2" :offset="6">
          av号：
        </el-col>
        <el-col :span="10" :offset="0">
          <el-input type="textarea"
                    :rows="3" v-model="uploadData.fdId" placeholder="请输入av号（可为空"></el-input>
        </el-col>
      </el-row>
      <el-col :span="12" :offset="6">
        <el-upload
          class="upload-demo"
          ref="upload"
          action="http://121.43.174.193:8080/myVideoWeb/videoController/add"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          :data="uploadData"
          :file-list="fileList"
          :auto-upload="false">
          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
          <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
          <div slot="tip" class="el-upload__tip">非常新鲜，非常美味（</div>
        </el-upload>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'Upload',
    data() {
      return {
        fileList: [],
        uploadData: {
          title: null,
          tag: null,
          source: null,
          summary: '',
          fdId: null
        }
      }
    },
    created: function () {
    },
    computed: mapGetters({}),
    components: {},
    methods: {
      submitUpload() {
        this.$refs.upload.submit();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      }
    },
    mounted() {
    }
  }
</script>

<style scoped>
</style>
