<template>
  <div class="aw-container-wrap">
    <div class="container">
      <div class="row">
        <div class="aw-content-wrap clearfix">
          <div class="col-sm-12 col-md-9 aw-main-content">
            <!-- 话题推荐bar -->
            <!-- 话题推荐bar -->
            <!-- 话题bar -->
            <div class="aw-mod aw-topic-bar" id="question_topic_editor" data-type="question" data-id="32610">
              <div class="tag-bar clearfix">
														<span class="topic-tag" data-id="124">
								<a href="http://wenda.wecenter.com/topic/124" class="text">升级</a>
							</span>
                <span class="topic-tag" data-id="116">
								<a href="http://wenda.wecenter.com/topic/116" class="text">知乎</a>
							</span>
                <span class="topic-tag" data-id="82">
								<a href="http://wenda.wecenter.com/topic/82" class="text">模板</a>
							</span>

              </div>
            </div>
            <!-- end 话题bar -->
            <div class="aw-mod aw-question-detail aw-item">
              <div class="mod-head">

                <h1>
                  <!-- 							 -->
                  【模板升级】WeCenter仿知乎模板完美支持最新3.33版本 </h1>

                <input type="hidden" id="share_content" value="">
                <input type="hidden" id="share_url" value="">
                <input type="hidden" id="share_title" value="">
              </div>

              <div class="mod-body">
                <div class="content markitup-box">
                  <p>其实很早就看到3.33版本发布了，只是在等稳定些再下载测试。</p>
                  <p>今天终于下载安装进行了知乎模板的测试升级，很完美，完全支持3.33。</p>
                  <p>具体效果请看演示站：<a href="http://azhihu.cssroom.com/" target="_blank"
                                  style="background-color: rgb(255, 255, 255);">http://azhihu.cssroom.com/</a></p>
                  <p>升级包已上传至官方应用市场：<a
                    href="http://market.wecenter.com/index.php?m=content&amp;c=index&amp;a=show&amp;catid=6&amp;id=44"
                    target="_blank" style="background-color: rgb(255, 255, 255);">http://market.wecenter.com/index.php?m=content&amp;c=index&amp;a=show&amp;catid=6&amp;id=44</a>
                  </p>
                  <p>==============</p>
                  <p>
                    多说一句：老用户请根据自身网站需求进行升级，一定要清楚了解网站的升级方法再操作。我今天在本地测试，最初覆盖3.33程序后，是出现500错误的，当然我是解决了；然后再放心的进行线上演示站的升级。——这跟模板一点关系都没有的，请一定要分清“程序”和“模板”的不同“职责”。</p>
                  <p><br></p>
                  <p></p>
                  <div class="aw-upload-img-list active">
                    <a href="#" target="_blank" data-fancybox-group="thumb" rel="lightbox">
                      <img src="http://wenda.wecenter.com/uploads/question/20190827/a1e0e32459e9839d0e956e2f517ecfc5.jpg" class="img-polaroid"></a>
                  </div>
                  <br>
                  <p></p>
                  <p><br></p>
                  <p><br></p>
                </div>
              </div>

              <div class="mod-footer">
                <div class="meta">
                  <span class="text-color-999">5 天前</span>
                  <a data-id="32610" data-type="question" class="aw-add-comment text-color-999 " data-comment-count="0"><i
                    class="icon icon-comment"></i>添加评论</a>
                </div>
              </div>
              <!-- 站内邀请 -->
              <div class="aw-invite-box collapse" style="display: none;">
                <div class="mod-head clearfix">
                  <div class="search-box pull-left">
                    <input id="invite-input" class="form-control" type="text" placeholder="搜索你想邀请的人...">
                    <div class="aw-dropdown">
                      <p class="title">没有找到相关结果</p>
                      <ul class="aw-dropdown-list"></ul>
                    </div>
                    <i class="icon icon-search"></i>
                  </div>
                  <div class="invite-list pull-left collapse">
                    已邀请:
                  </div>
                </div>
              </div>
              <!-- end 站内邀请 -->
              <!-- 相关链接 -->
              <div class="aw-question-related-box collapse" style="display: none;">
                <form action="http://wenda.wecenter.com/publish/ajax/save_related_link/" method="post"
                      onsubmit="return false" id="related_link_form">
                  <div class="mod-head">
                    <h2>与内容相关的链接</h2>
                  </div>
                  <div class="mod-body clearfix">
                    <input type="hidden" name="item_id" value="32610">
                    <input type="text" class="form-control pull-left " name="link" value="">

                    <a onclick="AWS.ajax_post($('#related_link_form',function(){ window.location.reload();}));"
                       class="pull-left btn btn-success">提交</a>
                  </div>
                </form>
              </div>
              <!-- end 相关链接 -->
            </div>

            <Comment></Comment>
            <!-- end 问题详细模块 -->
            <!-- 回复编辑器 -->
            <div class="aw-mod aw-replay-box question">
              <a name="answer_form"></a>
              <p align="center">要回复问题请先<a href="http://wenda.wecenter.com/login/">登录</a>或<a
                href="http://wenda.wecenter.com/account/register/">注册</a></p>
            </div>
            <!-- end 回复编辑器 -->
          </div>
          <!-- 侧边栏 -->
          <Sidebar/>
          <!-- end 侧边栏 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Sidebar from './Sidebar'
  import Comment from './Comment'

  export default {
    name: 'Index',
    components: {Sidebar, Comment}
  }
</script>

<style scoped>

</style>
