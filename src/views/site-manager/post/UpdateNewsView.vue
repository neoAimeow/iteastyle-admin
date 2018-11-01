<template>
  <div class="create-news-container">

    <div style="font-size:30px;padding-top:50px;margin-left:2%;">
      编辑文章
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
      <a class="button is-info is-active" style="margin-right:10px;" @click="resetButtonClick">重置</a>
      <a class="button is-info is-active" style="margin-right:2%;" @click="submitButtonClicked">提交</a>
    </div>

  </div>
</template>

<script>
import Editor from '../../common/Editor'
export default {
  components: {Editor},
  // apollo: {
  //     postById: {
  //         variables() {
  //             return {
  //                 id: this.$route.query.id
  //             }
  //         },
  //         query() {
  //             return postGQL;
  //         },
  //         result({
  //             data,
  //             loading,
  //             networkStatus
  //         }) {
  //             this.reset(data.postById);
  //         },
  //     },
  // },
  data () {
    return {
      postById: {},
      id: '',
      title: '',
      content: ''
    }
  },
  methods: {
    onContentChange (val) {
      this.content = val
    },
    reset (data) {
      this.id = data.id
      this.title = data.title
      this.content = data.content
    },
    resetButtonClick () {
      this.reset(this.postById)
    },
    submitButtonClicked () {
      if (this.title === '' || this.content === '') {
        this.$notify.open({
          content: '标题和内容不能为空',
          type: 'danger'
        })
        return
      }
      const id = this.id
      const title = this.title
      const content = this.content

      // return this.$apollo.mutate({
      //         mutation: updatePostGQL,
      //         variables: {
      //             input: {
      //                 id,
      //                 title,
      //                 content
      //             },
      //         },
      //     })
      //     .then(() => {
      //         this.$notify.info({
      //             content: '修改成功'
      //         });
      //     })
      //     .catch(err => {
      //         this.$notify.open({
      //             content: '修改失败',
      //             type: 'danger'
      //         });
      //     })
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
  .avatar-uploader {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
</style>
