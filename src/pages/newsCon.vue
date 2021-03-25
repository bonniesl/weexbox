<template>
    <div class="app">
        <top-com title="资讯详情"></top-com>
        <scroller class="scrollList">
            <web-view class="webView" ref="reflectName" :eeui="{url: url}"></web-view>
        </scroller>
        <!-- <scroll-view class="scrollList">
            <div class="newsCon">
                <text class="t">传奇世界服务器冠名权活动震世界开启！ </text>
                <text class="time">活动时间：2018-12-11 14:20:34</text>
                <div class="con">
                    
                </div>
            </div>  
        </scroll-view> -->
        <!-- <nav></nav> -->
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
            }
        },
        components: {
            topCom,
            nav 
        },
       
        methods: {
           
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