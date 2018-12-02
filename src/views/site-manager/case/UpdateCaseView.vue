<template>
    <div class="update-case-container">

        <div style="font-size:30px;padding-top:50px;margin-left:2%;">
            {{type === 'create'?'新增产品展示':'修改产品展示'}}
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
                <el-upload class="avatar-uploader"
                           action="//up.qbox.me/"
                           :multiple="true"
                           :on-success="handleAvatarSuccess"
                           :on-error="handleError"
                           :before-upload="beforeAvatarUpload"
                           :on-progress="uploadOnProgress"
                           :data="uploadParam"
                >
                    <i class="el-icon-plus avatar-uploader-icon"></i>

                </el-upload>

                <div v-for="(data, key) in imgArr" :key="key" class="upload-image-cell" :src="data">
                    <img :src="qiniu_url + data" style="width:100px;height:100px;" @click="imageButtonClick(key)">
                </div>
            </div>

        </div>

        <Editor style="width:96%;margin-left:2%;height:300px;padding-top:20px;" :content="content"
                @on-content-change="onContentChange"></Editor>

        <div style="width:100%;margin-top:70px;margin-bottom:30px;display:flex;justify-content:flex-end;">
            <a class="button is-info is-active" style="margin-right:10px;" @click="reset">重置</a>
            <a class="button is-info is-active" style="margin-right:2%;" @click="submitButtonClick">提交</a>
        </div>

    </div>
</template>

<script>
    import Editor from '../../common/Editor'
    import {getQiniuToken, showAlert, showNotify, qiniu_url} from '../../../common/util.js'

    export default {
        components: {Editor},
        created() {
            this.data.type = this.$route.query.type;
            if (this.data.type != 'create') {
                this.request()
            }

            this.getTypes()
            this.getToken()
        },
        data() {
            return {
                type: 'create',
                title: '',
                uploadParam: {},
                data: {},
                imgArr: [],
                caseType: [],
                selectTypeName: '',
                content: ''
            }
        },

        methods: {
            onContentChange(val) {
                this.content = val
            },

            request() {
                var that = this
                this.$ajax.get('/service/getCaseById', {
                    params: {
                        caseId: this.$route.query.id
                    }
                })
                    .then(function (response) {
                        that.data = response.data.model
                        that.title = response.data.model.title
                        that.imgArr = response.data.model.imageArr
                        that.selectTypeName = response.data.model.typeName
                    })
            },

            getTypes() {
                var that = this
                this.$ajax.get('/service/getData', {params: {
                        key:'caseType'
                    }})
                    .then(function (response) {
                        that.caseType = response.data.model
                    })
            },

            getToken() {
                getQiniuToken((token) => {
                    this.uploadParam.token = token
                })
            },

            handleError(res) {
                showNotify('上传失败' + res);
            },

            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg'
                const isPNG = file.type === 'image/png'
                if (!isJPG && !isPNG) {
                    showNotify('上传头像图片只能是 JPG/PNG 格式!');
                }
                return (isJPG || isPNG)
            },

            handleAvatarSuccess(res, file) {
                if (res.key != null) {
                    this.imgArr.push('http://pazp3d0xt.bkt.clouddn.com/' + res.key)
                }
            },

            reset() {
                this.title = this.data.title

                const type = this.data.type
                let typeName = ''
                this.caseType.forEach(element => {
                    if (element.type === type) {
                        typeName = element.typeName
                    }
                })

                this.selectTypeName = typeName
                this.imgArr = this.data.imageArr
            },

            submitButtonClick() {
                if (this.title === '' || this.imgArr.length === 0) {
                    showNotify('标题和图片不能为空');
                    return;
                }

                let type = 0
                this.caseType.forEach(element => {
                    if (element.typeName === this.selectTypeName) {
                        type = element.type
                    }
                })

                let param = {
                    id: this.$route.query.id,
                    title: this.title,
                    imageArr: this.imgArr,
                    type: type
                }

                var that = this
                this.$ajax.post('/admin/update', {
                    param: JSON.stringify(param),
                    type: 'case'
                })
                    .then(function (response) {
                        console.log(response)
                        if (response.data.success) {
                            showNotify('修改成功');
                        }
                    })
                    .catch(function (response) {
                        showNotify('修改失败');
                    })
            },

            imageButtonClick(key) {
                showAlert('是否删除该图片？')
                    .then((value) => {
                        console.log(value);
                        showNotify('删除成功');
                    }).catch(() => {
                    showNotify('已取消');
                })
                // this.$confirm('是否删除该图片？', '提示', {
                //     confirmButtonText: '确定',
                //     cancelButtonText: '取消',
                //     type: 'info',
                //     beforeClose: (action, instance, done) => {
                //         if (action === 'confirm') {
                //             let imageArray = this.imgArr
                //             this.imgArr = imageArray.splice(key, 1)
                //         }
                //         done()
                //     }
                // }).then(() => {
                //     showNotify('删除成功');
                // }).catch(() => {
                //     showNotify('已取消');
                // })
            }

        }
    }
</script>

<style lang="scss" scoped>
    .update-case-container {
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
