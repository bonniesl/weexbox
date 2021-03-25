<template>
    <div class="app">
         <top-header></top-header>
         
        <scroll-view class="scrollList">
            <div class="indexNav">   
                <slider class="banner" interval="3000" auto-play="true">
                    <div class="banner-frame" :key="index" v-for="(bannerimg,index) in bannerList">
                        <image class="banner-image" resize="cover" :src="bannerimg.src" @click="bannerLink(bannerimg.href)"></image>
                    </div>
                    <indicator v-if="bannerList.length>1" class="indicator"></indicator>
                </slider>
                <div class="navList">
                    <div class="navListC">
                        <div class="navUL" @click="openGameList">
                            <div class="navpic">
                                <image class="navico" src="../images/nav1.png"></image>
                            </div>
                            <text class="navTxt">游戏大厅</text>
                        </div>
                        <div class="navUL" @click="openGift">
                            <div class="navpic">
                                <image class="navico" src="../images/nav3.png"></image>
                            </div>
                            <text class="navTxt">礼包</text>
                        </div>
                        <div class="navUL" @click="openService">
                            <div class="navpic">
                                <image class="navico" src="../images/nav4.png"></image>
                            </div>
                            <text class="navTxt">开服表</text>
                        </div>
                    </div>
                </div>
            </div>
            <div class="recPlayList" v-if="uid && recGameList.length>0">
                <div class="tit">
                    <image class="titPic" src="../images/indexColum1.png"></image>
                </div>
                <div class="playCon">
                    <div class="playc">
                        <div class="navUL" :key="index" v-for="(list,index) in recGameList">
                            <div class="navpic" @click="gameLink(list.gid)">
                                <image class="playIco" :src="list.pic"></image>
                            </div>
                            <text @click="gameLink(list.gid)" class="playTxt">{{list.gname}}</text>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="hotGameList">
                <text class="bigTit bigTit1">人气游戏风向标</text>
                <div class="hotItem" :class="[index==0 ? 'hotfir' : '']"  :key="index" v-for="(list,index) in hotGameList">
                    <image class="hotPic"  @click="gameLink(list.gid)" :src="list.logo"></image>
                    <div class="hotInfo">
                        <text class="hotTit"  @click="gameLink(list.gid)">{{list.name}}</text>
                        <text class="hotType"  @click="gameLink(list.gid)">传奇 {{list.size}}</text>
                        <text class="hotDes">{{list.gstyle}}</text>
                         
                        <!-- <button class="downBtn" :eeui="{text:list.btnTxt, borderWidth:2,borderColor:'#ffbd58',backgroundColor:'#fff'}"  @click="downLink(list,index)"></button> -->
                    </div>
                    <div class="downBtn" @click="downLink(list,index)">
                       
                        <div class="downC">
                            <div class="progress" v-if="list.progressVisible">
                                <wxc-progress :value="list.peocessValue" :bar-width=112 :bar-height=53 :bar-radius=10 bar-color='#ffcc66' background-color=transparent></wxc-progress>
                            </div>
                            <text class="downTxt" v-if="list.btnTxt=='下载' || list.btnTxt=='打开'">{{list.btnTxt}}</text>
                            <text class="downTxtc" v-else>{{list.btnTxt}}</text>
                        </div>
                        
                           
                    </div>
                </div>
            </div>
            <slider class="advBanners" interval="3000" auto-play="true">
                <div class="advBanner" :key="index" v-for="(list,index) in advBanner">
                    <image class="advPic" resize="cover" :src="list.src" @click="bannerLink(list.href)"></image>
                </div>
                 <indicator v-if="advBanner.length>1" class="indicator"></indicator>
            </slider>
            <div class="qualityRec">
                <div class="comt">
                    <text class="bigTit">精品推荐</text>
                    <div class="moreLink" @click="openGameList">
                        <text class="moretxt">更多</text>
                        <icon class="moreIco" content="tb-right"></icon>
                    </div>
                </div>
                <div class="qualityList">
                    <div class="flexCom">
                         <div class="qualityInfo" :key="index" v-for="(list,index) in qualityGameList" @click="gameLink(list.gid)">
                            <image class="qualiPic" :src="list.src"></image>
                            <text class="qname">{{list.name}}</text>
                            <text class="qtype">{{list.gstyle}}</text>
                            <div class="downBtn1" @click="downLink(list,index)">
                       
                                <div class="downC">
                                    <div class="progress" v-if="list.progressVisible">
                                        <wxc-progress :value="list.peocessValue" :bar-width=112 :bar-height=53 :bar-radius=10 bar-color='#ffcc66' background-color=transparent></wxc-progress>
                                    </div>
                                    <text class="downTxt" v-if="list.btnTxt=='下载' || list.btnTxt=='打开'">{{list.btnTxt}}</text>
                                    <text class="downTxtc" v-else>{{list.btnTxt}}</text>
                                </div>
                                
                                
                            </div>
                            <!-- <button class="downBtn1" :eeui="{text:list.btnTxt, borderWidth:2,borderColor:'#ffbd58',backgroundColor:'#fff'}" @click="downLink(list,index)"></button> -->
                        </div>
                    </div>
                   
                </div>
            </div>
        </scroll-view>
         <nav></nav>
    </div>
</template>
<script>

    import TopHeader from "../components/topHeader";
    import nav from "../components/nav";
    const eeui = app.requireModule('eeui');
    const endpoint = require("../backend/endpoint");
    const api = require("../backend/api");
    const okTools = app.requireModule('okTools');
    const globalEvent = weex.requireModule('globalEvent');
    import { WxcProgress } from 'weex-ui'

    export default {
        data() { 
            return {
               uid:'',
               bannerList:[],
               recGameList:[],
               hotGameList:[],
               advBanner:[],
               qualityGameList:[],
               dyGameList:[],
               platform:WXEnvironment.platform,
               dowIndex:0,
               openIndex:0
            }
        },
        components: {
            TopHeader,
            nav,
            WxcProgress 
        },
        mounted() {
            
        },

        methods: {
            getIndexInfo(){
                let self = this;
                let platform = WXEnvironment.platform.toLowerCase();
                 api.get(endpoint.getIndex,{},function(res) {
                     if(res.code==1){
                         self.bannerList=res.mes.banner_images;
                         self.advBanner=res.mes.adv_images;
                         res.mes.hot_games.forEach(function(val,index){
                       
                            self.$set(val, 'btnTxt', '下载'); 
                            self.$set(val, 'peocessValue', 0);
                            self.$set(val, 'clickCount', 0);
                            self.$set(val, 'progressVisible', false);
                            self.hotGameList.push(val);
                             if(platform!='ios'){
                                 okTools.checkPackage(val.pkg_name,function(cheV){ 
                                    if(cheV==1){
                                        self.$set(val, 'btnTxt', '打开'); 
                                    
                                    } 
                                })
                             }
                              
                        });
                        
                        res.mes.recommend_games.forEach(function(val,index){
                            self.$set(val, 'btnTxt', '下载'); 
                            self.$set(val, 'peocessValue', 0);
                            self.$set(val, 'clickCount', 0);
                            self.$set(val, 'progressVisible', false);
                            self.qualityGameList.push(val);
                            if(platform!='ios'){
                                 okTools.checkPackage(val.pkg_name,function(cheV){ 
                                    if(cheV==1){
                                        self.$set(val, 'btnTxt', '打开'); 
                                    
                                    } 
                                })
                             }
                            
                        });

                         self.dyGameList=res.mes.douyin_games;
                     }
                     
                 })
            },
            getRecentHome(){
                let self = this;
                let params ={uid:self.uid} 
                api.post(endpoint.getRecentHome,params,function(res) {
                     if(res.code==1){                
                         self.recGameList=res.mes;
                          
                     }
                })
            },
            bannerLink(href){
                eeui.openPage({
                    url: '../pages/gameInfo.js',
                    pageType: 'app',
                    params:{gid:href,position:1}
                });
            },
            downLink(list,index){
                let platform = WXEnvironment.platform.toLowerCase();
                let self = this;
                self.openIndex= index;
                if(platform==='ios'){
                    eeui.openWeb(list.ios_url);    
                }else{
                    if(list.btnTxt=='安装中'){
                        return;
                    }
                   list.clickCount++;
                    okTools.checkPackage(list.pkg_name,function(cheV){ 
                        if(cheV==1){
                            okTools.open(list.pkg_name);
                        }
                         if(cheV==2){                                  
                              if(list.clickCount==1){
                                   okTools.downloadApk(list.pkg_url, list.name,list.pkg_name);
                              }else{
                                  list.btnTxt='继续';
                                   okTools.pause(list.pkg_url);
                                  list.clickCount=0;
                              }
                             
                        }
                    }) 
                    
                    globalEvent.addEventListener("downloadCallback", function (e) { 
                        if(e.down==1){
                            list.progressVisible=false;
                            list.btnTxt='下载';
                            list.clickCount=0;
                           
                        }
                    })
                    globalEvent.addEventListener("installCallback", function (e) {
                        if(e.install==1){
                            list.progressVisible=false;
                            list.btnTxt='打开'
                            list.clickCount=0;
                    
                        }
                    })

                    globalEvent.addEventListener("failCallback", function (e) {
                        if(e.fail==1){
                            list.progressVisible=false;
                            list.btnTxt='下载'
                            list.clickCount=0;
                     
                        }
                    })

                   
                    
                }
 
            },
            gameLink(gid){
                eeui.openPage({
                    url: '../pages/gameInfo.js',
                    pageType: 'app',
                    params:{gid:gid,position:1}
                });
            },
            openNewsList() {
                eeui.openPage({
                    url: '../pages/newsList.js',
                    pageType: 'app'
                });
            },
            openGift(){
                eeui.openPage({
                    url: '../pages/gift.js',
                    pageType: 'app'
                });
            },
             openService(){
                eeui.openPage({
                    url: '../pages/serviceList.js',
                    pageType: 'app'
                });
            },
            openGameList(){
                 eeui.openPage({
                    url: '../pages/gemes.js',
                    pageType: 'app',
                    params:{position:1}
                });
            },
            _isLogin(cb) {
                let self = this
                api.get(endpoint.getuserInfo,{},function(res) {
                    if(res.code==1){
                        self.uid=res.mes.uid;
                        cb();
                    }
                })	  
            }
        },
        created() {   
           
            this.getIndexInfo();
            this._isLogin(_=>{   
               this.getRecentHome();
            })
            let platform = WXEnvironment.platform.toLowerCase();
            let self = this;
            let count=0;
            if(platform==='ios'){

            }else{

                eeui.setPageBackPressed(eeui.getPageInfo().pageName, function(){
                    count++;
                    if(count==1){
                        eeui.toast('再按一次返回键退出程序');
                    }else{
                        eeui.toastClose();
                        eeui.goDesktop();  
                        count=0;
                    }
        
                });

               

                globalEvent.addEventListener("progressCallback", function (e) {
                    self.hotGameList.forEach(function(val,k){ 
                        if(e.packageName.indexOf(val.pkg_name)>-1 && val.pkg_name){
                             val.progressVisible=true;
                             val.btnTxt=e.progress+'%';  
                             val.peocessValue=e.progress; 
                        }
                        
                    })
                })

                globalEvent.addEventListener("progressCallback", function (e) {
                    self.qualityGameList.forEach(function(val,k){ 
                        if(e.packageName.indexOf(val.pkg_name)>-1 && val.pkg_name){
                             val.progressVisible=true;
                             val.btnTxt=e.progress+'%';  
                             val.peocessValue=e.progress; 
                        }
                        
                    })
                })

                
                 
            }
            
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
        padding-bottom:97px;
    }
    .indexNav{
        background-color: #fff;
        margin-top: 8px;
        padding-bottom:22px;
    }

    .banner {
        width: 750px;
        height: 339px;
        margin-top: 10px;
    }
    .banner-frame {
        width: 750px;
        height: 339px;
        position: relative;
    }
    .banner-image {
        width: 750px;
        height: 339px;
    }
    .indicator {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 15px;
        height: 60px;
        background-color: rgba(0, 0, 0, 0);
        item-color: #999999;
        item-selected-color: #ffffff;
    }
    .navlist,.playCon,.navUL{  
       flex:1;
    }
    .navListC{
        flex-direction: row;
        align-items: center;
        padding-top:34px;
    }
   .navpic{
        align-items: center;
   }
    .navico{
        width: 92px;
        height:92px;
    }
    .navTxt{
        color: #2a2a2a;
        font-size:26px;
        margin-top: 14px;
        text-align: center;
    }
    .recPlayList{
        background-color:#fff;
        padding-top:24px;
        padding-bottom:28px;
        margin-top:10px;
    }
    .tit{ 
        align-items: center;
    }
    .titPic{
        width:533px;
        height:26px;
    }
    .playc{
        flex-direction: row;
        padding:24px 30px 0;
    }
    .playIco{
        width:132px;
        height:132px;
    }
    .playTxt{
        font-size: 28px;
        color: #2a2a2a;
        padding-top:16px;
        text-align: center;
    }
    .hotGameList{
        background-color: #fff;
        margin-top:10px;
        padding: 0 30px;
    }
    .bigTit{
        font-size:34px;
        color:#0d0f13;
        font-weight:bold;
        flex: 1;
    }
    .bigTit1{
        padding-top: 26px;
    }
    .hotItem{
        padding:45px 0 28px;
        border-top-style: solid;
       border-top-color: #dddada;
       border-top-width: 1px; 
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .hotfir{
       border-top-width: 0; 
    }
    .hotPic{
        width:132px;
        height:132px;
        border-radius: 16px;
        margin-right:26px;
    }
    .hotInfo{
        flex: 1;
        position:relative;
        
    }
    .hotTit{
        color: #2a2a2a;
        font-size:28px;
        padding-top:14px;
    }
    .hotType{
        color:#666666;
        font-size: 22px;
        padding-top:16px;
    }
    .hotDes{
        color:#bbbbbb;
        font-size:22px;
        padding-top:10px;
    }
    .downBtn{ 
        text-align: center;
        color: #ffbd58;
        font-size:28px; 
    }
    .downC{
        width:114px;
        height:56px;
        border-color: #ffcc66;
        border-style: solid;
        border-width: 2px;
        border-radius: 10px;
        position: relative;
        flex-direction: row;
        align-items: center;
    }
    .downTxt{
        flex: 1;
        font-size: 28px;
        color: #ffcc66;
        text-align: center;
    }
    .downTxtc{
        flex: 1;
        color: #2a2a2a;
        font-size: 28px;
        text-align: center;
    }
    .progress{
        position: absolute; 
    }
    .downBtn1{
        width:137px;
        height:43px;
        line-height: 43px;
         text-align: center;
        color: #ffbd58;
        font-size:28px;
        border-radius: 12px;
        margin-top:18px;
    }
    .advBanners{
        margin: 10px 0;
        
    }
    .advBanner{
        padding: 0 30px;
    }
    .advPic{
        width:690px;
        height:274px;
        border-radius: 10px; 
    }
    .comt{
        flex-direction: row;
        align-items: center;
        padding:26px 30px 0;
    }
    .moreLink{
       flex-direction: row;
    }
    .moretxt{
        color: #999999;
        font-size:28px;
    }
    .moreIco{
        color:#999999;
        font-size:28px;
        width: 24px;
        height: 24px;
    }
    .qualityRec,.gameCom{
        background-color: #fff;
        margin-top:10px;
    }
    .qualityList{
         flex: 1;
         margin-top:30px;
         margin-left:30px;
    }
    .flexCom{
        flex-direction: row;
        flex-wrap:wrap;
        align-items:center;
    }
    .qualityInfo{
       margin-bottom:38px;
       margin-right:30px;
       align-items:center;
    }
    .qualiPic{
        width:210px;
        height:171px;
    }
    .qname{
        color: #2a2a2a;
        font-size:28px;
        margin-top: 22px;
        text-align: center;
    }
    .qtype{
        color: #bbbbbb;
        font-size:22px;
        margin-top: 12px;
        text-align: center;
    }
    .dyGameList{
        flex: 1;
        margin-top:42px;
        text-align: center;
    }
     .flexNowrap{
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    .gameCInfo{
        flex:1;
        padding-bottom:28px;
        align-items: center;
    }
    .dyPic{
        width:132px;
        height:132px;
    }
    .dyName{
        color:#2a2a2a;
        font-size:28px;
        margin-top:16px;
        text-align: center;
    }
</style>

