<template>
  <div class="tab-pane" id="withdraw">
    <div class="aw-mod">
      <div class="mod-head">
        <h3><i class="icon icon-point"></i>交易记录</h3>
      </div>
      <div class="mod-body">
        <table class="table table-hover aw-table">
          <thead>
          <tr class="info">
            <th width="14%">时间</th>
            <th width="8%">金额</th>
            <th width="8%">卡号</th>
            <th width="14%">银行</th>
            <th width="12%">持卡人</th>
            <th width="8%">手续费</th>
            <th width="12%">状态</th>
            <th width="40%">描述</th>
          </tr>
          </thead>
          <tbody id="contents_user_withdraw"><p style="padding: 15px 0" align="center">没有内容</p></tbody>
        </table>
      </div>
      <div class="mod-footer">
        <!-- 加载更多内容 -->
        <a class="aw-load-more-content disabled" id="bp_user_withdraw" data-page="0">
          <span>没有更多了</span>
        </a>
        <!-- end 加载更多内容 -->
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Withdraw'
    }
</script>

<style scoped>

</style>
