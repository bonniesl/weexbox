export const APIHOST = 'http://api.sh5.okwan.com';


// 登陆
export const signin = 'https://wap-api.okwan.com/index/login/login';
// 注册
export const signup = 'https://wap-api.okwan.com/index/login/register';
// 验证码
export const validateCode = 'https://wap-api.okwan.com/index/user/code?from=app';
//校验验证码
export const checkauthcode = 'https://wap-api.okwan.com/index/user/check_authcode';
//发送手机验证码(注册)
export const sendPhoneCodeByReg = 'https://wap-api.okwan.com/index/user/sendPhoneCodeByReg';
//检查用户是否存在
export const checkname = 'https://wap-api.okwan.com/index/login/checkname';
//发送手机验证码（忘记密码）
export const sendValidateCode = 'https://wap-api.okwan.com/index/login/sendValidateCodeBySms';
//通过手机修改密码
export const savePasswordByPhone = 'https://wap-api.okwan.com/index/login/savePasswordByPhone';
//发送邮箱验证码（忘记密码）
export const sendValidateCodeLogin = 'https://wap-api.okwan.com/index/login/sendValidateCodeByEmail';
//通过邮箱修改密码
export const savePasswordByEmail = 'https://wap-api.okwan.com/index/login/savePasswordByEmail';
//更绑手机
export const editphone = 'https://wap-api.okwan.com/index/user/editphone';
//退出登录
export const getlogout= 'https://wap-api.okwan.com/index/login/logout';
//个人资料
export const getuserInfo= 'https://wap-api.okwan.com/index/user/userInfo';
//修改头像
export const getsaveFace= 'https://wap-api.okwan.com/index/user/saveFace';
//修改资料
export const getsaveUser= 'https://wap-api.okwan.com/index/user/saveUserInfo';
//我的账户
export const getaccount = 'https://wap-api.okwan.com/index/user/account';
//我的消息
export const getmessage = 'https://wap-api.okwan.com/index/user/message';
//发送邮箱验证码
export const sendValidateCodeByEmail1 = 'https://wap-api.okwan.com/index/user/sendValidateCodeByEmail';
//邮箱绑定
export const emailBind = 'https://wap-api.okwan.com/index/user/emailBind';
//是否绑定过邮箱
export const checkEmail = 'https://wap-api.okwan.com/index/user/checkEmail';
//是否绑定过手机
export const checkPhone = 'https://wap-api.okwan.com/index/user/checkPhone';
//发送手机验证码
export const sendValidateCodeBySms = 'https://wap-api.okwan.com/index/user/sendValidateCodeBySms';
//发送更绑手机号验证码
export const sendChangeValidateCodeBySms = 'https://wap-api.okwan.com/index/user/sendChangeValidateCodeBySms';
//绑定手机号
export const phoneBind = 'https://wap-api.okwan.com/index/user/phoneBind';
//验证更绑手机号验证码
export const checkChangeSMSCode = 'https://wap-api.okwan.com/index/user/checkChangeSMSCode';
//发送新手机验证码
export const sendNewValidateCodeBySms = 'https://wap-api.okwan.com/index/user/sendNewValidateCodeBySms';
//发送手机验证码(登录)
export const sendPhoneCodeByLogin = 'https://wap-api.okwan.com/index/user/sendPhoneCodeByLogin';
//手机登录
export const loginPhoneReg = 'https://wap-api.okwan.com/index/login/loginPhone';
//礼包记录
export const getgiftRecord = 'https://wap-api.okwan.com/index/gift/giftRecordBox';
//充值记录
export const getrecharge = 'https://wap-api.okwan.com/index/user/recharge';

// 首页
export const getIndex = 'https://api-sh5.okwan.com/api/home/index';
//最近在玩
export const getRecentHome= 'https://api-sh5.okwan.com/api/home/recentGame';
//手机游戏列表
export const getPhoneGame = 'https://api-sh5.okwan.com/api/game/phoneGame';
//H5游戏列表
export const getH5Game = 'https://api-sh5.okwan.com/api/game/h5Game';
//抖音热游列表
export const getDyGame = 'https://api-sh5.okwan.com/api/game/douyinGame';
//游戏详情
export const getGameDetail ='https://api-sh5.okwan.com/api/game/gameDetail';
//H5详情
export const getH5GameDetail ='https://api-sh5.okwan.com/api/index/gameDetail';
//游戏礼包列表
export const getGiftDetail ='https://wap-api.okwan.com/index/gift/getGiftDetail';
//其他人在玩儿
export const getOtherGame ='https://api-sh5.okwan.com/api/game/otherGame';
//游戏攻略
export const getgameGuide ='https://api-sh5.okwan.com/api/game/gameGuide';
//攻略详情
export const getgameGuideDetail= 'https://wap-api.okwan.com/index/game/gameGuideDetail';
//游戏公告
export const getGameNotice ='https://api-sh5.okwan.com/api/news/gameNotice';
//游戏活动
export const getGameActivity ='https://api-sh5.okwan.com/api/news/gameActivity';
//游戏攻略
export const getGameGuide ='https://api-sh5.okwan.com/api/news/gameGuide';
//游戏公告
// export const getGameActivity ='/api/news/gameActivity';
//咨询banner
export const getArtBanner ='https://api-sh5.okwan.com/api/news/articleBanner'
//礼包列表(手游)
export const getPhoneGift ='https://api-sh5.okwan.com/api/gift/phoneGift'
//礼包详情(手游)
export const getPhoneGiftDetail ='https://api-sh5.okwan.com/api/gift/phoneGiftDetail'
//礼包列表(H5)
export const getH5Gift ='https://api-sh5.okwan.com/api/gift/h5Gift'
//礼包详情(H5)
export const getH5GiftDetail ='https://api-sh5.okwan.com/api/gift/h5GiftDetail'
//领取礼包
export const getGift ='https://api-sh5.okwan.com/api/gift/getGift'
//开服表
export const getService ='https://api-sh5.okwan.com/api/server/index'
//充值到游戏列表
export const getGameList ='https://api-game.okwan.com/game/api/index'
//充值账号切换
export const getchangeAccount = 'https://wap-api.okwan.com/index/recharge/changeAccount';
//充值OK豆和OK币
export const getVirtualCoin = 'https://wap-api.okwan.com/index/recharge/getVirtualCoin';
//充值服务器列表
export const getRServiceList = 'https://api-game.okwan.com/game/api/serverList';
//充值角色列表
export const getRoleList = 'https://api-role.okwan.com/role/roles/getForce';
//充值活动列表
export const getpayActivity = 'https://api-role.okwan.com/index/recharge/payActivity';

//App webview跳转
export const jumpAppFirst = 'https://wap-api.okwan.com/index/user/jumpAppFirst';
//App webview跳转2
export const jumpAppSecond = 'https://wap-api.okwan.com/index/user/jumpAppSecond';
