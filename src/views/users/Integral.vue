<template>
  <div class="tab-pane" id="integral">
    <div class="aw-mod">
      <div class="mod-head">
        <h3><i class="icon icon-point"></i>我的积分</h3>
      </div>
      <div class="mod-body">
        <table class="table table-hover aw-table">
          <thead>
          <tr class="info">
            <th width="14%">时间</th>
            <th width="8%">数额</th>
            <th width="8%">余额</th>
            <th width="17%">描述</th>
            <th width="40%">相关信息</th>
          </tr>
          </thead>
          <tbody id="contents_user_integral">
          <tr>
            <td>2019-06-25</td>
            <td><span class="aw-text-color-orange">400</span></td>
            <td>500</td>
            <td>绑定 OPEN ID</td>
            <td><p> - </p></td>
          </tr>
          <tr>
            <td>2014-07-02</td>
            <td><span class="aw-text-color-orange">100</span></td>
            <td>100</td>
            <td>初始资本</td>
            <td><p> - </p></td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="mod-footer">
        <!-- 加载更多内容 -->
        <a class="aw-load-more-content" id="bp_user_integral" data-page="1">
          <span>更多</span>
        </a>
        <!-- end 加载更多内容 -->
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Integral'
    }
</script>

<style scoped>

</style>
