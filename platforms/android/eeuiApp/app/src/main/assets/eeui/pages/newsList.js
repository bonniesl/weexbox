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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/newsList.vue?entry=true");
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
} // ????????????

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
* ??????????????????
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
    } // GET ??????


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
    // POST ??????
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
} // ?????????vue????????????????????????


function get(url, params, success, failure) {
  return apiStream('GET', url, params, success, failure);
}
function post(url, params, success, failure) {
  return apiStream('POST', url, params, success, failure);
} //??????????????????

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
} // ?????????

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
var APIHOST = 'http://api.sh5.okwan.com'; // ??????

var signin = 'https://wap-api.okwan.com/index/login/login'; // ??????

var signup = 'https://wap-api.okwan.com/index/login/register'; // ?????????

var validateCode = 'https://wap-api.okwan.com/index/user/code?from=app'; //???????????????

var checkauthcode = 'https://wap-api.okwan.com/index/user/check_authcode'; //?????????????????????(??????)

var sendPhoneCodeByReg = 'https://wap-api.okwan.com/index/user/sendPhoneCodeByReg'; //????????????????????????

var checkname = 'https://wap-api.okwan.com/index/login/checkname'; //???????????????????????????????????????

var sendValidateCode = 'https://wap-api.okwan.com/index/login/sendValidateCodeBySms'; //????????????????????????

var savePasswordByPhone = 'https://wap-api.okwan.com/index/login/savePasswordByPhone'; //???????????????????????????????????????

var sendValidateCodeLogin = 'https://wap-api.okwan.com/index/login/sendValidateCodeByEmail'; //????????????????????????

var savePasswordByEmail = 'https://wap-api.okwan.com/index/login/savePasswordByEmail'; //????????????

var editphone = 'https://wap-api.okwan.com/index/user/editphone'; //????????????

var getlogout = 'https://wap-api.okwan.com/index/login/logout'; //????????????

var getuserInfo = 'https://wap-api.okwan.com/index/user/userInfo'; //????????????

var getsaveFace = 'https://wap-api.okwan.com/index/user/saveFace'; //????????????

var getsaveUser = 'https://wap-api.okwan.com/index/user/saveUserInfo'; //????????????

var getaccount = 'https://wap-api.okwan.com/index/user/account'; //????????????

var getmessage = 'https://wap-api.okwan.com/index/user/message'; //?????????????????????

var sendValidateCodeByEmail1 = 'https://wap-api.okwan.com/index/user/sendValidateCodeByEmail'; //????????????

var emailBind = 'https://wap-api.okwan.com/index/user/emailBind'; //?????????????????????

var checkEmail = 'https://wap-api.okwan.com/index/user/checkEmail'; //?????????????????????

var checkPhone = 'https://wap-api.okwan.com/index/user/checkPhone'; //?????????????????????

var sendValidateCodeBySms = 'https://wap-api.okwan.com/index/user/sendValidateCodeBySms'; //??????????????????????????????

var sendChangeValidateCodeBySms = 'https://wap-api.okwan.com/index/user/sendChangeValidateCodeBySms'; //???????????????

var phoneBind = 'https://wap-api.okwan.com/index/user/phoneBind'; //??????????????????????????????

var checkChangeSMSCode = 'https://wap-api.okwan.com/index/user/checkChangeSMSCode'; //????????????????????????

var sendNewValidateCodeBySms = 'https://wap-api.okwan.com/index/user/sendNewValidateCodeBySms'; //?????????????????????(??????)

var sendPhoneCodeByLogin = 'https://wap-api.okwan.com/index/user/sendPhoneCodeByLogin'; //????????????

var loginPhoneReg = 'https://wap-api.okwan.com/index/login/loginPhone'; //????????????

var getgiftRecord = 'https://wap-api.okwan.com/index/gift/giftRecordBox'; //????????????

var getrecharge = 'https://wap-api.okwan.com/index/user/recharge'; // ??????

var getIndex = 'https://api-sh5.okwan.com/api/home/index'; //????????????

var getRecentHome = 'https://api-sh5.okwan.com/api/home/recentGame'; //??????????????????

var getPhoneGame = 'https://api-sh5.okwan.com/api/game/phoneGame'; //H5????????????

var getH5Game = 'https://api-sh5.okwan.com/api/game/h5Game'; //??????????????????

var getDyGame = 'https://api-sh5.okwan.com/api/game/douyinGame'; //????????????

var getGameDetail = 'https://api-sh5.okwan.com/api/game/gameDetail'; //H5??????

var getH5GameDetail = 'https://api-sh5.okwan.com/api/index/gameDetail'; //??????????????????

var getGiftDetail = 'https://wap-api.okwan.com/index/gift/getGiftDetail'; //??????????????????

var getOtherGame = 'https://api-sh5.okwan.com/api/game/otherGame'; //????????????

var getgameGuide = 'https://api-sh5.okwan.com/api/game/gameGuide'; //????????????

var getgameGuideDetail = 'https://wap-api.okwan.com/index/game/gameGuideDetail'; //????????????

var getGameNotice = 'https://api-sh5.okwan.com/api/news/gameNotice'; //????????????

var getGameActivity = 'https://api-sh5.okwan.com/api/news/gameActivity'; //????????????

var getGameGuide = 'https://api-sh5.okwan.com/api/news/gameGuide'; //????????????
// export const getGameActivity ='/api/news/gameActivity';
//??????banner

var getArtBanner = 'https://api-sh5.okwan.com/api/news/articleBanner'; //????????????(??????)

var getPhoneGift = 'https://api-sh5.okwan.com/api/gift/phoneGift'; //????????????(??????)

var getPhoneGiftDetail = 'https://api-sh5.okwan.com/api/gift/phoneGiftDetail'; //????????????(H5)

var getH5Gift = 'https://api-sh5.okwan.com/api/gift/h5Gift'; //????????????(H5)

var getH5GiftDetail = 'https://api-sh5.okwan.com/api/gift/h5GiftDetail'; //????????????

var getGift = 'https://api-sh5.okwan.com/api/gift/getGift'; //?????????

var getService = 'https://api-sh5.okwan.com/api/server/index'; //?????????????????????

var getGameList = 'https://api-game.okwan.com/game/api/index'; //??????????????????

var getchangeAccount = 'https://wap-api.okwan.com/index/recharge/changeAccount'; //??????OK??????OK???

var getVirtualCoin = 'https://wap-api.okwan.com/index/recharge/getVirtualCoin'; //?????????????????????

var getRServiceList = 'https://api-game.okwan.com/game/api/serverList'; //??????????????????

var getRoleList = 'https://api-role.okwan.com/role/roles/getForce'; //??????????????????

var getpayActivity = 'https://api-role.okwan.com/index/recharge/payActivity'; //App webview??????

var jumpAppFirst = 'https://wap-api.okwan.com/index/user/jumpAppFirst'; //App webview??????2

var jumpAppSecond = 'https://wap-api.okwan.com/index/user/jumpAppSecond';

/***/ }),

/***/ "./src/components/nav.vue":
/*!********************************!*\
  !*** ./src/components/nav.vue ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter?id=data-v-6bfeffe3!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=styles&index=0!./nav.vue */ "C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-6bfeffe3!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./src/components/nav.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader!babel-loader!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=script&index=0!./nav.vue */ "C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.0.6@babel-loader\\lib\\index.js!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./src/components/nav.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler?id=data-v-6bfeffe3!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=template&index=0!./nav.vue */ "C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-6bfeffe3!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./src/components/nav.vue")
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
__vue_options__.__file = "f:\\workspace\\gameBox\\src\\components\\nav.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-6bfeffe3"
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

/***/ "./src/pages/newsList.vue?entry=true":
/*!*******************************************!*\
  !*** ./src/pages/newsList.vue?entry=true ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter?id=data-v-189f35af!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=styles&index=0!./newsList.vue */ "C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-189f35af!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./src/pages/newsList.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader!babel-loader!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=script&index=0!./newsList.vue */ "C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.0.6@babel-loader\\lib\\index.js!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./src/pages/newsList.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler?id=data-v-189f35af!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=template&index=0!./newsList.vue */ "C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-189f35af!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./src/pages/newsList.vue")
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
__vue_options__.__file = "f:\\workspace\\gameBox\\src\\pages\\newsList.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-189f35af"
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

/***/ "C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.0.6@babel-loader\\lib\\index.js!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./src/components/nav.vue":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/node_modules/_babel-loader@8.0.6@babel-loader/lib!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/components/nav.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

var okTools = app.requireModule('okTools');
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    reposition: {
      type: Number,
      "default": 0
    }
  },
  data: function data() {
    return {
      position: 0,
      tabPages: [{
        tabName: 'index',
        title: '??????',
        unSelectedIcon: '../images/navico1.png',
        selectedIcon: '../images/curNav1.png',
        url: '../pages/index.js'
      }, {
        tabName: 'gemes',
        title: '??????',
        unSelectedIcon: '../images/navico2.png',
        selectedIcon: '../images/curNav2.png',
        url: '../pages/gemes.js'
      }, {
        tabName: 'recharge',
        title: '??????',
        unSelectedIcon: '../images/navico3.png',
        selectedIcon: '../images/navico3.png',
        url: '../pages/recharge.js'
      }, {
        tabName: 'newsList',
        title: '??????',
        unSelectedIcon: '../images/navico4.png',
        selectedIcon: '../images/curNav4.png',
        url: '../pages/newsList.js'
      }, {
        tabName: 'personal',
        title: '??????',
        unSelectedIcon: '../images/navico5.png',
        selectedIcon: '../images/curNav5.png',
        url: '../pages/personal.js'
      }],
      uid: '',
      rkey: ''
    };
  },
  methods: {
    switchPage: function switchPage(item, index) {
      var self = this;
      var platform = WXEnvironment.platform;
      this.position = index;
      eeui.toastClose();

      if (item.tabName == 'recharge') {
        var _self = this;

        api.get(endpoint.getuserInfo, {}, function (res) {
          if (res.code == 1) {
            var _platform = WXEnvironment.platform.toLowerCase();

            if (_platform === 'ios') {
              eeui.openWeb('https://wap-api.okwan.com/index/user/jumpAppSecond?key=' + encodeURIComponent(_self.rkey));
            } else {
              okTools.pay('https://wap-api.okwan.com/index/user/jumpAppSecond?key=' + encodeURIComponent(_self.rkey), '????????????');
            }
          } else {
            eeui.openPage({
              url: '../pages/login.js',
              pageType: 'app'
            });
          }
        });
        return;
      }

      if (item.tabName == 'personal') {
        api.get(endpoint.getuserInfo, {}, function (res) {
          if (res.code == 1) {
            self.uid = res.mes.uid;

            if (eeui.getPageInfo().url.indexOf(item.tabName) > -1) {
              return;
            }

            eeui.openPage({
              pageName: item.tabName,
              pageType: 'app',
              url: item.url,
              params: {
                position: self.position,
                uid: self.uid
              }
            }, function (result) {});
          } else {
            eeui.openPage({
              url: '../pages/login.js',
              pageType: 'app'
            });
          }
        });
      } else {
        if (eeui.getPageInfo().url.indexOf(item.tabName) > -1) {
          return;
        }

        eeui.openPage({
          pageName: item.tabName,
          pageType: 'app',
          url: item.url,
          params: {
            position: self.position
          }
        });
      }
    },
    jumpAppFirst: function jumpAppFirst() {
      var self = this;
      var parmars = {
        url: 'https://www.okwan.com/m/#/rechargeGame',
        cookie: api.getVokwan()
      };
      api.post(endpoint.jumpAppFirst, parmars, function (res) {
        if (res.code == 1) {
          self.rkey = res.mes;
        } else {// eeui.toast(res.mes);
        }
      });
    }
  },
  mounted: function mounted() {},
  created: function created() {
    this.jumpAppFirst();
  }
});

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
      logintxt: '????????????',
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

/***/ "C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.0.6@babel-loader\\lib\\index.js!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./src/pages/newsList.vue":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/node_modules/_babel-loader@8.0.6@babel-loader/lib!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/newsList.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_topHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/topHeader */ "./src/components/topHeader.vue");
/* harmony import */ var _components_topHeader__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_topHeader__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/nav */ "./src/components/nav.vue");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_nav__WEBPACK_IMPORTED_MODULE_1__);
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

 // import WxcEpSlider from 'weex-ui/packages/wxc-ep-slider';

var eeui = app.requireModule('eeui');

var endpoint = __webpack_require__(/*! ../backend/endpoint */ "./src/backend/endpoint.js");

var api = __webpack_require__(/*! ../backend/api */ "./src/backend/api.js");

var okTools = app.requireModule('okTools');
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      position: 0,
      tabPages: [{
        tabName: 'gameActivity',
        title: '????????????'
      }, {
        tabName: 'gameNotice',
        title: '????????????'
      }, {
        tabName: 'gameStrategy',
        title: '????????????'
      }],
      // sliderId: 0,
      // cardLength: 2,
      // cardSize: {
      //     width: 516,
      //     height: 274,
      //     spacing: 0,
      //     scale: 0.8
      // },
      picListsss: [],
      spicLists: [],
      reposition: app.config.params,
      limit: 10,
      noticeInfo: {
        infoList: [],
        lists: [],
        curPage: 1,
        loadinging: false,
        loadingMsgShow: false
      },
      activityInfo: {
        infoList: [],
        lists: [],
        curPage: 1,
        loadinging: false,
        loadingMsgShow: false
      },
      gameInfo: {
        infoList: [],
        lists: [],
        curPage: 1,
        loadinging: false,
        loadingMsgShow: false
      }
    };
  },
  components: {
    TopHeader: _components_topHeader__WEBPACK_IMPORTED_MODULE_0___default.a,
    nav: _components_nav__WEBPACK_IMPORTED_MODULE_1___default.a // WxcEpSlider 

  },
  mounted: function mounted() {},
  methods: {
    openNewsCon: function openNewsCon() {
      eeui.openPage({
        url: '../pages/newsCon.js',
        pageType: 'app'
      });
    },
    // wxcEpSliderCurrentIndexSelected (e) {
    //     const index = e.currentIndex;
    // },
    getBanner: function getBanner() {
      var self = this;
      api.get(endpoint.getArtBanner, {}, function (res) {
        if (res.code == 1) {
          self.newsBanner = res.mes;
          self.newsBanner.forEach(function (v, k) {
            self.spicLists.push(v.src);
          });
        }
      });
    },
    pageSelected: function pageSelected(data) {
      this.position = data.position;
    },
    switchPage: function switchPage(item, index) {
      this.position = index;
      this.$refs.reflectName.setCurrentItem(this.tabPages[index].tabName);
      this.activityLoadMore();
      this.guideLoadMore();
    },
    bannerLink: function bannerLink(href) {
      eeui.openPage({
        url: '../pages/gameInfo.js',
        pageType: 'app',
        params: {
          gid: href,
          position: 1
        }
      });
    },
    noticeLoadMore: function noticeLoadMore() {
      var self = this;
      self.noticeInfo.loadinging = true;
      self.noticeInfo.loadingMsgShow = false;
      self.noticeInfo.curPage = parseInt(self.noticeInfo.lists.length / self.limit) + 1;
      var params = {
        page: this.noticeInfo.curPage
      };
      api.get(endpoint.getGameActivity, params, function (res) {
        if (res.code == 1) {
          self.noticeInfo.infoList = res.mes;

          if (self.noticeInfo.infoList.length > 0) {
            if (self.noticeInfo.lists.length % self.limit > 0) {
              self.noticeInfo.loadinging = false;
              self.noticeInfo.loadingMsgShow = true;
              return;
            }

            self.noticeInfo.infoList.forEach(function (val, index) {
              self.noticeInfo.lists.push(val);
            });
            self.noticeInfo.loadinging = true;
          }

          if (self.noticeInfo.infoList.length < 10) {
            self.noticeInfo.loadinging = false;
            self.noticeInfo.loadingMsgShow = true;
          }
        }
      });
    },
    jumpAppFirst: function jumpAppFirst() {
      var self = this;
    },
    noticeLinkLog: function noticeLinkLog(list) {
      var self = this;
      api.get(endpoint.getuserInfo, {}, function (res) {
        if (res.code == 1) {
          var parmars = {
            url: list.url,
            cookie: api.getVokwan()
          };

          if (list.process_status == 3) {
            return;
          }

          api.post(endpoint.jumpAppFirst, parmars, function (res) {
            if (res.code == 1) {
              var platform = WXEnvironment.platform.toLowerCase();
              self.rkey = res.mes;

              if (platform === 'ios') {
                eeui.openWeb('https://wap-api.okwan.com/index/user/jumpAppSecond?key=' + encodeURIComponent(self.rkey));
              } else {
                okTools.pay('https://wap-api.okwan.com/index/user/jumpAppSecond?key=' + encodeURIComponent(self.rkey), '????????????');
              }
            } else {
              eeui.toast(res.mes);
            }
          });
        } else {
          eeui.openPage({
            url: '../pages/login.js',
            pageType: 'app'
          });
        }
      });
    },
    noticeLink: function noticeLink(list) {
      eeui.openPage({
        url: '../pages/newsCon.js',
        pageType: 'app',
        params: {
          url: list.url
        }
      });
    },
    activityLoadMore: function activityLoadMore() {
      var self = this;
      self.activityInfo.loadinging = true;
      self.activityInfo.loadingMsgShow = false;
      self.activityInfo.curPage = parseInt(self.activityInfo.lists.length / self.limit) + 1;
      var params = {
        page: this.activityInfo.curPage
      };
      api.get(endpoint.getGameNotice, params, function (res) {
        if (res.code == 1) {
          self.activityInfo.infoList = res.mes;

          if (self.activityInfo.infoList && self.activityInfo.infoList.length > 0) {
            if (self.activityInfo.lists.length % self.limit > 0) {
              self.activityInfo.loadinging = false;
              self.activityInfo.loadingMsgShow = true;
              return;
            }

            self.activityInfo.infoList.forEach(function (val, index) {
              self.activityInfo.lists.push(val);
            });
            self.activityInfo.loadinging = true;
          }

          if (self.activityInfo.infoList.length < 10) {
            self.activityInfo.loadinging = false;
            self.activityInfo.loadingMsgShow = true;
          }
        }
      });
    },
    guideLoadMore: function guideLoadMore() {
      var self = this;
      self.gameInfo.loadinging = true;
      self.gameInfo.loadingMsgShow = false;
      self.gameInfo.curPage = parseInt(self.gameInfo.lists.length / self.limit) + 1;
      var params = {
        page: this.gameInfo.curPage
      };
      api.get(endpoint.getGameGuide, params, function (res) {
        if (res.code == 1) {
          self.gameInfo.infoList = res.mes;

          if (self.gameInfo.infoList && self.gameInfo.infoList.length > 0) {
            if (self.gameInfo.lists.length % self.limit > 0) {
              self.gameInfo.loadinging = false;
              self.gameInfo.loadingMsgShow = true;
              return;
            }

            self.gameInfo.infoList.forEach(function (val, index) {
              self.gameInfo.lists.push(val);
            });
            self.gameInfo.loadinging = true;
          }

          if (self.gameInfo.infoList.length < 10) {
            self.gameInfo.loadinging = false;
            self.gameInfo.loadingMsgShow = true;
          }
        }
      });
    }
  },
  created: function created() {
    this.noticeLoadMore();
    this.activityLoadMore();
    this.guideLoadMore();
    this.getBanner();
  }
});

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

/***/ "C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-189f35af!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./src/pages/newsList.vue":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-189f35af!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/newsList.vue ***!
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
    "flex": 1,
    "paddingBottom": "120"
  },
  "newsBanner": {
    "backgroundColor": "#ffffff"
  },
  "banner": {
    "width": "750",
    "height": "339"
  },
  "banner-frame": {
    "width": "750",
    "height": "339",
    "position": "relative"
  },
  "banner-image": {
    "width": "750",
    "height": "339"
  },
  "indicator": {
    "position": "absolute",
    "left": 0,
    "right": 0,
    "bottom": "15",
    "height": "60",
    "backgroundColor": "rgba(0,0,0,0)",
    "itemColor": "#999999",
    "itemSelectedColor": "#ffffff"
  },
  "slider": {
    "width": "516",
    "height": "274",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "bpic": {
    "width": "516",
    "height": "274"
  },
  "scrollList1": {
    "backgroundColor": "#ffffff",
    "paddingTop": 0,
    "paddingRight": "30",
    "paddingBottom": "110",
    "paddingLeft": "30"
  },
  "gameC": {
    "marginTop": "10",
    "backgroundColor": "#ffffff",
    "paddingTop": 0,
    "paddingRight": "30",
    "paddingBottom": 0,
    "paddingLeft": "30",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between"
  },
  "tabPages": {
    "flex": 1,
    "width": "750"
  },
  "nav-item": {
    "justifyContent": "center",
    "height": "88"
  },
  "nav-item-active": {
    "height": "88",
    "justifyContent": "center",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#ffbd58",
    "borderBottomWidth": "4"
  },
  "navTxt": {
    "fontSize": "30",
    "color": "#000000",
    "textAlign": "center"
  },
  "newsCon": {
    "borderTopColor": "#f4f4f4",
    "borderTopStyle": "solid",
    "borderTopWidth": "2",
    "backgroundColor": "#ffffff"
  },
  "info": {
    "paddingTop": "26",
    "paddingRight": 0,
    "paddingBottom": "26",
    "paddingLeft": 0,
    "borderBottomStyle": "dashed",
    "borderBottomColor": "#dddada",
    "borderBottomWidth": "1",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between"
  },
  "pic": {
    "width": "220"
  },
  "lispic": {
    "width": "220",
    "height": "131",
    "borderRadius": "10"
  },
  "tttttt": {
    "paddingRight": "30"
  },
  "ccc": {
    "flex": 1
  },
  "statusPic": {
    "width": "62",
    "height": "26"
  },
  "t": {
    "color": "#2a2a2a",
    "fontSize": "28",
    "lineHeight": "38",
    "width": "455",
    "flexWrap": "wrap"
  },
  "time": {
    "color": "#666666",
    "fontSize": "26",
    "flex": 1,
    "paddingLeft": "80"
  },
  "time1": {
    "color": "#666666",
    "fontSize": "26",
    "flex": 1,
    "paddingTop": "30"
  },
  "loadingbox": {
    "alignItems": "center",
    "paddingTop": "20",
    "paddingRight": "20",
    "paddingBottom": "20",
    "paddingLeft": "20",
    "height": "80"
  },
  "loading": {
    "height": "40",
    "width": "40"
  },
  "loadMsg": {
    "alignItems": "center",
    "height": "80",
    "lineHeight": "80",
    "textAlign": "center",
    "color": "#666666",
    "fontSize": "24"
  }
}

/***/ }),

/***/ "C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-6bfeffe3!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./src/components/nav.vue":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-6bfeffe3!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/components/nav.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "nav": {
    "position": "fixed",
    "bottom": 0,
    "left": 0,
    "width": "750",
    "height": "137",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between"
  },
  "navbg": {
    "width": "750",
    "height": "137",
    "position": "absolute",
    "bottom": 0,
    "left": 0
  },
  "tabPages": {
    "flex": 1,
    "width": "750",
    "alignItems": "center"
  },
  "nav-item": {
    "flex": 1,
    "paddingTop": 0,
    "paddingRight": "30",
    "paddingBottom": 0,
    "paddingLeft": "30",
    "alignItems": "center"
  },
  "navico": {
    "width": "44",
    "height": "44",
    "marginTop": "50",
    "marginBottom": "14"
  },
  "navico1": {
    "width": "113",
    "height": "113",
    "marginTop": "4"
  },
  "navTxt": {
    "color": "#b8b8b8",
    "fontSize": "24",
    "textAlign": "center",
    "marginTop": "-6"
  },
  "navTxt-active": {
    "color": "#ffbd58",
    "fontSize": "24",
    "textAlign": "center",
    "marginTop": "-6"
  }
}

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

/***/ }),

/***/ "C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-189f35af!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./src/pages/newsList.vue":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-189f35af!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/newsList.vue ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["app"]
  }, [_c('top-header'), (_vm.spicLists.length) ? _c('div', {
    staticClass: ["newsBanner"]
  }, [_c('slider', {
    staticClass: ["banner"],
    attrs: {
      "interval": "3000",
      "autoPlay": "true"
    }
  }, [_vm._l((_vm.newsBanner), function(bannerimg, index) {
    return _c('div', {
      key: index,
      staticClass: ["banner-frame"]
    }, [_c('image', {
      staticClass: ["banner-image"],
      attrs: {
        "resize": "cover",
        "src": bannerimg.src
      },
      on: {
        "click": function($event) {
          _vm.bannerLink(bannerimg.href)
        }
      }
    })])
  }), (_vm.newsBanner.length > 1) ? _c('indicator', {
    staticClass: ["indicator"]
  }) : _vm._e()], 2)]) : _vm._e(), _c('div', {
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
  })], 2), (_vm.position == 0) ? _c('scroller', {
    staticClass: ["scrollList1"],
    attrs: {
      "loadmoreoffset": "1"
    },
    on: {
      "loadmore": _vm.noticeLoadMore
    }
  }, [_c('div', {
    staticClass: ["newsCon"]
  }, _vm._l((_vm.noticeInfo.lists), function(list, index) {
    return _c('div', {
      key: index,
      staticClass: ["info"]
    }, [_c('div', {
      staticClass: ["ccc"]
    }, [_c('richtext', {
      staticClass: ["tttttt"],
      on: {
        "click": function($event) {
          _vm.noticeLinkLog(list)
        }
      }
    }, [_c('span', {
      staticClass: ["t", "t1"]
    }, [_vm._v(_vm._s(list.title.length > 28 ? list.title.substring(0, 28) + '...' : list.title))]), (list.process_status == 2) ? _c('image', {
      staticClass: ["statusPic"],
      attrs: {
        "src": "root://images/actLoad.png"
      }
    }) : _vm._e(), (list.process_status == 3) ? _c('image', {
      staticClass: ["statusPic"],
      attrs: {
        "src": "root://images/actover.png"
      }
    }) : _vm._e(), (list.process_status == 1) ? _c('image', {
      staticClass: ["statusPic"],
      attrs: {
        "src": "root://images/actReady.png"
      }
    }) : _vm._e()]), _c('text', {
      staticClass: ["time1"]
    }, [_vm._v(_vm._s(list.create_time))])], 1), _c('div', {
      staticClass: ["pic"]
    }, [_c('image', {
      staticClass: ["lispic"],
      attrs: {
        "src": list.pic
      },
      on: {
        "click": function($event) {
          _vm.noticeLinkLog(list)
        }
      }
    })])])
  })), (_vm.noticeInfo.loadinging) ? _c('div', {
    staticClass: ["loadingbox"]
  }, [_c('image', {
    staticClass: ["loading"],
    attrs: {
      "src": "root://images/loding.gif"
    }
  })]) : _vm._e(), (_vm.noticeInfo.loadingMsgShow) ? _c('div', [_c('text', {
    staticClass: ["loadMsg"]
  }, [_vm._v("?????????????????????~")])]) : _vm._e()]) : _vm._e(), (_vm.position == 1) ? _c('scroller', {
    staticClass: ["scrollList1"],
    attrs: {
      "loadmoreoffset": "1"
    },
    on: {
      "loadmore": _vm.noticeLoadMore
    }
  }, [_c('div', {
    staticClass: ["newsCon"]
  }, _vm._l((_vm.activityInfo.lists), function(list, index) {
    return _c('div', {
      key: index,
      staticClass: ["info"]
    }, [_c('text', {
      staticClass: ["t"],
      on: {
        "click": function($event) {
          _vm.noticeLink(list)
        }
      }
    }, [_vm._v(_vm._s(list.title.length > 28 ? list.title.substring(0, 28) + '...' : list.title))]), _c('text', {
      staticClass: ["time"]
    }, [_vm._v(_vm._s(list.creat_time))])])
  })), (_vm.activityInfo.loadinging) ? _c('div', {
    staticClass: ["loadingbox"]
  }, [_c('image', {
    staticClass: ["loading"],
    attrs: {
      "src": "root://images/loding.gif"
    }
  })]) : _vm._e(), (_vm.activityInfo.loadingMsgShow) ? _c('div', [_c('text', {
    staticClass: ["loadMsg"]
  }, [_vm._v("?????????????????????~")])]) : _vm._e()]) : _vm._e(), (_vm.position == 2) ? _c('scroller', {
    staticClass: ["scrollList1"],
    attrs: {
      "loadmoreoffset": "1"
    },
    on: {
      "loadmore": _vm.guideLoadMore
    }
  }, [_c('div', {
    staticClass: ["newsCon"]
  }, _vm._l((_vm.gameInfo.lists), function(list, index) {
    return _c('div', {
      key: index,
      staticClass: ["info"]
    }, [_c('text', {
      staticClass: ["t"],
      on: {
        "click": function($event) {
          _vm.noticeLink(list)
        }
      }
    }, [_vm._v(_vm._s(list.title.length > 28 ? list.title.substring(0, 28) + '...' : list.title))]), _c('text', {
      staticClass: ["time"]
    }, [_vm._v(_vm._s(list.create_time))])])
  })), (_vm.gameInfo.loadinging) ? _c('div', {
    staticClass: ["loadingbox"]
  }, [_c('image', {
    staticClass: ["loading"],
    attrs: {
      "src": "root://images/loding.gif"
    }
  })]) : _vm._e(), (_vm.gameInfo.loadingMsgShow) ? _c('div', [_c('text', {
    staticClass: ["loadMsg"]
  }, [_vm._v("?????????????????????~")])]) : _vm._e()]) : _vm._e(), _c('nav', {
    attrs: {
      "reposition": _vm.reposition.position
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-6bfeffe3!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./src/components/nav.vue":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-6bfeffe3!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/components/nav.vue ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["nav"]
  }, [_c('image', {
    staticClass: ["navbg"],
    attrs: {
      "src": "root://images/navBg.png"
    }
  }), _vm._l((_vm.tabPages), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: ["tabPage"]
    }, [_c('div', {
      staticClass: ["nav-item"],
      on: {
        "click": function($event) {
          _vm.switchPage(item, index)
        }
      }
    }, [_c('image', {
      class: [index === 2 ? 'navico1' : 'navico'],
      attrs: {
        "src": index === _vm.reposition ? item.selectedIcon : item.unSelectedIcon
      }
    }), _c('text', {
      class: [index === _vm.reposition ? 'navTxt-active' : 'navTxt']
    }, [_vm._v(_vm._s(item.title))])])])
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });