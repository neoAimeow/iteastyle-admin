<template>
    <div class="loginContainer">
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
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(../assets/loginBg.jpg) no-repeat;
    background-size:100% 100%;
    position:absolute;
    z-index: 1;
}
.loginContainer::after{
    content: "";
    width:100%;
    height:100%;
    position: absolute;
    left:0;
    top:0;
    background: inherit;
    filter: blur(5px);
    z-index: 2;
}
.loginFrame{
    width: 300px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: rgb(212, 210, 210);
    border-radius: 5px;
    box-shadow: 3px 3px 5px 2px rgba(173,170,173,0.75);
    padding: 10px;
    z-index: 3;
}
</style>
