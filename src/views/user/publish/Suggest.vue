<template>
  <div class="row">
    <div class="col-sm-12 col-md-9">
      <form action="http://wenda.wecenter.com/publish/ajax/publish_article/" method="post" id="question_form"
            onsubmit="return false;">
        <input type="hidden" name="is_suggest" value="1">
        <input type="hidden" name="post_hash" value="a978004fffde856b7d3331b4af0ae1b4">
        <input type="hidden" name="attach_access_key" value="4e8a76df1c6bdc9ee9de9c52a5e9454d">
        <input type="hidden" name="article_id" id="article_id" value="">
        <select name="category_id" class="collapse" id="category_id">
          <option value="0">- 请选择分类 -</option>
          <option value="3" selected="selected">建站运营</option>
          <option value="10" selected="selected">建议</option>
        </select>
        <div class="aw-mod aw-mod-publish">
          <div class="mod-body">
            <h3><em style="color: red;">*</em>建议标题:</h3>
            <!-- 建议标题 -->
            <div class="aw-publish-title active">
              <input style="width: 78%" type="text" name="title" value="" class="form-control">
              <div class="aw-dropdown aw-question-dropdown">
                <i class="aw-icon i-dropdown-triangle active"></i>
                <p class="title">没有找到相关结果</p>
                <ul class="aw-question-dropdown-list"></ul>
              </div>
              <div class="dropdown category">
                <div class="dropdown-toggle" data-toggle="dropdown">
                  <span id="aw-topic-tags-select-category">建议</span>
                  <a href="javascript:;"><i class="icon icon-down"></i></a>
                </div>
                <div aria-labelledby="dropdownMenu" role="menu" class="aw-dropdown">
                  <ul class="aw-dropdown-list">
                    <li><a data-value="3">建站运营</a></li>
                    <li><a data-value="10">建议</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- end 建议标题 -->

            <h3>建议内容:</h3>
            <div class="aw-mod aw-editor-box">
              <div class="mod-head">
                <div class="wmd-panel">
                  <textarea style="display: none;" id="wangcontent" rows="15" name="message"></textarea>
                </div>
              </div>
              <div class="mod-body">
                <p class="text-color-999"><span class="pull-right" id="question_detail_message">&nbsp;</span></p>
                <div class="aw-upload-box">
                  <a class="btn btn-default">上传附件</a>
                  <div class="upload-container"></div>
                  <span
                    class="text-color-999 aw-upload-tips hidden-xs">允许的附件文件类型: jpg,jpeg,png,zip,rar,7z,txt,doc,xls</span>
                </div>
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
                <input type="text" class="form-control" placeholder="创建或搜索添加新话题...">
                <a class="btn btn-normal btn-success add" style="display: none;">添加</a>
                <a class="btn btn-normal btn-gray close-edit">取消</a>
                <div class="aw-dropdown">
                  <p class="title">没有找到相关结果</p>
                  <ul class="aw-dropdown-list"></ul>
                </div>
              </div>
            </div>
            <h3>最近话题:</h3>
            <div class="aw-topic-bar">
              <div class="topic-bar clearfix">
                <span class="topic-tag">
                  <a class="text">系统接口</a>
                </span>
              </div>
            </div>
          </div>
          <div class="mod-footer clearfix">
            <a href="http://wenda.wecenter.com/integral/rule/" target="_blank">[积分规则]</a>
            <span class="aw-anonymity"></span>
            <a class="btn btn-large btn-success btn-publish-submit">确认发起</a>
          </div>
        </div>
      </form>
    </div>
    <!-- 侧边栏 -->
    <div class="col-sm-12 col-md-3 aw-side-bar hidden-xs">
      <!-- 建议发起指南 -->
      <div class="aw-mod publish-help">
        <div class="mod-head">
          <h3>建议发起指南</h3>
        </div>
        <div class="mod-body">
          <p><b>• 建议标题:</b> 请用准确的语言描述您发布的建议思想</p>
          <p><b>• 建议补充:</b> 详细补充您的建议内容, 并提供一些相关的素材以供参与者更多的了解您所要建议的主题思想</p>
          <p><b>• 选择话题:</b> 选择一个或者多个合适的话题, 让您发布的建议得到更多有相同兴趣的人参与. 所有人可以在您发布建议之后添加和编辑该建议所属的话题</p>
        </div>
      </div>
      <!-- end 建议发起指南 -->
    </div>
    <!-- end 侧边栏 -->
  </div>
</template>

<script>
  export default {
    name: 'Suggest'
  }
</script>

<style scoped>

</style>
