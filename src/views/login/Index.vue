<template>
  <div>
    <div id="wrapper">
      <div class="aw-login-box">
        <div class="mod-body clearfix">
          <div class="content pull-left">
            <h1 class="logo"><a href="#"></a></h1>
            <h2>WeeCat 社交化问答社区程序</h2>
            <form id="login_form" action="/account/ajax/login_process/">
              <ul>
                <li>
                  <input type="text" class="form-control" placeholder="邮箱/手机号/用户名" name="user_name"/>
                </li>
                <li>
                  <label class="oldPwdTip aw-search-query-label">密码</label>
                  <input id="aw-login-user-password" type="password" class="form-control" autocomplete="off"/>
                  <input id="aw-login-user-repassword" type="hidden" name="password"/>
                </li>
                <li class="alert alert-danger collapse error_message">
                  <i class="icon icon-delete"></i> <em></em>
                </li>
                <li class="last">
                  <a href="#" id="login_submit" class="pull-right btn btn-large btn-primary">登录</a>
                  <label>
                    <input type="checkbox" value="1" name="net_auto_login"/>记住我
                  </label>
                  <a href="/account/find_password/type-mobile">&nbsp;&nbsp;忘记密码</a>
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
                <img src="/login_qr_code"/>
              </div>
            </a>
          </div>
        </div>
        <div class="mod-footer">
          <span>还没有账号?</span>&nbsp;&nbsp;
          <a href="/account/register">立即注册</a>&nbsp;&nbsp;•&nbsp;&nbsp;
          <a href="/">游客访问</a>&nbsp;&nbsp;•&nbsp;&nbsp;
          <a href="/reader">问答阅读</a>
        </div>
      </div>
    </div>
    <div class="aw-footer-wrap">
      <div class="aw-footer">
        <span class="hidden-xs">
         Copyright © 2019 Weecat All Rights Reserved
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
  import '@/assets/css/bootstrap.css'
  import '@/assets/css/icon.css'
  import '@/assets/css/default/common.css'
  import '@/assets/css/default/link.css'
  import '@/assets/js/plug_module/style.css'
  import '@/assets/css/default/login.css'

  export default {
    name: 'LoginIndex'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
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
  .geetest_radar_tip_content{
    position: initial !important;
  }
</style>
