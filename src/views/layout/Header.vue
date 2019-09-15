<template>
  <div class="aw-top-menu-wrap">
    <div class="container">
      <!-- logo -->
      <div class="aw-logo hidden-xs">
        <a href="#"></a>
      </div>
      <!-- end logo -->
      <!-- 搜索框 -->
      <div class="aw-search-box  hidden-xs hidden-sm">
        <form class="navbar-search" action="/search" id="global_search_form" method="post">
          <label class="oldPwdTip aw-search-query-label" style="display: block;">搜索问题、话题或人...</label>
          <input class="form-control search-query" type="text" value="" autocomplete="off" name="q">
          <span title="搜索" id="global_search_btns">
            <i class="icon icon-search"></i></span>
          <div class="aw-dropdown" style="display: none;">
            <div class="mod-body">
              <p class="title">输入关键字进行搜索</p>
              <ul class="aw-dropdown-list collapse"></ul>
              <p class="search"><span>搜索:</span><a></a></p>
            </div>
            <div class="mod-footer">
              <a href="/publish" class="pull-right btn btn-mini btn-success publish">发起问题</a>
            </div>
          </div>
        </form>
      </div>
      <!-- end 搜索框 -->
      <!-- 导航 -->
      <div class="aw-top-nav navbar">
        <div class="navbar-header">
          <button class="navbar-toggle pull-left">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <nav role="navigation" class="collapse navbar-collapse bs-navbar-collapse">
          <ul class="nav navbar-nav">
            <li>
              <router-link to="/column" active-class="active">
                <i class="icon icon-column"></i> 专栏
              </router-link>
            </li>
            <li>
              <router-link to="/explore" active-class="active">
                <i class="icon icon-list"></i> 发现
              </router-link>
            </li>
            <li>
              <router-link to="/topic" active-class="active">
                <i class="icon icon-topic"></i> 话题
              </router-link>
            </li>
            <li>
              <a style="font-weight:bold;">· · ·</a>
              <div class="dropdown-list pull-right">
                <ul id="extensions-nav-list">
                  <li><a href="/project"><i class="icon icon-activity"></i> 活动</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>
      <!-- end 导航 -->
      <!-- 用户栏 -->

      <div class="aw-user-nav">
        <!-- 登陆&注册栏 -->
        <template v-if="login">
          <a href="http://wenda.wecenter.com/people/11129" class="aw-user-nav-dropdown">
            <img alt="mycms2013" src="http://wenda.wecenter.com/uploads/avatar/000/01/11/29_avatar_mid.jpg">
          </a>
          <div class="aw-dropdown dropdown-list pull-right">
            <ul class="aw-dropdown-list">
              <li>
                <router-link to="/user/inbox">
                  <i class="icon icon-inbox"></i> 私信
                  <span class="badge badge-important collapse" style="display: none;">0</span>
                </router-link>
              </li>
              <li class="hidden-xs">
                <router-link to="/setting/profile">
                  <i class="icon icon-setting"></i>设置
                </router-link>
              </li>
              <li>
                <router-link to="/user/logout">
                  <i class="icon icon-logout"></i> 退出
                </router-link>
              </li>
            </ul>
          </div>
        </template>
        <template v-else>
          <a class="login btn btn-normal btn-primary" href="/login">登录</a>
          <a class="register btn btn-normal btn-success" href="/register/">注册</a>
        </template>
        <!-- end 登陆&注册栏 -->
      </div>
      <!-- end 用户栏 -->
      <!-- 发起 -->
      <template v-if="login">
        <div class="aw-publish-btn">
          <button class="btn-primary">
            <i class="icon icon-ask"></i>发起
          </button>
          <div class="dropdown-list pull-right">
            <ul>
              <router-link to="/user/publish/question" tag="li" active-class="active">
                <a href="javascript:void(0);">问题</a>
              </router-link>
              <router-link to="/user/publish/question" tag="li" active-class="active">
                <a href="javascript:void(0);">悬赏</a>
              </router-link>
              <router-link to="/user/publish/article" tag="li" active-class="active">
                <a href="javascript:void(0);">文章</a>
              </router-link>
              <router-link to="/user/publish/suggest" tag="li" active-class="active">
                <a href="javascript:void(0);">建议</a>
              </router-link>
            </ul>
          </div>
        </div>
      </template>
      <!-- end 发起 -->
    </div>
  </div>
</template>

<script>
  import Storage from '@/storage'

  export default {
    name: 'Header',
    data() {
      return {
        login: false,
        user: {}
      }
    },
    created() {
      let AUTH_TOKEN = Storage.getItem('AUTH_TOKEN')
      if (AUTH_TOKEN) {
        this.login = true
      }
    }
  }
</script>

<style scoped>
  .aw-publish-btn button {
    display: block;
    width: 80px;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    text-align: center;
    border-radius: 3px;
  }
</style>
