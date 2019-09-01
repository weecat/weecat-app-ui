<template>
  <div class="aw-mod aw-question-comment">
    <div class="mod-head">
      <ul class="nav nav-tabs aw-nav-tabs active">

        <h2 class="hidden-xs">1 个回复</h2>
      </ul>
    </div>
    <div class="mod-body aw-feed-list">
      <div class="aw-item" uninterested_count="0" force_fold="0" id="answer_list_50526">
        <div class="mod-head">
          <!-- 最佳回答 -->
          <div class="aw-best-answer">
            <i class="icon icon-bestbg"></i>
          </div>
          <!-- end 最佳回答 -->
          <a class="anchor" name="answer_50526"></a>
          <!-- 用户头像 -->
          <a class="aw-user-img aw-border-radius-5" href="http://wenda.wecenter.com/people/16547" data-id="16547"><img src="http://wenda.wecenter.com/uploads/avatar/000/01/65/47_avatar_mid.jpg" alt=""></a>										<!-- end 用户头像 -->
          <div class="title">
            <p>
              <a class="aw-user-name" href="http://wenda.wecenter.com/people/16547" data-id="16547">lekuhu</a>
              <i class="icon-v" title="个人认证"></i>
              - <span class="text-color-999">查成绩网站长</span>																																			</p>
            <p class="text-color-999 aw-agree-by">
              赞同来自:
              <a href="http://wenda.wecenter.com/people/45510" data-id="45510" class="aw-user-name">xiubao</a>																							</p>
          </div>
        </div>
        <div class="mod-body clearfix">
          <!-- 评论内容 -->
          <div class="markitup-box">
            <p>能不能便宜点，整一个团购价格啊</p>
          </div>
          <!-- end 评论内容 -->
        </div>
        <div class="mod-footer">
          <!-- 社交操作 -->
          <div class="meta clearfix">
            <span class="text-color-999 pull-right">4 天前</span>
            <span class="operate">
              <a style="color: red;cursor: pointer;" class="agree disabled " onclick="gopay(50526,'lekuhu','16547');">
                <img style="margin-bottom: 5px;" src="@/assets/css/default/img/shang.png" width="23" title="打赏">
              </a>
            </span>
            <!-- 投票栏 -->
            <span class="operate">
												<a class="agree  disabled"><i data-placement="right" title="" data-toggle="tooltip" class="icon icon-agree" data-original-title="赞同回复"></i> <b class="count">1</b></a>
																							</span>
            <!-- end 投票栏 -->
            <span class="operate">
												<a class="aw-add-comment active" data-id="50526" data-type="answer" data-comment-count="1" data-first-click="" href="javascript:;"><i class="icon icon-comment"></i> 1</a>
											</span>
            <!-- 可显示/隐藏的操作box -->
            <div class="more-operate">

              <div class="btn-group pull-left">
                <a class="text-color-999 dropdown-toggle" data-toggle="dropdown" answer_id="50526" onclick="question_comment_share(this)">
                  <i class="icon icon-share"></i> 分享													</a>
                <div class="aw-dropdown shareout pull-right bdsharebuttonbox bdshare-button-style0-16" style="width: 0;" data-bd-bind="1567311247946">
                  <ul class="aw-dropdown-list">
                    <li><a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信"> 微信</a></li>
                    <li><a href="#" class="bds_sqq" data-cmd="sqq" title="分享到QQ"> QQ</a></li>
                    <li><a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"> 微博</a></li>
                    <li><a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"> 空间</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- end 可显示/隐藏的操作box -->
          </div>
          <!-- end 社交操作 -->
          <div class="aw-comment-box" id="aw-comment-box-answer-50526"><div class="aw-comment-list"><ul>
            <li>
              <a class="aw-user-name" href="http://wenda.wecenter.com/people/49009" data-id="49009">
                <img src="http://wenda.wecenter.com/uploads/avatar/000/04/90/09_avatar_min.jpg" alt="">
              </a>
              <div>
                <p class="clearfix">
                  <a href="http://wenda.wecenter.com/people/49009" class="aw-user-name author" data-id="49009">一花一木</a>
                  •<span>4 天前</span>
                </p>
                <p class="clearfix">这还不便宜么？不要打击了开发者的热情啊</p>
              </div>
            </li>
          </ul>
          </div></div></div>
      </div>
    </div>
    <div class="mod-footer">
      <div class="aw-load-more-content collapse" id="load_uninterested_answers">
        <span class="text-color-999 aw-alert-box text-color-999" href="javascript:;" tabindex="-1" onclick="AWS.alert('被折叠的回复是被你或者被大多数用户认为没有帮助的回复');">为什么被折叠?</span>
        <a href="javascript:;" class="aw-load-more-content"><span class="hide_answers_count">0</span> 个回复被折叠</a>
      </div>
      <div class="collapse aw-feed-list" id="uninterested_answers_list"></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Comment'
    }
</script>

<style scoped>

</style>
