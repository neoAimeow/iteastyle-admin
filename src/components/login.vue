<template>
    <div class="loginContainer">
        <div class="loginFrame">
            <div class="decorate-container">
                <div class="decorate-item" style="background-color:#67BAB3;"></div>
                <div class="decorate-item" style="background-color:#0A3B3B;"></div>
                <div class="decorate-item" style="background-color:#00BA74;"></div>
                <div class="decorate-item" style="background-color:#F0B36A;"></div>
            </div>
            <div class="top-container">
                <p style="font-size:30px; padding: 30px 10px 10px 40px;">登录后台</p>
            </div>
            <form class="bottom-container">

                <p class="control has-icon" style="margin-top:30px;width: 70%;">
                    <input class="input" type="email" placeholder="Email">
                    <i class="fa fa-envelope"></i>
                </p>
                <p class="control has-icon" style="width: 70%">
                    <input class="input" type="password" placeholder="Password">
                    <i class="fa fa-lock"></i>
                </p>
                <p class="control" style="margin-top:10px;width: 70%">
                    <router-link to="/home"><button class="button is-info" style="margin-top:10px;width: 47%">登录</button></router-link>
                    <button class="button is-danger" style="margin-top:10px;width: 47%;margin-left:6%;">忘记密码</button>
                </p>
            </form>
        </div>


    </div>
</template>

<style lang="scss">
    * {
        margin: 0;
        padding: 0;
    }

    .loginContainer {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: url(https://wallpapers.wallhalla.com/zqZnXpNNCz71_x5IlE8W_0f55cf95/aHR0cHM6Ly93YWxsLmFscGhhY29kZXJzLmNvbS9iaWcucGhwP2k9MzQ4MjA1) no-repeat;
        background-size: auto auto;
        position: absolute;
        z-index: 1;
    }

    .loginFrame {
        width: 350px;
        height: 300px;
        display: flex;
        flex-direction: column;
        background-color: white;
        z-index: 3;
        box-shadow:0px 10px 130px #141414;
    }

    .decorate-container {
        width: 100%;
        height:5px;
        display: flex;
        flex-direction: row;
    }

    .decorate-item {
        width:25%;
    }

    .top-container {
        color:black;
        width: 100%;
        height: 80px;
    }

    .bottom-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

</style>
