<template>
  <div class="aw-container-wrap">
    <div class="container aw-publish">
      <div class="row">
        <div class="aw-content-wrap clearfix">
          <div class="aw-main-content">
            <!-- tab 切换 -->
            <ul class="nav nav-tabs aw-nav-tabs active">
              <router-link to="/user/publish/suggest" tag="li" active-class="active">
                <a href="javascript:void(0);">建议</a>
              </router-link>
              <router-link to="/user/publish/article" tag="li" active-class="active">
                <a href="javascript:void(0);">文章</a>
              </router-link>
              <router-link to="/user/publish/question" tag="li" active-class="active">
                <a href="javascript:void(0);">问题</a>
              </router-link>
              <h2 class="hidden-xs">
                <i class="icon icon-ask"></i> 发起
              </h2>
            </ul>
            <router-view></router-view>
            <!-- end tab 切换 -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Index'
  }
</script>

<style scoped>

</style>
