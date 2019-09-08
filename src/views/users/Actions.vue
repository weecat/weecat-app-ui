<template>
  <div class="tab-pane" id="actions">
    <div class="aw-mod">
      <div class="mod-head">
        <h3>最新动态</h3>
      </div>
      <div class="mod-body">
        <div id="contents_user_actions">
          <p style="padding: 15px 0" align="center">没有内容</p>
        </div>
      </div>
      <div class="mod-footer">
        <!-- 加载更多内容 -->
        <a class="aw-load-more-content disabled" id="bp_user_actions_more" data-page="0">
          <span>没有更多了</span>
        </a>
        <!-- end 加载更多内容 -->
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Actions'
    }
</script>

<style scoped>

</style>
