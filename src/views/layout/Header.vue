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
        <a class="login btn btn-normal btn-primary" href="/login">登录</a>
        <a class="register btn btn-normal btn-success" href="/register/">注册</a>
        <!-- end 登陆&注册栏 -->
      </div>
      <!-- end 用户栏 -->
      <!-- 发起 -->
      <!-- end 发起 -->
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style scoped>

</style>
