<template>
  <div class="create-news-container">

    <div style="font-size:30px;padding-top:50px;margin-left:2%;">
      新建文章
    </div>

    <div class="text-field" style="">
      <span>文章封面</span>
      <input class="input" type="text" placeholder="标题" v-model="title">
    </div>

    <div class="text-field" style="">
      <span>文章标题</span>
      <input class="input" type="text" placeholder="标题" v-model="title">
    </div>

    <Editor style="width:96%;margin-left:2%;height:300px;padding-top:20px;" :content="content" @on-content-change="onContentChange"></Editor>

    <div style="width:100%;margin-top:70px;margin-bottom:30px;display:flex;justify-content:flex-end;">
      <a class="button is-info is-active" style="margin-right:10px;" @click="cleanButtonClick">清空</a>
      <a class="button is-info is-active" style="margin-right:2%;" @click="submitButtonClick">提交</a>
    </div>

  </div>
</template>

<script>
import Editor from '../../common/Editor'
export default {
  components: {Editor},
  data () {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    onContentChange (val) {
      this.content = val
    },
    cleanButtonClick () {
      this.title = ''
      this.content = ''
    },
    submitButtonClick () {
      var that = this
      if (this.title === '' || this.content === '') {
        that.$notify({
          title: '错误',
          message: '标题和内容不能为空'
        })
        return
      }

      let param = {
        title: this.title,
        content: this.content
      }
      this.$ajax.post('/admin/createPost', {
        param: JSON.stringify(param)

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
    }
  }

}
</script>

<style lang="scss" scoped>
  .create-news-container {
    margin: 2%;
    background-color: white;
    padding-bottom: 20px;
  }

  .text-field {
    margin-left: 2%;
    width: 96%;
    margin-top: 20px;
  }
</style>
