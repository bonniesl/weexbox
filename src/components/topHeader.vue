<template>
    <div class="comTop">
        <image class="topBg" src="../images/topbg.png" ></image>
        <div class="comTcon">
            <image class="logo" src="../images/logo.png" ></image>
            <div class="logBtn" @click="loginstuts">
                <text class="uName">{{logintxt}}</text>
                <image v-if="logShow" class="logIco" src="../images/curNav5.png"></image>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .comTop{
        width:750px;
        height:93px;
        position: relative;
    }
    .topBg{
        width:750px;
        height:93px;
        position: absolute;
        top: 0;
        left: 0;
    }
    .comTcon{
        height: 88px;
        width: 750px;
        background-color: #fff;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    .logo{
        justify-content: flex-start;
        width:193px;
        height:61px;
        margin: 14px 0 0 32px;
    }
    .logBtn{
        display: block;
       flex-direction: row;
       align-items: center;
       justify-content: flex-end;
       padding-right: 34px;
    }
    .uName{
        color: #ffbd58;
        font-size: 28px;
        line-height: 88px;
    }
    .logIco{
        width:44px;
        height:44px;
        margin-left: 12px;
    }

</style>
<script>

const endpoint = require("../backend/endpoint");
const api = require("../backend/api");

export default {
    name: 'topHeader',
    data() { 
            return {
              uid:'',
              logintxt:'请先登录',
              logShow:false,
              winUserName:''
            }
        },
        components: {
            
        },
        mounted() {
                     
        },

        methods: {   
            getName(){
                this.logintxt = this.winUserName;
            },
            _isLogin(cb) {
                var self = this
                api.get(endpoint.getuserInfo,{},function(res) {
                    if (res.code == 1) {
                        if(typeof cb!='undefined'){                               
                            self.winUserName=res.mes.login_name
                            self.uid=res.mes.uid;
                            self.logShow=true;
                            cb();                     
                        }
                    }
                })
            },
            loginstuts() {
                 if(!this.winUserName){ 
                    eeui.openPage({
                        url: '../pages/login.js',
                        pageType: 'app'
                    })
                }else{
                   if(eeui.getPageInfo().url.indexOf('personal')>-1){
                        return;
                    }
                    eeui.openPage({
                        url: '../pages/personal.js',
                        pageType: 'app',
                        params:{position:4}
                    })
                }
                
            },
        },
        mounted(){
            
        },
        created() {
             
            this._isLogin(_=>{   
               this.getName();
            })
           
        }
}
</script>