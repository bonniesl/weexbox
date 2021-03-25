<template>
    <div class="app">
        <top-com title="绑定邮箱"></top-com>
        <div class="formCommon">
            <div class="formCon">
                <div class="form_group">
                    <image class="formico" src="../images/emailIco.png"></image>
                    <input class="input" type="text" placeholder="请输入您要绑定邮箱账号" v-model.trim="email" />
                </div>
                <div class="form_group">
                    <image class="formico" src="../images/mailCodeIco.png"></image>
                    <input class="input" type="text" placeholder="请输入邮箱验证码" v-model.trim="emailcode" />
                    <button class="valadite_btn" :eeui="{text:btntxt,borderWidth:2,borderColor:'#ffbd58',disabled:counting}" @click="sendValidateCode"></button>
                </div>      
            </div>
            <div class="sub_btn" @click.stop="emailBind" >
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
               email:'',
                time:0,
                btntxt:'获取验证码',
                emailcode:'',
                counting:false
            }
        },
        components: {
            topCom,
            nav 
        },
        mounted() {
                     
        },

        methods: {
           sendValidateCode(){
                let params={email:this.email}
                let self = this;
                let platform = WXEnvironment.platform.toLowerCase();
                if(platform==='ios'){
                    api.post(endpoint.sendValidateCodeByEmail1,params,function(res) { 
                        if(res.code == 1) {
                            self.counting = true;
                            self.time = 60;
                            self.timer();
                            eeui.toast(res.mes);
                        }else{
                            eeui.toast(res.mes);
                        }
                    })
                }else{
                    eeui.ajax({
                        url: endpoint.sendValidateCodeByEmail1,
                        method: 'post',
                        dataType:'json',
                        data: params,
                        headers: {
                            'Cookie':api.getVokwan()
                        }, 
                    }, function(result) {
                        if (result.status === "success") {
                            if(result.result.code == 1) {
                                self.counting = true;
                                self.time = 60;
                                self.timer();
                                eeui.toast(result.result.mes);
                            }else{
                                eeui.toast(result.result.mes);
                            }
                             
                        }
                    });
                }
                
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
            emailBind(){
                let params={email:this.email,emailcode:this.emailcode};
                let self = this;
                api.post(endpoint.emailBind,params,function(res) {
                    if(res.code == 1) {
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
            }
        },
        computed: {
            
        },
        created() {
            
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