<template>
    <div class="loginContainer">
        <div class="loginBgimg">
            <img src="../assets/loginBg.jpg" alt="">
        </div>
        <form class="loginFrame">
            <div class="account">
                <el-input v-model="input" placeholder="请输入账号" style="margin:10px 0;"></el-input>
                <el-input v-model="input" placeholder="请输入密码" style="margin:10px 0;"></el-input>
                <el-checkbox v-model="checked" style="margin:10px 0;">Remember me</el-checkbox>
            </div>
            <div class="btn">
                <el-button type="primary">走你</el-button>
            </div>
        </form>
    </div>
</template>

<style lang="scss">
*{
    margin: 0;
    padding: 0;
}
.loginContainer{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
.loginBgimg{
    filter: blur(4px);
}
.loginFrame{
    border: 1px solid red;
    height: 200px;
    width: 300px;
    position: absolute;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.loginFrame > .account{
    border: 1px solid red;
    display: flex;
    flex-direction: column;
}
</style>
