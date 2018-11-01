<template>
  <div class="web-info-manager-container">
    <div style="font-size:30px;padding-top:50px;margin-left:2%;">
      网站信息管理
    </div>

    <div class="text-field" style="">
      <span>首页banner图管理</span>
      <div class="upload-image-container">
        <el-upload class="avatar-uploader upload-image-cell"
                   action="//up.qbox.me/"
                   :multiple="true"
                   :on-success="handleHeaderImageSuccess"
                   :on-error="handleError"
                   :before-upload="beforeHeaderImageUpload"
                   :on-progress="uploadOnProgress"
                   :show-file-list="false"
                   :data="uploadParam"
        >
          <i class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>

        <div v-for="(data, key) in imgHeaderArr" :key="key" class="upload-image-cell" :src="data">
          <img :src="data" style="width:300px;height:150px;" @click="imageButtonClick(key)">
        </div>
      </div>

    </div>

    <div class="info-manager-form">

      <div class="info-manager-form-cell">
        <a class="button is-danger is-active" @click="submitButtonClicked">修改</a>
        <a class="button is-danger is-active" @click="reset">重置</a>
      </div>

    </div>

  </div>
</template>

<script>

export default {
  created () {
    this.getToken()
    this.request()
  },
  data () {
    return {
      uploadParam: {},
      imgHeaderArr: [],
      data: {}
    }
  },
  methods: {
    request () {
      var that = this
      this.$ajax.get('/admin/getStaticData', {
        params: {}
      })
        .then(function (response) {
          console.log(response)
          that.data = response.data.model
          that.imgHeaderArr = response.data.model.homepageBannerUrls
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

    beforeHeaderImageUpload (file) {
      console.log(this.uploadParam)

      const isJPG = file.type === 'image/jpeg'
      const isPNG = file.type === 'image/png'

      if (!isJPG && !isPNG) {
        this.$notify({
          title: '提示',
          message: '上传图片只能是 JPG/PNG 格式!'
        })
      }

      return (isJPG || isPNG)
    },

    uploadOnProgress (event, file, fileList) {
      console.log('uploadOnProgress')
    },

    handleHeaderImageSuccess (res, file) {
      console.log('handleHeaderImageSuccess')

      if (res.key != null) {
        this.imgHeaderArr.push('http://pazp3d0xt.bkt.clouddn.com/' + res.key)
      }
    },

    reset () {
      this.imgHeaderArr = []
    },
    submitButtonClicked () {
      if (this.title == '' || this.imgHeaderArr.length == 0 || this.content == '') {
        this.$notify({
          title: '提示',
          message: '标题和图片以及内容不能为空'
        })
        return
      }
      this.data.homepageBannerUrls = this.imgHeaderArr

      var that = this
      this.$ajax.post('/admin/updateStaticData', {
        param: JSON.stringify(this.data)

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
            this.imgHeaderArr.splice(key, 1)
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
  .web-info-manager-container {
    margin: 2%;
    background-color: white;
    padding-bottom: 20px;
    .info-manager-form {
      display: flex;
      flex-direction: column;
      width: 60%;
      max-width: 600px;
      padding-left: 30px;
      padding-bottom: 30px;
      padding-top: 30px;
      .info-manager-form-cell {
        margin-top: 18px;
      }
    }
  }

  .text-field {
    margin-left: 2%;
    width: 96%;
    margin-top: 20px;
  }

  .upload-image-container {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;

    .upload-image-cell {
      width: 300px;
      height: 150px;
      min-width: 300px;
      min-height: 150px;
      position: relative;
      margin-top: 5px;
      margin-bottom: 5px;
    }
  }

  .avatar-uploader {
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
    width: 300px;
    height: 150px;
    line-height: 150px;
    text-align: center;
  }

  .avatar {
    width: 300px;
    height: 150px;
    display: block;
  }

</style>
