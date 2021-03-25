<template>
    <div class="app">
        <top-com :title=txt></top-com>
        <div class="formCommon" v-if="prevBind">
            <div class="phoneC">
                <text class="tel">绑定手机号：</text>
                <input class="input" type="text" v-model.trim="tel"  placeholder="请输入手机号" v-if="disabled==false">
                <text class="input" v-if="disabled==true">{{tel}}</text>
            </div>
            <div class="formCon">
                <div class="form_group">
                    <image class="formico" src="../images/regCodeIco.png"></image>
                    <input class="input" type="text" placeholder="请输入图形验证码" v-model.trim="validatxt" />
                    <div class="code_capats"  @click="getCaptcha"><image class="valPic" :src="valcode" ></image></div>
                </div>
                <div class="form_group">
                    <image class="formico" src="../images/regValIco.png"></image>
                    <input class="input" type="text" placeholder="请输入手机验证码"  v-model="valdatecode" />
                    <button class="valadite_btn" :eeui="{text:btntxt,borderWidth:2,borderColor:'#ffbd58',disabled:counting}"  @click="sendValidateCode" v-if="bindFalse"></button>
                    <button class="valadite_btn" :eeui="{text:btntxt,borderWidth:2,borderColor:'#ffbd58',disabled:counting}"  @click="sendChangeValidateCode" v-if="bindTrue"></button>
                </div>      
            </div>
            <div class="sub_btn" v-if="bindFalse" @click="phoneBind" >
                <image class="btnBg" src="../images/formBtn.png"></image>
                <text class="subTxt">提交</text>
            </div>
            <div class="sub_btn" v-if="bindTrue" @click="checkChangeSMSCode" >
                <image class="btnBg" src="../images/formBtn.png"></image>
                <text class="subTxt">下一步</text>
            </div>
            
        </div>
        <div class="formCommon" v-if="nextBind">
            <div class="formCon">
                <div class="form_group">
                    <image class="formico" src="../images/regPhoneIco.png"></image>
                    <input class="input" type="tel" placeholder="请输入手机号码" v-model.trim="repassTel" />
                </div>
                <div class="form_group">
                    <image class="formico" src="../images/regCodeIco.png"></image>
                    <input class="input" type="text" placeholder="请输入图形验证码" v-model.trim="validatxt1" />
                    <div class="code_capats"  @click="getCaptcha1"><image class="valPic" :src="valcode1" ></image></div>
                </div>
                <div class="form_group">
                    <image class="formico" src="../images/regValIco.png"></image>
                    <input class="input" type="text" placeholder="请输入手机验证码" v-model="repassvalidatxt" />
                    <button class="valadite_btn" :eeui="{text:btntxt1,borderWidth:2,borderColor:'#ffbd58',disabled:counting1}" @click="sendNewValidateCodeBySms"></button>
                </div>      
            </div>
            <div class="sub_btn" @click="editphone">
                <image class="btnBg" src="../images/formBtn.png"></image>
                <text class="subTxt">提交</text>
            </div>
        </div>
    </div>
</template>
<script>
    import topCom from "../components/topCom";
    import nav from "../components/nav";
    const eeui = app.requireModule('eeui');
    const endpoint = require("../backend/endpoint");
    const api = require("../backend/api");

    export default {
        data() { 
            return {
                tel:'',
                valcode:'',
                valcode1:'',
                valcode2:'',
                validatxt:'',
                validatxt1:'',
                valdatecode:'',
                txt:'手机绑定',
                time:0,
                time1:'',
                btntxt:'获取验证码',
                btntxt1:'获取验证码',
                bindFalse:false,
                bindTrue:false,
                counting:false,
                counting1:false,
                disabled:false,
                prevBind:true,
                nextBind:false,
                sign:'',
                repassTel:'',
                repassvalidatxt:''
            }
        },
        components: {
            topCom,
            nav 
        },
        mounted() {
                     
        },

        methods: {
            getuserInfo(){
                let self = this;
                api.get(endpoint.getuserInfo,{},function(res) {
                    if(res.code==1){
                        self.uid=res.mes.uid;
                    }
                })	
            },
           getCaptcha() {	
               let self = this;
               api.ValidateCodeapi(function(valcode){
                    self.valcode= valcode
                });		
            },
            
            getCaptcha1() {
               let self = this;
               api.ValidateCodeapi(function(valcode){
                    self.valcode1= valcode
                });	
            },
            checkPhone(){
                let self = this;
                api.get(endpoint.checkPhone,{},function(res) {
                    if(res.code==1){
                        self.tel=res.mes;
                        self.txt='更换绑定';
                        self.disabled=true;
                        self.bindFalse=false;
                        self.bindTrue=true;

                    }else{
                        self.txt='手机绑定'
                        self.bindFalse=true;
                        self.bindTrue=false;
                    }

                })
            },
            sendValidateCode(){
                if (!this._validateFrom()) return;
                let params= {authcode:this.validatxt};
                let self=this;
             
                api.post(endpoint.checkauthcode,params,function(res) {
                    if(res.code==1){
                        let params={tel:self.tel}
                        api.post(endpoint.sendValidateCodeBySms,params,function(res) {
                            if(res.code==1){
                                eeui.toast(res.mes);
                                self.counting = true;
                                self.time = 60;
                                self.timer(); 
                            }else{
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
            sendChangeValidateCode(){
                let params= {authcode:this.validatxt};
                let self=this;
                api.post(endpoint.checkauthcode,params,function(res) {
        
                    if(res.code==1){
                        let params={tel:self.tel} 
                        api.post(endpoint.sendChangeValidateCodeBySms,params,function(res) {
                            if(res.code==1){	
                                self.counting = true;
                                self.time = 60;
                                self.timer(); 
                                eeui.toast(res.mes);
                            }else{		

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
            phoneBind(){
                let params= {tel:this.tel,smscode:this.valdatecode};
                let self=this;
                api.post(endpoint.phoneBind,params,function(res) {
                    if(res.code==1){
                        eeui.toast(res.mes);
                        eeui.openPage({
                            url: '../pages/personal.js',
                            pageType: 'app'
                        });
                    }else{
                        eeui.toast(res.mes);
                    }
                })
            },
            checkChangeSMSCode(){
                let params= {smscode:this.valdatecode};
                let self=this;
                api.post(endpoint.checkChangeSMSCode,params,function(res) {
                    if(res.code==1){
                        api.ValidateCodeapi(function(valcode){
                            self.valcode1= valcode
                        });	
                        self.nextBind=true;
                        self.prevBind=false;
                        self.sign=res.mes;
                        self.validatxt='';
                        self.time=60;
                        self.btntxt='获取验证码'
                    }else{
                        eeui.toast(res.mes);
                    }
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
            timer1 () {
                if (this.time1 > 0) {
                        this.time1--;
                        this.btntxt1=this.time1+"s后重新获取";
                        setTimeout(this.timer1, 1000);
                } else{
                        this.time1=0;
                        this.btntxt1="获取验证码";
                        this.counting1=false;
                }
            },	
            sendNewValidateCodeBySms(){
                let params= {authcode:this.validatxt1};
                let self=this;
                 api.post(endpoint.checkauthcode,params,function(res) {
                    if(res.code==1){
                        let params ={tel:self.repassTel}
                        api.post(endpoint.sendNewValidateCodeBySms,params,function(res) {
                            if(res.code==1){
                                self.counting1 = true;
                                self.time1 = 60;
                                self.timer1(); 
                                eeui.toast(res.mes);
                            }else{
                                eeui.toast(res.mes);
                                api.ValidateCodeapi(function(valcode){
                                    self.valcode1= valcode
                                });
                            }
                        })
                    }else{
                        api.ValidateCodeapi(function(valcode){
                            self.valcode1= valcode
                        });
                        eeui.toast(res.mes);
                    }
                })
            },
            editphone(){
                let params={sign:this.sign,tel:this.repassTel,smscode:this.repassvalidatxt}
                let self=this;
                 api.post(endpoint.editphone,params,function(res) {
                    if(res.code==1){
                        eeui.toast(res.mes);
                        eeui.openPage({
                            url: '../pages/personal.js',
                            pageType: 'app',
                            params:{position:4}
                        });
                    }else{
                        eeui.toast(res.mes);
                        
                    }
                })
            },
            _validateFrom() {
                if (api.ylTrim(this.tel).length <= 0) {
                    eeui.toast('手机号不能为空！');
                    return false
                }
            
                return true
            }
        },
        computed: {
            
        },
        created() {
            let self = this
            this.checkPhone();   
            this.getuserInfo();  
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
    .phoneC{
        background-color: #ffffff;
        height: 105px;
        padding: 0 48px;
        margin-bottom:10px;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    .tel{
        line-height: 105px;
        color: #0d0f13;
        font-size: 30px;
    }
    .formCon{
        width: 750px;
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
    .valPic{
        width: 113px;
        height: 47px;
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