<template>
    <div class="app">
        <top-header></top-header>
       
        <div class="gameList">
            <div class="gameC">
                <div class="tabPages"  :key="index" v-for="(item, index) in tabPages">
                    <div :class="[index === position ? 'nav-item-active' : 'nav-item']" @click="switchPage(item,index)">
                        <image class="tabIco" :src="item.unSelectedIcon"></image>
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
            <div class="bannerc" v-if="position==0 && phoneInfo.banners.length>0">
                <slider class="banner" interval="3000" auto-play="true">
                    <div class="banner-frame" :key="index" v-for="(bannerimg,index) in phoneInfo.banners">
                        <image class="bannerPic" resize="cover" :src="bannerimg.src" @click="bannerLink(bannerimg.href)"></image>
                    </div>
                    <indicator v-if="phoneInfo.banners.length>1" class="indicator"></indicator>
                </slider>
            </div>
            <div class="bannerc" v-if="position==1 && h5Info.banners.length>0">
                <slider class="banner" interval="3000" auto-play="true">
                    <div class="banner-frame" :key="index" v-for="(bannerimg,index) in h5Info.banners">
                        <image class="bannerPic" resize="cover" :src="bannerimg.src" @click="bannerLink(bannerimg.href)"></image>
                    </div>
                     <indicator v-if="h5Info.banners.length>1" class="indicator"></indicator>
                </slider>
            </div>
            <div class="bannerc" v-if="position==2 && dyInfo.banners.length>0">
                <slider class="banner" interval="3000" auto-play="true">
                    <div class="banner-frame" :key="index" v-for="(bannerimg,index) in dyInfo.banners">
                        <image class="bannerPic" resize="cover" :src="bannerimg.src" @click="bannerLink(bannerimg.href)"></image>
                    </div>
                    <indicator v-if="dyInfo.banners.length>1" class="indicator"></indicator>
                </slider>
                
            </div>
        </div>
        <div class="nullpage" v-if="position==0 && phoneInfo.lists.length==0">
            <image class="nullPic" src="../images/null.png"></image>
            <text class="nullTxt">暂无游戏哦~</text>
        </div>
        <div class="txtBg" v-if="position==0 &&  phoneInfo.lists.length>0"><text class="bigTit">精品推荐</text></div>
        <scroller class="scrollList1" @loadmore="phoneLoadMore" loadmoreoffset="1" v-if="position==0 &&  phoneInfo.lists.length>0">
            <div class="hotItem" :key="index" v-for="(list,index) in phoneInfo.lists">
                <image class="hotPic" :src="list.src" @click="gameLink(list.gid)"></image>
                <div class="hotInfo">
                    <text class="hotTit" @click="gameLink(list.gid)">{{list.name}}</text>
                    <div class="hotFlex"> 
                        <text class="hotType" >{{list.game_type_style}}</text>
                        <text class="hotType" >{{list.size}}</text>
                    </div>
                    <text class="hotDes">{{list.introduction.length > 12 ? list.introduction.substring(0,12)+'...' : list.introduction}}</text>
                </div>
                <button class="downBtn" :eeui="{text:list.btnTxt, borderWidth:2,borderColor:'#ffbd58',backgroundColor:'#fff'}" @click="downLink(list)"></button>
            </div>
            <div class="loadingbox" v-if="phoneInfo.loadinging">
                <image class="loading" src="../images/loding.gif"></image>
            </div>
            <div v-if="phoneInfo.loadingMsgShow">
                <text class="loadMsg">没有更多数据了~</text>
            </div>
        </scroller>
       
        <div class="nullpage" v-if="position==1 && h5Info.lists.length==0">
            <image class="nullPic" src="../images/null.png"></image>
            <text class="nullTxt">暂无游戏哦~</text>
        </div>
        <div class="txtBg" v-if="position==1 &&  h5Info.lists.length>0"><text class="bigTit" >精品推荐</text></div>
        <scroller class="scrollList1" @loadmore="h5LoadMore" loadmoreoffset="1"  v-if="position==1 &&  h5Info.lists.length>0">
            <div class="hotItem" :key="index" v-for="(list,index) in h5Info.lists">
                <image class="hotPic" :src="list.src" @click="h5GameInfoLink(list.gid,list.link_url,list.name)"></image>
                <div class="hotInfo">
                    <text class="hotTit" @click="h5GameInfoLink(list.gid,list.link_url,list.name)">{{list.name}}</text>
                    <text class="hotType">{{list.game_type_style}}</text>
                    <text class="hotDes">{{list.introduction.length > 18 ? list.introduction.substring(0,18)+'...' : list.introduction}}</text>
                </div>
                <button class="downBtn" :eeui="{text:'直接玩', borderWidth:2,borderColor:'#ffbd58',backgroundColor:'#fff'}"  @click="gameLinkH5(list.link_url,list.name)"></button>
            </div>
            <div class="loadingbox" v-if="h5Info.loadinging">
                <image class="loading" src="../images/loding.gif"></image>
            </div>
            <div v-if="h5Info.loadingMsgShow">
                <text class="loadMsg">没有更多数据了~</text>
            </div>
        </scroller>
        <div class="nullpage" v-if="position==2 && dyInfo.lists.length==0">
            <image class="nullPic" src="../images/null.png"></image>
            <text class="nullTxt">敬请期待~</text>
        </div>
         <div class="txtBg" v-if="position==2 &&  dyInfo.lists.length>0"><text class="bigTit">精品推荐</text></div>
         <scroller class="scrollList1" @loadmore="dyLoadMore" loadmoreoffset="1" v-if="position==2 &&  dyInfo.lists.length>0">
            <div class="hotItem" :key="index" v-for="(list,index) in dyInfo.lists">
                <image class="hotPic" :src="list.src"></image>
                <div class="hotInfo" @click="gameLink(list.gid)">
                    <text class="hotTit">{{list.name}}</text>
                    <text class="hotType">传奇 {{list.size}}</text>
                    <text class="hotDes">沙城争霸，经典再现</text>
                </div>
                 <button class="downBtn" :eeui="{text:'下载', borderWidth:2,borderColor:'#ffbd58',backgroundColor:'#fff'}"></button>
            </div>
            <div class="loadingbox" v-if="dyInfo.loadinging">
                <image class="loading" src="../images/loding.gif"></image>
            </div>
            <div v-if="dyInfo.loadingMsgShow">
                <text class="loadMsg">没有更多数据了~</text>
            </div>
        </scroller>
        <nav :reposition="reposition.position"></nav>
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

    export default {
        data() { 
            return {
               position: 0,
               tabPages: [
                    {
                        tabName: 'phoneGame',
                        title: '手机游戏',
                        unSelectedIcon:'../images/sy.png'
                    },
                    {
                        tabName: 'h5Game',
                        title: 'H5游戏',
                        unSelectedIcon:'../images/H5.png'
                    },
                    {
                        tabName: 'dyGame',
                        title: '抖音游戏',
                        unSelectedIcon:'../images/douying.png'
                    }
                ],
                limit:10,
                phoneInfo:{
                    banners:[],
                    gameList:[],
                    lists:[],
                    curPage:1,
                    loadinging: false,
                    loadingMsgShow:false,
                },
                h5Info:{
                    banners:[],
                    gameList:[],
                    lists:[],
                    curPage:1,
                    loadinging: false,
                    loadingMsgShow:false,
                },
                dyInfo:{
                    banners:[],
                    gameList:[],
                    lists:[],
                    curPage:1,
                    loadinging: false,
                    loadingMsgShow:false,
                },
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
             pageSelected(data) {
                this.position = data.position;
            },
            switchPage(item,index) {
                this.position = index;
                this.$refs.reflectName.setCurrentItem(this.tabPages[index].tabName);
            },
            phoneLoadMore(){
                let self = this;
                self.phoneInfo.loadinging = true;
                self.phoneInfo.loadingMsgShow=false;
                self.phoneInfo.curPage = parseInt(self.phoneInfo.lists.length/self.limit) + 1;
                let params = {page:this.phoneInfo.curPage};
                api.get(endpoint.getPhoneGame,params,function(res) {
                    if(res.code == 1) {
                        self.phoneInfo.banners=res.mes.banner_images;
                        self.phoneInfo.gameList=res.mes.phone_games;
                        if(self.phoneInfo.gameList && self.phoneInfo.gameList.length > 0){
                            if(self.phoneInfo.lists.length%self.limit>0){
                                 self.phoneInfo.loadinging = false;
                                self.phoneInfo.loadingMsgShow=true;
                                return;
                            } 
                            self.phoneInfo.gameList.forEach(function(val,index){
                               self.$set(val, 'btnTxt', '直接玩');
                               self.phoneInfo.lists.push(val);
                            });
                           self.phoneInfo.loadinging = true;
                        }
                        if(self.phoneInfo.gameList.length<10){
                            self.phoneInfo.loadinging = false;
                            self.phoneInfo.loadingMsgShow=true;
                        } 
                    }
                })
            },
            h5LoadMore(){
                let self = this;
                self.h5Info.loadinging = true;
                self.h5Info.loadingMsgShow=false;
                self.h5Info.curPage = parseInt(self.h5Info.lists.length/self.limit) + 1;
                let params = {page:this.h5Info.curPage};
                api.get(endpoint.getH5Game,params,function(res) {
                    if(res.code == 1) {
                        self.h5Info.banners=res.mes.banner_images;
                        self.h5Info.gameList=res.mes.h5_games;
                        if(self.h5Info.gameList && self.h5Info.gameList.length > 0){
                            if(self.h5Info.lists.length%self.limit>0){
                                 self.h5Info.loadinging = false;
                                self.h5Info.loadingMsgShow=true;
                                return;
                            } 
                            self.h5Info.gameList.forEach(function(val,index){
                               self.h5Info.lists.push(val);
                            });
                           self.h5Info.loadinging = true;
                        }
                        if(self.h5Info.gameList.length<10){
                            self.h5Info.loadinging = false;
                            self.h5Info.loadingMsgShow=true;
                        } 
                    }
                })
            },
            dyLoadMore(){
                let self = this;
                self.dyInfo.loadinging = true;
                self.dyInfo.loadingMsgShow=false;
                self.dyInfo.curPage = parseInt(self.dyInfo.lists.length/self.limit) + 1;
                let params = {page:this.dyInfo.curPage};
                api.get(endpoint.getDyGame,params,function(res) {
                    if(res.code == 1) {
                        self.dyInfo.banners=res.mes.banner_images;
                        self.dyInfo.gameList=res.mes.douyin_games;
                        if(self.dyInfo.gameList && self.dyInfo.gameList.length > 0){
                            if(self.dyInfo.lists.length%self.limit>0){
                                 self.dyInfo.loadinging = false;
                                self.dyInfo.loadingMsgShow=true;
                                return;
                            } 
                            self.dyInfo.gameList.forEach(function(val,index){
                               self.dyInfo.lists.push(val);
                            });
                           self.dyInfo.loadinging = true;
                        }
                        if(self.dyInfo.gameList.length<10){
                            self.dyInfo.loadinging = false;
                            self.dyInfo.loadingMsgShow=true;
                        } 
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
            downLink(list){
                let platform = WXEnvironment.platform.toLowerCase();
                let self = this;
                if(platform==='ios'){
                    eeui.openWeb(list.ios_url);    
                }else{

                     if(list.btnTxt=='下载中'){
                         return;
                     }
                      okTools.checkPackage(list.pkg_name,function(cheV){ 
                            if(cheV==1){
                                list.btnTxt='直接玩';
                                okTools.open(list.pkg_name);
                            }
                            if(cheV==2){
                                list.btnTxt='下载中';
                                okTools.downloadApk(list.pkg_url, list.name,list.pkg_name);
                            }
                        })  

                        globalEvent.addEventListener("downloadCallback", function (e) {
                            if(e.down==1){
                                list.btnTxt='直接玩'
                            }
                        })
                        globalEvent.addEventListener("installCallback", function (e) {
                            if(e.install==1){
                                list.btnTxt='直接玩'
                            }
                        })
                        globalEvent.addEventListener("failCallback", function (e) {
                            if(e.fail==1){
                                list.btnTxt='直接玩'
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
            h5GameInfoLink(gid,url,gname){
                eeui.openPage({
                    url: '../pages/h5GameInfo.js',
                    pageType: 'app',
                    params:{gid:gid,position:1,url:url,gname:gname}
                });
            },
            gameLinkH5(link_url,gname){
                 let self = this;
                 api.get(endpoint.getuserInfo,{},function(res) {
                    if(res.code==1){
                         let parmars={
                            url:link_url,
                            cookie:eeui.getCaches('.okwan.com')
                        } 
                        
                        api.post(endpoint.jumpAppFirst,parmars,function(res) {
                            if(res.code==1){
                                self.rkey=res.mes;
                                let platform = WXEnvironment.platform.toLowerCase();
                                if(platform==='ios'){
                                    eeui.openWeb('https://wap-api.okwan.com/index/user/jumpAppSecond?key='+ encodeURIComponent(self.rkey));    
                                }else{
                                    okTools.pay('https://wap-api.okwan.com/index/user/jumpAppSecond?key='+ encodeURIComponent(self.rkey),gname); 
                                }
                                // eeui.openPage({
                                //     url: '../pages/h5Page.js',
                                //     pageType: 'app',
                                //     params:{url:link_url,key:self.rkey}
                                // });
                            }else{
                                eeui.toast(res.mes);
                            }
                        }) 
                    }else{
                        eeui.openPage({
                            url: '../pages/login.js',
                            pageType: 'app'
                        });
                    }
                }) 
            },
            
        },
        computed: {
            
        },
        created() {
            this.phoneLoadMore();
            this.h5LoadMore();
           // this.dyLoadMore();
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
    .scrollList1{
        background-color: #fff;
        padding:0 30px 110px;
    }
    .gameList{
        background-color: #fff;
        padding:0 30px 0;
    }
    .gameC{
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
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
        height: 100px; 
    }
    .nav-item-active{
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 100px;
         border-bottom-style: solid;
        border-bottom-color: #ffbd58;
        border-bottom-width: 4px;
    }
    .tabIco{
        width:32px;
        height: 32px;
        margin-right: 14px;
    }
    .navTxt{
        font-size: 30px;
        color:#2a2a2a;
    }
    
    .banner{
        align-items: center;
        margin-top: 4px;   
        padding-bottom: 22px;
    }
    .banner-frame {
        width:690px;
        height:274px;
        position: relative;
    }
    .bannerPic{
        width:690px;
        height:274px;
        border-radius: 10px;
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
    .gamePhone{
        margin-top: 10px;
    }
    .gamePhone1{
        background-color: #fff;
        padding: 0 30px 10px;
    }
    .txtBg{
        background-color: #fff;
        padding: 0 30px 10px;
        margin-top: 10px;
    }
    .bigTit{
        font-size:34px;
        color:#0d0f13;
        font-weight:bold;
        padding-top:26px;
    }
    .hotItem{
        padding:45px 0 28px;
        border-bottom:1px solid #f4f4f4;
        flex-direction: row;
        align-items: center;
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
    .hotFlex{
        flex-direction: row;
    }
    .hotType{
        color:#666666;
        font-size: 22px;
        padding-top:16px;
        margin-right: 8px;
    }
    .hotDes{
        color:#bbbbbb;
        font-size:22px;
        padding-top:10px;
        overflow: hidden;
    }
    .downBtn{ 
        width:114px;
        height:56px;
        line-height:56px;
        text-align: center;
        color: #ffbd58;
        font-size:28px; 
    }
    .loadingbox {
        align-items: center;
        padding: 20px;
        height: 80px;
    }
     .loading {
        height: 40px;
        width: 40px;
    }
    .loadMsg{
        align-items: center;
        height: 80px;
        line-height: 80px;
        text-align: center;
        color: #666;
        font-size: 24px;
    }
    .nullpage{   
        padding-top: 150px;
        align-items: center;
        justify-content: center;
    }
    .nullPic{
        width: 257px;
        height: 276px;
    }
    .nullTxt{
        color: #666;
        font-size: 28px;
        padding-top: 18px;
    }
</style>