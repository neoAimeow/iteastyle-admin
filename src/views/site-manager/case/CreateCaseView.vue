<template>
  <div class="create-case-container">

    <div style="font-size:30px;padding-top:50px;margin-left:2%;">
      新增产品展示
    </div>

    <div class="text-field" style="">
      <span>展示标题</span>
      <input class="input" type="text" v-model="title" placeholder="标题">
    </div>

    <div class="text-field" style="">
      <el-radio-group v-model="selectTypeName">
        <el-radio-button v-for="(type,key) in caseType"
                         :key="key"
                         :label="type.typeName">
        </el-radio-button>
      </el-radio-group>
    </div>

    <div class="text-field" style="">
      <span>上传图片</span>
      <div class="upload-image-container">
        <el-upload class="avatar-uploader upload-image-cell"
                   action="//up.qbox.me/"
                   :multiple="true"
                   :on-success="handleAvatarSuccess"
                   :on-error="handleError"
                   :before-upload="beforeAvatarUpload"
                   :on-progress="uploadOnProgress"
                   :show-file-list="false"
                   :data="uploadParam"
        >
          <i class="el-icon-plus avatar-uploader-icon"></i>

        </el-upload>
        <div v-for="(data, key) in imgArr" :key="key" class="upload-image-cell" :src="data">
          <img :src="data" style="width:100px;height:100px;" @click="imageButtonClick(key)">
        </div>
      </div>

    </div>

    <Editor style="width:96%;margin-left:2%;height:300px;padding-top:20px;" :content="content" @on-content-change="onContentChange"></Editor>

    <div style="width:100%;margin-top:70px;margin-bottom:30px;display:flex;justify-content:flex-end;">
      <a class="button is-info is-active" style="margin-right:10px;" @click="cleanButtonClicked">清空</a>
      <a class="button is-info is-active" style="margin-right:2%;" @click="submitButtonClick">提交</a>
    </div>

  </div>
</template>

<script>

import Editor from '../../common/Editor'
export default {
  components: {Editor},

  created () {
    this.getToken()
    this.getTypes()
  },
  data () {
    return {
      title: '',
      uploadParam: {},
      imgArr: [],
      caseType: [],
      selectTypeName: '',
      content: ''
    }
  },
  methods: {
    onContentChange (val) {
      this.content = val
    },
    getTypes () {
      var that = this
      this.$ajax.get('/service/getCaseTypes', {}).then(function (response) {
        that.caseType = response.data.model
      })
    },
    getToken () {
      var that = this
      this.$ajax.get('/upload/getUploadToken', {})
        .then(function (response) {
          that.uploadParam.token = response.data.model
        })
    },

    handleError (res) {
      this.$notify({
        title: '提示',
        message: '上传失败+res'
      })
    },

    beforeAvatarUpload (file) {
      console.log(this.uploadParam)

      const isJPG = file.type === 'image/jpeg'
      const isPNG = file.type === 'image/png'

      if (!isJPG && !isPNG) {
        this.$notify({
          title: '提示',
          message: '上传头像图片只能是 JPG/PNG 格式!'
        })
      }

      return (isJPG || isPNG)
    },

    uploadOnProgress (event, file, fileList) {
      console.log('uploadOnProgress')
    },

    handleAvatarSuccess (res, file) {
      if (res.key != null) {
        this.imgArr.push('http://pazp3d0xt.bkt.clouddn.com/' + res.key)
      }
    },
    cleanButtonClicked () {
      this.title = ''
      this.imgArr = []
      this.selectTypeName = ''
    },
    submitButtonClick () {
      if (this.title === '' || this.imgArr.length === 0 || this.selectTypeName === '') {
        this.$notify({
          title: '提示',
          message: '标题和图片以及类型不能为空'
        })
        return
      }

      let type = 0
      this.caseType.forEach(element => {
        if (element.typeName === this.selectTypeName) {
          type = element.type
        }
      })

      let param = {
        title: this.title,
        imageArr: this.imgArr,
        type: type
      }

      var that = this
      this.$ajax.post('/admin/create', {
        param: JSON.stringify(param),
        type: 'case'
      })
        .then(function (response) {
          console.log(response)
          if (response.data.success) {
            that.$notify({
              title: '提示',
              message: '创建成功'
            })
          }
        })
        .catch(function (response) {
          that.$notify({
            title: '错误',
            message: '创建失败'
          })
        })
    },
    imageButtonClick (key) {
      this.$confirm('是否删除该图片？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'info',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            this.imgArr.splice(key, 1)
          }
          done()
        }
      }).then(() => {
        this.$notify({
          title: '成功',
          message: '删除成功！',
          type: 'success'
        })
      }).catch(() => {
        this.$notify({
          title: '提示',
          message: '已取消'
        })
      })
    }

  }
}
</script>

<style lang="scss" scoped>
  .create-case-container {
    margin: 2%;
    background-color: white;
    padding-bottom: 20px;
  }

  .text-field {
    margin-left: 2%;
    width: 96%;
    margin-top: 20px;
  }
  .avatar-uploader {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .upload-image-container {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    .upload-image-cell {
      width: 100px;
      height: 100px;
      min-width: 100px;
      min-height: 100px;
      position: relative;
      margin-top: 5px;
      margin-bottom: 5px;
    }
  }

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }

  .avatar {
    width: 100px;
    height: 100px;
    display: block;
  }
</style>
