<template>
    <div class="app">
        <top-header></top-header>
        <scroller class="scrollList">
            <web-view class="webView" ref="reflectName" :eeui="{url: 'https://wap-api.okwan.com/index/user/jumpAppSecond?key='+ key}"></web-view>
        </scroller>
    </div>
</template>
<script>
    import TopHeader from "../components/topHeader";

    export default {
        data() { 
            return {
                key:app.config.params.key
            }
        },
        components: {
            TopHeader
        },
        methods: {
            
        },
        created() {
            console.log(app.config.params.key)
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

