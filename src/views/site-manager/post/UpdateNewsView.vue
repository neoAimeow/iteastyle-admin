<template>
    <div class="create-news-container">

        <div style="font-size:30px;padding-top:50px;margin-left:2%;">
            {{type != 'update'?'新建文章':'编辑文章'}}
        </div>

        <div class="text-field" style="">
            <span>文章封面</span>
            <div class="upload-image-container">
                <el-upload class="avatar-uploader" action="//up-z2.qiniup.com/"
                           :on-success="handleAvatarSuccess"
                           :on-error="handleError"
                           :before-upload="beforeAvatarUpload"
                           :show-file-list="false"
                           :data="uploadParam">
                    <img v-if="imageUrl" :src="qiniu_url + imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>

                    <!--<i class="el-icon-plus avatar-uploader-icon"></i>-->
                </el-upload>
            </div>
        </div>

        <div class="text-field" style="">
            <span>文章标题</span>
            <input class="input" type="text" placeholder="标题" v-model="title">
        </div>

        <div class="text-field" style="">
            <span>文章摘要</span>
            <input class="input" type="text" placeholder="摘要" v-model="summary">
        </div>

        <Editor style="width:96%;margin-left:2%;height:300px;padding-top:20px;" :content="content"
                @on-content-change="onContentChange"></Editor>

        <div style="width:100%;margin-top:70px;margin-bottom:30px;display:flex;justify-content:flex-end;">
            <a class="button is-info is-active" style="margin-right:10px;" @click="resetButtonClick">重置</a>
            <a class="button is-info is-active" style="margin-right:2%;" @click="submitButtonClicked">提交</a>
        </div>

    </div>
</template>

<script>
    import Editor from '../../common/Editor'
    import {
        getQiniuToken,
        showAlert,
        showNotify,
        createRequest,
        updateRequest,
        getDataById,
        qiniu_url
    } from '@/common/util.js';

    export default {
        components: {Editor},
        data() {
            return {
                type: 'create',
                data: {},
                uploadParam: {},
                id: '',
                title: '',
                content: '',
                summary: '',
                imageUrl: '',
                qiniu_url: ''
            }
        },

        created() {
            this.type = this.$route.query.type;
            this.id = this.$route.query.id;

            this.qiniu_url = qiniu_url;

            if (this.type === 'update') {
                this.request()
            }

            getQiniuToken((token) => {
                this.uploadParam.token = token
            })
        },

        methods: {
            request() {
                getDataById(this.id, 'post').then((res) => {
                    this.data = res;
                    this.reset(this.data);
                    console.log(res);
                })
            },

            onContentChange(val) {
                this.content = val
            },

            reset(data) {
                this.id = data.id;
                this.title = data.title;
                this.content = data.content;
                this.summary = data.summary;
                this.imageUrl = data.imageUrl;
            },

            handleError(res) {
                showNotify('上传失败' + res);
            },

            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg'
                const isPNG = file.type === 'image/png'
                if (!isJPG && !isPNG) {
                    showNotify('上传图片只能是 JPG/PNG 格式!');
                }
                return (isJPG || isPNG)
            },

            handleAvatarSuccess(res, file) {
                if (res.key != null) {
                    this.imageUrl = res.key;
                }
            },

            resetButtonClick() {
                this.reset(this.postById)
            },

            submitButtonClicked() {
                if (this.title === '' || this.content === '') {
                    showNotify('标题和内容不能为空');
                    return;
                }

                let params = {
                    title: this.title,
                    content: this.content,
                    summary: this.summary,
                    imageUrl: this.imageUrl
                }

                console.log(params);
                
                if (this.type === 'create') {
                    createRequest(params, 'post');
                } else {
                    params.id = this.id;
                    updateRequest(params, 'post');
                }
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

    .avatar-uploader {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        margin-right: 5px;
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
            margin-right: 5px;
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
