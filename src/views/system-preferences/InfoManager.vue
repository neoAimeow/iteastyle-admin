<template>
    <div class="info-manager-container">
        <div style="font-size:30px;padding-top:50px;margin-left:2%;">
            信息管理
        </div>
        <div class="info-manager-form">
            <div class="info-manager-form-cell">
                <span>公司名字</span>
                <input v-model="name" class="input" type="text" placeholder="Company Name">
            </div>

            <div class="info-manager-form-cell">
                <span>邮编</span>
                <input v-model="postcode" class="input" type="text" placeholder="Postcode">
            </div>
            <div class="info-manager-form-cell">
                <span>电话号码</span>
                <input v-model="telephone" class="input" type="text" placeholder="Telephone Number">
            </div>
            <div class="info-manager-form-cell">

                <span>手机号码</span>
                <input v-model="phone" class="input" type="text" placeholder="Phone Number">
            </div>
            <div class="info-manager-form-cell">
                <span>邮箱地址</span>
                <input v-model="mail" class="input" type="text" placeholder="Mail Address">
            </div>
            <div class="info-manager-form-cell">
                <span>网站url</span>
                <input v-model="weburl" class="input" type="text" placeholder="Web Url">
            </div>

            <div class="info-manager-form-cell">
                <span>视频url</span>
                <input v-model="videoUrl" class="input" type="text" placeholder="Video Url">
            </div>

            <div class="info-manager-form-cell">
                <span>公司故事</span>
                <textarea v-model="story" class="textarea" placeholder="story"></textarea>
            </div>


            <div class="info-manager-form-cell">
                <a class="button is-danger is-active" @click="submitButtonClicked">修改</a>
                <a class="button is-danger is-active" @click="reset">重置</a>
            </div>

        </div>

    </div>
</template>

<script>

    export default {
        // apollo: {
        //   companyInfo: {
        //     query() {
        //       return companyInfoGQL;
        //     },
        //     result({
        //       data,
        //       loading,
        //       networkStatus
        //     }) {
        //       console.log(data);
        //       this.reset(data.companyInfo);
        //     },
        //   },
        // },
        data() {
            return {
                companyInfo: {},
                name: '',
                postcode: '',
                phone: '',
                telephone: '',
                mail: '',
                weburl: '',
                story: '',
                videoUrl: ''
            }
        },
        methods: {
            reset(data) {
                this.name = data.name
                this.postcode = data.postcode
                this.phone = data.phone
                this.telephone = data.telephone
                this.mail = data.mail
                this.weburl = data.weburl
                this.story = data.story
                this.videoUrl = data.videoUrl
            },
            resetButtonClick() {
                this.reset(this.postById)
            },
            submitButtonClicked() {
                if (this.name == '' || this.postcode == '' || this.phone == '' || this.telephone == '' || this.mail == '' || this.weburl == '' || this.story == '' || this.videoUrl == '') {
                    this.$notify({
                        title: '提示',
                        message: '参数不能为空'
                    })
                    return
                }
                const name = this.name
                const postcode = this.postcode
                const phone = this.phone
                const telephone = this.telephone
                const mail = this.mail
                const weburl = this.weburl
                const story = this.story
                const videoUrl = this.videoUrl
                console.log(name)
                // return this.$apollo.mutate({
                //     mutation: updateInfoGQL,
                //     variables: {
                //       input: {
                //         name,
                //         postcode,
                //         phone,
                //         telephone,
                //         mail,
                //         weburl,
                //         story,
                //         videoUrl
                //       },
                //     },
                //   })
                //   .then(() => {
                //     this.$notify({
                //       title: '成功',
                //       message: '修改成功',
                //       type: 'success'
                //     });
                //   })
                //   .catch(err => {
                //     this.$notify.error({
                //       title: '错误',
                //       message: '修改失败'
                //     });
                //   })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .info-manager-container {
        margin: 2%;
        background-color: white;
        padding-bottom: 20px;
        .info-manager-form {
            display: flex;
            flex-direction: column;
            max-width: 600px;
            padding: 30px 0 30px 30px;
            .info-manager-form-cell {
                margin-top: 18px;
            }
        }
    }
</style>
