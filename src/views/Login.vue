<template>
  <div class="container">
    <div id="wrapper">
      <div class="aw-login-box">
        <div class="mod-body clearfix">
          <div class="content pull-left">
            <h1 class="logo"><a href="http://wenda.wecenter.com/"></a></h1>
            <h2>WeCenter 社交化问答社区程序</h2>
            <form id="login_form" method="post">
              <input type="hidden" name="return_url" value="http://wenda.wecenter.com/" />
              <ul>
                <li>
                  <input type="text" id="aw-login-user-name" class="form-control" placeholder="邮箱/手机号/用户名" name="user_name" />
                </li>
                <li>
                  <label class="oldPwdTip aw-search-query-label">密码</label>
                  <input id="aw-login-user-password" type="password" class="form-control"  autocomplete="off"  />
                  <input id="aw-login-user-repassword" type="hidden" name="password" />
                </li>
                <li class="alert alert-danger collapse error_message">
                  <i class="icon icon-delete"></i> <em></em>
                </li>
                <li class="last">
                  <a href="javascript:void(0);"  class="pull-right btn btn-large btn-primary">登录</a>
                  <label>
                    <input type="checkbox" value="1" name="net_auto_login" />记住我
                  </label>
                  <a href="http://wenda.wecenter.com/account/find_password/type-mobile">&nbsp;&nbsp;忘记密码</a>
                </li>
              </ul>
            </form>
          </div>
          <div class="side-bar pull-left">
            <h3>第三方账号登录</h3>
            <a href="#" class="btn btn-block btn-weibo"><i class="icon icon-weibo"></i> 微博登录</a>
            <a href="#" class="btn btn-block btn-qq"><i class="icon icon-qq"></i> QQ 登录</a>
            <a href="#" class="btn btn-block btn-wechat">
              <i class="icon icon-wechat"></i> 微信扫一扫登录
              <div class="img">
                <img src="http://wenda.wecenter.com/weixin/login_qr_code/" />
              </div>
            </a>
          </div>
        </div>
        <div class="mod-footer">
          <span>还没有账号?</span>&nbsp;&nbsp;
          <a href="http://wenda.wecenter.com/account/register/">立即注册</a>&nbsp;&nbsp;•&nbsp;&nbsp;
          <a href="/">游客访问</a>&nbsp;&nbsp;•&nbsp;&nbsp;
          <a href="http://wenda.wecenter.com/reader/">问答阅读</a>
        </div>
      </div>
    </div>
    <div class="aw-footer-wrap">
      <div class="aw-footer">
        Copyright © 2019
        <span class="hidden-xs"> - <a href='http://www.miibeian.gov.cn'>粤ICP备17116736号</a> All Rights Reserved</span>
        <span class="hidden-xs">
          Powered By <a href="http://www.wecenter.com/?copyright" target="blank">WeCenter 3.3.3</a>
        </span>
      </div>
    </div>
    <a class="aw-back-top hidden-xs" href="javascript:;">
      <i class="icon icon-up"></i>
    </a>
    <!-- DO NOT REMOVE -->
    <div id="aw-ajax-box" class="aw-ajax-box"></div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  /* 登陆页面 */
  body{background:url('/static/img/login_bg.jpg') no-repeat #e9f0f4;}
  #wrapper{position: relative;margin-bottom:20px;padding-top:100px;}
  .btn-weibo{background-color: #ff6666;color: #fff !important;}
  .btn-weibo:hover{background-color: #ff4d4d;}
  .btn-weibo:active{background-color: #E64545;}
  .btn-qq{background-color: #418ae2;color: #fff !important;}
  .btn-qq:hover{background-color: #2d7fe2;}
  .btn-qq:active{background-color: #1773e2;}
  .btn-google{background-color: #e25d4a;color: #fff !important;}
  .btn-google:hover{background-color: #e34a33;}
  .btn-google:active{background-color: #ca422d;}
  .btn-facebook{background-color: #3a5799;color: #fff !important;}
  .btn-facebook:hover{background-color: #264a9b;}
  .btn-facebook:active{background-color: #244081;}
  .btn-twitter{background-color: #1eb5ee;color: #fff !important;}
  .btn-twitter:hover{background-color: #00ace6;}
  .btn-twitter:active{background-color: #009dd2;}
  .btn-wechat{background-color: #73db42;color: #fff !important;}
  .btn-primary{border:none;background-color: #59b0ff;}
  .btn-primary:hover{background-color: #4daaff;}
  .btn-primary:active, .btn-primary:focus{background-color: #1a90ff;}
  .btn:active, .btn.active{box-shadow: none;}
  .aw-login-box{width: 714px;margin:0 auto;background-color: #fff;border:1px solid #b3b3b3;border-radius: 3px;}
  .aw-login-box .logo{width:151px;height:94px;background:url('/static/img/login_logo.png') no-repeat;}
  .aw-login-box .logo a{display: block;width: 151px;height: 94px;}
  .aw-login-box .mod-body{padding:50px 60px;}
  .aw-login-box .mod-body .content{width: 300px;margin-right: 60px;}
  .aw-login-box .mod-body .content h2{margin:13px 0 40px;color: #666;}
  .aw-login-box .mod-body .content ul li{margin-top: 20px;line-height: 30px;}
  .aw-login-box .mod-body .content ul li:first-child{margin-top: 0;}
  .aw-login-box .mod-body .content ul li.last{font-size: 12px;line-height: 40px;}
  .aw-login-box .mod-body .content ul li.last input{vertical-align: -2px\0;}
  .aw-login-box .mod-body .content ul li.last a{color: #666;}
  .aw-login-box .mod-body .content ul li .btn-primary{width:112px;color: #fff !important;}
  .aw-login-box .mod-body .side-bar{height: 326px;padding:60px 0 60px 60px;border-left: 1px solid #e6e6e6;}
  .aw-login-box .mod-body .side-bar h3{margin-bottom:27px;color: #666;text-align: center;}
  .aw-login-box .mod-body .side-bar .btn{position:relative;width: 170px;height: 40px;line-height: 40px;margin:0 0 20px;padding:0 0 0 15px;}
  .aw-login-box .mod-body .side-bar .btn i{position:absolute;left:15px;top:10px;font-size: 18px;color: #fff;}
  .aw-login-box .mod-body .side-bar .btn-wechat .img{display: none;}
  .aw-login-box .mod-body .side-bar .btn-wechat.active{position: relative;height:200px;background-color: #4d4d4d;}
  .aw-login-box .mod-body .side-bar .btn-wechat.active .img{display:block;position: absolute;left: 10px;top: 40px;width:148px;height: 148px;}
  .aw-login-box .mod-body .side-bar .btn-wechat.active img{max-width: 148px;}
  .aw-login-box .mod-body .side-bar .btn-wechat.active #aw-loading-mini-box{margin-top: 55px;}
  .aw-login-box .mod-body .form-control{height: 40px;line-height: 28px\0;padding-left:15px !important;box-shadow: none;border-color: #e6e6e6;}
  .aw-login-box .mod-footer{height: 70px;line-height:70px;background-color: #f5f5f5;padding:0 60px;color: #66b7ff;}
  .aw-login-box .mod-footer span{color: #666;}
  .aw-login-box .mod-footer a{color: #66b7ff;}
  .aw-footer-wrap{color: #999;}
  .aw-footer-wrap a{color: #66b7ff;}

  .oldPwdTip {
    position: absolute;
    color: rgba(153, 153, 153, 1);
    margin-top: 3px;
    margin-left: 0px;
    text-align: left;
    padding: 0 15px;
    height: 40px;
    line-height: 38px;
    color: #777777;
  }
  /* iphone竖屏幕 */
  @media (max-width:640px){
    /*登录界面*/
    #wrapper{padding: 20px;}
    .aw-login-wrap{width: auto;}
    .aw-login-box .aw-mod-head, .aw-login-box .aw-mod-body, .aw-login-box .aw-mod-footer{width: auto;}
    .aw-login-box .aw-mod-body{padding: 20px;}
    .aw-login-box .aw-mod-body #aw-login-user-name, .aw-mod-body #aw-login-user-password{width: 195px;}
    .aw-login-box .aw-mod-footer{padding:0 10px !important;}
  }
</style>
