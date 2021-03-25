<template>
    <div class="headerC">
        <image class="topBg" src="../images/topbg.png" ></image>
        <navbar class="navbar" ref="reflectName">
            <navbar-item type="left" @click="goback">
                <icon content="tb-back-light" class="icon"></icon>
            </navbar-item>
            <navbar-item type="title">
                <text class="text">{{title}}</text>
            </navbar-item>
        </navbar>
    </div>
</template>
<style scoped>
    .headerC{
        width:750px;
        height:93px;
        position: relative;
    }
    .topBg{
        width:750px;
        height:93px;
        position: absolute;
        top: 0;
        left: 0;
    }
    .navbar {
        width: 750px;
        height: 88px;
       background-color:#fff;
    }
    .icon{
        color: #0f0f0f;
        width: 100px;
        height:88px;
        font-size:54px;
    }
    .text {
        font-size: 34px;
        color: #0d0f13;
    }

</style>
<script>

const eeui = app.requireModule('eeui');
const endpoint = require("../backend/endpoint");
const api = require("../backend/api");

export default {
    name: 'topCom',
    props:{
		   "title":''
    },
    methods: {
        goback(){      
            eeui.toastClose();
            api.get(endpoint.getuserInfo,{},function(res) {
                if(res.code==1){
                    eeui.closePage();  
                }else{
                    eeui.openPage({
                        url: '../pages/index.js',
                        pageType: 'app',
                        params:{position:0}
                    });
                }
            }) 
           
        },
    },
    mounted(){
        
    },
    created() { 
       
        
    }
}
</script>