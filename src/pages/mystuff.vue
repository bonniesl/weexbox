<template>
    <div class="app">
        <top-com title="个人资料"></top-com>
        <div class="myUplaodP">
            <div class="uploadFile" @click="uploadPic">
                <div class="myIcon"><image class="adcpic" :src="userInfo.avatar || advanter" ></image></div>
                <text class="myEditHead">点击可更换头像</text>
            </div>
        </div>
        <div class="stuffCon">
            <div class="stuffList">
                <text class="labelTxt">账号</text>
                <text class="inputTxt">{{userInfo.login_name}}</text>
            </div>
            <div class="stuffList">
                 <text class="labelTxt">昵称</text>
                <input v-if="uname==''" class="inp" type="text" placeholder="真实姓名"  v-model.trim="name"  />
                <text class="inputTxt" v-else>{{uname}}</text>
            </div>
             <div class="stuffList">
                 <text class="labelTxt">身份证号</text>
                <input v-if="ucard==''"  class="inp" type="text" placeholder="身份证号"  v-model.trim="card"  />
                <text class="inputTxt" v-else>{{ucard | hideMiddle}}</text>
            </div>
        </div>
        <div class="sub_btn"  @click="getsaveUser()" v-if="uname=='' || ucard==''">
            <image class="btnBg" src="../images/formBtn.png"></image>
            <text class="subTxt">提交</text>
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
    const picture = app.requireModule("eeui/picture");
    const stream = weex.requireModule('stream') || {};
    const modal = weex.requireModule('modal') || {};
    const navigator = app.requireModule('navigator');
    const network = app.requireModule("eeui/network");

    
    export default {
        data() { 
            return {
                userInfo:[],  
                uname:'',
                ucard:'',
                name:'',
                card:'',
                userDevice: '',
                advanter:'',
                advPath:'',
                photoList:{}
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
                        self.userInfo=res.mes;
                        self.name=self.userInfo.name;
                        self.card=self.userInfo.card
                        self.uname=self.userInfo.name;
                        self.ucard=self.userInfo.card;
                    }
                })	
            },
            uploadPic(){
                let self = this;
                picture.create({
                    gallery: 1,
                    maxNum:1,
                    compress:true
                }, function(result) {
                    self.photoList=result.lists;
                    for(let i in result.lists) {
                        self.userInfo.avatar=result.lists[i].path;  
                        self.advPath=result.lists[i].compressPath;
                        let platform = WXEnvironment.platform.toLowerCase();
                        if(platform==='ios'){
                             network.upload({
                                url:'https://wap-api.okwan.com/index/user/saveFace',
                                method:'POST',
                                path: self.advPath,
                                formData: {
                                    framework: 'weex/nat'
                                },  
                                headers: {
                                    'Cookie':api.getVokwan(),
                                    'Content-Type':"multipart/form-data"
                                    
                                }  
                            }, (ret) => {
                                
                                console.log(ret)
                                // self.advanter=ret.data.mes;
                            })     
                        }else{
                              eeui.ajax({
                                    url: 'https://wap-api.okwan.com/index/user/saveFace',
                                    method: 'post',
                                    files: {
                                        img: self.advPath
                                    },  
                                    headers: {
                                        'Cookie':api.getVokwan()
                                    }, 
                                }, function(result) {
                                    if (result.status === "success") {
                                        self.advanter=result.result.mes;
                                    } 
                                });
                            
                        }
                        
                    }

                })
  
            },
            getsaveUser(){
                let params={name:this.name,card:this.card};
                api.post(endpoint.getsaveUser,params,function(res) {
                  
                    if(res.code==1){
                       eeui.toast(res.mes);
                      
                       eeui.openPage({
                            url: '../pages/personal.js',
                            pageType: 'app',
                            params:{position:4}
                        });

                    }else{
                         eeui.toast(res.mes);
                    }
                })	
            }
            
        },
        computed: {
            
        },
        created() {
            this.getuserInfo();
            this.advanter='../images/avatar.png'
        },
        filters:{
            hideMiddle(val) {
                return `${val.substring(0,3)}****${val.substring(val.length-4)}`
            }
		}
    }
</script>
<style scoped>
    .app{
        flex: 1;
        background-color: #f7f7f7;
    }
    .myUplaodP{
        background-color: #ffffff;
        height: 368px;
        align-items: center;
    }
    .uploadFile{
        width: 220px;
    }
    .myIcon{
        margin-top: 32px;
        width: 220px;
        height: 220px;
    }
    .adcpic{
        width: 220px;
        height: 220px;
        border-radius: 10px;
    }
    .myEditHead{
        font-size: 26px;
        color: #666666;
        padding-top: 40px;
        text-align: center;
    }
    .stuffCon{
        background-color: #ffffff;
        margin-top: 9px;
        padding: 0 30px;
    }
    .stuffList{
        height: 105px;
        border-style: solid;
        border-bottom-width: 1px;
        border-bottom-color: #f4f4f4;
       flex-direction: row;
        align-items: center;
        
    }
    .labelTxt{
        color: #666666;
        font-size: 30px;
        line-height: 105px;
        width: 137px;
    }
    .inp{
        font-size:30px;
        color: #0d0f13;
        background-color: transparent;
        line-height: 105px;
        flex: 1;
    }
    .inputTxt{
        color: #0d0f13;
        font-size: 30px;
        line-height: 105px;
    }
    .sub_btn{
       margin-top:54px;
       width: 750px;
       height: 109px;
       position: relative;
       align-items: center;
    }
    .btnBg{
       width: 591px;
       height: 109px;
       position: absolute;
       top: 0;
      
    }
    .subTxt{
        font-size:34px;
        color: #ffffff;
        text-align: center;
        line-height: 109px;
    }
</style>