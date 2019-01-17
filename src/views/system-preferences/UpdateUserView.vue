<template>
    <div class="create-user-container">

        <div style="font-size:30px;padding-top:50px;margin-left:2%;">
            编辑用户
        </div>

        <div class="text-field" style="">
            <span>用户名</span>
            <input class="input" type="text" placeholder="用户名" v-model="username">
        </div>
        <div class="text-field" style="">
            <span>用户昵称</span>
            <input class="input" type="text" placeholder="用户昵称" v-model="usernick">
        </div>
        <div class="text-field" style="">
            <span>用户真名</span>
            <input class="input" type="text" placeholder="用户真名" v-model="fullname">
        </div>
        <div class="text-field" style="">
            <span>手机号</span>
            <input class="input" type="text" placeholder="手机号" v-model="phone">
        </div>
        <div class="text-field" style="">
            <span>邮箱地址</span>
            <input class="input" type="text" placeholder="邮箱地址" v-model="mail">
        </div>

        <div class="text-field" style="">
            <span>身份选择</span>
            <radio-group v-model="identifier">
                <radio-button val="owner">owner</radio-button>
                <radio-button val="admin">admin</radio-button>
                <radio-button val="editor">editor</radio-button>
                <radio-button val="visitor">visitor</radio-button>
            </radio-group>
        </div>

        <div style="width:100%;margin-top:20px;margin-bottom:30px;margin-right:2%;display:flex;justify-content:flex-end;">
            <a class="button is-info is-active" style="margin-right:10px;background-color:#3c81df;" @click="resetButtonClick">重置</a>
            <a class="button is-info is-active" style="margin-right:2%;background-color:#3c81df;" @click="submitButtonClicked">提交</a>
        </div>

    </div>
</template>

<script>

export default {
  data () {
    return {
      adminUsers: {},
      id: '',
      username: '',
      usernick: '',
      identifier: '',
      mail: '',
      phone: '',
      fullname: ''
    }
  },

  methods: {
    reset (data) {
      this.id = data.id
      this.username = data.username
      this.usernick = data.usernick
      this.identifier = data.identifier
      this.mail = data.mail
      this.phone = data.phone
      this.fullname = data.fullname
    },
    resetButtonClick () {
      this.reset(this.adminUserById)
    },
    submitButtonClicked () {
      if (this.username == '' || this.usernick == '' || this.identifier == '' || this.mail == '' || this.phone == '' || this.fullname == '') {
        this.$notify.open({
          content: '参数不能为空',
          type: 'danger'
        })
        return
      }
      const id = this.id
      const username = this.username
      const usernick = this.usernick
      const identifier = this.identifier
      const mail = this.mail
      const phone = this.phone
      const fullname = this.fullname

    }
  }

}
</script>

<style lang="scss" scoped>
    .create-user-container {
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
