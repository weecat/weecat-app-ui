<template>
  <div class="tab-pane active">
    <div class="aw-mod">
      <div class="mod-head">
        <h3>发问</h3>
      </div>
      <div class="mod-body">
        <div class="aw-profile-publish-list"><p
          style="padding: 15px 0" align="center">没有内容</p></div>
      </div>
      <div class="mod-footer">
        <!-- 加载更多内容 -->
        <a class="aw-load-more-content disabled" data-page="0">
          <span>没有更多了</span>
        </a>
        <!-- end 加载更多内容 -->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Questions',
    created() {
      console.log('Questions')
    }
  }
</script>

<style scoped>

</style>
