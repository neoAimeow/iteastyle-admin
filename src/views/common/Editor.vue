<template>
    <quill-editor v-model="insideContent" ref="myQuillEditor" :options="editorOption">
    </quill-editor>
</template>

<script>
    import {getQiniuToken, qiniu_url, request} from '@/common/util.js'
    import {quillEditor, Quill} from 'vue-quill-editor'
    import {container, ImageExtend, QuillWatch} from 'quill-image-extend-module'
    // require styles
    import 'quill/dist/quill.core.css'
    import 'quill/dist/quill.snow.css'
    import 'quill/dist/quill.bubble.css'

    Quill.register('modules/ImageExtend', ImageExtend)

    let qiniu = {
        'action': '//up-z2.qiniup.com/',
        'baseUrl': qiniu_url,
        'token': ''
    }

    let getToken = function () {
        getQiniuToken((token) => {
            qiniu.token = token
        })
    }

    getToken()

    export default {
        components: {quillEditor},
        props: ['content'],
        watch: {
            content(val) {
                this.insideContent = val
            },
            insideContent(val) {
                this.$emit('on-content-change', val)
            }
        },
        data() {
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
