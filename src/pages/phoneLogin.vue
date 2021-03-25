<template>
    <div class="app">
        <top-com title="登录"></top-com>
        <div class="formWrap">
            <div class="form_group">
                <image class="formico" src="../images/phoneico.png"></image>
                <input class="input" type="text" placeholder="请输入手机号码"  v-model.trim='phone' />
            </div>
            <div class="form_group">
                <image class="formico" src="../images/yzmico.png"></image>
                <input class="input" type="text" placeholder="请输入图形验证码" v-model.trim="validatxt" />
                <div class="code_capat" @click="getCaptcha"><image class="valPic" :src="valcode" ></image></div>
            </div>
            <div class="form_group">
                <image class="formico" src="../images/codeico.png"></image>
                <input class="input" type="text" placeholder="请输入手机验证码" v-model.trim="code" />
                <button class="valadite_btn" :eeui="{text:btntxt,borderWidth:2,borderColor:'#ffbd58',disabled:counting}" @click="sendValidateCod"></button>
            </div>
            <div class="acttt">
                <text class="active_enter" @click="openLogin">切换至账号登录</text>
            </div>
            <div class="sub_btn">
                <image class="btnBg" src="../images/formBtn.png"></image>
                <text class="subTxt" @click="login">手机登录</text>
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
    const endpoint = require("../backend/endpoint");
    const api = require("../backend/api");

    export default {
        data() { 
            return {
               phone:'',
                time:0,
                btntxt:'获取验证码',
                validatxt:'',
                code:'',
                password:'',
                valcode:'',
                counting:false
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
                    phone:this.phone,
                    code:this.code
                };
                let self = this;
                api.post(endpoint.loginPhoneReg,params,function(res) {
                    if (res.code == 1) {
                        eeui.toast(res.mes.mes);
                        eeui.openPage({
                            url: '../pages/index.js',
                            pageType: 'app',
                            params:{position:0}
                        });                  
                    }else{
                        eeui.toast(res.mes);  
                    }
                })
            },
            sendValidateCod(){
                let self = this;
                if (!this._validateFrom1()) return;
                let params= {authcode:this.validatxt};
                api.post(endpoint.checkauthcode,params,function(res) {
                    if(res.code==1){
                        let params={tel:self.phone};
                        api.post(endpoint.sendPhoneCodeByLogin,params,function(res) {
                            if (res.code == 1) {
                                eeui.toast(res.mes);
                                self.counting = true;
                                self.time = 60;
                                self.timer(); 
                            } else{
                                eeui.toast(res.mes); 
                            }
                        })
                    }else{
                        api.ValidateCodeapi(function(valcode){
                            self.valcode= valcode
                        })
                        eeui.toast(res.mes);
                        
                    }
                })
            },
             getCaptcha() {
                let self = this
                api.ValidateCodeapi(function(valcode){
                    self.valcode= valcode
                })
            },
            timer () {
                if (this.time > 0) {
                        this.time--;
                        this.btntxt=this.time+"s后重新获取";
                        setTimeout(this.timer, 1000);
                } else{
                        this.time=0;
                        this.btntxt="获取验证码";
                        this.counting=false;
                }
            },
            _validateFrom() {
                if (api.ylTrim(this.phone).length <= 0) {
                     eeui.toast('账号不能为空！');
                    return false
                }
            
                return true
            },
            _validateFrom1() {
                if (api.ylTrim(this.phone).length <= 0) {
                    eeui.toast('手机号不能为空！');
                    return false;
                }
                return true;
            },
            openLogin() {
                eeui.openPage({
                    url: '../pages/login.js',
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
            }
        },
        computed: {
            
        },
        created() {
            let self = this
            api.ValidateCodeapi(function(valcode){
                self.valcode= valcode
            })
        }
    }
</script>

<style scoped>
    .app{
        flex: 1;
        background-color: #fff;
    }
    .formWrap{
        padding: 102px 80px 0; 
        flex:1;
    }
    .form_group{
        margin-bottom:52px;
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
        font-size:28px;
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
    .valPic{
        width: 113px;
        height: 47px;
    }
    .acttt{
        flex-direction:row;
        justify-content:flex-end
    }
    .active_enter{
        padding-top:18px;
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