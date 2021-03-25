<template>
    <div class="app">
        <top-header></top-header>
        <scroll-view class="scrollList">
            <div class="myWrap">
                <div class="myList" @click="openMyStuff">
                    <image class="myico" src="../images/perico1.png"></image>
                    <text class="txt">个人资料</text>
                    <image class="moreIco" src="../images/moreico.png"></image>
                </div>
                <div class="myList">
                    <image class="myico" src="../images/perico2.png"></image>
                    <text class="txt">我的账户</text>
                    <div class="account">
                        <text class="info">{{platformCoinName}}：{{account.kxcoin || 0}}</text>
                        <text class="info"> {{platformDouName}}：{{account.kxdou || 0}}</text>
                    </div>
                </div>
                <div class="myList"  @click="openMyVip">
                    <image class="myico" src="../images/perico8.png"></image>
                    <text class="txt">我的VIP</text>
                    <div class="vipLevel">
                        <text class="vipt">{{userInfo.viplevel}}</text>
                        <div class="vipBg">
                            <div class="vipLen" :style="{ width: Math.floor(userInfo.vipExp / userInfo.vipNextExp * 341) + 'px' }"></div>
                            <text class="ttcc">{{userInfo.vipExp}}/{{userInfo.vipNextExp}}</text>
                        </div>
                    </div>
                    <div class="rl">
                        <text class="rlt">成长值</text>
                         <image class="moreIco" src="../images/moreico.png"></image>
                    </div>
                </div>
            </div>
            <div class="myWrap">
                <div class="myList" @click="openMyRecharge">
                    <image class="myico" src="../images/perico3.png"></image>
                    <text class="txt">充值记录</text>
                    <image class="moreIco" src="../images/moreico.png"></image>
                </div>
                <div class="myList" @click="openMyGift">
                    <image class="myico" src="../images/perico4.png"></image>
                    <text class="txt">我的礼包</text>
                    <image class="moreIco" src="../images/moreico.png"></image>
                </div>
                <div class="myList" @click="openMyNews">
                    <image class="myico" src="../images/perico5.png"></image>
                    <text class="txt">我的消息</text>
                    <image class="moreIco" src="../images/moreico.png"></image>
                </div>
                <div class="myList" @click="openMyCustomer">
                    <image class="myico" src="../images/perico10.png"></image>
                    <text class="txt">在线客服</text>
                    <image class="moreIco" src="../images/moreico.png"></image>
                </div>
                <div class="myList" @click="accuontLink">
                    <image class="myico" src="../images/perico9.png"></image>
                    <text class="txt">账号交易</text>
                    <image class="moreIco" src="../images/moreico.png"></image>
                </div>
            </div>
            <div class="myWrap">
                <div class="myList" @click="openMyChange">
                    <image class="myico" src="../images/perico6.png"></image>
                    <text class="txt">{{txt}}</text>
                    <image class="moreIco" src="../images/moreico.png"></image>
                </div>
                <div class="myList" @click="openMyBindEmail">
                    <image class="myico" src="../images/perico7.png"></image>
                    <text class="txt">邮箱绑定</text>
                    <image class="moreIco" src="../images/moreico.png"></image>
                </div>
            </div>
            <div class="logOut" @click="logOut">
                <image class="logOutPic" src="../images/logOut.png"></image>
                <text class="logTxt">退出登录</text>
            </div>
        </scroll-view>
        <nav :reposition="reposition.position"></nav>
    </div>
</template>
<script>
    import TopHeader from "../components/topHeader";
    import nav from "../components/nav";
    const eeui = app.requireModule('eeui');
    const endpoint = require("../backend/endpoint");
    const api = require("../backend/api");

    export default {
        data() { 
            return {
                userInfo:[],
                platformCoinName:'ok币',
                platformDouName:'ok豆',	
                account:[],
                txt:'手机绑定',
                uid:'',
                reposition:app.config.params
            }
        },
        components: {
            TopHeader,
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
                        self.userInfo= res.mes;
                    }
                })	
            },
            getaccountIn(){
                let self=this;
                api.get(endpoint.getaccount,{},function(res) {
                    if(res.code == 1) {
                        self.account=res.mes;
                    }
                })
            },
            logOut(){
                let self = this;
                 api.post(endpoint.getlogout,{},function(res) {
                     if(res.code==1){
                        eeui.toast(res.mes);
                        eeui.openPage({
                            url: '../pages/login.js',
                            pageType: 'app'
                        });
                        // eeui.reloadPage();
                        eeui.clearAllCaches();
                     }
                     
                 })
            },
           openMyStuff() {
                eeui.openPage({
                    url: '../pages/mystuff.js',
                    pageType: 'app'
                });
            },
            openMyVip(){
                eeui.openPage({
                    url: '../pages/myVip.js',
                    pageType: 'app'
                });
            },
            openMyNews() {
                eeui.openPage({
                    url: '../pages/myNews.js',
                    pageType: 'app'
                });
            },
            openMyGift() {
                eeui.openPage({
                    url: '../pages/myGift.js',
                    pageType: 'app',
                    params:{uid:this.uid}
                });
            },
            openMyBindEmail() {             
                api.get(endpoint.checkEmail,{},function(res) {
                     if(res.code == 1) {
                         eeui.toast(res.mes);                    
                    }else{
                         eeui.openPage({
                            url: '../pages/myBindEmail.js',
                            pageType: 'app'
                        });
                    }    
                })
              
            },
            checkPhone(){
                let self = this;
                api.get(endpoint.checkPhone,{},function(res) {
                     if(res.code == 1) {
                         self.txt='更换绑定'                 
                    }else{
                         self.txt='手机绑定'
                    }    
                })
            },
            openMyChange() {
                eeui.openPage({
                    url: '../pages/myChange.js',
                    pageType: 'app'
                });
            },
            openMyRecharge() {
                eeui.openPage({
                    url: '../pages/rechargeList.js',
                    pageType: 'app'
                });
            },
            openMyCustomer() {
                eeui.openPage({
                    url: '../pages/customer.js',
                    pageType: 'app'
                });
            },
            accuontLink(){
                eeui.toast({
                    message: '敬请期待',
                    gravity: 'middle',
                    long:false
                });
            },
            _isLogin(cb) {
                let self = this
                api.get(endpoint.getuserInfo,{},function(res) {
                    if(res.code==1){
                        self.uid=res.mes.uid;
                        cb();
                    }else{
                        eeui.openPage({
                            url: '../pages/login.js',
                            pageType: 'app'
                        });
                    }
                })	  
            },
        },
        created() {  
            this._isLogin(_=>{   
               this.checkPhone();
               this.getuserInfo();
               this.getaccountIn();
            })
        }
    }
</script>
<style scoped>
    .app{
        flex: 1;
        background-color: #f7f7f7;
    }
    .scrollList{
        width:750px;
        flex:1;
        padding-bottom:120px;
    }
    .myWrap{
        background-color: #fff;
        padding:0 30px;
        margin-bottom:14px;
    }
    .myList{
        position: relative;
        height:104px;
        border-style:solid;
        border-bottom-width:1px;
        border-bottom-color:#f4f4f4;
        flex-direction: row;
        align-items: center;
    }
    .myico{
        width:40px;
        height:40px;
        margin:0 34px 0 0;
    }
    .txt{
        color:#2a2a2a;
        font-size:32px;
        line-height:104px;
      
    }
    .ttcc{
        color: #fff;
        font-size: 20px;
        align-items: center;
    }
    .moreIco{
        position: absolute;
        width: 30px;
        height: 30px;
        right: 0;   
    }
    .vipLevel{
        position: relative;
        height:104px;
       padding-left: 24px;
    }
    .vipt{
        margin-top: 16px;
        color: #ffcc66;
        font-size: 24px;
        margin-left: 10px;
    }
    .vipBg{
        width: 341px;
        height: 22px;
        background-color: #cccccc;
        border-radius: 22px;
        position: relative;
        align-items: center;
    }
    .vipLen{
        position:absolute;
        top: 0;
        left: 0;
        height: 22px;
        background-color: #ffcc66;
        border-radius: 22px;
        flex: 1;
        align-items: center;
    }
    .rl{
        position: absolute;
        right: 0;
    }
    .rlt{
        color: #666666;
        font-size: 22px;
        padding-right: 36px;
    }
    .account{
        position: absolute;
        right: 0
    }
    .info{
        text-align: right;
        color: #666666;
        font-size: 22px;
       line-height: 36px;
    }
    .logOut{
        position: relative;
        margin-top: 58px;
        align-items: center;  
         width:750px;
        height: 103px; 
    }
   
    .logOutPic{
        position:absolute;
        width: 391px;
        height: 103px;  
    }
    .logTxt{
        color: #ffbd58;
        font-size:30px;
        line-height: 96px;
    }
</style>