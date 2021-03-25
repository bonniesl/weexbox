const eeui = app.requireModule('eeui');
const endpoint = require("./endpoint");
const stream = weex.requireModule('stream') || {};
const modal = weex.requireModule('modal') || {};

function _serialize(data) {
    return Object.keys(data).map((keyName) => {
        return encodeURIComponent(keyName) + '=' + encodeURIComponent(data[keyName])
    }).join('&')
}

export function _serializeUrl(data){
  let parameter='';
  if (data) {
      for (let i in data) {
          parameter += '/' + i + '-' + data[i];   
      }
  }
  return parameter;
}
   
  // 工具方法
  function toParams(obj) {
    var param = ""
    for(const name in obj) {
      if(typeof obj[name] != 'function') {
        param += "&" + name + "=" + encodeURI(obj[name])
      }
    }
    return param.substring(1)
  };


  

  /**
 * 接口处理函数
 */
function apiStream (method, url, params, success, failure) {
    
    params = params || {}
   // console.log("16666677777", url ,eeui.getCaches('valcoostr1')+eeui.getCaches('.okwan.com'));
    /*** stream ***/
    if(method === 'GET'){

      if (params) {
            url += '?';
            for (let key in params) {
               url += `&${key}=${params[key]}`
            }
        }

      // GET 方法
        stream.fetch({
          method: method,
          url: url,
          type:'json',
          headers: {
            'Cookie':getVvalcoostr1()+getVokwan()
          },
        }, function(ret) {
          if(!ret.ok){
            // modal.toast({
            //   message: ret,
            //   duration: 3
            // });
          }else{
            let data = ret.data || {}
           // console.log("166666", url , ret.headers["Set-Cookie"])
            success(data);
          }
        })
    }else if(method === 'POST'){
      // POST 方法
      stream.fetch({
        method: method,
        url: url,
        type:'json',
        headers: {
          'Content-Type':'application/x-www-form-urlencoded',
          'Cookie':getVvalcoostr1()+getVokwan()
        },
        body: toParams(params)
      }, function(ret) {
        if(!ret.ok){
          // modal.toast({
          //   message: ret,
          //   duration: 3
          // });
        }else{
          if(ret.headers["Set-Cookie"] && ret.headers["Set-Cookie"].length){    
            let coo =ret.headers["Set-Cookie"];
              coo = coo.replace("[", '');
              coo = coo.replace("]", '');
              coo = coo.replace("Path=/; HttpOnly, ", '');
              coo = coo.replace("path=/, ", '');
              coo = coo.replace(/expires=[^;]+;\ /, '');
              coo = coo.replace(/Max-Age=[^;]+;\ /, '');
              let coostr = coo;
              
              if(url.indexOf('api-sh5.okwan')==-1 && coostr.indexOf("plate_info")>-1){
                 eeui.setCaches(".okwan.com", coostr, 0)
              }
             
          }
          let data = ret.data || {}
          success(data);
        }
      })
  };

}
   
  // 返回在vue模板中的调用接口
  export function get(url, params, success, failure) {
    
    return apiStream('GET', url, params, success, failure)
  }

  export function post(url, params, success, failure) {
    return apiStream('POST', url,params, success, failure)
  }

  //充值调用接口
  export function rechargeGet(url, params, success, failure) {  
    return apiStream('GET', url+ _serializeUrl(params),{}, success, failure)
  }

  export function rechargePost(url, params, success, failure) {
    return apiStream('POST', url+ _serializeUrl(params),{}, success, failure)
  }

  export function ylTrim(s) {
    if (typeof s === 'string') {
        return s.replace(/^\s+|\s+$/g, "")
    } else {
        return 'not string'
    }
}

export function getVvalcoostr1(){
    return eeui.getCaches('valcoostr1') ? eeui.getCaches('valcoostr1') : ''
}

export function getVokwan(){
    return eeui.getCaches('.okwan.com') ? eeui.getCaches('.okwan.com') : ''
}



// 验证码
export function ValidateCodeapi(callback) {
    stream.fetch({
      method: 'GET',
      url: endpoint.validateCode,
      type:'json',
      headers: {
        'Cookie':getVvalcoostr1()+getVokwan()
      },
    }, function(ret) {
      if(!ret.ok){
        // modal.toast({
        //   message: ret,
        //   duration: 3
        // });
      }else{
        if(ret.headers["Set-Cookie"] && ret.headers["Set-Cookie"].length){     
              let valCoo = ret.headers["Set-Cookie"];
              let coo1 = /plate_checkCode=.*?(?=(e))/;
              let valcoostr=valCoo.match(coo1)[0];
              eeui.setCaches("valcoostr1", valcoostr, 0)
          }
          
        let data = ret.data || {}
        callback(ret.data.mes);
      }
    })
}




