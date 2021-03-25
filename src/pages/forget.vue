<template>
    <div class="app">
        <top-com title="忘记密码"></top-com>
        <div class="formCommon" v-if="prevshow">
            <div class="formCon">
                <div class="form_group">
                    <image class="formico" src="../images/regUserIco.png"></image>
                    <input class="input" type="text" placeholder="请输入注册的账号" v-model.trim="loginname" />
                </div>
                
             </div>
             <div class="sub_btn" @click="checkname">
                <image class="btnBg" src="../images/formBtn.png"></image>
                <text class="subTxt">下一步</text>
            </div>
        </div>
        <div class="formCommon" v-if="nextShow">
            <div class="gameC">
                <div class="tabPages"  :key="index" v-for="(item, index) in tabPages">
                    <div :class="[index === position ? 'nav-item-active' : 'nav-item']" @click="switchPage(item,index)">
                        <text class="navTxt">{{item.title}}</text>
                    </div>
                </div>
                    <tabbar
                    ref="reflectName"
                    class="tabbar"
                    :eeui="{ tabType: 'top', tabHeight: 0 }"
                    :tabPages="tabPages"
                    @pageSelected="pageSelected"></tabbar>
            </div>
            <div v-if="position==0">
                <div class="null_page" v-if="!phone">
                    <image class="nullPic" src="../images/null.png"></image>
                    <text class="nullTxt">您尚未绑定手机哦~</text>
                </div>
                <div v-if="phone">
                    <div class="formCon">
                        <div class="form_group">
                            <image class="formico" src="../images/regPhoneIco.png"></image>
                            <input class="input" type="tel" placeholder="请输入手机号码" v-model.trim="phone" v-if="disabled==true" />
                            <text class="input" v-if="disabled==false">{{phone}}</text>
                        </div>
                        <div class="form_group">
                            <image class="formico" src="../images/regCodeIco.png"></image>
                            <input class="input" type="text" placeholder="请输入图形验证码" v-model.trim="phoneInfo.validatxt" />
                            <div class="code_capat" @click="getCaptcha"><image class="valPic" :src="phoneInfo.valcode" ></image></div>
                        </div>
                        <div class="form_group">
                            <image class="formico" src="../images/regValIco.png"></image>
                            <input class="input" type="text" placeholder="请输入手机验证码" v-model.trim="phoneInfo.code" />
                            <button class="valadite_btn" :eeui="{text:phoneInfo.btntxt,borderWidth:2,borderColor:'#ffbd58',disabled:phoneInfo.counting}"  @click="sendValidateCod"></button>
                        </div>     
                        <div class="form_group">
                            <image class="formico" src="../images/regPassIco.png"></image>
                            <input class="input" type="password" placeholder="请输入新密码" v-model.trim="phoneInfo.password" />
                        </div> 
                    </div>
                    <div class="sub_btn" @click="savePasswordByPhone">
                        <image class="btnBg" src="../images/formBtn.png"></image>
                        <text class="subTxt">确认密码</text>
                    </div>
                </div>
            </div>
            <div v-if="position==1">
                <div class="null_page" v-if="!email">
                    <image class="nullPic" src="../images/null.png"></image>
                    <text class="nullTxt">您尚未绑定邮箱哦~</text>
                </div>
                <div v-if="email">
                    <div class="formCon">
                        <div class="form_group">
                            <image class="formico" src="../images/emailIco.png"></image>
                            <input class="input" type="text" placeholder="请输入邮箱账号" v-model.trim="email" v-if="disabled==true" />
                            <text class="input" v-if="disabled==false">{{email}}</text>
                        </div>
                        <div class="form_group">
                            <image class="formico" src="../images/regCodeIco.png"></image>
                            <input class="input" type="text" placeholder="请输入图形验证码" v-model.trim="emailInfo.validatxt" />
                            <div class="code_capat" @click="getCaptcha1"><image class="valPic" :src="emailInfo.valcode" ></image></div>
                        </div>
                        <div class="form_group">
                            <image class="formico" src="../images/regValIco.png"></image>
                            <input class="input" type="text" placeholder="请输入邮箱验证码" v-model.trim="emailInfo.code" />
                            <button class="valadite_btn" :eeui="{text:emailInfo.btntxt,borderWidth:2,borderColor:'#ffbd58',disabled:emailInfo.counting}" @click="sendValidateCodeLogin"></button>
                        </div>  
                        <div class="form_group">
                            <image class="formico" src="../images/regPassIco.png"></image>
                            <input class="input" type="password" placeholder="请输入新密码" v-model.trim="emailInfo.password" />
                        </div>     
                    </div>
                    <div class="sub_btn" @click="savePasswordByEmail">
                        <image class="btnBg" src="../images/formBtn.png"></image>
                        <text class="subTxt">确认密码</text>
                    </div>
                </div>
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
                position: 0,
                tabPages: [
                        {
                            tabName: 'phone',
                            title: '手机找回'
                        },
                        {
                            tabName: 'email',
                            title: '邮箱找回'
                        }
                ],
                comlogin:0,
                prevshow:true,
                nextShow:false,
                loginname:'',
                phone:'',
                email:'',
                phoneInfo:{
                    time:0,
                    btntxt:'获取验证码',
                    validatxt:'',
                    code:'',
                    password:'',
                    valcode:'',
                    counting:false
                    
                },
                emailInfo:{
                    time:0,
                    validatxt:'',
                    btntxt:'获取验证码',
                    code:'',
                    password:'',
                    valcode:'',
                    counting:false
                },
                    disabled:false,
                    nullImg:'' 
            }
        },
        components: {
            topCom
        },
        mounted() {
                     
        },

        methods: {
            checkname(){
                let params = {login_name:this.loginname};
                let self=this;
                api.post(endpoint.checkname,params,function(res) {
                    if (res.code == 1) {
                        self.prevshow=false;
                        self.nextShow=true;
                        self.phone=res.mes.phone;
                        self.email=res.mes.email;
                    } else{
                        eeui.toast(res.mes);   
                    }
                })
            },
            pageSelected(data) {
               this.position = data.position;
            },
            switchPage(item,index) {
                let self = this;
                this.position = index;
                this.$refs.reflectName.setCurrentItem(this.tabPages[index].tabName);
                if(index==0){
                     api.ValidateCodeapi(function(valcode){
                        self.phoneInfo.valcode= valcode;
                    });
                }else{
                    api.ValidateCodeapi(function(valcode){
                        self.emailInfo.valcode= valcode;
                    });
                }
                // eeui.clearAllCaches();
            },
            sendValidateCod(){
                let self = this;
                let params= {authcode:this.phoneInfo.validatxt};
                 api.post(endpoint.checkauthcode,params,function(res) {
                     if(res.code==1){
                        let params={tel:self.phone,login_name:self.loginname};
                         api.post(endpoint.sendValidateCode,params,function(res) {
                            if (res.code == 1) {
                                self.phoneInfo.counting = true;
                                self.phoneInfo.time = 60;
                                self.timer();
                                eeui.toast(res.mes); 
                            } else{
                                eeui.toast(res.mes);
                            }
                        })
                    }else{
                        api.ValidateCodeapi(function(valcode){
                            self.phoneInfo.valcode= valcode;
                        });
                        eeui.toast(res.mes);
                        
                    }
                 })
            },
            getCaptcha() {
                let self = this;
                api.ValidateCodeapi(function(valcode){
                    self.phoneInfo.valcode= valcode;
                });
            },
            getCaptcha1(){
                let self = this;
                api.ValidateCodeapi(function(valcode){
                    self.emailInfo.valcode= valcode;
                });
            },
            timer () {
                if (this.phoneInfo.time > 0) {
                        this.phoneInfo.time--;
                        this.phoneInfo.btntxt=this.phoneInfo.time+"s后重新获取";
                        setTimeout(this.timer, 1000);
                } else{
                        this.phoneInfo.time=0;
                        this.phoneInfo.btntxt="获取验证码";
                        this.phoneInfo.counting=false;
                }
            },
            timer1 () {
                if (this.emailInfo.time > 0) {
                        this.emailInfo.time--;
                        this.emailInfo.btntxt=this.emailInfo.time+"s后重新获取";
                        setTimeout(this.timer1, 1000);
                } else{
                        this.emailInfo.time=0;
                        this.emailInfo.btntxt="获取验证码";
                        this.emailInfo.counting=false;
                }
            },
            savePasswordByPhone(){
                let params={login_name:this.loginname,smscode: this.phoneInfo.code,password:this.phoneInfo.password}
                api.post(endpoint.savePasswordByPhone,params,function(res) {
                    
                    if(res.code==1){
                        eeui.toast(res.mes);
                        eeui.openPage({
                            url: '../pages/login.js',
                            pageType: 'app',
                            params:{position:0}
                        });
                    }else{
                       eeui.toast(res.mes);
                    }
                })
            },
            sendValidateCodeLogin(){
                let self =this;
                let params= {authcode:this.emailInfo.validatxt};
                api.post(endpoint.checkauthcode,params,function(res) {
                    if(res.code==1){
                        let params={email:self.email,login_name:self.loginname}
                        self.emailInfo.counting = true;
                                self.emailInfo.time = 60;
                                self.timer1();
                        api.post(endpoint.sendValidateCodeLogin,params,function(res) {
                            if(res.code==1){
                                
                                eeui.toast(res.mes);
                            }else{
                                eeui.toast(res.mes);
                            }
                        })
                    }else{
                        api.ValidateCodeapi(function(valcode){
                            self.emailInfo.valcode= valcode;
                        });
                         eeui.toast(res.mes);
                    }
                })
            },
            savePasswordByEmail(){
                let params={login_name:this.loginname,emailcode: this.emailInfo.code,password:this.emailInfo.password}
                api.post(endpoint.savePasswordByEmail,params,function(res) {
                    if(res.code==1){
                        eeui.toast(res.mes);
                        eeui.openPage({
                            url: '../pages/login.js',
                            pageType: 'app',
                            params:{position:0}
                        });
                    }else{
                       eeui.toast(res.mes);
                    }
                })
            }
        },
        computed: {
            
        },
        created() {
            let self = this;
            api.ValidateCodeapi(function(valcode){
                self.phoneInfo.valcode= valcode;
                self.emailInfo.valcode=valcode;
            });
        }
    }
</script>

<style scoped>
    .app{
        flex: 1;
        background-color: #f7f7f7;
    }
    .null_page{
         flex: 1;
         width: 750px;
        padding-top: 278px;
        align-items: center;
    }
    .nullPic{
        width:257px;
        height:276px; 
    }
    .nullTxt{
        font-size: 28px;
        padding-top: 12px;
        text-align: center;

    }
    .formCon{
        padding: 0 30px;
        background-color: #ffffff;
    }
    .gameC{
        background-color: #ffffff;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 0 30px;
    }
    .tabPages {
        flex:1;
        width: 750px;
        border-bottom-style: solid;
        border-bottom-color: #f4f4f4;
        border-bottom-width: 2px;
    }
    .nav-item{
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 88px; 
    }
    .nav-item-active{
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 88px;
         border-bottom-style: solid;
        border-bottom-color: #ffbd58;
        border-bottom-width: 4px;
    }
    .navTxt{
        font-size: 30px;
        color:#2a2a2a;
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
    .input:disabled{
        color: red;
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
       margin-top:97px;
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