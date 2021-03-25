<template>
    <div class="app">
        <top-com title="在线客服"></top-com>
        <scroller class="scrollList">
            <web-view class="webView" ref="reflectName" :eeui="{url: 'https://api-sys.okwan.com/kf'}"></web-view>
        </scroller>
    </div>
</template>
<script>
    import topCom from "../components/topCom";
    const eeui = app.requireModule('eeui');

    export default {
        data() { 
            return {
               
            }
        },
        components: {
            topCom
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
</style>