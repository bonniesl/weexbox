<template>
    <div class="nav">
            <image class="navbg" src="../images/navBg.png"></image>
            <div class="tabPage" :key="index" v-for="(item, index) in tabPages">
               <div class="nav-item" @click="switchPage(item,index)">
                    <image  :class="[index === 2 ? 'navico1' : 'navico']" :src="index===reposition ? item.selectedIcon : item.unSelectedIcon"></image>
                    <text :class="[index === reposition ? 'navTxt-active' : 'navTxt']">{{item.title}}</text>
                </div>
            </div>
            
        </div>
        
</template>

<style scoped>
    .nav {
      position: fixed;
      bottom: 0;
      left: 0;
        width: 750px;
        height: 137px;
         flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    .navbg{
        width:750px;
        height:137px;
        position: absolute;
        bottom: 0;
        left:0;
        
    }
    .tabPages{
        flex:1;
        width: 750px;
        align-items: center;
    }
    .nav-item {
        flex:1;
       padding:0 30px;
       align-items: center;
    }
    .navico{
        width:44px;
        height:44px;
        margin-top:50px;
        margin-bottom:14px;
    }
    .navico1{
        width:113px;
        height:113px;
        margin-top:4px;
    }
    .navTxt{
        color:#b8b8b8;
        font-size:24px;
        text-align: center;
        margin-top:-6px;
    }
    .navTxt-active{
        color:#ffbd58;
        font-size:24px;
        text-align: center;
        margin-top:-6px;
    }

    
</style>

<script>

    const eeui = app.requireModule('eeui');
    const endpoint = require("../backend/endpoint");
    const api = require("../backend/api");
    const okTools = app.requireModule('okTools');
    
    export default {
        props:{ 
            reposition: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                position: 0,
                tabPages: [
                    {
                        tabName: 'index',
                        title: '首页',
                        unSelectedIcon:'../images/navico1.png',
                        selectedIcon:'../images/curNav1.png',
                        url: '../pages/index.js',
                    },
                    {
                        tabName: 'gemes',
                        title: '游戏',
                        unSelectedIcon:'../images/navico2.png',
                        selectedIcon:'../images/curNav2.png',
                        url: '../pages/gemes.js',
                    },
                    {
                        tabName: 'recharge',
                        title: '充值',
                        unSelectedIcon:'../images/navico3.png',
                        selectedIcon:'../images/navico3.png',
                        url: '../pages/recharge.js'
                    },
                    {
                        tabName: 'newsList',
                        title: '资讯',
                        unSelectedIcon:'../images/navico4.png',
                        selectedIcon:'../images/curNav4.png',
                        url: '../pages/newsList.js',
                    },
                    {
                        tabName: 'personal',
                        title: '我的',
                        unSelectedIcon:'../images/navico5.png',
                        selectedIcon:'../images/curNav5.png',
                        url: '../pages/personal.js',
                    }
                ],
                uid:'',
                rkey:''
            }
        },
        methods: { 
            switchPage(item,index) {
                let self = this;
                let platform = WXEnvironment.platform;
                this.position = index;
               eeui.toastClose();
                if(item.tabName=='recharge'){
                    let self = this;
                    api.get(endpoint.getuserInfo,{},function(res) {
                        if(res.code==1){
                            let platform = WXEnvironment.platform.toLowerCase();
                            if(platform==='ios'){  
                               eeui.openWeb('https://wap-api.okwan.com/index/user/jumpAppSecond?key='+ encodeURIComponent(self.rkey));    
                            }else{
                                okTools.pay('https://wap-api.okwan.com/index/user/jumpAppSecond?key='+ encodeURIComponent(self.rkey),'充值页面'); 
                            }
                            
                        }else{
                            eeui.openPage({
                                url: '../pages/login.js',
                                pageType: 'app'
                            });
                        }
                    })                
                    return;
                }

                if(item.tabName=='personal'){
                    api.get(endpoint.getuserInfo,{},function(res) {
                        if(res.code==1){
                            self.uid= res.mes.uid;
                            if(eeui.getPageInfo().url.indexOf(item.tabName)>-1){
                                return;
                            }
                            eeui.openPage({
                                pageName: item.tabName,
                                pageType: 'app',
                                url: item.url,
                                params:{position:self.position,uid:self.uid}
                            }, function(result) {

                            });
                        }else{
                            eeui.openPage({
                                url: '../pages/login.js',
                                pageType: 'app'
                            });
                        }
                    })	
                }else{
                    if(eeui.getPageInfo().url.indexOf(item.tabName)>-1){
                        return;
                    }
                    eeui.openPage({
                        pageName: item.tabName,
                        pageType: 'app',
                        url: item.url,
                        params:{position:self.position}
                    });
                }
            },
            jumpAppFirst(){
                let self = this;     
                let parmars={
                        url:'https://www.okwan.com/m/#/rechargeGame',
                        cookie:api.getVokwan()
                    }           
                api.post(endpoint.jumpAppFirst,parmars,function(res) {
                    if(res.code==1){
                        self.rkey=res.mes;
                        
                    }else{
                       // eeui.toast(res.mes);
                    }
                }) 	
            }
           
        },
        mounted(){

        },
        created() {
            this.jumpAppFirst();  
        }
    };
</script>
