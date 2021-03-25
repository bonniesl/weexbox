// { "framework": "Vue"} 
if(typeof app=="undefined"){app=weex}
if(typeof eeuiLog=="undefined"){var eeuiLog={_:function(t,e){var s=e.map(function(e){return e="[object object]"===Object.prototype.toString.call(e).toLowerCase()?JSON.stringify(e):e});if(typeof this.__m==='undefined'){this.__m=app.requireModule('debug')}this.__m.addLog(t,s)},debug:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("debug",e)},log:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("log",e)},info:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("info",e)},warn:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("warn",e)},error:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("error",e)}}}
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/forget.vue?entry=true");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/backend/api.js":
/*!****************************!*\
  !*** ./src/backend/api.js ***!
  \****************************/
/*! exports provided: _serializeUrl, get, post, rechargeGet, rechargePost, ylTrim, getVvalcoostr1, getVokwan, ValidateCodeapi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_serializeUrl", function() { return _serializeUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "post", function() { return post; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rechargeGet", function() { return rechargeGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rechargePost", function() { return rechargePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ylTrim", function() { return ylTrim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVvalcoostr1", function() { return getVvalcoostr1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVokwan", function() { return getVokwan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateCodeapi", function() { return ValidateCodeapi; });
var eeui = app.requireModule('eeui');

var endpoint = __webpack_require__(/*! ./endpoint */ "./src/backend/endpoint.js");

var stream = weex.requireModule('stream') || {};
var modal = weex.requireModule('modal') || {};

function _serialize(data) {
  return Object.keys(data).map(function (keyName) {
    return encodeURIComponent(keyName) + '=' + encodeURIComponent(data[keyName]);
  }).join('&');
}

function _serializeUrl(data) {
  var parameter = '';

  if (data) {
    for (var i in data) {
      parameter += '/' + i + '-' + data[i];
    }
  }

  return parameter;
} // 工具方法

function toParams(obj) {
  var param = "";

  for (var name in obj) {
    if (typeof obj[name] != 'function') {
      param += "&" + name + "=" + encodeURI(obj[name]);
    }
  }

  return param.substring(1);
}

;
/**
* 接口处理函数
*/

function apiStream(method, url, params, success, failure) {
  params = params || {}; // eeuiLog.log("16666677777", url ,eeui.getCaches('valcoostr1')+eeui.getCaches('.okwan.com'));

  /*** stream ***/

  if (method === 'GET') {
    if (params) {
      url += '?';

      for (var key in params) {
        url += "&".concat(key, "=").concat(params[key]);
      }
    } // GET 方法


    stream.fetch({
      method: method,
      url: url,
      type: 'json',
      headers: {
        'Cookie': getVvalcoostr1() + getVokwan()
      }
    }, function (ret) {
      if (!ret.ok) {// modal.toast({
        //   message: ret,
        //   duration: 3
        // });
      } else {
        var data = ret.data || {}; // eeuiLog.log("166666", url , ret.headers["Set-Cookie"])

        success(data);
      }
    });
  } else if (method === 'POST') {
    // POST 方法
    stream.fetch({
      method: method,
      url: url,
      type: 'json',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': getVvalcoostr1() + getVokwan()
      },
      body: toParams(params)
    }, function (ret) {
      if (!ret.ok) {// modal.toast({
        //   message: ret,
        //   duration: 3
        // });
      } else {
        if (ret.headers["Set-Cookie"] && ret.headers["Set-Cookie"].length) {
          var coo = ret.headers["Set-Cookie"];
          coo = coo.replace("[", '');
          coo = coo.replace("]", '');
          coo = coo.replace("Path=/; HttpOnly, ", '');
          coo = coo.replace("path=/, ", '');
          coo = coo.replace(/expires=[^;]+;\ /, '');
          coo = coo.replace(/Max-Age=[^;]+;\ /, '');
          var coostr = coo;

          if (url.indexOf('api-sh5.okwan') == -1 && coostr.indexOf("plate_info") > -1) {
            eeui.setCaches(".okwan.com", coostr, 0);
          }
        }

        var data = ret.data || {};
        success(data);
      }
    });
  }

  ;
} // 返回在vue模板中的调用接口


function get(url, params, success, failure) {
  return apiStream('GET', url, params, success, failure);
}
function post(url, params, success, failure) {
  return apiStream('POST', url, params, success, failure);
} //充值调用接口

function rechargeGet(url, params, success, failure) {
  return apiStream('GET', url + _serializeUrl(params), {}, success, failure);
}
function rechargePost(url, params, success, failure) {
  return apiStream('POST', url + _serializeUrl(params), {}, success, failure);
}
function ylTrim(s) {
  if (typeof s === 'string') {
    return s.replace(/^\s+|\s+$/g, "");
  } else {
    return 'not string';
  }
}
function getVvalcoostr1() {
  return eeui.getCaches('valcoostr1') ? eeui.getCaches('valcoostr1') : '';
}
function getVokwan() {
  return eeui.getCaches('.okwan.com') ? eeui.getCaches('.okwan.com') : '';
} // 验证码

function ValidateCodeapi(callback) {
  stream.fetch({
    method: 'GET',
    url: endpoint.validateCode,
    type: 'json',
    headers: {
      'Cookie': getVvalcoostr1() + getVokwan()
    }
  }, function (ret) {
    if (!ret.ok) {// modal.toast({
      //   message: ret,
      //   duration: 3
      // });
    } else {
      if (ret.headers["Set-Cookie"] && ret.headers["Set-Cookie"].length) {
        var valCoo = ret.headers["Set-Cookie"];
        var coo1 = /plate_checkCode=.*?(?=(e))/;
        var valcoostr = valCoo.match(coo1)[0];
        eeui.setCaches("valcoostr1", valcoostr, 0);
      }

      var data = ret.data || {};
      callback(ret.data.mes);
    }
  });
}

/***/ }),

/***/ "./src/backend/endpoint.js":
/*!*********************************!*\
  !*** ./src/backend/endpoint.js ***!
  \*********************************/
/*! exports provided: APIHOST, signin, signup, validateCode, checkauthcode, sendPhoneCodeByReg, checkname, sendValidateCode, savePasswordByPhone, sendValidateCodeLogin, savePasswordByEmail, editphone, getlogout, getuserInfo, getsaveFace, getsaveUser, getaccount, getmessage, sendValidateCodeByEmail1, emailBind, checkEmail, checkPhone, sendValidateCodeBySms, sendChangeValidateCodeBySms, phoneBind, checkChangeSMSCode, sendNewValidateCodeBySms, sendPhoneCodeByLogin, loginPhoneReg, getgiftRecord, getrecharge, getIndex, getRecentHome, getPhoneGame, getH5Game, getDyGame, getGameDetail, getH5GameDetail, getGiftDetail, getOtherGame, getgameGuide, getgameGuideDetail, getGameNotice, getGameActivity, getGameGuide, getArtBanner, getPhoneGift, getPhoneGiftDetail, getH5Gift, getH5GiftDetail, getGift, getService, getGameList, getchangeAccount, getVirtualCoin, getRServiceList, getRoleList, getpayActivity, jumpAppFirst, jumpAppSecond */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIHOST", function() { return APIHOST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signin", function() { return signin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signup", function() { return signup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateCode", function() { return validateCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkauthcode", function() { return checkauthcode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendPhoneCodeByReg", function() { return sendPhoneCodeByReg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkname", function() { return checkname; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendValidateCode", function() { return sendValidateCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "savePasswordByPhone", function() { return savePasswordByPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendValidateCodeLogin", function() { return sendValidateCodeLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "savePasswordByEmail", function() { return savePasswordByEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editphone", function() { return editphone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getlogout", function() { return getlogout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getuserInfo", function() { return getuserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getsaveFace", function() { return getsaveFace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getsaveUser", function() { return getsaveUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getaccount", function() { return getaccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getmessage", function() { return getmessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendValidateCodeByEmail1", function() { return sendValidateCodeByEmail1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailBind", function() { return emailBind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkEmail", function() { return checkEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkPhone", function() { return checkPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendValidateCodeBySms", function() { return sendValidateCodeBySms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendChangeValidateCodeBySms", function() { return sendChangeValidateCodeBySms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phoneBind", function() { return phoneBind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkChangeSMSCode", function() { return checkChangeSMSCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendNewValidateCodeBySms", function() { return sendNewValidateCodeBySms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendPhoneCodeByLogin", function() { return sendPhoneCodeByLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginPhoneReg", function() { return loginPhoneReg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getgiftRecord", function() { return getgiftRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getrecharge", function() { return getrecharge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIndex", function() { return getIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecentHome", function() { return getRecentHome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPhoneGame", function() { return getPhoneGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getH5Game", function() { return getH5Game; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDyGame", function() { return getDyGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGameDetail", function() { return getGameDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getH5GameDetail", function() { return getH5GameDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGiftDetail", function() { return getGiftDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOtherGame", function() { return getOtherGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getgameGuide", function() { return getgameGuide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getgameGuideDetail", function() { return getgameGuideDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGameNotice", function() { return getGameNotice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGameActivity", function() { return getGameActivity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGameGuide", function() { return getGameGuide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArtBanner", function() { return getArtBanner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPhoneGift", function() { return getPhoneGift; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPhoneGiftDetail", function() { return getPhoneGiftDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getH5Gift", function() { return getH5Gift; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getH5GiftDetail", function() { return getH5GiftDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGift", function() { return getGift; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getService", function() { return getService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGameList", function() { return getGameList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getchangeAccount", function() { return getchangeAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVirtualCoin", function() { return getVirtualCoin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRServiceList", function() { return getRServiceList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRoleList", function() { return getRoleList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getpayActivity", function() { return getpayActivity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jumpAppFirst", function() { return jumpAppFirst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jumpAppSecond", function() { return jumpAppSecond; });
var APIHOST = 'http://api.sh5.okwan.com'; // 登陆

var signin = 'https://wap-api.okwan.com/index/login/login'; // 注册

var signup = 'https://wap-api.okwan.com/index/login/register'; // 验证码

var validateCode = 'https://wap-api.okwan.com/index/user/code?from=app'; //校验验证码

var checkauthcode = 'https://wap-api.okwan.com/index/user/check_authcode'; //发送手机验证码(注册)

var sendPhoneCodeByReg = 'https://wap-api.okwan.com/index/user/sendPhoneCodeByReg'; //检查用户是否存在

var checkname = 'https://wap-api.okwan.com/index/login/checkname'; //发送手机验证码（忘记密码）

var sendValidateCode = 'https://wap-api.okwan.com/index/login/sendValidateCodeBySms'; //通过手机修改密码

var savePasswordByPhone = 'https://wap-api.okwan.com/index/login/savePasswordByPhone'; //发送邮箱验证码（忘记密码）

var sendValidateCodeLogin = 'https://wap-api.okwan.com/index/login/sendValidateCodeByEmail'; //通过邮箱修改密码

var savePasswordByEmail = 'https://wap-api.okwan.com/index/login/savePasswordByEmail'; //更绑手机

var editphone = 'https://wap-api.okwan.com/index/user/editphone'; //退出登录

var getlogout = 'https://wap-api.okwan.com/index/login/logout'; //个人资料

var getuserInfo = 'https://wap-api.okwan.com/index/user/userInfo'; //修改头像

var getsaveFace = 'https://wap-api.okwan.com/index/user/saveFace'; //修改资料

var getsaveUser = 'https://wap-api.okwan.com/index/user/saveUserInfo'; //我的账户

var getaccount = 'https://wap-api.okwan.com/index/user/account'; //我的消息

var getmessage = 'https://wap-api.okwan.com/index/user/message'; //发送邮箱验证码

var sendValidateCodeByEmail1 = 'https://wap-api.okwan.com/index/user/sendValidateCodeByEmail'; //邮箱绑定

var emailBind = 'https://wap-api.okwan.com/index/user/emailBind'; //是否绑定过邮箱

var checkEmail = 'https://wap-api.okwan.com/index/user/checkEmail'; //是否绑定过手机

var checkPhone = 'https://wap-api.okwan.com/index/user/checkPhone'; //发送手机验证码

var sendValidateCodeBySms = 'https://wap-api.okwan.com/index/user/sendValidateCodeBySms'; //发送更绑手机号验证码

var sendChangeValidateCodeBySms = 'https://wap-api.okwan.com/index/user/sendChangeValidateCodeBySms'; //绑定手机号

var phoneBind = 'https://wap-api.okwan.com/index/user/phoneBind'; //验证更绑手机号验证码

var checkChangeSMSCode = 'https://wap-api.okwan.com/index/user/checkChangeSMSCode'; //发送新手机验证码

var sendNewValidateCodeBySms = 'https://wap-api.okwan.com/index/user/sendNewValidateCodeBySms'; //发送手机验证码(登录)

var sendPhoneCodeByLogin = 'https://wap-api.okwan.com/index/user/sendPhoneCodeByLogin'; //手机登录

var loginPhoneReg = 'https://wap-api.okwan.com/index/login/loginPhone'; //礼包记录

var getgiftRecord = 'https://wap-api.okwan.com/index/gift/giftRecordBox'; //充值记录

var getrecharge = 'https://wap-api.okwan.com/index/user/recharge'; // 首页

var getIndex = 'https://api-sh5.okwan.com/api/home/index'; //最近在玩

var getRecentHome = 'https://api-sh5.okwan.com/api/home/recentGame'; //手机游戏列表

var getPhoneGame = 'https://api-sh5.okwan.com/api/game/phoneGame'; //H5游戏列表

var getH5Game = 'https://api-sh5.okwan.com/api/game/h5Game'; //抖音热游列表

var getDyGame = 'https://api-sh5.okwan.com/api/game/douyinGame'; //游戏详情

var getGameDetail = 'https://api-sh5.okwan.com/api/game/gameDetail'; //H5详情

var getH5GameDetail = 'https://api-sh5.okwan.com/api/index/gameDetail'; //游戏礼包列表

var getGiftDetail = 'https://wap-api.okwan.com/index/gift/getGiftDetail'; //其他人在玩儿

var getOtherGame = 'https://api-sh5.okwan.com/api/game/otherGame'; //游戏攻略

var getgameGuide = 'https://api-sh5.okwan.com/api/game/gameGuide'; //攻略详情

var getgameGuideDetail = 'https://wap-api.okwan.com/index/game/gameGuideDetail'; //游戏公告

var getGameNotice = 'https://api-sh5.okwan.com/api/news/gameNotice'; //游戏活动

var getGameActivity = 'https://api-sh5.okwan.com/api/news/gameActivity'; //游戏攻略

var getGameGuide = 'https://api-sh5.okwan.com/api/news/gameGuide'; //游戏公告
// export const getGameActivity ='/api/news/gameActivity';
//咨询banner

var getArtBanner = 'https://api-sh5.okwan.com/api/news/articleBanner'; //礼包列表(手游)

var getPhoneGift = 'https://api-sh5.okwan.com/api/gift/phoneGift'; //礼包详情(手游)

var getPhoneGiftDetail = 'https://api-sh5.okwan.com/api/gift/phoneGiftDetail'; //礼包列表(H5)

var getH5Gift = 'https://api-sh5.okwan.com/api/gift/h5Gift'; //礼包详情(H5)

var getH5GiftDetail = 'https://api-sh5.okwan.com/api/gift/h5GiftDetail'; //领取礼包

var getGift = 'https://api-sh5.okwan.com/api/gift/getGift'; //开服表

var getService = 'https://api-sh5.okwan.com/api/server/index'; //充值到游戏列表

var getGameList = 'https://api-game.okwan.com/game/api/index'; //充值账号切换

var getchangeAccount = 'https://wap-api.okwan.com/index/recharge/changeAccount'; //充值OK豆和OK币

var getVirtualCoin = 'https://wap-api.okwan.com/index/recharge/getVirtualCoin'; //充值服务器列表

var getRServiceList = 'https://api-game.okwan.com/game/api/serverList'; //充值角色列表

var getRoleList = 'https://api-role.okwan.com/role/roles/getForce'; //充值活动列表

var getpayActivity = 'https://api-role.okwan.com/index/recharge/payActivity'; //App webview跳转

var jumpAppFirst = 'https://wap-api.okwan.com/index/user/jumpAppFirst'; //App webview跳转2

var jumpAppSecond = 'https://wap-api.okwan.com/index/user/jumpAppSecond';

/***/ }),

/***/ "./src/components/topCom.vue":
/*!***********************************!*\
  !*** ./src/components/topCom.vue ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter?id=data-v-502c79dc!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=styles&index=0!./topCom.vue */ "C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-502c79dc!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./src/components/topCom.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader!babel-loader!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=script&index=0!./topCom.vue */ "C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.0.6@babel-loader\\lib\\index.js!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./src/components/topCom.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler?id=data-v-502c79dc!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=template&index=0!./topCom.vue */ "C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-502c79dc!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./src/components/topCom.vue")
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {eeuiLog.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "f:\\workspace\\gameBox\\src\\components\\topCom.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-502c79dc"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ "./src/pages/forget.vue?entry=true":
/*!*****************************************!*\
  !*** ./src/pages/forget.vue?entry=true ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter?id=data-v-78fd35ea!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=styles&index=0!./forget.vue */ "C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-78fd35ea!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./src/pages/forget.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader!babel-loader!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=script&index=0!./forget.vue */ "C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.0.6@babel-loader\\lib\\index.js!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./src/pages/forget.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler?id=data-v-78fd35ea!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=template&index=0!./forget.vue */ "C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-78fd35ea!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./src/pages/forget.vue")
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {eeuiLog.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "f:\\workspace\\gameBox\\src\\pages\\forget.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-78fd35ea"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ }),

/***/ "C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.0.6@babel-loader\\lib\\index.js!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./src/components/topCom.vue":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/node_modules/_babel-loader@8.0.6@babel-loader/lib!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/components/topCom.vue ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var eeui = app.requireModule('eeui');

var endpoint = __webpack_require__(/*! ../backend/endpoint */ "./src/backend/endpoint.js");

var api = __webpack_require__(/*! ../backend/api */ "./src/backend/api.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'topCom',
  props: {
    "title": ''
  },
  methods: {
    goback: function goback() {
      eeui.toastClose();
      api.get(endpoint.getuserInfo, {}, function (res) {
        if (res.code == 1) {
          eeui.closePage();
        } else {
          eeui.openPage({
            url: '../pages/index.js',
            pageType: 'app',
            params: {
              position: 0
            }
          });
        }
      });
    }
  },
  mounted: function mounted() {},
  created: function created() {}
});

/***/ }),

/***/ "C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.0.6@babel-loader\\lib\\index.js!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./src/pages/forget.vue":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/node_modules/_babel-loader@8.0.6@babel-loader/lib!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/forget.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_topCom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/topCom */ "./src/components/topCom.vue");
/* harmony import */ var _components_topCom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_topCom__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var eeui = app.requireModule('eeui');

var endpoint = __webpack_require__(/*! ../backend/endpoint */ "./src/backend/endpoint.js");

var api = __webpack_require__(/*! ../backend/api */ "./src/backend/api.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      position: 0,
      tabPages: [{
        tabName: 'phone',
        title: '手机找回'
      }, {
        tabName: 'email',
        title: '邮箱找回'
      }],
      comlogin: 0,
      prevshow: true,
      nextShow: false,
      loginname: '',
      phone: '',
      email: '',
      phoneInfo: {
        time: 0,
        btntxt: '获取验证码',
        validatxt: '',
        code: '',
        password: '',
        valcode: '',
        counting: false
      },
      emailInfo: {
        time: 0,
        validatxt: '',
        btntxt: '获取验证码',
        code: '',
        password: '',
        valcode: '',
        counting: false
      },
      disabled: false,
      nullImg: ''
    };
  },
  components: {
    topCom: _components_topCom__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  mounted: function mounted() {},
  methods: {
    checkname: function checkname() {
      var params = {
        login_name: this.loginname
      };
      var self = this;
      api.post(endpoint.checkname, params, function (res) {
        if (res.code == 1) {
          self.prevshow = false;
          self.nextShow = true;
          self.phone = res.mes.phone;
          self.email = res.mes.email;
        } else {
          eeui.toast(res.mes);
        }
      });
    },
    pageSelected: function pageSelected(data) {
      this.position = data.position;
    },
    switchPage: function switchPage(item, index) {
      var self = this;
      this.position = index;
      this.$refs.reflectName.setCurrentItem(this.tabPages[index].tabName);

      if (index == 0) {
        api.ValidateCodeapi(function (valcode) {
          self.phoneInfo.valcode = valcode;
        });
      } else {
        api.ValidateCodeapi(function (valcode) {
          self.emailInfo.valcode = valcode;
        });
      } // eeui.clearAllCaches();

    },
    sendValidateCod: function sendValidateCod() {
      var self = this;
      var params = {
        authcode: this.phoneInfo.validatxt
      };
      api.post(endpoint.checkauthcode, params, function (res) {
        if (res.code == 1) {
          var _params = {
            tel: self.phone,
            login_name: self.loginname
          };
          api.post(endpoint.sendValidateCode, _params, function (res) {
            if (res.code == 1) {
              self.phoneInfo.counting = true;
              self.phoneInfo.time = 60;
              self.timer();
              eeui.toast(res.mes);
            } else {
              eeui.toast(res.mes);
            }
          });
        } else {
          api.ValidateCodeapi(function (valcode) {
            self.phoneInfo.valcode = valcode;
          });
          eeui.toast(res.mes);
        }
      });
    },
    getCaptcha: function getCaptcha() {
      var self = this;
      api.ValidateCodeapi(function (valcode) {
        self.phoneInfo.valcode = valcode;
      });
    },
    getCaptcha1: function getCaptcha1() {
      var self = this;
      api.ValidateCodeapi(function (valcode) {
        self.emailInfo.valcode = valcode;
      });
    },
    timer: function timer() {
      if (this.phoneInfo.time > 0) {
        this.phoneInfo.time--;
        this.phoneInfo.btntxt = this.phoneInfo.time + "s后重新获取";
        setTimeout(this.timer, 1000);
      } else {
        this.phoneInfo.time = 0;
        this.phoneInfo.btntxt = "获取验证码";
        this.phoneInfo.counting = false;
      }
    },
    timer1: function timer1() {
      if (this.emailInfo.time > 0) {
        this.emailInfo.time--;
        this.emailInfo.btntxt = this.emailInfo.time + "s后重新获取";
        setTimeout(this.timer1, 1000);
      } else {
        this.emailInfo.time = 0;
        this.emailInfo.btntxt = "获取验证码";
        this.emailInfo.counting = false;
      }
    },
    savePasswordByPhone: function savePasswordByPhone() {
      var params = {
        login_name: this.loginname,
        smscode: this.phoneInfo.code,
        password: this.phoneInfo.password
      };
      api.post(endpoint.savePasswordByPhone, params, function (res) {
        if (res.code == 1) {
          eeui.toast(res.mes);
          eeui.openPage({
            url: '../pages/login.js',
            pageType: 'app',
            params: {
              position: 0
            }
          });
        } else {
          eeui.toast(res.mes);
        }
      });
    },
    sendValidateCodeLogin: function sendValidateCodeLogin() {
      var self = this;
      var params = {
        authcode: this.emailInfo.validatxt
      };
      api.post(endpoint.checkauthcode, params, function (res) {
        if (res.code == 1) {
          var _params2 = {
            email: self.email,
            login_name: self.loginname
          };
          self.emailInfo.counting = true;
          self.emailInfo.time = 60;
          self.timer1();
          api.post(endpoint.sendValidateCodeLogin, _params2, function (res) {
            if (res.code == 1) {
              eeui.toast(res.mes);
            } else {
              eeui.toast(res.mes);
            }
          });
        } else {
          api.ValidateCodeapi(function (valcode) {
            self.emailInfo.valcode = valcode;
          });
          eeui.toast(res.mes);
        }
      });
    },
    savePasswordByEmail: function savePasswordByEmail() {
      var params = {
        login_name: this.loginname,
        emailcode: this.emailInfo.code,
        password: this.emailInfo.password
      };
      api.post(endpoint.savePasswordByEmail, params, function (res) {
        if (res.code == 1) {
          eeui.toast(res.mes);
          eeui.openPage({
            url: '../pages/login.js',
            pageType: 'app',
            params: {
              position: 0
            }
          });
        } else {
          eeui.toast(res.mes);
        }
      });
    }
  },
  computed: {},
  created: function created() {
    var self = this;
    api.ValidateCodeapi(function (valcode) {
      self.phoneInfo.valcode = valcode;
      self.emailInfo.valcode = valcode;
    });
  }
});

/***/ }),

/***/ "C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-502c79dc!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./src/components/topCom.vue":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-502c79dc!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/components/topCom.vue ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "headerC": {
    "width": "750",
    "height": "93",
    "position": "relative"
  },
  "topBg": {
    "width": "750",
    "height": "93",
    "position": "absolute",
    "top": 0,
    "left": 0
  },
  "navbar": {
    "width": "750",
    "height": "88",
    "backgroundColor": "#ffffff"
  },
  "icon": {
    "color": "#0f0f0f",
    "width": "100",
    "height": "88",
    "fontSize": "54"
  },
  "text": {
    "fontSize": "34",
    "color": "#0d0f13"
  }
}

/***/ }),

/***/ "C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-78fd35ea!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./src/pages/forget.vue":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-78fd35ea!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/forget.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "app": {
    "flex": 1,
    "backgroundColor": "#f7f7f7"
  },
  "null_page": {
    "flex": 1,
    "width": "750",
    "paddingTop": "278",
    "alignItems": "center"
  },
  "nullPic": {
    "width": "257",
    "height": "276"
  },
  "nullTxt": {
    "fontSize": "28",
    "paddingTop": "12",
    "textAlign": "center"
  },
  "formCon": {
    "paddingTop": 0,
    "paddingRight": "30",
    "paddingBottom": 0,
    "paddingLeft": "30",
    "backgroundColor": "#ffffff"
  },
  "gameC": {
    "backgroundColor": "#ffffff",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "paddingTop": 0,
    "paddingRight": "30",
    "paddingBottom": 0,
    "paddingLeft": "30"
  },
  "tabPages": {
    "flex": 1,
    "width": "750",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#f4f4f4",
    "borderBottomWidth": "2"
  },
  "nav-item": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center",
    "height": "88"
  },
  "nav-item-active": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center",
    "height": "88",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#ffbd58",
    "borderBottomWidth": "4"
  },
  "navTxt": {
    "fontSize": "30",
    "color": "#2a2a2a"
  },
  "form_group": {
    "height": "105",
    "borderStyle": "solid",
    "borderBottomWidth": "1",
    "borderBottomColor": "#f4f4f4",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between"
  },
  "formico": {
    "width": "36",
    "height": "36",
    "marginTop": 0,
    "marginRight": "20",
    "marginBottom": 0,
    "marginLeft": "20"
  },
  "input": {
    "height": "105",
    "backgroundColor": "rgba(0,0,0,0)",
    "lineHeight": "105",
    "fontSize": "28",
    "color": "#0d0f13",
    "flex": 1,
    "color:disabled": "#FF0000"
  },
  "valadite_btn": {
    "width": "176",
    "height": "65",
    "backgroundColor": "#ffffff",
    "lineHeight": "65",
    "textAlign": "center",
    "color": "#ffbd58",
    "fontSize": "22",
    "borderRadius": "8",
    "marginRight": "26"
  },
  "valPic": {
    "width": "113",
    "height": "47"
  },
  "sub_btn": {
    "marginTop": "97",
    "width": "591",
    "height": "109",
    "position": "relative",
    "marginLeft": "70"
  },
  "btnBg": {
    "width": "591",
    "height": "109",
    "position": "absolute",
    "top": 0,
    "left": 0
  },
  "subTxt": {
    "fontSize": "34",
    "color": "#ffffff",
    "textAlign": "center",
    "lineHeight": "109"
  }
}

/***/ }),

/***/ "C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-502c79dc!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./src/components/topCom.vue":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-502c79dc!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/components/topCom.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["headerC"]
  }, [_c('image', {
    staticClass: ["topBg"],
    attrs: {
      "src": "root://images/topbg.png"
    }
  }), _c('navbar', {
    ref: "reflectName",
    staticClass: ["navbar"]
  }, [_c('navbar-item', {
    attrs: {
      "type": "left"
    },
    on: {
      "click": _vm.goback
    }
  }, [_c('icon', {
    staticClass: ["icon"],
    attrs: {
      "content": "tb-back-light"
    }
  })], 1), _c('navbar-item', {
    attrs: {
      "type": "title"
    }
  }, [_c('text', {
    staticClass: ["text"]
  }, [_vm._v(_vm._s(_vm.title))])])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-78fd35ea!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./src/pages/forget.vue":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-78fd35ea!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/forget.vue ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["app"]
  }, [_c('top-com', {
    attrs: {
      "title": "忘记密码"
    }
  }), (_vm.prevshow) ? _c('div', {
    staticClass: ["formCommon"]
  }, [_c('div', {
    staticClass: ["formCon"]
  }, [_c('div', {
    staticClass: ["form_group"]
  }, [_c('image', {
    staticClass: ["formico"],
    attrs: {
      "src": "root://images/regUserIco.png"
    }
  }), _c('input', {
    staticClass: ["input"],
    attrs: {
      "type": "text",
      "placeholder": "请输入注册的账号",
      "value": (_vm.loginname)
    },
    on: {
      "input": function($event) {
        _vm.loginname = $event.target.attr.value.trim()
      }
    }
  })])]), _c('div', {
    staticClass: ["sub_btn"],
    on: {
      "click": _vm.checkname
    }
  }, [_c('image', {
    staticClass: ["btnBg"],
    attrs: {
      "src": "root://images/formBtn.png"
    }
  }), _c('text', {
    staticClass: ["subTxt"]
  }, [_vm._v("下一步")])])]) : _vm._e(), (_vm.nextShow) ? _c('div', {
    staticClass: ["formCommon"]
  }, [_c('div', {
    staticClass: ["gameC"]
  }, [_vm._l((_vm.tabPages), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: ["tabPages"]
    }, [_c('div', {
      class: [index === _vm.position ? 'nav-item-active' : 'nav-item'],
      on: {
        "click": function($event) {
          _vm.switchPage(item, index)
        }
      }
    }, [_c('text', {
      staticClass: ["navTxt"]
    }, [_vm._v(_vm._s(item.title))])])])
  }), _c('tabbar', {
    ref: "reflectName",
    staticClass: ["tabbar"],
    attrs: {
      "eeui": {
        tabType: 'top',
        tabHeight: 0
      },
      "tabPages": _vm.tabPages
    },
    on: {
      "pageSelected": _vm.pageSelected
    }
  })], 2), (_vm.position == 0) ? _c('div', [(!_vm.phone) ? _c('div', {
    staticClass: ["null_page"]
  }, [_c('image', {
    staticClass: ["nullPic"],
    attrs: {
      "src": "root://images/null.png"
    }
  }), _c('text', {
    staticClass: ["nullTxt"]
  }, [_vm._v("您尚未绑定手机哦~")])]) : _vm._e(), (_vm.phone) ? _c('div', [_c('div', {
    staticClass: ["formCon"]
  }, [_c('div', {
    staticClass: ["form_group"]
  }, [_c('image', {
    staticClass: ["formico"],
    attrs: {
      "src": "root://images/regPhoneIco.png"
    }
  }), (_vm.disabled == true) ? _c('input', {
    staticClass: ["input"],
    attrs: {
      "type": "tel",
      "placeholder": "请输入手机号码",
      "value": (_vm.phone)
    },
    on: {
      "input": function($event) {
        _vm.phone = $event.target.attr.value.trim()
      }
    }
  }) : _vm._e(), (_vm.disabled == false) ? _c('text', {
    staticClass: ["input"]
  }, [_vm._v(_vm._s(_vm.phone))]) : _vm._e()]), _c('div', {
    staticClass: ["form_group"]
  }, [_c('image', {
    staticClass: ["formico"],
    attrs: {
      "src": "root://images/regCodeIco.png"
    }
  }), _c('input', {
    staticClass: ["input"],
    attrs: {
      "type": "text",
      "placeholder": "请输入图形验证码",
      "value": (_vm.phoneInfo.validatxt)
    },
    on: {
      "input": function($event) {
        _vm.$set(_vm.phoneInfo, "validatxt", $event.target.attr.value.trim())
      }
    }
  }), _c('div', {
    staticClass: ["code_capat"],
    on: {
      "click": _vm.getCaptcha
    }
  }, [_c('image', {
    staticClass: ["valPic"],
    attrs: {
      "src": _vm.phoneInfo.valcode
    }
  })])]), _c('div', {
    staticClass: ["form_group"]
  }, [_c('image', {
    staticClass: ["formico"],
    attrs: {
      "src": "root://images/regValIco.png"
    }
  }), _c('input', {
    staticClass: ["input"],
    attrs: {
      "type": "text",
      "placeholder": "请输入手机验证码",
      "value": (_vm.phoneInfo.code)
    },
    on: {
      "input": function($event) {
        _vm.$set(_vm.phoneInfo, "code", $event.target.attr.value.trim())
      }
    }
  }), _c('button', {
    staticClass: ["valadite_btn"],
    attrs: {
      "eeui": {
        text: _vm.phoneInfo.btntxt,
        borderWidth: 2,
        borderColor: '#ffbd58',
        disabled: _vm.phoneInfo.counting
      }
    },
    on: {
      "click": _vm.sendValidateCod
    }
  })], 1), _c('div', {
    staticClass: ["form_group"]
  }, [_c('image', {
    staticClass: ["formico"],
    attrs: {
      "src": "root://images/regPassIco.png"
    }
  }), _c('input', {
    staticClass: ["input"],
    attrs: {
      "type": "password",
      "placeholder": "请输入新密码",
      "value": (_vm.phoneInfo.password)
    },
    on: {
      "input": function($event) {
        _vm.$set(_vm.phoneInfo, "password", $event.target.attr.value.trim())
      }
    }
  })])]), _c('div', {
    staticClass: ["sub_btn"],
    on: {
      "click": _vm.savePasswordByPhone
    }
  }, [_c('image', {
    staticClass: ["btnBg"],
    attrs: {
      "src": "root://images/formBtn.png"
    }
  }), _c('text', {
    staticClass: ["subTxt"]
  }, [_vm._v("确认密码")])])]) : _vm._e()]) : _vm._e(), (_vm.position == 1) ? _c('div', [(!_vm.email) ? _c('div', {
    staticClass: ["null_page"]
  }, [_c('image', {
    staticClass: ["nullPic"],
    attrs: {
      "src": "root://images/null.png"
    }
  }), _c('text', {
    staticClass: ["nullTxt"]
  }, [_vm._v("您尚未绑定邮箱哦~")])]) : _vm._e(), (_vm.email) ? _c('div', [_c('div', {
    staticClass: ["formCon"]
  }, [_c('div', {
    staticClass: ["form_group"]
  }, [_c('image', {
    staticClass: ["formico"],
    attrs: {
      "src": "root://images/emailIco.png"
    }
  }), (_vm.disabled == true) ? _c('input', {
    staticClass: ["input"],
    attrs: {
      "type": "text",
      "placeholder": "请输入邮箱账号",
      "value": (_vm.email)
    },
    on: {
      "input": function($event) {
        _vm.email = $event.target.attr.value.trim()
      }
    }
  }) : _vm._e(), (_vm.disabled == false) ? _c('text', {
    staticClass: ["input"]
  }, [_vm._v(_vm._s(_vm.email))]) : _vm._e()]), _c('div', {
    staticClass: ["form_group"]
  }, [_c('image', {
    staticClass: ["formico"],
    attrs: {
      "src": "root://images/regCodeIco.png"
    }
  }), _c('input', {
    staticClass: ["input"],
    attrs: {
      "type": "text",
      "placeholder": "请输入图形验证码",
      "value": (_vm.emailInfo.validatxt)
    },
    on: {
      "input": function($event) {
        _vm.$set(_vm.emailInfo, "validatxt", $event.target.attr.value.trim())
      }
    }
  }), _c('div', {
    staticClass: ["code_capat"],
    on: {
      "click": _vm.getCaptcha1
    }
  }, [_c('image', {
    staticClass: ["valPic"],
    attrs: {
      "src": _vm.emailInfo.valcode
    }
  })])]), _c('div', {
    staticClass: ["form_group"]
  }, [_c('image', {
    staticClass: ["formico"],
    attrs: {
      "src": "root://images/regValIco.png"
    }
  }), _c('input', {
    staticClass: ["input"],
    attrs: {
      "type": "text",
      "placeholder": "请输入邮箱验证码",
      "value": (_vm.emailInfo.code)
    },
    on: {
      "input": function($event) {
        _vm.$set(_vm.emailInfo, "code", $event.target.attr.value.trim())
      }
    }
  }), _c('button', {
    staticClass: ["valadite_btn"],
    attrs: {
      "eeui": {
        text: _vm.emailInfo.btntxt,
        borderWidth: 2,
        borderColor: '#ffbd58',
        disabled: _vm.emailInfo.counting
      }
    },
    on: {
      "click": _vm.sendValidateCodeLogin
    }
  })], 1), _c('div', {
    staticClass: ["form_group"]
  }, [_c('image', {
    staticClass: ["formico"],
    attrs: {
      "src": "root://images/regPassIco.png"
    }
  }), _c('input', {
    staticClass: ["input"],
    attrs: {
      "type": "password",
      "placeholder": "请输入新密码",
      "value": (_vm.emailInfo.password)
    },
    on: {
      "input": function($event) {
        _vm.$set(_vm.emailInfo, "password", $event.target.attr.value.trim())
      }
    }
  })])]), _c('div', {
    staticClass: ["sub_btn"],
    on: {
      "click": _vm.savePasswordByEmail
    }
  }, [_c('image', {
    staticClass: ["btnBg"],
    attrs: {
      "src": "root://images/formBtn.png"
    }
  }), _c('text', {
    staticClass: ["subTxt"]
  }, [_vm._v("确认密码")])])]) : _vm._e()]) : _vm._e()]) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });