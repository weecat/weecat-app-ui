<template>
  <div class="aw-container-wrap">
    <div class="container">
      <div class="row">
        <div class="aw-content-wrap clearfix">
          <div class="aw-user-setting">
            <div class="tabbable">
              <ul class="nav nav-tabs aw-nav-tabs active">
                <router-link to="/setting/verify" tag="li" active-class="active">
                  <a href="javascript:void(0);">申请认证</a>
                </router-link>
                <router-link to="/setting/trade" tag="li" active-class="active">
                  <a href="javascript:void(0);">账户设置</a>
                </router-link>
                <router-link to="/setting/security" tag="li" active-class="active">
                  <a href="javascript:void(0);">安全设置</a>
                </router-link>
                <router-link to="/setting/oauth2" tag="li" active-class="active">
                  <a href="javascript:void(0);">账号绑定</a>
                </router-link>
                <router-link to="/setting/privacy" tag="li" active-class="active">
                  <a href="javascript:void(0);">隐私/提醒</a>
                </router-link>
                <router-link to="/setting/profile" tag="li" active-class="active">
                  <a href="javascript:void(0);">基本资料</a>
                </router-link>
                <h2><i class="icon icon-setting"></i> 用户设置</h2>
              </ul>
            </div>
            <div class="tab-content clearfix">
              <!-- 基本信息 -->
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import '@/assets/css/default/user-setting.css'
  export default {
    name: 'Setting'
  }
</script>

<style scoped>

</style>
