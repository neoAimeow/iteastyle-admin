<template>
  <quill-editor v-model="insideContent" ref="myQuillEditor" :options="editorOption">
  </quill-editor>
</template>

<script>
import {quillEditor, Quill} from 'vue-quill-editor'
import {container, ImageExtend, QuillWatch} from 'quill-image-extend-module'
// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import request from '@/views/common/request'

Quill.register('modules/ImageExtend', ImageExtend)

let qiniu = {'action': '//up.qbox.me/', 'baseUrl': '//pazp3d0xt.bkt.clouddn.com/', 'token': ''}
let getToken = function () {
  request.get('/upload/getUploadToken', {})
    .then(function (response) {
      console.log(response)
      qiniu.token = response.data.model
    })
}

getToken()

export default {
  components: {quillEditor},
  props: ['content'],
  watch: {
    content (val) {
      this.insideContent = val
    },
    insideContent (val) {
      this.$emit('on-content-change', val)
    }
  },
  data () {
    return {
      insideContent: this.content,
      editorOption: {
        modules: {
          ImageExtend: {
            loading: true,
            name: 'file',
            size: 3,
            action: qiniu.action,
            response: (res) => {
              return qiniu.baseUrl + res.key
            },
            headers: (xhr) => {
            },
            start: () => {
            },
            end: () => {
              getToken()
            },
            error: () => {
            },
            change: (xhr, formData) => {
              const file = formData.get('file')
              const suffix = file.name.split('.')
              const ext = suffix.splice(suffix.length - 1, 1)[0]
              formData.append('key', `image/${suffix.join('.')}_${new Date().getTime()}.${ext}`)
              formData.append('token', qiniu.token)
            }
          },
          toolbar: {
            container: container,
            handlers: {
              'image': function () {
                QuillWatch.emit(this.quill.id)
              }
            }
          }
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
