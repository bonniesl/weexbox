<template>
    <div class="app">
        <top-com title="领取礼包"></top-com>
        <scroll-view class="scrollList">
            <div class="gameTop">
                <image class="glogo" :src="logo"></image>
                <div class="gcon">
                    <text class="gt">{{phoneDetail.gname}}</text>
                    <text class="gstyle">共有{{phoneDetail.gift_num}}款礼包 </text>
                </div>
                <div class="giftMore" @click="gameLink">
                    <image class="btnBg" src="../images/btn1.png"></image>
                    <text class="txt">游戏详情</text>
                </div>
            </div>
            <div class="gWrap">
                <div class="gList" :key="index" v-for="(item,index) in phoneDetail.gifts">
                    <div class="con">
                        <text class="tit">{{item.name}}</text>
                        <text class="c1">礼包内容：{{item.content}}</text>
                        <text class="c2">使用方法：{{item.receive_way}}</text>
                    </div>
                    <button class="recBtn" v-if="item.card_count==0" :eeui="{text:'领取', borderWidth:2,borderColor:'#ccc',model:'gray',color:'#fff'}" @click="recGift(item)"></button>
                    <button class="recBtn" v-else  :eeui="{text:'领取', borderWidth:2,borderColor:'#ffbd58',backgroundColor:'#fff'}" @click="recGift(item)"></button>
                    
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
               gid:app.config.params.gid,
               phoneDetail:[],
               logo:'',
               name:'',
               total_number:'',
               recDialogShow:false,
               reCon:{},
               uid:''
            }
        },
        components: {
            topCom
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
            getPhoneDetail(){
                let self = this;
               let params={gid:this.gid};
                api.get(endpoint.getPhoneGiftDetail,params,function(res) {                   
                        if(res.code==1){
                            self.phoneDetail=res.mes;
                            self.logo=self.phoneDetail.gifts[0].logo;
                        }
                })
            },
            recGift(item){
                let self = this;
                let params={gfid:item.gfid,uid:self.uid};   
                api.get(endpoint.getuserInfo,{},function(res) { 
                    if(res.code==1){
                        api.post(endpoint.getGift,params,function(res) {
                            if(res.code==1){
                                self.reCon=res.mes;
                                self.recDialogShow=true;
                                 let copyTxt = eeui.copyText(self.reCon.card);
                            }else{
                                 if(item.type==1){
                                      if(item.card_count==0){
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
            gameLink(){
                eeui.openPage({
                    url: '../pages/gameInfo.js',
                    pageType: 'app',
                    params:{gid:this.gid,position:1}
                });
            },
            closeD(){
                this.recDialogShow=false;
            }
           
        },
        computed: {
            
        },
        created() {
           this.getuserInfo();
           this.getPhoneDetail();
        },
        filters:{
            handleUrl: function(value) {
                    if(value == ''|| value == null){
                        return value
                    }else{
                        return 'https://img.okwan.com/' + value;
                    }   
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
    .gcon{
        flex: 1;
    }
    .gt{
        color: #2a2a2a;
        font-size:28px;
        font-weight: bold;
    }
    .gstyle{
        flex-wrap:wrap;
        color: #666666;
        font-size:22px;
        padding-top: 26px;
    }
    
    .giftMore{ 
        width:185px;
        height:66px;
        position: relative;
    }
    .btnBg{
       width: 185px;
       height: 66px;
       position: absolute;
       top: 0;
       left: 0;
    }
    .txt{
        font-size:30px;
        color: #ffffff;
        text-align: center;
        line-height: 66px;
    }
    .gWrap{
        background-color: #fff;
        padding: 0 30px;
       border-top-style: solid;
       border-top-color: #F4F4F4;
       border-top-width: 1px;  
       
    }
    .gList{
        border-bottom-style: solid;
       border-bottom-color: #F4F4F4;
       border-bottom-width: 1px;  
       flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 38px;
       
    }
    .con{
        flex: 1;
        padding-right: 70px;
    }
    .tit{
        font-size: 28px;
        color: #2a2a2a;
        padding-top: 28px;
    }
    .c1{
        padding-top: 30px;
        font-size: 22px;
        color: #666;
    }
    .c2{
        padding-top: 16px;
        font-size: 22px;
        color: #666;
    }
    .recBtn{
        width:114px;
        height:56px;
        line-height:56px;
        text-align: center;
        color: #ffbd58;
        font-size:28px;
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