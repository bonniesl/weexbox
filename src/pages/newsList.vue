<template>
    <div class="app">
        <top-header></top-header>
        <div class="newsBanner" v-if="spicLists.length">
            <slider class="banner" interval="3000" auto-play="true">
                <div class="banner-frame" :key="index" v-for="(bannerimg,index) in newsBanner">
                    <image class="banner-image" resize="cover" :src="bannerimg.src" @click="bannerLink(bannerimg.href)"></image>
                </div>
                <indicator v-if="newsBanner.length>1" class="indicator"></indicator>
            </slider>
            <!-- <wxc-ep-slider :slider-id="sliderId"
                        :card-length='spicLists.length'
                        :card-s="cardSize"
                        :select-index="0"
                        @wxcEpSliderCurrentIndexSelected="wxcEpSliderCurrentIndexSelected">
                    <div v-for="(v,index) in spicLists"
                        :key="index"
                        :slot="`card${index}_${sliderId}`"
                        :class="['slider',`slider${index}`]">
                        <image class="bpic" :src="v"></image>
                    </div>
            </wxc-ep-slider> -->
        </div>       
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
        <scroller class="scrollList1" v-if="position==0"  @loadmore="noticeLoadMore" loadmoreoffset="1"> 
            <div class="newsCon">
                <div class="info" :key="index" v-for="(list,index) in noticeInfo.lists">
                    <div class="ccc">
                       
                        <richtext class="tttttt"  @click="noticeLinkLog(list)">
                            <span class="t t1">{{list.title.length > 28 ? list.title.substring(0,28)+'...' : list.title}}</span>
                            <image class="statusPic" src="../images/actLoad.png" v-if="list.process_status==2"></image>
                            <image class="statusPic" src="../images/actover.png" v-if="list.process_status==3"></image>
                            <image class="statusPic" src="../images/actReady.png" v-if="list.process_status==1"></image>
                        </richtext>     
                        <text class="time1">{{list.create_time}}</text>
                    </div>
                    <div class="pic">
                        <image class="lispic" :src="list.pic" @click="noticeLinkLog(list)"></image>
                    </div>
                </div>
                
            </div>
            <div class="loadingbox" v-if="noticeInfo.loadinging">
                <image class="loading" src="../images/loding.gif"></image>
            </div>
            <div v-if="noticeInfo.loadingMsgShow">
                <text class="loadMsg">没有更多数据了~</text>
            </div>
        </scroller>
        <scroller class="scrollList1" v-if="position==1" @loadmore="noticeLoadMore" loadmoreoffset="1">
            <div class="newsCon">
                <div class="info" :key="index" v-for="(list,index) in activityInfo.lists">
                    <text class="t" @click="noticeLink(list)">{{list.title.length > 28 ? list.title.substring(0,28)+'...' : list.title}}</text>
                    <text class="time">{{list.creat_time}}</text>
                </div>
            </div>
            <div class="loadingbox" v-if="activityInfo.loadinging">
                <image class="loading" src="../images/loding.gif"></image>
            </div>
            <div v-if="activityInfo.loadingMsgShow">
                <text class="loadMsg">没有更多数据了~</text>
            </div>
        </scroller>
        <scroller class="scrollList1" v-if="position==2" @loadmore="guideLoadMore" loadmoreoffset="1">
            <div class="newsCon">
                <div class="info" :key="index" v-for="(list,index) in gameInfo.lists">
                    <text class="t" @click="noticeLink(list)">{{list.title.length > 28 ? list.title.substring(0,28)+'...' : list.title}}</text>
                    <text class="time">{{list.create_time}}</text>
                </div>
            </div>
            <div class="loadingbox" v-if="gameInfo.loadinging">
                <image class="loading" src="../images/loding.gif"></image>
            </div>
            <div v-if="gameInfo.loadingMsgShow">
                <text class="loadMsg">没有更多数据了~</text>
            </div>
        </scroller>
        <nav :reposition="reposition.position"></nav>
    </div>
</template>
<script>
    import TopHeader from "../components/topHeader";
    import nav from "../components/nav";
    // import WxcEpSlider from 'weex-ui/packages/wxc-ep-slider';
    const eeui = app.requireModule('eeui');
    const endpoint = require("../backend/endpoint");
    const api = require("../backend/api");
    const okTools = app.requireModule('okTools');
    
    export default {
        data() { 
            return {   
               position: 0,
               tabPages: [
                    {
                        tabName: 'gameActivity',
                        title: '游戏活动'
                    },
                    {
                        tabName: 'gameNotice',
                        title: '游戏公告'
                    },
                    {
                        tabName: 'gameStrategy',
                        title: '游戏攻略'
                    }
                ],
                // sliderId: 0,
                // cardLength: 2,
                // cardSize: {
                //     width: 516,
                //     height: 274,
                //     spacing: 0,
                //     scale: 0.8
                // },
                picListsss:[],
                spicLists:[],
                reposition:app.config.params,
                limit:10,
                noticeInfo:{
                    infoList:[],
                    lists:[],
                    curPage:1,
                    loadinging: false,
                    loadingMsgShow:false,
                },
                activityInfo:{
                    infoList:[],
                    lists:[],
                    curPage:1,
                    loadinging: false,
                    loadingMsgShow:false,
                },
                gameInfo:{
                    infoList:[],
                    lists:[],
                    curPage:1,
                    loadinging: false,
                    loadingMsgShow:false,
                }
            }
        },
        components: {
            TopHeader,
            nav
            // WxcEpSlider 
        },
        mounted() {
                     
        },

        methods: {
            openNewsCon() {
                eeui.openPage({
                    url: '../pages/newsCon.js',
                    pageType: 'app'
                });
            },
            // wxcEpSliderCurrentIndexSelected (e) {
            //     const index = e.currentIndex;
                
               
            // },
            getBanner(){
                let self = this;
                api.get(endpoint.getArtBanner,{},function(res) {
                     if(res.code == 1) {
                         self.newsBanner=res.mes;
                         self.newsBanner.forEach(function(v,k){
                            self.spicLists.push(v.src)
                        });
                        
                     }
                })
            },
            pageSelected(data) {
                this.position = data.position;
                
            },
            switchPage(item,index) {
                this.position = index;
                this.$refs.reflectName.setCurrentItem(this.tabPages[index].tabName);
                this.activityLoadMore();
                this.guideLoadMore();
            },
            bannerLink(href){
                eeui.openPage({
                    url: '../pages/gameInfo.js',
                    pageType: 'app',
                    params:{gid:href,position:1}
                });
            },
            noticeLoadMore(){
                let self = this;
                self.noticeInfo.loadinging = true;
                self.noticeInfo.loadingMsgShow=false;
                self.noticeInfo.curPage = parseInt(self.noticeInfo.lists.length/self.limit) + 1;
                let params = {page:this.noticeInfo.curPage};     
                api.get(endpoint.getGameActivity,params,function(res) {
                    if(res.code == 1) {
                        self.noticeInfo.infoList=res.mes;
                        if(self.noticeInfo.infoList.length > 0){
                            if(self.noticeInfo.lists.length%self.limit>0){
                                 self.noticeInfo.loadinging = false;
                                self.noticeInfo.loadingMsgShow=true;
                                return;
                            } 
                            self.noticeInfo.infoList.forEach(function(val,index){
                               self.noticeInfo.lists.push(val);
                            });
                           self.noticeInfo.loadinging = true;
                        }
                        if(self.noticeInfo.infoList.length<10){
                            self.noticeInfo.loadinging = false;
                            self.noticeInfo.loadingMsgShow=true;
                        } 
                    }
                })
            },
            jumpAppFirst(){
                let self = this;
               
                	
            },
            noticeLinkLog(list){
                let self = this;
                api.get(endpoint.getuserInfo,{},function(res) {
                    if(res.code==1){
                         let parmars={
                            url:list.url,
                            cookie:api.getVokwan()
                        } 
                        if(list.process_status==3){
                            return;
                        }
                        api.post(endpoint.jumpAppFirst,parmars,function(res) {
                            if(res.code==1){
                                let platform = WXEnvironment.platform.toLowerCase();
                                self.rkey=res.mes;
                                if(platform==='ios'){
                                    eeui.openWeb('https://wap-api.okwan.com/index/user/jumpAppSecond?key='+ encodeURIComponent(self.rkey));    
                                }else{
                                    
                                    okTools.pay('https://wap-api.okwan.com/index/user/jumpAppSecond?key='+ encodeURIComponent(self.rkey),'资讯详情'); 
                                }
                                
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
            noticeLink(list){
                eeui.openPage({
                    url: '../pages/newsCon.js',
                    pageType: 'app',
                    params:{url:list.url}
                });
            },
            activityLoadMore(){
                let self = this;
                self.activityInfo.loadinging = true;
                self.activityInfo.loadingMsgShow=false;
                self.activityInfo.curPage = parseInt(self.activityInfo.lists.length/self.limit) + 1;
                let params = {page:this.activityInfo.curPage};
                api.get(endpoint.getGameNotice,params,function(res) {
                    if(res.code == 1) {
                        self.activityInfo.infoList=res.mes;
                        if(self.activityInfo.infoList && self.activityInfo.infoList.length > 0){
                            if(self.activityInfo.lists.length%self.limit>0){
                                 self.activityInfo.loadinging = false;
                                self.activityInfo.loadingMsgShow=true;
                                return;
                            } 
                            self.activityInfo.infoList.forEach(function(val,index){
                               self.activityInfo.lists.push(val);
                            });
                           self.activityInfo.loadinging = true;
                        }
                        if(self.activityInfo.infoList.length<10){
                            self.activityInfo.loadinging = false;
                            self.activityInfo.loadingMsgShow=true;
                        } 
                    }
                })
            },
            guideLoadMore(){
                let self = this;
                self.gameInfo.loadinging = true;
                self.gameInfo.loadingMsgShow=false;
                self.gameInfo.curPage = parseInt(self.gameInfo.lists.length/self.limit) + 1;
                let params = {page:this.gameInfo.curPage};
                api.get(endpoint.getGameGuide,params,function(res) {
                    if(res.code == 1) {
                        self.gameInfo.infoList=res.mes;
                        if(self.gameInfo.infoList && self.gameInfo.infoList.length > 0){
                            if(self.gameInfo.lists.length%self.limit>0){
                                 self.gameInfo.loadinging = false;
                                self.gameInfo.loadingMsgShow=true;
                                return;
                            } 
                            self.gameInfo.infoList.forEach(function(val,index){
                               self.gameInfo.lists.push(val);
                            });
                           self.gameInfo.loadinging = true;
                        }
                        if(self.gameInfo.infoList.length<10){
                            self.gameInfo.loadinging = false;
                            self.gameInfo.loadingMsgShow=true;
                        } 
                    }
                })
            },
            
            
        },
        
       
        created() {
            this.noticeLoadMore();
            this.activityLoadMore();
            this.guideLoadMore();
            this.getBanner();
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
        padding-bottom: 120px;
    }
    .newsBanner{
        background-color: #fff;
    }
    .banner {
        width: 750px;
        height: 339px;
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
    .slider {
        width: 516px;
        height: 274px;
        align-items: center;
        justify-content: center;
    }
    .bpic{
        width: 516px;
        height: 274px;
    }
    .scrollList1{
        background-color: #fff;
        padding:0 30px 110px;
    }
    .gameC{
        margin-top: 10px;
        background-color: #fff;
        padding:0 30px;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    .tabPages {
        flex:1;
        width: 750px;
        /* border-bottom-style: solid;
        border-bottom-color: #f4f4f4;
        border-bottom-width: 2px; */
    }
    .nav-item{
        justify-content: center;
        height: 88px;
    }
    .nav-item-active{
        height: 88px;
        justify-content: center;
         border-bottom-style: solid;
        border-bottom-color: #ffbd58;
        border-bottom-width: 4px;
    }
    .navTxt{
        font-size: 30px;
        color: #000000;
        text-align: center;
    }
    .newsCon{
        border-top-color: #f4f4f4;
        border-top-style: solid;
        border-top-width: 2px;
        background-color: #fff;
    }
    .info{
        padding: 26px 0;
        border-bottom-style: dashed;
        border-bottom-color: #dddada;
        border-bottom-width: 1px;
         flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    
    .pic{
        width: 220px;
    }
    .lispic{
        width: 220px;
        height: 131px;
        border-radius: 10px;
    }
    .tttttt{
       padding-right: 30px;
    }
    .ccc{
        flex: 1
    }
    .statusPic{
        width: 62px;
        height: 26px;
      
    }
    .t{
        color: #2a2a2a;
        font-size: 28px;
        line-height: 38px;
        width: 455px;
        flex-wrap:wrap;
    }
    .t1{
      
    }
    .time{
        color: #666666;
        font-size: 26px;
        flex:1;
        padding-left: 80px;
    }
    .time1{
        color: #666666;
        font-size: 26px;
        flex:1;
       padding-top: 30px;
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

</style>