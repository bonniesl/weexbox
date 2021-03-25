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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/recharge.vue?entry=true");
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

/***/ "./src/components/topHeader.vue":
/*!**************************************!*\
  !*** ./src/components/topHeader.vue ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter?id=data-v-0f3a4d82!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=styles&index=0!./topHeader.vue */ "C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-0f3a4d82!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./src/components/topHeader.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader!babel-loader!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=script&index=0!./topHeader.vue */ "C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.0.6@babel-loader\\lib\\index.js!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./src/components/topHeader.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler?id=data-v-0f3a4d82!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=template&index=0!./topHeader.vue */ "C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-0f3a4d82!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./src/components/topHeader.vue")
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
__vue_options__.__file = "f:\\workspace\\gameBox\\src\\components\\topHeader.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-0f3a4d82"
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

/***/ "./src/pages/recharge.vue?entry=true":
/*!*******************************************!*\
  !*** ./src/pages/recharge.vue?entry=true ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter?id=data-v-0efb6b45!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=styles&index=0!./recharge.vue */ "C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-0efb6b45!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./src/pages/recharge.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader!babel-loader!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=script&index=0!./recharge.vue */ "C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.0.6@babel-loader\\lib\\index.js!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./src/pages/recharge.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler?id=data-v-0efb6b45!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=template&index=0!./recharge.vue */ "C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-0efb6b45!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./src/pages/recharge.vue")
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
__vue_options__.__file = "f:\\workspace\\gameBox\\src\\pages\\recharge.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-0efb6b45"
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

/***/ "C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.0.6@babel-loader\\lib\\index.js!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./src/components/topHeader.vue":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/node_modules/_babel-loader@8.0.6@babel-loader/lib!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/components/topHeader.vue ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _name$data$components;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
var endpoint = __webpack_require__(/*! ../backend/endpoint */ "./src/backend/endpoint.js");

var api = __webpack_require__(/*! ../backend/api */ "./src/backend/api.js");

/* harmony default export */ __webpack_exports__["default"] = (_name$data$components = {
  name: 'topHeader',
  data: function data() {
    return {
      uid: '',
      logintxt: '请先登录',
      logShow: false,
      winUserName: ''
    };
  },
  components: {},
  mounted: function mounted() {},
  methods: {
    getName: function getName() {
      this.logintxt = this.winUserName;
    },
    _isLogin: function _isLogin(cb) {
      var self = this;
      api.get(endpoint.getuserInfo, {}, function (res) {
        if (res.code == 1) {
          if (typeof cb != 'undefined') {
            self.winUserName = res.mes.login_name;
            self.uid = res.mes.uid;
            self.logShow = true;
            cb();
          }
        }
      });
    },
    loginstuts: function loginstuts() {
      if (!this.winUserName) {
        eeui.openPage({
          url: '../pages/login.js',
          pageType: 'app'
        });
      } else {
        if (eeui.getPageInfo().url.indexOf('personal') > -1) {
          return;
        }

        eeui.openPage({
          url: '../pages/personal.js',
          pageType: 'app',
          params: {
            position: 4
          }
        });
      }
    }
  }
}, _defineProperty(_name$data$components, "mounted", function mounted() {}), _defineProperty(_name$data$components, "created", function created() {
  var _this = this;

  this._isLogin(function (_) {
    _this.getName();
  });
}), _name$data$components);

/***/ }),

/***/ "C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.0.6@babel-loader\\lib\\index.js!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./src/pages/recharge.vue":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/node_modules/_babel-loader@8.0.6@babel-loader/lib!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/recharge.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_topHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/topHeader */ "./src/components/topHeader.vue");
/* harmony import */ var _components_topHeader__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_topHeader__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      key: app.config.params.key
    };
  },
  components: {
    TopHeader: _components_topHeader__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  methods: {},
  created: function created() {
    eeuiLog.log(app.config.params.key);
  }
});

/***/ }),

/***/ "C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-0efb6b45!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./src/pages/recharge.vue":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-0efb6b45!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/recharge.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "app": {
    "flex": 1,
    "backgroundColor": "#f7f7f7"
  },
  "scrollList": {
    "width": "750",
    "flex": 1
  },
  "webView": {
    "position": "absolute",
    "top": 0,
    "right": 0,
    "bottom": 0,
    "left": 0
  }
}

/***/ }),

/***/ "C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-0f3a4d82!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./src/components/topHeader.vue":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-0f3a4d82!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/components/topHeader.vue ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "comTop": {
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
  "comTcon": {
    "height": "88",
    "width": "750",
    "backgroundColor": "#ffffff",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between"
  },
  "logo": {
    "justifyContent": "flex-start",
    "width": "193",
    "height": "61",
    "marginTop": "14",
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": "32"
  },
  "logBtn": {
    "display": "block",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "flex-end",
    "paddingRight": "34"
  },
  "uName": {
    "color": "#ffbd58",
    "fontSize": "28",
    "lineHeight": "88"
  },
  "logIco": {
    "width": "44",
    "height": "44",
    "marginLeft": "12"
  }
}

/***/ }),

/***/ "C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-0efb6b45!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./src/pages/recharge.vue":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-0efb6b45!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/recharge.vue ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["app"]
  }, [_c('top-header'), _c('scroller', {
    staticClass: ["scrollList"]
  }, [_c('web-view', {
    ref: "reflectName",
    staticClass: ["webView"],
    attrs: {
      "eeui": {
        url: 'https://wap-api.okwan.com/index/user/jumpAppSecond?key=' + _vm.key
      }
    }
  })], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-0f3a4d82!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./src/components/topHeader.vue":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-0f3a4d82!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/components/topHeader.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["comTop"]
  }, [_c('image', {
    staticClass: ["topBg"],
    attrs: {
      "src": "root://images/topbg.png"
    }
  }), _c('div', {
    staticClass: ["comTcon"]
  }, [_c('image', {
    staticClass: ["logo"],
    attrs: {
      "src": "root://images/logo.png"
    }
  }), _c('div', {
    staticClass: ["logBtn"],
    on: {
      "click": _vm.loginstuts
    }
  }, [_c('text', {
    staticClass: ["uName"]
  }, [_vm._v(_vm._s(_vm.logintxt))]), (_vm.logShow) ? _c('image', {
    staticClass: ["logIco"],
    attrs: {
      "src": "root://images/curNav5.png"
    }
  }) : _vm._e()])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });