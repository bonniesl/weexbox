<template>
    <div class="app">
        <top-com title="注册页"></top-com>
        <div class="formCommon">
            <div class="formCon">
                <div class="form_group">
                    <image class="formico" src="../images/regUserIco.png"></image>
                    <input class="input" type="text" placeholder="账号为4-20的数字、字母、下划线和中划线" v-model.trim='username' />
                </div>
                <div class="form_group">
                    <image class="formico" src="../images/regPassIco.png"></image>
                    <input class="input" type="password" placeholder="请输入登录密码" v-model.trim='password' />
                </div>
                <div class="form_group">
                    <image class="formico" src="../images/regPassIco.png"></image>
                    <input class="input" type="password" placeholder="请再次输入登录密码" v-model.trim="reppassword" />
                </div>
                <div class="form_group">
                    <image class="formico" src="../images/regPhoneIco.png"></image>
                    <input class="input" type="tel" placeholder="请输入手机号码" v-model.trim='phone' />
                </div>
                <div class="form_group">
                    <image class="formico" src="../images/regCodeIco.png"></image>
                    <input class="input" type="text" v-model.trim="validatxt"  placeholder="请输入图形验证码" />
                    <div class="code_capats"  @click="getCaptcha"><image class="valPic" :src="valcode" ></image></div>
                </div>
                <div class="form_group">
                    <image class="formico" src="../images/regValIco.png"></image>
                    <input class="input" type="text" placeholder="请输入手机验证码" v-model.trim="codetxt" />
                    <button class="valadite_btn" :eeui="{text:btntxt,borderWidth:2,borderColor:'#ffbd58',disabled:counting}" @click="sendValidateCod"></button>
                </div>  
             </div>
             <div class="sub_btn" @click="signup">
                <image class="btnBg" src="../images/formBtn.png"></image>
                <text class="subTxt">提交</text>
            </div>
        </div>
        
    </div>
</template>

<script>
     import topCom from "../components/topCom";
    const eeui = app.requireModule('eeui');
    const endpoint = require("../backend/endpoint");
    const api = require("../backend/api");
    const modal = app.requireModule('modal');

    export default {
        data() { 
            return {
                username: "",
                password: "",
                reppassword: "",
                phone: "",
                time: 0,
                btntxt: "获取验证码",
                validatxt: "",
                codetxt: "",
                password: "",
                valcode: "",
                counting: false,
                loginchildStuts: {
                    loginShowValue: true,
                    regShowValue: false
                }
            }
        },
        components: {
            topCom
        },
        mounted() {
                     
        },

        methods: {
            signup() {
                if (!this._validateFrom()) return;
                let params = {
                    login_name: this.username,
                    phone: this.phone,
                    code:this.codetxt,
                    password: this.password,
                    passconfirm: this.reppassword
                };
                let self = this;
                api.post(endpoint.signup,params,function(res) {
                    if (res.code == 1) {
                        eeui.toast("注册成功!");
                        self.loginchildStuts.regShowValue = false;
                        self.loginchildStuts.loginShowValue = true;
                        eeui.openPage({
                            url: '../pages/index.js',
                            pageType: 'app',
                            params:{position:0}
                        });   
                    } else {
                        eeui.toast(res.mes);
                    }
                   
                })
                
            },
            sendValidateCod(){
                if (!this._validateFrom1()) return;
                let params= {authcode:this.validatxt};
                let self= this;
                 api.post(endpoint.checkauthcode,params,function(res) {
                     if(res.code==1){
                            let params={tel:self.phone};
                            api.post(endpoint.sendPhoneCodeByReg,params,function(res) {
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
                        });
                        eeui.toast(res.mes);
                    }
                     
                 })
            },
            getCaptcha(){
                let self = this
                api.ValidateCodeapi(function(valcode){
                    self.valcode= valcode
                });
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
                if (api.ylTrim(this.username).length <= 0) {
                    eeui.toast('账号不能为空！');
                    return false;
                }
                if (api.ylTrim(this.password).length <= 0) {
                    eeui.toast('密码不能为空！');
                    return false;
                }
                if (api.ylTrim(this.reppassword).length <= 0) {
                    eeui.toast('请再输入一次密码！');
                    return false;
                }
                if (this.repassword != this.ppassword) {
                    eeui.toast('两次密码不一致！');
                    return false;
                }
                if (api.ylTrim(this.phone).length <= 0) {
                    eeui.toast('手机号不能为空！');
                    return false;
                }
                return true;
            },
            _validateFrom1() {
                if (api.ylTrim(this.phone).length <= 0) {
                    eeui.toast('手机号不能为空！');
                    return false;
                }
                return true;
            }
        },
        computed: {
            
        },
        created() {
            let self = this
            api.ValidateCodeapi(function(valcode){
                self.valcode= valcode
            });
        }
    }
</script>

<style scoped>
    .app{
        flex: 1;
        background-color: #f7f7f7;
    }
    .formCommon{     
        flex:1;  
    }
    .formCon{
        padding: 0 30px;
        background-color: #ffffff;
    }
    .form_group{
        height:105px;
        border-style:solid;
        border-bottom-width:1px;
        border-bottom-color:#f4f4f4;
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
        height:105px;
        background-color: transparent;
        line-height: 105px;
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
    .sub_btn{
       margin-top:54px;
       width: 591px;
       height: 109px;
       position: relative;
       margin-left:70px;
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
</style>