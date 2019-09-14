<template>
  <div class="row">
    <div class="col-sm-12 col-md-9">
    <form>
      <input type="hidden" name="post_hash" value="a978004fffde856b7d3331b4af0ae1b4">
      <input type="hidden" name="attach_access_key" value="1f26fafd98eb567a3158bab17ff615b3">
      <input type="hidden" name="question_id" id="question_id" value="">
      <input type="hidden" name="ask_user_id" value="">
      <input type="hidden" name="ssid" value="661058">
      <select name="category_id" class="collapse" id="category_id">
        <option value="0">- 请选择分类 -</option>
        <option value="2">WeCenter 程序</option>
        <option value="3">建站运营</option>
        <option value="4">创意与设计</option>
        <option value="5">问与答</option>
        <option value="8">设计</option>
        <option value="9">公告</option>
        <option value="10">建议</option>
        <option value="11">更新与修复</option>
        <option value="12">插件</option>
      </select>
      <div class="aw-mod aw-mod-publish">
        <div class="mod-body">
          <h3>问题标题:</h3>
          <!-- 问题标题 -->
          <div class="aw-publish-title">
            <div>
              <label class="oldPwdTip question_contents-label">问题标题...</label>
              <input type="text" name="question_content" value="" class="form-control">
              <div class="aw-publish-suggest-question collapse">
                <p class="text-color-999">你的问题可能已经有答案</p>
                <ul class="aw-dropdown-list">
                </ul>
              </div>
            </div>
            <div class="dropdown category">
              <div class="dropdown-toggle" data-toggle="dropdown">
                <span id="aw-topic-tags-select" class="aw-hide-txt">选择分类</span>
                <a href="javascript:;"><i class="icon icon-down"></i></a>
              </div>
              <div aria-labelledby="dropdownMenu" role="menu" class="aw-dropdown">
                <ul class="aw-dropdown-list">
                  <li><a data-value="2">WeCenter 程序</a></li>
                  <li><a data-value="3">建站运营</a></li>
                  <li><a data-value="4">创意与设计</a></li>
                  <li><a data-value="5">问与答</a></li>
                  <li><a data-value="8">设计</a></li>
                  <li><a data-value="9">公告</a></li>
                  <li><a data-value="10">建议</a></li>
                  <li><a data-value="11">更新与修复</a></li>
                  <li><a data-value="12">插件</a></li>
                </ul>
              </div>
            </div>
          </div>
          <!-- end 问题标题 -->
          <h3>问题补充 (选填):</h3>
          <div class="aw-mod aw-editor-box">
            <div class="mod-head">
              <div class="wmd-panel">
                <textarea rows="15" name="question_detail"></textarea>
              </div>
            </div>
            <div class="mod-body">
              <span class="pull-right text-color-999" id="question_detail_message">&nbsp;</span>
            </div>
          </div>
          <h3>添加话题:</h3>
          <div class="aw-topic-bar active" data-type="publish">
            <div class="tag-bar clearfix">
            <span class="aw-edit-topic icon-inverse" style="display: none;">
              <i class="icon icon-edit"></i> 编辑话题
            </span>
            </div>
            <div class="aw-edit-topic-box form-inline" style="display: block;">
              <input type="text" class="form-control" autocomplete="off" placeholder="创建或搜索添加新话题...">
              <a class="btn btn-normal btn-success add" style="display: none;">添加</a>
              <a class="btn btn-normal btn-gray close-edit">取消</a>
              <div class="aw-dropdown"><p class="title">没有找到相关结果</p>
                <ul class="aw-dropdown-list"></ul>
              </div>
            </div>
          </div>
          <h3>最近话题:</h3>
          <div class="aw-topic-bar">
            <div class="topic-bar clearfix">
            <span class="topic-tag">
              <a class="text">
                系统接口
              </a>
            </span>
            </div>
          </div>
        </div>
        <div class="mod-footer clearfix">
          <a href="http://wenda.wecenter.com/integral/rule/" target="_blank">[积分规则]</a>
          <span class="aw-anonymity">
          <a id="saveDraft">保存草稿</a>
        </span>
          <a class="btn btn-large btn-success btn-publish-submit">确认发起</a>
        </div>
      </div>
    </form>
    </div>
    <!-- 侧边栏 -->
    <div class="col-sm-12 col-md-3 aw-side-bar hidden-xs">
      <!-- 问题发起指南 -->
      <div class="aw-mod publish-help">
        <div class="mod-head">
          <h3>问题发起指南</h3>
        </div>
        <div class="mod-body">
          <p><b>• 问题标题:</b> 请用准确的语言描述您发布的问题思想</p>
          <p><b>• 问题补充:</b> 详细补充您的问题内容, 并提供一些相关的素材以供参与者更多的了解您所要问题的主题思想</p>
          <p><b>• 选择话题:</b> 选择一个或者多个合适的话题, 让您发布的问题得到更多有相同兴趣的人参与. 所有人可以在您发布问题之后添加和编辑该问题所属的话题</p>
          <p><b>• 关于积分：</b> 发起一个问题会消耗您 10 个积分, 每多一个回复你将获得 5 个积分的奖励 ,为了您的利益, 在发起问题的时候希望能够更好的描述您的问题以及多使用站内搜索功能.</p>
        </div>
      </div>
      <!-- end 问题发起指南 -->
    </div>
    <!-- end 侧边栏 -->
  </div>
</template>
<script>
  export default {
    name: 'Article'
  }
</script>

<style scoped>

</style>
