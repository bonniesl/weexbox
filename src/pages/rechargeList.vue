<template>
    <div class="app">
        <top-com title="充值记录"></top-com>
        <div class="nullpage" v-if="lists.length==0">
            <image class="nullPic" src="../images/null.png"></image>
            <text class="nullTxt">暂无充值记录哦~</text>
        </div>
        <scroller class="scrollList" @loadmore="loadMore" loadmoreoffset="1" v-if="lists.length>0">
            <div class="rechargeList">
                <div class="rechargeCon" :class="[i==0 ? 'borderNone' : '']"  :key="i" v-for="(item, i) in lists">
                    <image class="rechPic" src="../images/recharge.png"></image>
                    <div class="info">
                        <text class="t">{{item.gname}}</text>
                        <text class="type">充值类型：{{item.paytype}}</text>
                        <text class="time">充值时间：{{item.pay_time}}</text>
                    </div>  
                    <text class="money">{{item.amount}}元</text>  
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
    const eeui = app.requireModule('eeui');
    const endpoint = require("../backend/endpoint");
    const api = require("../backend/api");
    const modal = weex.requireModule('modal')

    export default {
        data() { 
            return {
                rechargeList:[],
                lists: [],
                limit:10,
		        curPage:1,
                loadinging: false,
                loadingMsgShow:false
            }
        },
        components: {
            topCom
        },
        methods: {
            loadMore(){
                let self = this;
                self.loadinging = true;
                self.loadingMsgShow=false;
                self.curPage = parseInt(self.lists.length/self.limit) + 1;
                let params = {page:this.curPage};
                 
                api.get(endpoint.getrecharge,params,function(res) {
                   
                    if(res.code == 1) {
                        self.rechargeList=res.mes;
                        if(self.rechargeList.length > 0){
                            if(self.lists.length%self.limit>0){
                                 self.loadinging = false;
                                self.loadingMsgShow=true;
                                return;
                            } 
                            self.rechargeList.forEach(function(val,index){
                               self.lists.push(val);
                            });
                           self.loadinging = true;
                        }
                        if(self.rechargeList.length<10){
                            self.loadinging = false;
                            self.loadingMsgShow=true;
                        } 
                            
                    }
                })
            
            }
        },
        created() { 
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
    .rechargeList{
        background-color: #fff;
        padding: 0 30px;
    }
    .rechargeCon{
        height: 148px;
        flex-direction: row;
        align-items: center; 
        border-top-style: solid;
        border-top-color: #dddada;
        border-top-width: 1px;
    }
    .borderNone{
        border-top-width: 0;
    }
    .rechPic{
        width: 88px;
        height: 88px;
        margin-right: 58px;
    }
    .info{
        flex: 1;
        position:relative;
    }
    .t{
        font-size: 30px;
        color: #2a2a2a;
    }
    .type{
        font-size: 22px;
        color: #666;
        padding-top: 20px;
    }
    .time{
        font-size: 22px;
        color: #bbb;
        padding-top: 10px;
    }
    .money{
        font-size: 34px;
        color: #0d0f13;
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