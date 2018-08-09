<template>
    <div class="loginContainer">
        <div class="loginBgimg">
            <img src="../assets/loginBg.jpg" alt="">
        </div>
        <form class="loginFrame">
            <div class="account">
                <input type="text" value="账号" style="display:block;width:200px;height:50px;">
                <input type="password" value="密码" style="display:block;width:200px;height:50px;">
            </div>
            <div class="btn">
                <input type="button" value="提交">
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
