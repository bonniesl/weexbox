<template>
    <div class="app">
        <top-com title="我的消息"></top-com>
        <div class="nullpage" v-if="lists.length==0">
            <image class="nullPic" src="../images/null.png"></image>
            <text class="nullTxt">暂无消息哦~</text>
        </div>
        <scroller class="scrollList" @loadmore="loadMore" loadmoreoffset="1" v-if="lists.length>0">
            <div class="" :key="i" v-for="(item, i) in lists">
                <div class="newsCon">
                    <div class="info" @click="newsSlide(item)">
                        <text class="t">{{item.content.length>24 ? item.content.substring(0,24)+'...' : item.content}}</text>
                        <text class="time">{{item.create_time}}</text>
                    </div>
                    <text class="tcc" v-if="item.newscShow">{{item.content}}</text>
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

    export default {
        data() { 
            return {
               messageList:[],
                lists:[],
                busy: false,
                limit:10,
                curPage:1,
                loadinging: false,
                loadingMsgShow:false
                // newscShow:false
            
            }
        },
        components: {
            topCom
        },
        mounted() {
                     
        },

        methods: {
           
           loadMore(){
                let self = this;
                self.loadinging = true;
                self.loadingMsgShow=false;
                 self.curPage = parseInt(self.lists.length/self.limit) + 1;
                 let params = {page:this.curPage,uid:this.uid};
                api.get(endpoint.getmessage,params,function(res) {
                    if(res.code == 1) {
                        self.messageList=res.mes;  
                        if(self.messageList.length > 0){
                            if(self.lists.length%self.limit>0){
                                 self.loadinging = false;
                                 self.loadingMsgShow=true;
                                return;
                            }
                            self.messageList.forEach(function(val,index){
                                self.$set(val, 'newscShow', false); 
                                self.lists.push(val);
                                
                            });
                           self.loadinging = true;
                        }

                        if(self.messageList.length <10) {
                            self.loadinging = false;
                            self.loadingMsgShow=true;
                        }  
                            
                    }
                })
            
            },
            newsSlide(item){
                item.newscShow=!item.newscShow;
            }
           
        },
        computed: {
            
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
        width: 750px;
        flex:1;
    }
    .newsCon{
        background-color: #fff;
        padding: 0 30px;
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
    .t{
        color: #2a2a2a;
        font-size: 28px;
        line-height: 38px;
        width: 455px;
    }
    .time{
        color: #666666;
        font-size: 26px;
    }
    .tcc{
        color: #7c7c7c;
        font-size: 24px;
        padding: 16px 10px 0;
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
        line-height: 50px;
        text-align: center;
        color: #666;
        font-size: 24px;
        padding: 10px 0;
    }
</style>