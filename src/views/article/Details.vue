<template>
  <div class="aw-container-wrap">
    <div class="container">
      <div class="row">
        <div class="aw-content-wrap clearfix">
          <div class="col-sm-12 col-md-9 aw-main-content aw-article-content">
            <div class="aw-mod aw-topic-bar" id="question_topic_editor" data-type="article" data-id="1548">
              <div class="tag-bar clearfix">
                <span class="topic-tag" data-id="3808">
                  <a class="text" href="http://wenda.wecenter.com/topic/3808">wecenter3.2.1</a>
                </span>
                <span class="topic-tag" data-id="2941">
                  <a class="text" href="http://wenda.wecenter.com/topic/2941">wecenter安装</a>
                </span>
              </div>
            </div>
            <div class="aw-mod aw-question-detail">
              <div class="mod-head">
                <h1>{{article.title}}</h1>
                <input type="hidden" id="share_content" value="">
                <input type="hidden" id="share_url" value="">
                <input type="hidden" id="share_title" value="">
              </div>
              <div class="mod-body">
                <div class="content markitup-box" v-html="article.message"></div>
                <div style="text-align: center;">
                  <p>
                    <a href="javascript:void(0)" class="dashang" title="打赏，支持一下">打赏</a>
                  </p>
                  <div class="WB_face fend_app_reward_persons">
                    <ul class="fend_app_reward_persons_real">
                      <div style="clear: both;"></div>
                    </ul>
                  </div>
                </div>
                <div class="meta clearfix">
                  <div class="aw-article-vote pull-left">
                    <a href="javascript:;" class="agree">
                      <i class="icon icon-agree"></i> <b>4</b>
                    </a>
                    <a href="javascript:;" class="disagree">
                      <i class="icon icon-disagree"></i>
                    </a>
                  </div>
                  <span class="pull-right  more-operate">
                    <a href="javascript:;" class="text-color-999"><i class="icon icon-favor"></i> 收藏</a>
                    <a class="text-color-999 dropdown-toggle" data-toggle="dropdown" id="article_share">
                      <i class="icon icon-share"></i> 分享
                    </a>
                    <div class="aw-dropdown shareout pull-right bdsharebuttonbox bdshare-button-style0-16">
                        <ul class="aw-dropdown-list">
                            <li><a href="#" class="bds_weixin" title="分享到微信"> 微信</a></li>
                            <li><a href="#" class="bds_sqq" title="分享到QQ"> QQ</a></li>
                            <li><a href="#" class="bds_tsina" title="分享到新浪微博"> 微博</a></li>
                            <li><a href="#" class="bds_qzone" title="分享到QQ空间"> 空间</a></li>
                        </ul>
                    </div>
                    <a href="javascript:;" class="text-color-999">
                      <i class="icon icon-report"></i>举报
                    </a>
                    <em class="text-color-999">2018-06-28</em>
                </span>
                </div>

              </div>
              <div class="mod-footer">
                <div class="aw-article-voter">
                  <a href="/people/45394" class="voter" data-toggle="tooltip"
                     data-placement="right" data-original-title="文晓港">
                    <img alt="文晓港" src="http://wenda.wecenter.com/uploads/avatar/000/04/53/94_avatar_mid.jpg">
                  </a>
                  <a href="/people/22184" class="voter" data-toggle="tooltip"
                     data-placement="right" data-original-title="®原生泰">
                    <img alt="®原生泰" src="http://wenda.wecenter.com/uploads/avatar/000/02/21/84_avatar_mid.jpg">
                  </a>
                  <a href="/people/21511" class="voter" data-toggle="tooltip"
                     data-placement="right" data-original-title="潇傻">
                    <img alt="潇傻" src="http://wenda.wecenter.com/uploads/avatar/000/02/15/11_avatar_mid.jpg">
                  </a>
                  <a href="/people/26346" class="voter" data-toggle="tooltip"
                     data-placement="right" data-original-title="爱宠">
                    <img alt="爱宠" src="http://thirdqq.qlogo.cn/g?b=oidb&amp;k=5iaticC5xibhujSabuiagp3TRw&amp;s=100">
                  </a>
                  <!--<a class="more-voters">...</a>-->
                </div>

              </div>
            </div>

            <!-- 文章评论 -->
            <div class="aw-mod">
              <div class="mod-head common-head">
                <h2>1 个评论</h2>
              </div>

              <div class="mod-body aw-feed-list">
                <div class="aw-item" id="answer_list_2513">
                  <div class="mod-head">
                    <a class="aw-user-img aw-border-radius-5" href="http://wenda.wecenter.com/people/21511">
                      <img src="http://wenda.wecenter.com/uploads/avatar/000/02/15/11_avatar_mid.jpg" alt="潇傻">
                    </a>
                    <p>
                      <a href="http://wenda.wecenter.com/people/21511">潇傻</a></p>
                  </div>
                  <a class="anchor" name="answer_2513"></a>
                  <div class="mod-body">
                    <div class="markitup-box">
                      谢谢 。。。 刚好遇到这问题。
                    </div>
                  </div>
                  <div class="mod-footer">
                    <div class="meta">
                      <span class="pull-right text-color-999">2018-07-09 02:02</span>
                      <a class="text-color-999 "><i class="icon icon-agree"></i> 1 赞</a>
                      <a class="aw-article-comment text-color-999" data-id="21511"><i class="icon icon-comment"></i> 回复</a>
                      <a href="javascript:;" class="text-color-999"><i class="icon icon-report"></i>举报</a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <!-- end 文章评论 -->

            <!-- 回复编辑器 -->
            <div class="aw-mod aw-article-replay-box">
              <a name="answer_form"></a>
              <form>
                <input type="hidden" name="post_hash" value="f4f75b1dfda834cd1c9d9cb941932218">
                <input type="hidden" name="article_id" value="1548">
                <div class="mod-head">
                  <a href="http://wenda.wecenter.com/people/" class="aw-user-name">
                    <img alt="mycms2013" src="http://wenda.wecenter.com/uploads/avatar/000/01/11/29_avatar_mid.jpg">
                  </a>
                </div>
                <div class="mod-body">
                  <textarea rows="3" class="form-control autosize" placeholder="写下你的评论..."
                            style="overflow: hidden; overflow-wrap: break-word; resize: none; height: 74px;">
                  </textarea>
                </div>
                <div class="mod-footer clearfix">
                  <a href="javascript:;" class="btn btn-normal btn-success pull-right btn-submit btn-reply">回复</a>
                </div>
              </form>
            </div>
            <!-- end 回复编辑器 -->
          </div>
          <!-- 侧边栏 -->
          <div class="col-sm-12 col-md-3 aw-side-bar hidden-sm hidden-xs">
            <!-- 发起人 -->
            <div class="aw-mod user-detail">
              <div class="mod-head">
                <h3>发起人</h3>
              </div>
              <div class="mod-body">
                <dl>
                  <dt class="pull-left aw-border-radius-5">
                    <a href="http://wenda.wecenter.com/people/42829">
                      <img alt="fanta" src="http://wenda.wecenter.com/uploads/avatar/000/04/28/29_avatar_mid.jpg">
                    </a>
                  </dt>
                  <dd class="pull-left">
                    <a class="aw-user-name" href="http://wenda.wecenter.com/people/42829" data-id="42829">fanta</a>
                    <i class="icon-v" title="个人认证"></i>
                    <a class="icon-inverse follow tooltips icon icon-plus"></a>
                    <p>有问题请加qq270294661 建站请保留WeCenter版权信息和链接</p>
                  </dd>
                </dl>
              </div>
              <div class="mod-footer clearfix">
                <div class="aw-topic-bar">
                  <div class="topic-bar clearfix">
                    <span class="pull-left text-color-999">
                        擅长话题 : &nbsp;
                    </span>
                    <span class="topic-tag">
                      <a href="http://wenda.wecenter.com/topic/5" class="text" data-id="5">bug</a>
                    </span>
                    <span class="topic-tag">
                      <a href="http://wenda.wecenter.com/topic/2078" class="text" data-id="2078">wecenter</a>
                    </span>
                    <span class="topic-tag">
                      <a href="http://wenda.wecenter.com/topic/19" class="text" data-id="19">反馈</a>
                    </span>
                    <span class="topic-tag">
                      <a href="http://wenda.wecenter.com/topic/68" class="text" data-id="68">插件</a>
                    </span>
                    <span class="topic-tag">
                      <a href="http://wenda.wecenter.com/topic/82" class="text" data-id="82">模板</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <!-- end 发起人 -->

            <!-- 推荐内容 -->
            <div class="aw-mod">
              <div class="mod-head">
                <h3>推荐内容</h3>
              </div>
              <div class="mod-body font-size-12">
                <ul>
                  <li>
                    <a href="http://wenda.wecenter.com/article/1591">修正版3.2.2发布</a>
                  </li>
                  <li>
                    <a href="http://wenda.wecenter.com/article/1534">3.2.1版本发布--3.2.0版本Bugfix（附更新文件说明）</a>
                  </li>
                </ul>
              </div>
            </div>
            <!-- end 推荐内容 -->

            <!-- 相关问题 -->
            <div class="aw-mod aw-text-align-justify question-related-list">
              <div class="mod-head">
                <h3>相关问题</h3>
              </div>
              <div class="mod-body font-size-12">
                <ul>
                  <li><a href="http://wenda.wecenter.com/question/1576">请问所有代码都是由一个人独立完成的?</a></li>
                  <li><a href="http://wenda.wecenter.com/question/19727">如果把话题当做一个可以扩展的模型，哪些模型类型可能常用？</a></li>
                  <li><a href="http://wenda.wecenter.com/question/2909">1.1 版模板基本处理完成, 已经进入 JS 重构阶段, 发个截图</a></li>
                </ul>
              </div>
            </div>
            <!-- end 相关问题 -->
          </div>
          <!-- end 侧边栏 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ArticlesApi from '@/api/ArticlesApi'

  export default {
    name: 'ArticleDetails',
    data() {
      return {
        id: '',
        article: {}
      }
    },
    created() {
      this.id = this.$route.params.id
      this.getArticle()
    },
    methods: {
      getArticle() {
        ArticlesApi.getDetails(this.id).then(result => {
          this.article = result.data
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
</script>

<style scoped>

</style>
