<template>
    <div class="app">
        <top-com title="攻略详情"></top-com>
        <scroller class="scrollList">
            <web-view class="webView" ref="reflectName" :eeui="{url: url}"></web-view>
        </scroller>
        <!-- <scroll-view class="scrollList">
            <div class="newsCon">
                <text class="t">{{guideDetail.title}} </text>
                <text class="time">活动时间：{{guideDetail.create_time}}</text>
                <div class="con"> 
                    <text>{{guideDetail.content}}</text> 
                </div>
            </div>  
        </scroll-view> -->
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
                url:app.config.params.url,
                guideDetail:[],
                // guideId:app.config.params.id
            }
        },
        components: {
            topCom
        },
        methods: {

            getactivityDetail(){
                let self = this;
                let params = {id:self.guideId}; 
                 api.get(endpoint.getgameGuideDetail,params,function(res) {
                     if(res.code==1){
                         self.guideDetail=res.mes;
                     }
                 })
            }
        },
        created() {      
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
    .webView{
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
    .newsCon{
        background-color: #fff;
        flex: 1;
        padding: 0 30px;
    } 
    .t{
        color: #2a2a2a;
        font-size:34px;
        padding-top: 34px;
        text-align: center;
    }  
    .time{
        color:#bbbbbb;
        font-size: 28px;
        text-align: center;
        padding-top: 26px;
    }
    .con{
        margin-top:24px;
        border-top-color: #f4f4f4;
        border-top-style: solid;
        border-top-width: 2px;
        padding-top: 12px;
    }
</style>