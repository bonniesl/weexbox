<template>
    <div class="app">
        <top-com title="登录"></top-com>
        <div class="formWrap">
            <text class="formTit">用户名</text>
            <div class="form_group">
                <image class="formico" src="../images/userico.png"></image>
                <input class="input" type="text" placeholder="账号为4~20位的数字、字母、下划线和中划线" v-model.trim='username' />
            </div>
            <text class="formTit">密码</text>
            <div class="form_group">
                <image class="formico" src="../images/passico.png"></image>
                <input class="input" type="password" placeholder="密码为6~20位的数字、字母、下划线和中划线" v-model.trim='pwd' />
            </div>
            <div class="acttt">
                <text class="active_enter" @click="openPhoneLogin">切换至手机登录</text>
            </div>
            <div class="sub_btn" @click="login">
                <image class="btnBg" src="../images/formBtn.png"></image>
                <text class="subTxt">登录</text>
            </div>
            <div class="to_log">
                <text class="tiptxt regstxt" @click="openReg">注册账号</text>
                <text class="tiptxt">|</text>
                <text class="tiptxt forgetxt" @click="openForget">忘记密码?</text>
            </div>
        </div>
    </div>
</template>

<script>
    import topCom from "../components/topCom";
    const eeui = app.requireModule('eeui');
    const navigator = app.requireModule('navigator');
    const endpoint = require("../backend/endpoint");
    const api = require("../backend/api");
    const globalEvent = weex.requireModule('globalEvent');

    export default {
        data() { 
            return {
               username:"",
               pwd:''
            }
        },
        components: {
            topCom
        },
        mounted() {
                     
        },

        methods: {
            login(){
                if (!this._validateFrom()) return
                let params = {
                    login_name:this.username,
                    password:this.pwd
                };
                 let self = this;
                 api.post(endpoint.signin,params,function(res) {
                     if(res.code==2){
                         eeui.toast(res.mes);
                     }else if(res.code==1){   
                        if(res.mes.code == 1) {
                                let info = {
                                    username:self.username,  
                                    uid: res.mes.uid
                                }
                                eeui.toast(res.mes.mes);
                                eeui.openPage({
                                    url: '../pages/index.js',
                                    pageType: 'app'
                                });
                               
                        }else{
                                eeui.toast(res.mes.mes);
                        }
                    }
                     
                 })
            },
            openPhoneLogin() {
                eeui.openPage({
                    url: '../pages/phoneLogin.js',
                    pageType: 'app'
                });
            },
            openReg() {
                eeui.openPage({
                    url: '../pages/register.js',
                    pageType: 'app'
                });
            },
            openForget() {
                eeui.openPage({
                    url: '../pages/forget.js',
                    pageType: 'app'
                });
            },
            _validateFrom() {
                if (api.ylTrim(this.username).length <= 0) {
                    eeui.toast('账号不能为空！');
                    return false
                }
                if (api.ylTrim(this.pwd).length <= 0) {
                    eeui.toast('密码不能为空！');
                    return false
                }
            
                return true
            }
        },
        computed: {
            
        },
        created() {  

            let platform = WXEnvironment.platform.toLowerCase();
            if(platform==='ios'){

            }else{
                eeui.setPageBackPressed(eeui.getPageInfo().pageName, function(){
                    eeui.toastClose();
                     eeui.openPage({
                        url: '../pages/index.js',
                        pageType: 'app',
                        params:{position:0}
                    });
                });
            }
           	
        }
    }
</script>

<style scoped>
    .app{
        flex: 1;
        background-color: #fff;
    }
    .formWrap{
        padding: 94px 80px 0; 
        flex:1;
    }
    .formTit{
        color:#666666;
        font-size:30px;
        margin-bottom:28px;
    }
    .form_group{
        margin-bottom:70px;
        background-color: #f6f6f6;
        border-radius: 10px;
        width: 590px;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    
    .formico{
        width:36px;
        height:36px;
        margin:0 20px;
    }
    .input{
        height:86px;
        background-color: transparent;
        line-height: 86px;
        font-size:24px;
        color: #0d0f13;
        flex: 1;
    }
    .valadite_btn{
        width:176px;
        height:65px;
        background-color: #fff;
        line-height: 65px;
        text-align: center;
        color: #ffbd58;
        font-size:22px;
        border-radius: 8px;
        margin-right:26px;
    }
    .acttt{
        flex-direction:row;
        justify-content:flex-end
    }
    .active_enter{
        font-size:30px;
        text-align: right;
        color: #ffbd58;
        width: 221px;
    }
    .sub_btn{
       margin-top:54px;
       width: 591px;
       height: 109px;
       position: relative;
    }
    .btnBg{
       width: 591px;
       height: 109px;
       position: absolute;
       top: 0;
       left: 0;
    }
    .subTxt{
        font-size:34px;
        color: #ffffff;
        text-align: center;
        line-height: 109px;
    }
    .to_log{
        width: 590px;
        flex-direction: row;
        align-items: center;
        padding-top:40px;
        justify-content: space-between;
    }
    .tiptxt{
        color:#bbbbbb;
        font-size:30px; 
    }
    .regstxt{
        padding-left:109px;
    }
    .forgetxt{
        padding-right:109px;
    }
</style>