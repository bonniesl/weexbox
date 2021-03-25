<template>
    <div class="app">
         <top-com title="游戏详情"></top-com>
         <scroll-view class="scrollList">
                 <div class="gameTop">
                     <image class="glogo" :src="detailInfo.logo"></image>
                     <div class="info">
                         <div>
                              <text class="gt">{{detailInfo.name}}</text>
                              <text class="gstyle">{{detailInfo.gstyle}}</text>
                         </div>
                        <div>
                            <button class="downBtn" :eeui="{text:btnTxt, borderWidth:1,borderColor:'#ffbd58',backgroundColor:'#fff'}" @click="downLinkAz(detailInfo)"></button>
                            <!-- <button class="downBtn" :eeui="{text:'IOS下载', borderWidth:1,borderColor:'#ffbd58',backgroundColor:'#fff'}" @click="downLinkIos(detailInfo.ios_url)"></button> -->
                        </div>
                     </div>
                 </div>
                <div class="gameDetail">
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
                    <div class="gameInfo" v-if="position==0">
                        <div class="slidePad" v-if="spicLists.length">
                            <wxc-ep-slider :slider-id="sliderId"
                                        :card-length='spicLists.length'
                                        :card-s="cardSize"
                                        :select-index="1"
                                        :container-s="containerSize"
                                        @wxcEpSliderCurrentIndexSelected="wxcEpSliderCurrentIndexSelected">

                                <wxc-pan-item v-for="(v,index) in spicLists"
                                    :key="index"
                                    :slot="`card${index}_${sliderId}`"
                                    :class="['slider',`slider${index}`]">
                                    <image class="gamePic"  :src="v" ></image>
                                </wxc-pan-item>
                            </wxc-ep-slider> 
                        </div>
                        <div class="desInfo">
                            <div class="desTop">
                                <image class="desPic" src="../images/info.png"></image>
                                <text class="dest">游戏简介</text>
                            </div>
                            <text class="desCon">{{detailInfo.introduction}}</text>
                        </div> 
                    </div>
                    <div class="giftBCon" v-if="position==1">
                        <div v-if="giftDetailList && giftDetailList.length==0"><text class="nullTt">暂无礼包~</text></div>
                        <div v-if="giftDetailList && giftDetailList.length">
                            <div class="giftBox" :key="index" v-for="(item,index) in giftDetailList" >
                                <div class="giftLf">
                                    <text class="giftname">{{item.name}}</text>
                                    <richtext class="giftC">
                                        <span>礼包内容：</span>
                                        <span>{{item.content}}</span>
                                    </richtext>
                                </div>
                                <button class="receiveB" v-if="item.card_count[item.gfid.join(',')]==0" :eeui="{text:'领取', borderWidth:2,borderColor:'#ccc',model:'gray',color:'#fff'}" @click="recGift(item)"></button>
                                <button class="receiveB" v-else  :eeui="{text:'领取', borderWidth:2,borderColor:'#ffbd58',backgroundColor:'#fff'}" @click="recGift(item)"></button>
                            </div>
                        </div>
                    </div>
                   
                    <scroller class="scrollList1" @loadmore="guideLoadMore" loadmoreoffset="1" v-if="position==2">
                        <div class="newsCon" :key="index" v-for="(list,index) in guideInfo.lists">
                            <div class="info" @click="guideLink(list)">
                                <text class="t">{{list.title}}</text>
                                <text class="time">{{list.create_time}}</text>
                            </div>
                        </div>
                        <div class="loadingbox" v-if="guideInfo.loadinging">
                            <image class="loading" src="../images/loding.gif"></image>
                        </div>
                        <div v-if="guideInfo.loadingMsgShow">
                            <text class="loadMsg">没有更多数据了~</text>
                        </div>
                    </scroller>
                    
                </div>
                 <div class="gameOther">
                     <text class="bigTit">其他人还在玩</text>
                     <div class="otherList">
                         <div class="flexNowrap">
                             <div class="otherInfo" :key="index" v-for="(list,index) in otherGameList">
                                <image class="otherPic" :src="list.logo"></image>
                                <text class="otherTxt">{{list.name}}</text>
                                <button class="openGame" :eeui="{text:'打开', borderWidth:2,borderColor:'#ffbd58',backgroundColor:'#fff'}" @click="gameLink(list.gid)"></button>
                            </div>
                         </div>
                     </div>
                 </div>
          </scroll-view>
          <div class="recDialog" v-if="recDialogShow">
            <image class="recbg" src="../images/recDBg1.png"></image>
            <div class="close" @click="closeD">
                <image class="closePic" src="../images/closeIc.png"></image>
            </div>
             <div class="dcon">
                 <div class="dnum">
                     <text class="dt">{{reCon.card}}</text>
                </div>
                <text class="dt1">使用方法：游戏内兑换领取</text>
                <div class="btnClose" @click="closeD">
                    <image class="btnC" src="../images/close.png"></image>
                </div>
            </div>
        </div>
         <nav :reposition="reposition.position"></nav>
    </div>
</template>
<script>
    import topCom from "../components/topCom";
    import nav from "../components/nav";
    const eeui = app.requireModule('eeui');
    const endpoint = require("../backend/endpoint");
    const api = require("../backend/api");
    import WxcEpSlider from 'weex-ui/packages/wxc-ep-slider';
    const okTools = app.requireModule('okTools');
    const globalEvent = weex.requireModule('globalEvent');

    export default {
        data() { 
            return {
               position: 0,
               tabPages: [
                    {
                        tabName: 'gameInfo',
                        title: '游戏简介'
                    },
                    {
                        tabName: 'gameGift',
                        title: '游戏礼包'
                    },
                    {
                        tabName: 'gameStrategy',
                        title: '游戏攻略'  
                    }
                ],
                detailInfo:{},
                gid:app.config.params,
                otherGameList:[],
                picListsss:[],
                giftDetailList:[],
                sliderId: -1,
                cardLength: 3,
                containerSize:{
                    width: 750,
                    height: 495
                },
                cardSize: {
                    width: 278,
                    height: 495,
                    spacing: 22,
                    scale:1
                },
                spicLists:[],
                reposition:app.config.params,
                guideList:[],
                limit:10,
                guideInfo:{
                    guideList:[],
                    lists:[],
                    curPage:1,
                    loadinging: false,
                    loadingMsgShow:false,
                },
                uid:'',
                recDialogShow:false,
                reCon:{},
                btnTxt:'直接玩'
            }
        },
        components: {
            topCom,
            nav,
            WxcEpSlider 
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
            pageSelected(data) {
                this.position = data.position;
            },
            switchPage(item,index) {
                this.position = index;
                this.$refs.reflectName.setCurrentItem(this.tabPages[index].tabName);
                this.guideLoadMore();
            },
            getGameDetail(){
                let self = this;
               let params={gid:this.gid.gid};
           
                api.get(endpoint.getGameDetail,params,function(res) {  
                    self.detailInfo=res.mes;
                    self.picListsss=res.mes.game_img_shot; 
                    Object.keys(self.picListsss).forEach(function(key){
                         self.spicLists.push(self.picListsss[key])

                    });
                })
            },
            getPhoneGiftDetail(){
                let self = this;
               let params={gid:this.gid.gid};
                api.get(endpoint.getGiftDetail,params,function(res) {
                     self.giftDetailList=res.mes;
                })
            },
            getOtherGame(){
                let self = this;
                api.get(endpoint.getOtherGame,{},function(res) {
                    self.otherGameList=res.mes;
                })
            },
            guideLoadMore(){
                let self = this;
                self.guideInfo.loadinging = true;
                self.guideInfo.loadingMsgShow=false;
                self.guideInfo.curPage = parseInt(self.guideInfo.lists.length/self.limit) + 1;
                let params = {gid:this.gid.gid,page:this.guideInfo.curPage};
                api.get(endpoint.getgameGuide,params,function(res) {
                    if(res.code == 1) {
                        self.guideInfo.guideList=res.mes;
                        if(self.guideInfo.guideList.length > 0){
                            if(self.guideInfo.lists.length%self.limit>0){
                                 self.guideInfo.loadinging = false;
                                self.guideInfo.loadingMsgShow=true;
                                return;
                            } 
                            self.guideInfo.guideList.forEach(function(val,index){
                               self.guideInfo.lists.push(val);
                            });
                           self.guideInfo.loadinging = true;
                        }
                        if(self.guideInfo.guideList.length<10){
                            self.guideInfo.loadinging = false;
                            self.guideInfo.loadingMsgShow=true;
                        } 
                    }
                })
            },
            downLinkIos(ios_url){
                let platform = WXEnvironment.platform.toLowerCase();
                if(platform==='ios'){
                    eeui.openWeb(ios_url);    
                }
            },
            downLinkAz(list){
                let platform = WXEnvironment.platform.toLowerCase();
                let self = this;
                if(platform==='ios'){
                    eeui.openWeb(list.ios_url);    
                }else{
                    if(self.btnTxt=='下载中'){
                        return;
                    }

                    okTools.checkPackage(list.pkg_name,function(cheV){ 
                        if(cheV==1){
                            self.btnTxt='直接玩';
                            okTools.open(list.pkg_name);
                        }
                        if(cheV==2){
                            self.btnTxt='下载中';
                            okTools.downloadApk(list.pkg_url, list.name,list.pkg_name);
                        }
                    })

                    globalEvent.addEventListener("downloadCallback", function (e) {
                        if(e.down==1){
                            self.btnTxt='直接玩'
                        }
                    })
                    globalEvent.addEventListener("installCallback", function (e) {
                        if(e.install==1){
                            self.btnTxt='直接玩'
                        }
                    })
                    globalEvent.addEventListener("failCallback", function (e) {
                        if(e.fail==1){
                            self.btnTxt='直接玩'
                        }
                    })
                }
            },
            wxcEpSliderCurrentIndexSelected (e) {
                const index = e.currentIndex;
            },
            recGift(item){
                let self = this;
                let params={gfid:item.gfid.join(','),uid:self.uid};   
                api.get(endpoint.getuserInfo,{},function(res) { 
                    if(res.code==1){
                        api.post(endpoint.getGift,params,function(res) {
                            if(res.code==1){
                                self.reCon=res.mes;
                                self.recDialogShow=true;
                                 let copyTxt = eeui.copyText(self.reCon.card);
                            }else{
                                 if(item.type==1){
                                      if(item.card_count[item.gfid.join(',')]==0){
                                            eeui.toast('礼包已领取完');
                                      }else{
                                          eeui.toast(res.mes); 
                                      }
                                 }
                                  
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
            closeD(){
                this.recDialogShow=false;
            },
            gameLink(gid){
                eeui.openPage({
                    url: '../pages/gameInfo.js',
                    pageType: 'app',
                    params:{gid:gid,position:1}
                });
            },
            guideLink(list){
                 eeui.openPage({
                    url: '../pages/guideDetail.js',
                    pageType: 'app',
                    params:{url:list.link_url}
                });
                // eeui.openPage({
                //     url: '../pages/guideDetail.js',
                //     pageType: 'app',
                //     params:{id:id}
                // });
            }
           
        },
        created() {
            this.gid=eeui.getPageInfo().params;
            this.getuserInfo();
            this.getGameDetail();
            this.getOtherGame();
            this.getPhoneGiftDetail();
            this.guideLoadMore();        
        },
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
        padding-bottom:136px;
    }
  
    .gameTop{
        background-color: #fff;
        height: 186px;
        flex-direction: row;
        align-items: center;
        padding:0 30px;
    }
    .glogo{
        width: 132px;
        height: 132px;
        margin-right:30px;
    }
    .info{ 
        flex:1;   
        flex-direction: row;
        align-items: center;
        justify-content: space-between;  
    }
    .gt{
        color: #2a2a2a;
        font-size:28px;
    }
    .gstyle{
        flex-wrap:wrap;
        color: #666666;
        font-size:22px;
        padding-top: 26px;
    }
    
    .downBtn{ 
        width:146px;
        height:52px;
        line-height:52px;
        text-align: center;
        color: #ffbd58;
        font-size:26px;
    }
    .azdown{
        margin-bottom:22px;
    }
    .gameDetail{
        background-color: #fff;
        margin-top: 10px;
        padding: 0 30px;
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
    .gamePic{
        width: 278px;
        height: 495px;
    }
   /* .slider{
       height: 495px;
   } */
    .slidePad{
        margin-top: 18px;
        height: 495px; 
    }
    .desInfo{
        width: 690px;
        padding-bottom: 20px;
    }
    .desTop{
        height:80px;
        flex-direction: row;
        align-items: center;
        border-bottom-color: #f4f4f4;
        border-bottom-style: solid;
        border-bottom-width: 1px;
    }
    .desPic{
        width:32px;
        height:32px;
        margin-right: 14px;
    }
    .dest{
        font-size: 30px;
        color:#2a2a2a;
    }
    
    .desCon{
        font-size: 24px;
        color: #666666;
        line-height: 34px;
        padding: 20px 0 0;
    }
    
    .giftBox{
        width: 690px;
        position: relative;
        padding: 24px 0 40px;
        flex-direction: row;
        align-items: center;
        border-bottom-color: #f4f4f4;
        border-bottom-style: solid;
        border-bottom-width: 3px;
    }
    .giftLf{
       width: 500px;
    }
    .giftname{
        font-size: 30px;
        color: #333333;
        padding-bottom: 20px;
    }
    .giftC{
        color: #666666;
        font-size: 22px;
        line-height: 32px;
    }
    .receiveB{
        width:114px;
        height:56px;
        line-height:56px;
        text-align: center;
        color: #ffbd58;
        font-size:28px;
        position: absolute;
        right: 6px;
        top: 60px;
    }

    .newsCon{
        
    }
    .info{
        padding: 32px 0;
         flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
   
    .t{
        color: #2a2a2a;
        font-size: 28px;
        line-height: 38px;
        width: 455px;
        flex-wrap:wrap;
    }
    .time{
        color: #666666;
        font-size: 26px;
    }
    .gameOther{
        background-color: #fff;
        padding: 0 30px;
        margin-top: 10px;
        height: 348px;
    }
    .bigTit{
        color: #0d0f13;
        font-size: 34px;
        padding: 18px 0 40px 0;
    }
    .otherInfo{
        flex:1;
        align-items: center;
    }
    .flexNowrap{
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    .otherPic{
        width: 118px;
        height: 118px
    }
    .otherTxt{
        color: #2a2a2a;
        font-size: 26px;
        padding-top: 24px;
    }
    .openGame{
        width:103px;
        height:43px;
        line-height: 43px;
         text-align: center;
        color: #ffbd58;
        font-size:26px;
        border-radius: 12px;
        margin-top:20px;
    }
    .nullTt{
        color: #666;
        font-size: 28px;
        text-align: center;
        padding: 18px 0;
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
    .recDialog{
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0,0,0,0.76);
        justify-content: center;
        align-items: center;
        z-index: 99999;
    }
    .recbg{
        position: absolute; 
        width: 552px;
        height: 621px;
    }
    .dcon{
        width: 552px;
        height: 621px;
    }
    .dnum{
        padding-top: 278px;
    }
    .dt{
        color: #ffbd58;
        font-size: 30px;
        text-align: center;
        height: 93px;
        line-height: 93px;
    }
    .dt1{
        padding-left: 64px;
        font-size: 24px;
        color: #bbb;
        padding-top: 26px;
    }
    .btnClose{
        flex:1; 
        position: relative;
        justify-content: center;
        align-items: center;
    }
    .btnC{
        width:331px;
        height:69px;
    }
    .close{
        margin-left: 552px;
    }
    .closePic{
        width: 40px;
        height: 40px;
    }
</style>