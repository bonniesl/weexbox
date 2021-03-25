<template>
    <div class="app">
        <top-com title="最新游戏礼包"></top-com> 
        <div class="giftTab">
            <div class="giftC">
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
            </div>   
        </div>
        <scroller class="scrollGift" @loadmore="pGiftloadMore" loadmoreoffset="1" v-if="position==0">
                <div class="giftDetail" :key="index" v-for="(item,index) in pGiftlists">
                <div class="giftItem">
                    <image class="pic" :src="item.logo"></image>
                    <text class="name">{{item.name}}</text>
                    <button class="recBtn" :eeui="{text:'领取', borderWidth:2,borderColor:'#ffbd58',backgroundColor:'#fff'}" @click="phoneGiftLink(item.gid)"></button>
                </div>
            </div>
            <div class="loadingbox" v-if="phoneloadinging">
                <image class="loading" src="../images/loding.gif"></image>
            </div>
            <div v-if="phoneloadingMsgShow">
                <text class="loadMsg">没有更多数据了~</text>
            </div>
        </scroller>
        <scroller class="scrollGift" @loadmore="h5GiftloadMore" loadmoreoffset="1" v-if="position==1">
                <div class="giftDetail" :key="index" v-for="(item,index) in h5Giftlists">
                <div class="giftItem">
                    <image class="pic" :src="item.logo"></image>
                    <text class="name">{{item.name}}</text>
                    <button class="recBtn" :eeui="{text:'领取', borderWidth:2,borderColor:'#ffbd58',backgroundColor:'#fff'}" @click="H5GiftLink(item.gid)"></button>
                </div>
            </div>
            <div class="loadingbox" v-if="h5loadinging">
                <image class="loading" src="../images/loding.gif"></image>
            </div>
            <div v-if="h5loadingMsgShow">
                <text class="loadMsg">没有更多数据了~</text>
            </div>
        </scroller>
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
                        tabName: 'phoneGift',
                        title: '手游礼包'
                    },
                    {
                        tabName: 'h5Gift',
                        title: 'H5游戏礼包'
                    }
                ],  
                limit:10,
                curPage:1,
                phoneGiftList:[],
                pGiftlists: [],
                phoneloadinging: false,
                phoneloadingMsgShow:false,
                h5GiftList:[],
                h5Giftlists: [],
                h5loadinging: false,
                h5loadingMsgShow:false

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
            },
            switchPage(item,index) {
                this.position = index;
                this.$refs.reflectName.setCurrentItem(this.tabPages[index].tabName);
            },
            pGiftloadMore(){
                let self = this;
                self.phoneloadinging = false;
                self.phoneloadingMsgShow=false;
                 self.curPage = parseInt(self.pGiftlists.length/self.limit) + 1;
                 let params = {page:self.curPage};
                api.get(endpoint.getPhoneGift,params,function(res) {
                    if(res.code == 1) {
                         self.phoneGiftList=res.mes;
                           
                        if(self.phoneGiftList.length > 0){
                            self.phoneGiftList.forEach(function(val,index){
                                self.pGiftlists.push(val);
                            });
                           self.phoneloadinging = true;
                        }

                        if(self.phoneGiftList.length <10) {
                            self.phoneloadinging = false;
                            self.phoneloadingMsgShow=true;
                        }  
                            
                    }
                })
            },
            phoneGiftLink(gid){
                eeui.openPage({
                    url: '../pages/giftDetail.js',
                    pageType: 'app',
                    params:{gid:gid}
                });
            },
            h5GiftloadMore(){
                let self = this;
                self.h5loadinging = false;
                self.h5loadingMsgShow=false;
                 self.curPage = parseInt(self.h5Giftlists.length/self.limit) + 1;
                 let params = {page:self.curPage};
                api.get(endpoint.getH5Gift,params,function(res) {
                    if(res.code == 1) {
                         self.h5GiftList=res.mes;
                           
                        if(self.h5GiftList.length > 0){
                            self.h5GiftList.forEach(function(val,index){
                                self.h5Giftlists.push(val);
                            });
                           self.h5loadinging = true;
                        }

                        if(self.h5GiftList.length <10) {
                            self.h5loadinging = false;
                            self.h5loadingMsgShow=true;
                        }  
                            
                    }
                })
            },
            H5GiftLink(gid){
                eeui.openPage({
                    url: '../pages/h5GiftDetail.js',
                    pageType: 'app',
                    params:{gid:gid}
                });
            }
            
        },
        computed: {
            
        },
        created() {
           this.pGiftloadMore();
           this.h5GiftloadMore();
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
    .giftWrap{
        background-color: #fff;
        margin-top: 10px;
    }
    .giftTab{
        margin-top: 10px;
        background-color: #fff;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 18x 30px 0;
        
    }
    .giftC{
       flex: 1;
       border-style: solid;
       border-color: #e7e6e6;
       border-width: 1px; 
       border-radius: 10px;
        flex-direction: row;
       align-items: center;
        justify-content: space-between;
         
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
    .scrollGift{
        flex:1;
        padding-bottom:114px;
        background-color: #fff;
    }
    .giftDetail{
        padding: 16px 30px 0;   
       
    }
    .giftItem{
        position: relative;
        flex: 1;
        flex-direction: row;
        align-items: center;
        padding: 16px 0;
        border-bottom-style: solid;
       border-bottom-color: #F4F4F4;
       border-bottom-width: 1px; 
    }
    .pic{
        width: 109px;
        height: 109px;
        border-radius: 15px;
    }
    .name{
        flex: 1;
        color: #333333;
        font-size: 32px;
        padding-left: 40px;
    }
    .recBtn{
        width:114px;
        height:56px;
        line-height: 56px;
         text-align: center;
        color: #ffbd58;
        font-size:28px;
        border-radius: 12px;
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