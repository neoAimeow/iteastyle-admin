<template>
    <div id="app">
        <div class="home-container">
            <div class="home-left-side">
                <div class="menu is-dark" style="display:flex;flex-direction:column;">
                    <div style="height:100px;display:flex;align-items: center;justify-content: center;">
                        <router-link to="/"><img src="../assets/logo.png" style="height:50px;" alt=""></router-link>
                    </div>
                    <div>
                        <menus v-for="(section,key) in menus" :key="key" :label="key">
                            <menu-item v-for="(menu,index) in section" :key="index" :icon="menu.icon" :is-active="true"
                                       :to="{ path: menu.path, query: {}}">
                                <span>{{menu.title}}</span>
                                <menus slot="sub">
                                    <menu-item v-for="(submenu,index) in menu.subMenu" :key="index" :icon="submenu.icon"
                                               :is-active="true" :to="{ path: submenu.path, query: {}}">
                                        <span>{{submenu.title}}</span>
                                    </menu-item>
                                </menus>
                            </menu-item>
                        </menus>
                    </div>

                </div>
            </div>
            <div class="home-right-side">
                <div class="home-right-top">
                    <div class="top-title">{{ pageName }}</div>
                    <div class="top-user-info">
                        <p style="margin-right:10px;">欢迎您回来，{{userInfo.identifier}}:{{userInfo.nickname}}</p>
                    </div>
                    <div class="top-shutdown">
            <span class="icon is-medium">
                <i class="fa fa-power-off"></i>
              </span>
                    </div>

                </div>
                <div class="home-right-content">
                    <router-view></router-view>
                </div>
            </div>
        </div>
        <div class="home-footer">
            <p>Copyright © 2018 aimeow. All rights reserved.</p>
        </div>
    </div>
</template>

<script>
    import menus from '../common/menus'

    export default {
        name: 'Home',
        data() {
            return {
                menus: {},
                userInfo: {},
                pageName: String
            }
        },
        created() {
            this.menus = menus
            this.userInfo = {
                nickname: '映溪',
                identifier: 'Administration'
            }
            this.pageName = ''
        }
    }
</script>

<style lang="scss">
    $left-side-main-color: #313D4C;
    $left-side-assist-color: #2B3542;
    $right-side-top-color: white;
    $right-side-background-color: #F5F5FA;
    html,
    body,
    #app {
        width: 100%;
        height: 100%;
        font-family: PingFangSC-Light, helvetica, 'Heiti SC';
        display: flex;
        flex-direction: column;
    }

    .home-container {
        display: flex;
        flex-direction: row;
        width: 100%;
        height:96%;

        background-color: $right-side-background-color;
        .home-left-side {
            display: flex;
            flex-direction: column;
            height: 100%;
            min-width: 200px;
            //min-height:900px;
            height: auto;
            // max-width: 300px;
            width: 15%;
            background-color: $left-side-main-color;
        }
        .home-right-side {
            display: flex;
            width: 85%;
            flex-direction: column;
            //height: 100%;
            .home-right-top {
                background-color: $right-side-top-color;
                // color: white;
                //position: relative;
                display: flex;
                //height: 40px;
                //line-height: 25px;
                padding: 10px 0 10px 0;
                .top-title {
                    align-items: center;
                    display: flex;
                    margin-left: 30px;
                    width: 50%;
                }
                .top-user-info {
                    width: 45%;
                    min-width: 240px;
                    //height: 40px;
                    display: flex;
                    justify-content: flex-end;
                    text-align: right;
                    align-items: center;
                }
                .top-shutdown {
                    width: 4%;
                    margin-right: 10px;
                    align-items: center;
                    display: flex;
                    justify-content: flex-end;
                }
            }
            .home-right-content {
                //position: absolute;
                //top: 0px;
                //bottom: 0px;
                //height: auto;
                //margin-bottom: 40px;
                background-color: $right-side-background-color;
            }
        }
    }

    .home-footer {
        background-color: $left-side-assist-color;
        color: white;
        line-height: 60px;
        text-align: center;
        line-height: 20px;
        height: 4%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>