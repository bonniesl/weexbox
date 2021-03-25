<template>
    <div class="app">
        <top-com title="我的礼包"></top-com>
        <div class="nullpage" v-if="lists.length==0">
            <image class="nullPic" src="../images/null.png"></image>
            <text class="nullTxt">暂无礼包哦~</text>
        </div>
        <scroller class="scrollList" @loadmore="loadMore" loadmoreoffset="1" v-if="lists.length>0">
            <div class="myGift" :key="i" v-for="(item, i) in lists">
                <div class="giftC">
                    <image class="pic" :src="item.logo | handleUrl"></image>
                    <div class="con">
                        <text class="t">{{item.giftName}}</text>
                        <text class="c">礼包码：{{item.cardno}}</text>
                        <text class="time">领取时间：{{item.used_time || item.create_time}}</text>
                    </div>
                    <button class="copy" :eeui="{text:'复制', borderWidth:2,borderColor:'#ffbd58',backgroundColor:'#fff'}" @click="copy(item)"></button>
                </div>
            </div>
            <div class="loadingbox" v-if="loadinging">
                <image class="loading" src="../images/loding.gif"></image>
            </div>
             <div v-if="loadingMsgShow">
                <text class="loadMsg">没有更多数据了~</text>
            </div>
        </scroller>
        
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
                giftRecordList:[],
                lists: [],
                limit:10,
		        curPage:1,
                uid:app.config.params.uid,
                loadinging: false,
                loadingMsgShow:false
            }
        },
        components: {
            topCom,
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
                    }
                })	
            },
            
            loadMore(){
                let self = this;
                self.loadinging = true;
                self.loadingMsgShow=false;
                self.curPage = parseInt(self.lists.length/self.limit) + 1;
                let params = {page:this.curPage,uid:this.uid};
                api.get(endpoint.getgiftRecord,params,function(res) {
                    if(res.code == 1) {
                        self.giftRecordList=res.mes;
                        if(self.giftRecordList.length > 0){
                            if(self.lists.length%self.limit>0){
                                 self.loadinging = false;
                                self.loadingMsgShow=true;
                                return;
                            } 
                            self.giftRecordList.forEach(function(val,index){
                               self.lists.push(val);
                            });
                           self.loadinging = true;
                        }
                        if(self.giftRecordList.length<10){
                            self.loadinging = false;
                            self.loadingMsgShow=true;
                        } 
                            
                    }
                })
            
            },
            copy(item){
                let copyTxt = eeui.copyText(item.cardno);
                eeui.toast('复制成功');
            },
           _isLogin(cb) {
                let self = this;
                api.get(endpoint.getuserInfo,{},function(res) {
                    if (res.code == 1) {
                        if(typeof cb!='undefined'){
                            self.uid=res.mes.uid;
                            cb();                     
                        }
                    } 
                })
            }
        },
        watch:{
           uid:function(val){
               this.uid=val;
           }
        },
        filters:{
            handleUrl: function(value) {
                    if(value == ''|| value == null){
                        return value
                    }else{
                        return 'https://img.okwan.com/' + value;
                    }   
                }
        },
        created() { 
            this.getuserInfo();
            this.loadMore();
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
      
    }
    .myGift{
        background-color: #fff;
        padding: 0 30px;
    }
    .giftC{
        position: relative;
        height: 182px;
        border-bottom-style: solid;
        border-bottom-color: #dddada;
        border-bottom-width: 1px;
        flex-direction: row;
        align-items: center;
    }
    .pic{
        width: 131px;
        height: 131px;
    }
    .con{
        margin-left: 22px;
    }
    .t{
        color: #2a2a2a;
        font-size: 28px;
    }
    .c{
        padding-top: 18px;
        color: #666666;
        font-size:22px;
    }
    .time{
        padding-top: 7px;
        color: #bbbbbb;
        font-size:22px;
    }
    .copy{
        position: absolute;
        right: 0;
        width:114px;
        height:56px;
        line-height: 56px;
         text-align: center;
        color: #ffbd58;
        font-size:28px;
        border-radius: 12px;
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