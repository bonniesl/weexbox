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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.vue?entry=true");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-progress/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-progress/index.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue */ "./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-progress/index.vue");
/* harmony import */ var _index_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _index_vue__WEBPACK_IMPORTED_MODULE_0___default.a; });


/***/ }),

/***/ "./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-progress/index.vue":
/*!*****************************************************************************!*\
  !*** ./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-progress/index.vue ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter?id=data-v-97b375d4!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=styles&index=0!./index.vue */ "C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-97b375d4!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-progress/index.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader!babel-loader!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=script&index=0!./index.vue */ "C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.0.6@babel-loader\\lib\\index.js!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-progress/index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler?id=data-v-97b375d4!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=template&index=0!./index.vue */ "C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-97b375d4!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-progress/index.vue")
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
__vue_options__.__file = "f:\\workspace\\gameBox\\node_modules\\_weex-ui@0.8.4@weex-ui\\packages\\wxc-progress\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-97b375d4"
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

/***/ "./src/pages/index.vue?entry=true":
/*!****************************************!*\
  !*** ./src/pages/index.vue?entry=true ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter?id=data-v-6be49aa4!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=styles&index=0!./index.vue */ "C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-6be49aa4!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./src/pages/index.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader!babel-loader!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=script&index=0!./index.vue */ "C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.0.6@babel-loader\\lib\\index.js!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./src/pages/index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler?id=data-v-6be49aa4!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=template&index=0!./index.vue */ "C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-6be49aa4!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./src/pages/index.vue")
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
__vue_options__.__file = "f:\\workspace\\gameBox\\src\\pages\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-6be49aa4"
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

/***/ "C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.0.6@babel-loader\\lib\\index.js!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-progress/index.vue":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/node_modules/_babel-loader@8.0.6@babel-loader/lib!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-progress/index.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    barColor: {
      type: String,
      default: '#FFC900'
    },
    barWidth: {
      type: Number,
      default: 600
    },
    barHeight: {
      type: Number,
      default: 8
    },
    barRadius: {
      type: Number,
      default: 0
    },
    value: {
      type: Number,
      default: 0
    },
    backgroundColor: {
      type: String,
      default: '#f2f3f4'
    }
  },
  computed: {
    runWayStyle() {
      const {
        barWidth,
        barHeight,
        barRadius,
        backgroundColor
      } = this;
      return {
        width: barWidth + 'px',
        height: barHeight + 'px',
        borderRadius: barRadius + 'px',
        backgroundColor
      };
    },

    progressStyle() {
      const {
        value,
        barWidth,
        barHeight,
        barColor,
        barRadius
      } = this;
      const newValue = value < 0 ? 0 : value > 100 ? 100 : value;
      return {
        backgroundColor: barColor,
        borderRadius: barRadius + 'px',
        height: barHeight + 'px',
        width: newValue / 100 * barWidth + 'px'
      };
    }

  }
});

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
        title: '首页',
        unSelectedIcon: '../images/navico1.png',
        selectedIcon: '../images/curNav1.png',
        url: '../pages/index.js'
      }, {
        tabName: 'gemes',
        title: '游戏',
        unSelectedIcon: '../images/navico2.png',
        selectedIcon: '../images/curNav2.png',
        url: '../pages/gemes.js'
      }, {
        tabName: 'recharge',
        title: '充值',
        unSelectedIcon: '../images/navico3.png',
        selectedIcon: '../images/navico3.png',
        url: '../pages/recharge.js'
      }, {
        tabName: 'newsList',
        title: '资讯',
        unSelectedIcon: '../images/navico4.png',
        selectedIcon: '../images/curNav4.png',
        url: '../pages/newsList.js'
      }, {
        tabName: 'personal',
        title: '我的',
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
              okTools.pay('https://wap-api.okwan.com/index/user/jumpAppSecond?key=' + encodeURIComponent(_self.rkey), '充值页面');
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

/***/ "C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.0.6@babel-loader\\lib\\index.js!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./src/pages/index.vue":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/node_modules/_babel-loader@8.0.6@babel-loader/lib!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/index.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var weex_ui_packages_wxc_progress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! weex-ui/packages/wxc-progress */ "./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-progress/index.js");
/* harmony import */ var _components_topHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/topHeader */ "./src/components/topHeader.vue");
/* harmony import */ var _components_topHeader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_topHeader__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/nav */ "./src/components/nav.vue");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_nav__WEBPACK_IMPORTED_MODULE_2__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
var globalEvent = weex.requireModule('globalEvent');
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      uid: '',
      bannerList: [],
      recGameList: [],
      hotGameList: [],
      advBanner: [],
      qualityGameList: [],
      dyGameList: [],
      platform: WXEnvironment.platform,
      dowIndex: 0,
      openIndex: 0
    };
  },
  components: {
    TopHeader: _components_topHeader__WEBPACK_IMPORTED_MODULE_1___default.a,
    nav: _components_nav__WEBPACK_IMPORTED_MODULE_2___default.a,
    WxcProgress: weex_ui_packages_wxc_progress__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {},
  methods: {
    getIndexInfo: function getIndexInfo() {
      var self = this;
      var platform = WXEnvironment.platform.toLowerCase();
      api.get(endpoint.getIndex, {}, function (res) {
        if (res.code == 1) {
          self.bannerList = res.mes.banner_images;
          self.advBanner = res.mes.adv_images;
          res.mes.hot_games.forEach(function (val, index) {
            self.$set(val, 'btnTxt', '下载');
            self.$set(val, 'peocessValue', 0);
            self.$set(val, 'clickCount', 0);
            self.$set(val, 'progressVisible', false);
            self.hotGameList.push(val);

            if (platform != 'ios') {
              okTools.checkPackage(val.pkg_name, function (cheV) {
                if (cheV == 1) {
                  self.$set(val, 'btnTxt', '打开');
                }
              });
            }
          });
          res.mes.recommend_games.forEach(function (val, index) {
            self.$set(val, 'btnTxt', '下载');
            self.$set(val, 'peocessValue', 0);
            self.$set(val, 'clickCount', 0);
            self.$set(val, 'progressVisible', false);
            self.qualityGameList.push(val);

            if (platform != 'ios') {
              okTools.checkPackage(val.pkg_name, function (cheV) {
                if (cheV == 1) {
                  self.$set(val, 'btnTxt', '打开');
                }
              });
            }
          });
          self.dyGameList = res.mes.douyin_games;
        }
      });
    },
    getRecentHome: function getRecentHome() {
      var self = this;
      var params = {
        uid: self.uid
      };
      api.post(endpoint.getRecentHome, params, function (res) {
        if (res.code == 1) {
          self.recGameList = res.mes;
        }
      });
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
    downLink: function downLink(list, index) {
      var platform = WXEnvironment.platform.toLowerCase();
      var self = this;
      self.openIndex = index;

      if (platform === 'ios') {
        eeui.openWeb(list.ios_url);
      } else {
        if (list.btnTxt == '安装中') {
          return;
        }

        list.clickCount++;
        okTools.checkPackage(list.pkg_name, function (cheV) {
          if (cheV == 1) {
            okTools.open(list.pkg_name);
          }

          if (cheV == 2) {
            if (list.clickCount == 1) {
              okTools.downloadApk(list.pkg_url, list.name, list.pkg_name);
            } else {
              list.btnTxt = '继续';
              okTools.pause(list.pkg_url);
              list.clickCount = 0;
            }
          }
        });
        globalEvent.addEventListener("downloadCallback", function (e) {
          if (e.down == 1) {
            list.progressVisible = false;
            list.btnTxt = '下载';
            list.clickCount = 0;
          }
        });
        globalEvent.addEventListener("installCallback", function (e) {
          if (e.install == 1) {
            list.progressVisible = false;
            list.btnTxt = '打开';
            list.clickCount = 0;
          }
        });
        globalEvent.addEventListener("failCallback", function (e) {
          if (e.fail == 1) {
            list.progressVisible = false;
            list.btnTxt = '下载';
            list.clickCount = 0;
          }
        });
      }
    },
    gameLink: function gameLink(gid) {
      eeui.openPage({
        url: '../pages/gameInfo.js',
        pageType: 'app',
        params: {
          gid: gid,
          position: 1
        }
      });
    },
    openNewsList: function openNewsList() {
      eeui.openPage({
        url: '../pages/newsList.js',
        pageType: 'app'
      });
    },
    openGift: function openGift() {
      eeui.openPage({
        url: '../pages/gift.js',
        pageType: 'app'
      });
    },
    openService: function openService() {
      eeui.openPage({
        url: '../pages/serviceList.js',
        pageType: 'app'
      });
    },
    openGameList: function openGameList() {
      eeui.openPage({
        url: '../pages/gemes.js',
        pageType: 'app',
        params: {
          position: 1
        }
      });
    },
    _isLogin: function _isLogin(cb) {
      var self = this;
      api.get(endpoint.getuserInfo, {}, function (res) {
        if (res.code == 1) {
          self.uid = res.mes.uid;
          cb();
        }
      });
    }
  },
  created: function created() {
    var _this = this;

    this.getIndexInfo();

    this._isLogin(function (_) {
      _this.getRecentHome();
    });

    var platform = WXEnvironment.platform.toLowerCase();
    var self = this;
    var count = 0;

    if (platform === 'ios') {} else {
      eeui.setPageBackPressed(eeui.getPageInfo().pageName, function () {
        count++;

        if (count == 1) {
          eeui.toast('再按一次返回键退出程序');
        } else {
          eeui.toastClose();
          eeui.goDesktop();
          count = 0;
        }
      });
      globalEvent.addEventListener("progressCallback", function (e) {
        self.hotGameList.forEach(function (val, k) {
          if (e.packageName.indexOf(val.pkg_name) > -1 && val.pkg_name) {
            val.progressVisible = true;
            val.btnTxt = e.progress + '%';
            val.peocessValue = e.progress;
          }
        });
      });
      globalEvent.addEventListener("progressCallback", function (e) {
        self.qualityGameList.forEach(function (val, k) {
          if (e.packageName.indexOf(val.pkg_name) > -1 && val.pkg_name) {
            val.progressVisible = true;
            val.btnTxt = e.progress + '%';
            val.peocessValue = e.progress;
          }
        });
      });
    }
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

/***/ "C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-6be49aa4!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./src/pages/index.vue":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-6be49aa4!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/index.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    "paddingBottom": "97"
  },
  "indexNav": {
    "backgroundColor": "#ffffff",
    "marginTop": "8",
    "paddingBottom": "22"
  },
  "banner": {
    "width": "750",
    "height": "339",
    "marginTop": "10"
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
  "navlist": {
    "flex": 1
  },
  "playCon": {
    "flex": 1
  },
  "navUL": {
    "flex": 1
  },
  "navListC": {
    "flexDirection": "row",
    "alignItems": "center",
    "paddingTop": "34"
  },
  "navpic": {
    "alignItems": "center"
  },
  "navico": {
    "width": "92",
    "height": "92"
  },
  "navTxt": {
    "color": "#2a2a2a",
    "fontSize": "26",
    "marginTop": "14",
    "textAlign": "center"
  },
  "recPlayList": {
    "backgroundColor": "#ffffff",
    "paddingTop": "24",
    "paddingBottom": "28",
    "marginTop": "10"
  },
  "tit": {
    "alignItems": "center"
  },
  "titPic": {
    "width": "533",
    "height": "26"
  },
  "playc": {
    "flexDirection": "row",
    "paddingTop": "24",
    "paddingRight": "30",
    "paddingBottom": 0,
    "paddingLeft": "30"
  },
  "playIco": {
    "width": "132",
    "height": "132"
  },
  "playTxt": {
    "fontSize": "28",
    "color": "#2a2a2a",
    "paddingTop": "16",
    "textAlign": "center"
  },
  "hotGameList": {
    "backgroundColor": "#ffffff",
    "marginTop": "10",
    "paddingTop": 0,
    "paddingRight": "30",
    "paddingBottom": 0,
    "paddingLeft": "30"
  },
  "bigTit": {
    "fontSize": "34",
    "color": "#0d0f13",
    "fontWeight": "bold",
    "flex": 1
  },
  "bigTit1": {
    "paddingTop": "26"
  },
  "hotItem": {
    "paddingTop": "45",
    "paddingRight": 0,
    "paddingBottom": "28",
    "paddingLeft": 0,
    "borderTopStyle": "solid",
    "borderTopColor": "#dddada",
    "borderTopWidth": "1",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "hotfir": {
    "borderTopWidth": 0
  },
  "hotPic": {
    "width": "132",
    "height": "132",
    "borderRadius": "16",
    "marginRight": "26"
  },
  "hotInfo": {
    "flex": 1,
    "position": "relative"
  },
  "hotTit": {
    "color": "#2a2a2a",
    "fontSize": "28",
    "paddingTop": "14"
  },
  "hotType": {
    "color": "#666666",
    "fontSize": "22",
    "paddingTop": "16"
  },
  "hotDes": {
    "color": "#bbbbbb",
    "fontSize": "22",
    "paddingTop": "10"
  },
  "downBtn": {
    "textAlign": "center",
    "color": "#ffbd58",
    "fontSize": "28"
  },
  "downC": {
    "width": "114",
    "height": "56",
    "borderColor": "#ffcc66",
    "borderStyle": "solid",
    "borderWidth": "2",
    "borderRadius": "10",
    "position": "relative",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "downTxt": {
    "flex": 1,
    "fontSize": "28",
    "color": "#ffcc66",
    "textAlign": "center"
  },
  "downTxtc": {
    "flex": 1,
    "color": "#2a2a2a",
    "fontSize": "28",
    "textAlign": "center"
  },
  "progress": {
    "position": "absolute"
  },
  "downBtn1": {
    "width": "137",
    "height": "43",
    "lineHeight": "43",
    "textAlign": "center",
    "color": "#ffbd58",
    "fontSize": "28",
    "borderRadius": "12",
    "marginTop": "18"
  },
  "advBanners": {
    "marginTop": "10",
    "marginRight": 0,
    "marginBottom": "10",
    "marginLeft": 0
  },
  "advBanner": {
    "paddingTop": 0,
    "paddingRight": "30",
    "paddingBottom": 0,
    "paddingLeft": "30"
  },
  "advPic": {
    "width": "690",
    "height": "274",
    "borderRadius": "10"
  },
  "comt": {
    "flexDirection": "row",
    "alignItems": "center",
    "paddingTop": "26",
    "paddingRight": "30",
    "paddingBottom": 0,
    "paddingLeft": "30"
  },
  "moreLink": {
    "flexDirection": "row"
  },
  "moretxt": {
    "color": "#999999",
    "fontSize": "28"
  },
  "moreIco": {
    "color": "#999999",
    "fontSize": "28",
    "width": "24",
    "height": "24"
  },
  "qualityRec": {
    "backgroundColor": "#ffffff",
    "marginTop": "10"
  },
  "gameCom": {
    "backgroundColor": "#ffffff",
    "marginTop": "10"
  },
  "qualityList": {
    "flex": 1,
    "marginTop": "30",
    "marginLeft": "30"
  },
  "flexCom": {
    "flexDirection": "row",
    "flexWrap": "wrap",
    "alignItems": "center"
  },
  "qualityInfo": {
    "marginBottom": "38",
    "marginRight": "30",
    "alignItems": "center"
  },
  "qualiPic": {
    "width": "210",
    "height": "171"
  },
  "qname": {
    "color": "#2a2a2a",
    "fontSize": "28",
    "marginTop": "22",
    "textAlign": "center"
  },
  "qtype": {
    "color": "#bbbbbb",
    "fontSize": "22",
    "marginTop": "12",
    "textAlign": "center"
  },
  "dyGameList": {
    "flex": 1,
    "marginTop": "42",
    "textAlign": "center"
  },
  "flexNowrap": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between"
  },
  "gameCInfo": {
    "flex": 1,
    "paddingBottom": "28",
    "alignItems": "center"
  },
  "dyPic": {
    "width": "132",
    "height": "132"
  },
  "dyName": {
    "color": "#2a2a2a",
    "fontSize": "28",
    "marginTop": "16",
    "textAlign": "center"
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

/***/ "C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-97b375d4!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-progress/index.vue":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-97b375d4!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-progress/index.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "wxc-progress": {
    "backgroundColor": "#f2f3f4"
  },
  "progress": {
    "position": "absolute",
    "backgroundColor": "#FFC900"
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

/***/ "C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-6be49aa4!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./src/pages/index.vue":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-6be49aa4!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/index.vue ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["app"]
  }, [_c('top-header'), _c('scroll-view', {
    staticClass: ["scrollList"]
  }, [_c('div', {
    staticClass: ["indexNav"]
  }, [_c('slider', {
    staticClass: ["banner"],
    attrs: {
      "interval": "3000",
      "autoPlay": "true"
    }
  }, [_vm._l((_vm.bannerList), function(bannerimg, index) {
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
  }), (_vm.bannerList.length > 1) ? _c('indicator', {
    staticClass: ["indicator"]
  }) : _vm._e()], 2), _c('div', {
    staticClass: ["navList"]
  }, [_c('div', {
    staticClass: ["navListC"]
  }, [_c('div', {
    staticClass: ["navUL"],
    on: {
      "click": _vm.openGameList
    }
  }, [_c('div', {
    staticClass: ["navpic"]
  }, [_c('image', {
    staticClass: ["navico"],
    attrs: {
      "src": "root://images/nav1.png"
    }
  })]), _c('text', {
    staticClass: ["navTxt"]
  }, [_vm._v("游戏大厅")])]), _c('div', {
    staticClass: ["navUL"],
    on: {
      "click": _vm.openGift
    }
  }, [_c('div', {
    staticClass: ["navpic"]
  }, [_c('image', {
    staticClass: ["navico"],
    attrs: {
      "src": "root://images/nav3.png"
    }
  })]), _c('text', {
    staticClass: ["navTxt"]
  }, [_vm._v("礼包")])]), _c('div', {
    staticClass: ["navUL"],
    on: {
      "click": _vm.openService
    }
  }, [_c('div', {
    staticClass: ["navpic"]
  }, [_c('image', {
    staticClass: ["navico"],
    attrs: {
      "src": "root://images/nav4.png"
    }
  })]), _c('text', {
    staticClass: ["navTxt"]
  }, [_vm._v("开服表")])])])])]), (_vm.uid && _vm.recGameList.length > 0) ? _c('div', {
    staticClass: ["recPlayList"]
  }, [_c('div', {
    staticClass: ["tit"]
  }, [_c('image', {
    staticClass: ["titPic"],
    attrs: {
      "src": "root://images/indexColum1.png"
    }
  })]), _c('div', {
    staticClass: ["playCon"]
  }, [_c('div', {
    staticClass: ["playc"]
  }, _vm._l((_vm.recGameList), function(list, index) {
    return _c('div', {
      key: index,
      staticClass: ["navUL"]
    }, [_c('div', {
      staticClass: ["navpic"],
      on: {
        "click": function($event) {
          _vm.gameLink(list.gid)
        }
      }
    }, [_c('image', {
      staticClass: ["playIco"],
      attrs: {
        "src": list.pic
      }
    })]), _c('text', {
      staticClass: ["playTxt"],
      on: {
        "click": function($event) {
          _vm.gameLink(list.gid)
        }
      }
    }, [_vm._v(_vm._s(list.gname))])])
  }))])]) : _vm._e(), _c('div', {
    staticClass: ["hotGameList"]
  }, [_c('text', {
    staticClass: ["bigTit", "bigTit1"]
  }, [_vm._v("人气游戏风向标")]), _vm._l((_vm.hotGameList), function(list, index) {
    return _c('div', {
      key: index,
      staticClass: ["hotItem"],
      class: [index == 0 ? 'hotfir' : '']
    }, [_c('image', {
      staticClass: ["hotPic"],
      attrs: {
        "src": list.logo
      },
      on: {
        "click": function($event) {
          _vm.gameLink(list.gid)
        }
      }
    }), _c('div', {
      staticClass: ["hotInfo"]
    }, [_c('text', {
      staticClass: ["hotTit"],
      on: {
        "click": function($event) {
          _vm.gameLink(list.gid)
        }
      }
    }, [_vm._v(_vm._s(list.name))]), _c('text', {
      staticClass: ["hotType"],
      on: {
        "click": function($event) {
          _vm.gameLink(list.gid)
        }
      }
    }, [_vm._v("传奇 " + _vm._s(list.size))]), _c('text', {
      staticClass: ["hotDes"]
    }, [_vm._v(_vm._s(list.gstyle))])]), _c('div', {
      staticClass: ["downBtn"],
      on: {
        "click": function($event) {
          _vm.downLink(list, index)
        }
      }
    }, [_c('div', {
      staticClass: ["downC"]
    }, [(list.progressVisible) ? _c('div', {
      staticClass: ["progress"]
    }, [_c('wxc-progress', {
      attrs: {
        "value": list.peocessValue,
        "barWidth": 112,
        "barHeight": 53,
        "barRadius": 10,
        "barColor": "#ffcc66",
        "backgroundColor": "transparent"
      }
    })], 1) : _vm._e(), (list.btnTxt == '下载' || list.btnTxt == '打开') ? _c('text', {
      staticClass: ["downTxt"]
    }, [_vm._v(_vm._s(list.btnTxt))]) : _c('text', {
      staticClass: ["downTxtc"]
    }, [_vm._v(_vm._s(list.btnTxt))])])])])
  })], 2), _c('slider', {
    staticClass: ["advBanners"],
    attrs: {
      "interval": "3000",
      "autoPlay": "true"
    }
  }, [_vm._l((_vm.advBanner), function(list, index) {
    return _c('div', {
      key: index,
      staticClass: ["advBanner"]
    }, [_c('image', {
      staticClass: ["advPic"],
      attrs: {
        "resize": "cover",
        "src": list.src
      },
      on: {
        "click": function($event) {
          _vm.bannerLink(list.href)
        }
      }
    })])
  }), (_vm.advBanner.length > 1) ? _c('indicator', {
    staticClass: ["indicator"]
  }) : _vm._e()], 2), _c('div', {
    staticClass: ["qualityRec"]
  }, [_c('div', {
    staticClass: ["comt"]
  }, [_c('text', {
    staticClass: ["bigTit"]
  }, [_vm._v("精品推荐")]), _c('div', {
    staticClass: ["moreLink"],
    on: {
      "click": _vm.openGameList
    }
  }, [_c('text', {
    staticClass: ["moretxt"]
  }, [_vm._v("更多")]), _c('icon', {
    staticClass: ["moreIco"],
    attrs: {
      "content": "tb-right"
    }
  })], 1)]), _c('div', {
    staticClass: ["qualityList"]
  }, [_c('div', {
    staticClass: ["flexCom"]
  }, _vm._l((_vm.qualityGameList), function(list, index) {
    return _c('div', {
      key: index,
      staticClass: ["qualityInfo"],
      on: {
        "click": function($event) {
          _vm.gameLink(list.gid)
        }
      }
    }, [_c('image', {
      staticClass: ["qualiPic"],
      attrs: {
        "src": list.src
      }
    }), _c('text', {
      staticClass: ["qname"]
    }, [_vm._v(_vm._s(list.name))]), _c('text', {
      staticClass: ["qtype"]
    }, [_vm._v(_vm._s(list.gstyle))]), _c('div', {
      staticClass: ["downBtn1"],
      on: {
        "click": function($event) {
          _vm.downLink(list, index)
        }
      }
    }, [_c('div', {
      staticClass: ["downC"]
    }, [(list.progressVisible) ? _c('div', {
      staticClass: ["progress"]
    }, [_c('wxc-progress', {
      attrs: {
        "value": list.peocessValue,
        "barWidth": 112,
        "barHeight": 53,
        "barRadius": 10,
        "barColor": "#ffcc66",
        "backgroundColor": "transparent"
      }
    })], 1) : _vm._e(), (list.btnTxt == '下载' || list.btnTxt == '打开') ? _c('text', {
      staticClass: ["downTxt"]
    }, [_vm._v(_vm._s(list.btnTxt))]) : _c('text', {
      staticClass: ["downTxtc"]
    }, [_vm._v(_vm._s(list.btnTxt))])])])])
  }))])])]), _c('nav')], 1)
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

/***/ }),

/***/ "C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-97b375d4!C:\\Users\\Administrator\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-progress/index.vue":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-97b375d4!C:/Users/Administrator/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-progress/index.vue ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wxc-progress"],
    style: _vm.runWayStyle,
    attrs: {
      "accessible": true,
      "ariaLabel": ("进度为百分之" + _vm.value)
    }
  }, [_c('div', {
    staticClass: ["progress"],
    style: _vm.progressStyle
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });