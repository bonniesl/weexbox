<template>
    <div class="app">
        <top-com title="VIP特权"></top-com>
        <div class="vipCon">
            <div class="viptop1">
                <image class="vipPic1" src="../images/vip1.jpg"></image>
            </div>
            <div class="viptop2">
                <image class="vipPic2" src="../images/vip2.jpg"></image>
                <image class="cust" src="../images/customer.png" @click="openMyCustomer"></image>
            </div>
        </div>
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
               
            
            }
        },
        components: {
            topCom,
            nav 
        },
        methods: {
            openMyCustomer() {
                eeui.openPage({
                    url: '../pages/customer.js',
                    pageType: 'app'
                });
            },
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
    .vipPic1{
        width: 750px;
        height: 396px;
    }
    .viptop2{
        margin-top: 12px;
        position: relative;
         width: 750px;
        height: 627px;
    }
    .cust{
        position: absolute;
        top: 22px;
        right: 30px;
        width: 142px;
        height: 47px;
    }
    .vipPic2{
        position: absolute;
        top: 0;
        left: 0;
        width: 750px;
        height: 627px;
    }
</style>