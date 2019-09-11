<template>
  <div class="aw-mod mod-setting-privacy">
    <div class="mod-body">
      <form id="setting_form">
        <div class="aw-mod">
          <div class="mod-head">
            <h3>微博设置</h3>
          </div>
          <div class="mod-body">
            <dl>
              <dt>是否允许别人访问我的微博 :</dt>
              <dd>
                <label><input type="radio" value="1" name="weibo_visit" checked="checked"> 是</label>
                <label><input type="radio" value="0" name="weibo_visit"> 否</label>
              </dd>
            </dl>
          </div>
        </div>
        <div class="aw-mod">
          <div class="mod-head">
            <h3>私信设置</h3>
          </div>
          <div class="mod-body">
            <dl>
              <dt>谁可以给我发私信 :</dt>
              <dd>
                <label><input type="radio" value="0" name="inbox_recv" checked="checked"> 所有人</label>
                <label><input type="radio" value="1" name="inbox_recv"> 我关注的人</label>
              </dd>
            </dl>
          </div>
        </div>

        <div class="aw-mod">
          <div class="mod-head">
            <h3>邮件设置</h3>
          </div>
          <div class="mod-body">
            <dl>
              <dt>什么情况下给我发邮件 :</dt>
              <dd>
                <label>
                  <input name="email_settings[]" value="FOLLOW_ME" type="checkbox"> 当有人关注我
                </label>
                <label>
                  <input name="email_settings[]" value="QUESTION_INVITE" type="checkbox" checked="checked"> 有人邀请我回答问题
                </label>
                <label>
                  <input name="email_settings[]" value="NEW_ANSWER" type="checkbox"> 我关注的问题有了新回复
                </label>
                <label>
                  <input name="email_settings[]" value="NEW_MESSAGE" type="checkbox" checked="checked"> 有人向我发送私信
                </label>
                <label>
                  <input name="email_settings[]" value="QUESTION_MOD" type="checkbox" checked="checked"> 我的问题被编辑
                </label>
              </dd>
            </dl>
          </div>
        </div>

        <div class="aw-mod">
          <div class="mod-head">
            <h3>微信设置</h3>
          </div>
          <div class="mod-body">
            <dl>
              <dt>什么情况下给我发通知 :</dt>
              <dd>
                <label>
                  <input name="weixin_settings[]" value="AT_ME" type="checkbox" checked="checked"> 当有人 @ 我
                </label>
                <label>
                  <input name="weixin_settings[]" value="NEW_ANSWER" type="checkbox" checked="checked"> 我的问题有了新回复
                </label>
                <label>
                  <input name="weixin_settings[]" value="NEW_ARTICLE_ANSWER" type="checkbox" checked="checked">
                  我的文章有了新评论
                </label>
                <label>
                  <input name="weixin_settings[]" value="NEW_COMMENT" type="checkbox" checked="checked"> 我的回复有了新评论
                </label>
                <label>
                  <input name="weixin_settings[]" value="QUESTION_INVITE" type="checkbox" checked="checked"> 有人邀请我回答问题
                </label>
              </dd>
            </dl>
          </div>
        </div>

        <div class="aw-mod">
          <div class="mod-head">
            <h3>通知设置</h3>
          </div>
          <div class="mod-body">
            <dl>
              <dt>什么情况下给我发送通知 :</dt>
              <dd>
                <label>
                  <input name="notification_settings[101]" type="checkbox" value="1" checked="checked"> 有人关注了我
                </label>
                <label>
                  <input name="notification_settings[102]" type="checkbox" value="1" checked="checked"> 我关注的问题有了新的回复
                </label>
                <label>
                  <input name="notification_settings[104]" type="checkbox" value="1" checked="checked"> 有人邀请我回复问题
                </label>
                <label>
                  <input name="notification_settings[106]" type="checkbox" value="1" checked="checked"> 我的问题被评论
                </label>
                <label>
                  <input name="notification_settings[105]" type="checkbox" value="1" checked="checked"> 我的问题评论被回复
                </label>
                <label>
                  <input name="notification_settings[103]" type="checkbox" value="1" checked="checked"> 有问题评论提到我
                </label>
                <label>
                  <input name="notification_settings[116]" type="checkbox" value="1" checked="checked"> 有回答评论提到我
                </label>
                <label>
                  <input name="notification_settings[115]" type="checkbox" value="1" checked="checked"> 有回答提到我
                </label>
                <label>
                  <input name="notification_settings[107]" type="checkbox" value="1" checked="checked"> 我的回复收到赞同
                </label>
                <label>
                  <input name="notification_settings[108]" type="checkbox" value="1" checked="checked"> 我的回复收到感謝
                </label>
                <label>
                  <input name="notification_settings[114]" type="checkbox" value="1" checked="checked"> 我发布的问题收到感謝
                </label>
                <label>
                  <input name="notification_settings[110]" type="checkbox" value="1" checked="checked"> 我的问题被编辑
                </label>
                <label>
                  <input name="notification_settings[113]" type="checkbox" value="1" checked="checked"> 我发布的问题被重定向
                </label>
                <label>
                  <input name="notification_settings[117]" type="checkbox" value="1" checked="checked"> 我的文章被评论
                </label>
                <label>
                  <input name="notification_settings[118]" type="checkbox" value="1" checked="checked"> 有文章评论提到我
                </label>
                <label>
                  <input name="notification_settings[119]" type="checkbox" value="1" checked="checked"> 我的文章被点赞
                </label>
                <label>
                  <input name="notification_settings[1119]" type="checkbox" value="1" checked="checked"> 我的评论被点赞
                </label>
                <label>
                  <input name="notification_settings[150]" type="checkbox" value="1" checked="checked"> 举报认证
                </label>
                <label>
                  <input name="notification_settings[181]" type="checkbox" value="1" checked="checked"> 认证申请审核通过
                </label>
                <label>
                  <input name="notification_settings[182]" type="checkbox" value="1" checked="checked"> 认证申请审核失败
                </label>
              </dd>
            </dl>
          </div>
        </div>
      </form>
    </div>
    <div class="mod-footer clearfix">
      <a href="javascript:;" class="btn btn-large btn-success pull-right">保存</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Privacy'
  }
</script>

<style scoped>

</style>
