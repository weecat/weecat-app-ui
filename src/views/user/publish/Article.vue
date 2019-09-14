<template>
  <div class="row">
    <div class="col-sm-12 col-md-9">
      <form action="http://wenda.wecenter.com/publish/ajax/publish_article/" method="post" id="question_form"
            onsubmit="return false;">
        <input type="hidden" name="post_hash" value="a978004fffde856b7d3331b4af0ae1b4">
        <input type="hidden" name="attach_access_key" value="7149b02300315c0ecb9a45b609950196">
        <input type="hidden" name="article_id" id="article_id" value="">
        <input type="hidden" name="logo_img" value="http://wenda.wecenter.com/static/css/default/img/default-cover.jpg">
        <input type="hidden" name="ssid" value="432573">
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
            <h3><em style="color: red;">*</em>文章标题:</h3>
            <!-- 文章标题 -->
            <div class="aw-publish-title">
              <input style="width: 78%" type="text" name="title" value="" class="form-control">
              <div class="aw-dropdown aw-question-dropdown">
                <i class="aw-icon i-dropdown-triangle active"></i>
                <p class="title">没有找到相关结果</p>
                <ul class="aw-question-dropdown-list"></ul>
              </div>
              <div class="dropdown category">
                <div class="dropdown-toggle" data-toggle="dropdown">
                  <span id="aw-topic-tags-select-category">选择分类</span>
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

            <!-- end 文章标题 -->
            <h3>文章封面:</h3>
            <div class="side-bar">
              <dl>
                <dt class="pull-left">
                  <img class="aw-border-radius-5"
                       src="http://wenda.wecenter.com/static/css/default/img/default-cover.jpg" id="logo_img"
                       style="height: 100px;width: 100px;"></dt>
                <dd class="pull-left">
                  <h5>封面设置</h5>
                  <p>支持 jpg、gif、png 等格式的图片 建议图片尺寸为240*150</p>
                  <a class="btn btn-mini btn-success" id="logo_uploader" href="javascript:;">
                    <form method="post" enctype="multipart/form-data" id="upload-form-logo"
                          class="upload-form" action="http://wenda.wecenter.com/publish/ajax/logo_upload/"
                          target="ajaxUpload">
                      <input type="submit" class="submit">
                      <input type="file" class="file-input" name="aws_upload_file" multiple="multiple" accept="image/*">
                    </form>
                    上传封面
                  </a>
                  <span id="logo_uploading_status" class="collapse"><i class="aw-loading"></i> 文件上传中...</span>
                </dd>
              </dl>
            </div>
            <div class="clearfix"></div>
            <h3>文章内容:</h3>
            <div class="aw-mod aw-editor-box">
              <div class="mod-head">
                <div class="wmd-panel">
                  <vue-wangeditor id="editor" :menus="menus" width="100%" v-model="text"></vue-wangeditor>
                  <!--<textarea style="display: none;" id="wangcontent" rows="15" name="message"></textarea>-->
                </div>
              </div>
              <div class="mod-body">
                <p class="text-color-999">
                  <span class="pull-right text-color-999" id="draft_detail_message">&nbsp;</span>
                </p>
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
              <a id="saveDraft" data-type="article">保存草稿</a>
            </span>
            <a class="btn btn-large btn-success btn-publish-submit">确认发起</a>
          </div>
        </div>
      </form>
    </div>
    <!-- 侧边栏 -->
    <div class="col-sm-12 col-md-3 aw-side-bar hidden-xs">
      <!-- 文章发起指南 -->
      <div class="aw-mod publish-help">
        <div class="mod-head">
          <h3>文章发起指南</h3>
        </div>
        <div class="mod-body">
          <p><b>• 文章标题:</b> 请用准确的语言描述您发布的文章思想</p>
          <p><b>• 文章补充:</b> 详细补充您的文章内容, 并提供一些相关的素材以供参与者更多的了解您所要文章的主题思想</p>
          <p>
            <b>• 选择话题:</b> 选择一个或者多个合适的话题, 让您发布的文章得到更多有相同兴趣的人参与. 所有人可以在您发布文章之后添加和编辑该文章所属的话题
          </p>
        </div>
      </div>
      <!-- end 文章发起指南 -->
    </div>
    <!-- end 侧边栏 -->
  </div>
</template>
<script>
  import vueWangeditor from 'vue-wangeditor'

  export default {
    name: 'Article',
    data() {
      return {
        text: '',
        menus: [
          'source',
          '|',
          'bold',
          'underline',
          'italic',
          'strikethrough',
          'eraser',
          'forecolor',
          'bgcolor',
          '|',
          'quote',
          'fontfamily',
          'fontsize',
          'head',
          'unorderlist',
          'orderlist',
          'alignleft',
          'aligncenter',
          'alignright',
          '|',
          'link',
          'unlink',
          'table',
          'emotion',
          '|',
          'img',
          'video',
          'insertcode',
          '|',
          'undo',
          'redo',
          'fullscreen'
        ]
      }
    },
    components: {
      vueWangeditor
    }
  }
</script>

<style scoped>
  .editor {
    width: 100%;
    margin: 0 auto;
  }
</style>
