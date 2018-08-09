<template>
    <div class="loginContainer">
        <div class="loginBgimg">
            <img src="../assets/loginBg.jpg" alt="">
        </div>
        <form class="loginFrame">
            <p class="control has-icon">
                <input class="input" type="email" placeholder="Email">
                <i class="fa fa-envelope"></i>
            </p>
            <p class="control has-icon">
                <input class="input" type="password" placeholder="Password">
                <i class="fa fa-lock"></i>
            </p>
            <p class="control">
                <label class="checkbox">
                    <input type="checkbox">
                    Remember me
                </label>
            </p>
            <p class="control">
                <button class="button is-success">
                    Login
                </button>
            </p>
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
    position: absolute;
}
</style>
