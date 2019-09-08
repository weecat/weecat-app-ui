<template>
  <div class="tab-pane" id="orders">
    <div class="aw-mod">
      <div class="mod-head">
        <h3><i class="icon icon-point"></i>我的交易</h3>
      </div>
      <div class="mod-body">
        <table class="table table-hover aw-table">
          <thead>
          <tr class="info">
            <th width="30%">类型</th>
            <th width="20%">时间</th>
            <th width="10%">数额</th>
            <th width="10%">支付方式</th>
            <th width="10%">状态</th>
            <th width="15%">描述</th>
          </tr>
          </thead>
          <tbody id="contents_user_orders">
          <p style="padding: 15px 0" align="center">没有内容</p>
          </tbody>
        </table>
      </div>
      <div class="mod-footer">
        <!-- 加载更多内容 -->
        <a class="aw-load-more-content disabled" id="bp_user_orders_more" data-page="0">
          <span>没有更多了</span>
        </a>
        <!-- end 加载更多内容 -->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Orders'
  }
</script>

<style scoped>

</style>
