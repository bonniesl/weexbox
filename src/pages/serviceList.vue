<template>
    <div class="app">
        <top-com title="最新开服表"></top-com>
        <scroll-view class="scrollList">
            <div class="bannerT">
                <slider class="banner" interval="3000" auto-play="true">
                    <div class="banner-frame" :key="index" v-for="(bannerimg,index) in bannerList">
                        <image class="banner-image" resize="cover" :src="bannerimg.src" @click="bannerLink(bannerimg.href)"></image>
                    </div>
                     <indicator v-if="bannerList.length>1" class="indicator"></indicator>
                </slider>
            </div>
            <div class="serviceWrap">
                <!-- <div class="serviceTab">
                    <div class="tabPages"  :key="index" v-for="(item, index) in tabPages">
                        <div class="nav-item" :class="[index === position ? 'nav-item-active' : '']" @click="switchPage(item,index)">
                            <text class="navTxt" :class="[index === position ? 'navTxt-cur' : '']">{{item.title}}</text>
                        </div>
                    </div>
                    <tabbar
                    ref="reflectName"
                    class="tabbar"
                    :eeui="{ tabType: 'top', tabHeight: 0 }"
                    :tabPages="tabPages"
                    @pageSelected="pageSelected"></tabbar>
                </div> -->
                <div class="serviceCon">
                    <list class="serviceL">
                        <cell class="serviceTop">
                            <div class="txtw"><text class="txt">游戏</text></div>
                            <div class="txtw"><text class="txt">区服</text></div>
                            <div class="txtw"><text class="txt">礼包</text></div>
                            <div class="txtw"><text class="txt">开服时间</text></div>
                        </cell>
                        <cell class="serviceMiddle" :class="[index==0 ? 'serviceFir' : '']" :key="index" v-for="(item,index) in serviceList">
                            <div class="txtw"><text class="mtxt">{{item.gname}}</text></div>
                           <div class="txtw"> <text class="mtxt">{{item.name}}</text></div>
                            <div class="txtw"><image @click="getGift(item.gid)" class="gifticco" src="../images/giftIco.png"></image></div>
                           <div class="txtw"> <text class="mtxt">{{item.start_time}}</text></div>
                        </cell>
                    </list>
                </div>
            </div>
        </scroll-view>
        <nav></nav>
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
              position: 0,
              tabPages: [
                    {
                        tabName: 'phoneService',
                        title: '手游开服表'
                    }
                    // {
                    //     tabName: 'h5Service',
                    //     title: 'H5游戏开服表'
                    // }
                ],  
                limit:10,
                curPage:1,
                bannerList:[],
                serviceList:[],
                type:'2'

            }
        },
        components: {
            topCom,
            nav 
        },
        mounted() {
                     
        },

        methods: {
            pageSelected(data) {
                this.position = data.position;
                this.type= data.position+2;
            },
            switchPage(item,index) {
                this.position = index;
                this.type= index+2;
                this.$refs.reflectName.setCurrentItem(this.tabPages[index].tabName);
                this.getService();
            },
            getService(){
                 let self = this;
                 let params={type:self.type}       
                api.get(endpoint.getService,params,function(res) {
                    self.bannerList=res.mes.banner_images;
                    self.serviceList=res.mes.server;
                })
            },
            bannerLink(href){
                eeui.openPage({
                    url: '../pages/gameInfo.js',
                    pageType: 'app',
                    params:{gid:href,position:1}
                });
            },
            phoneGiftLink(gid){
                eeui.openPage({
                    url: '../pages/giftDetail.js',
                    pageType: 'app',
                    params:{gid:gid}
                });
            },
            getGift(gid){
                eeui.openPage({
                    url: '../pages/giftDetail.js',
                    pageType: 'app',
                    params:{gid:gid}
                });
            }   
        },
        watch:{
           type:function(val){
               this.type=val;
           }
        },
        computed: {
            
        },
        created() {
           this.getService();
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
    .bannerT{
        background-color: #fff;
        margin: 10px 0;
        height: 306px;
        padding: 16px 30px;
    }
    .banner {
        width: 690px; 
    }
    .banner-frame {
        width: 690px;
        height: 274px;
        position: relative;
    }
    .banner-image {
        width: 690px;
        height: 274px;
        border-radius: 16px;
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
    .serviceWrap{
         padding: 35px 30px 0;
        background-color: #fff;
        margin-top: 10px;
    }
    .serviceTab{
        flex: 1;
       border-style: solid;
       border-color: #e7e6e6;
       border-width: 1px; 
       border-radius: 10px;
        flex-direction: row;
       align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
    }
    .tabPages {
       flex: 1;
       height: 74px;
      line-height: 74px;
    }
    .nav-item{
        background-color: #f9f7f7;
        flex: 1;
    }
     .nav-item-active{
        background-color: #ffbc57;
    }
    .navTxt{
        font-size: 28px;
        color: #949494;
        text-align: center;
        line-height: 74px;
    }
    .navTxt-cur{
        color: #ffffff;
    }
    .serviceTop{
        flex-direction: row;
       align-items: center;
        justify-content: space-between; 
        height: 84px;
         border-bottom-style: solid;
       border-bottom-color: #E7E6E6;
       border-bottom-width: 1px; 
    }
    .txtw{
        width: 172px;
         align-items: center;
    }
    .txt{
        font-size: 30px;
        color: #0d0f13;
    }
    .serviceMiddle{
        flex-direction: row;
       align-items: center;
        justify-content: space-between;
        height: 90px;
         border-top-style: dashed;
       border-top-color: #dddada;
       border-top-width: 1px; 
    
    }
    .serviceFir{
       border-top-width: 0; 
    }
    .mtxt{
        color: #666666;
        font-size: 26px;
    }
    .gifticco{
        width: 42px;
        height: 44px;
    }
</style>