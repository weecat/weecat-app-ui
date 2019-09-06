<template>
  <div class="aw-container-wrap">
    <div class="container">
      <div class="container category">
        <div class="row">
          <div class="col-sm-12">
            <ul class="list">
              <li class="active"><a href="/explore/">全部</a></li>
              <li>
                <a href="/explore/category-2">WeCenter 程序</a>
              </li>
              <li>
                <a href="/explore/category-3">建站运营</a>
              </li>
              <li>
                <a href="/explore/category-9">公告</a>
              </li>
              <li>
                <a href="/explore/category-10">建议</a>
              </li>
              <li>
                <a href="/consult/piazza/" target="_blank">咨询广场</a>
              </li>
              <li>
                <a href="http://market.wecenter.com" target="_blank">应用市场</a>
              </li>
              <li>
                <a href="/explore/category-5">问与答</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="aw-content-wrap clearfix">
          <div class="col-sm-12 col-md-9 aw-main-content">
            <!-- 新消息通知 -->
            <div class="aw-mod aw-notification-box collapse" id="index_notification">
              <div class="mod-head common-head">
                <h2>
                  <span class="pull-right">
                    <a href="/setting/privacy/#notifications" class="text-color-999">
                      <i class="icon icon-setting"/> 通知设置
                    </a>
                  </span>
                  <i class="icon icon-bell"/>新通知
                  <em class="badge badge-important" name="notification_unread_num"/>
                </h2>
              </div>
              <div class="mod-body">
                <ul id="notification_list"></ul>
              </div>
              <div class="mod-footer clearfix">
                <a href="javascript:;" onclick="AWS.Message.read_notification(false, 0, false);"
                   class="pull-left btn btn-mini btn-gray">我知道了</a>
                <a href="/notifications/" class="pull-right btn btn-mini btn-success">查看所有</a>
              </div>
            </div>
            <!-- end 新消息通知 -->
            <!-- tab切换 -->
            <ul class="nav nav-tabs aw-nav-tabs active hidden-xs">
              <li><a href="/sort_type-unresponsive">等待回复</a></li>
              <li><a href="/is_recommend-1">推荐</a></li>
              <li><a href="/sort_type-hot__day-7" id="sort_control_hot">热门</a></li>
              <li class="active"><a href="/">最新</a></li>
              <li><a href="/is_reward-1">悬赏</a></li>
              <h2 class="hidden-xs"><i class="icon icon-list"></i> 发现</h2>
            </ul>
            <!-- end tab切换 -->
            <div class="aw-mod aw-explore-list">
              <div class="mod-body">
                <div class="aw-common-list">
                  <div class="aw-item " data-topic-id="78,2078,3851,3792,">
                    <a class="aw-user-name hidden-xs" href="/people/45510" rel="nofollow">
                      <img src="http://wenda.wecenter.com/uploads/avatar/000/04/55/10_avatar_max.jpg" alt="">
                      <i class="icon icon-v"></i>
                    </a>
                    <div class="aw-question-content">
                      <h4>
                        <a href="http://wenda.wecenter.com/question/32565">WeCenter官网小程序发布，欢迎大家试用吐槽.....</a>
                        <span
                          style="font-style: normal; background: #FF7F00; color: #ffffff; font-size: 12px;  padding: 2px 8px; border-radius: 3px;">
                          置顶
                        </span>
                      </h4>
                      <div class="pull-right hidden-xs contribute">
                        <span class="pull-right text-color-999">贡献</span>
                        <a class="aw-user-name" href="/people/2" rel="nofollow">
                          <img src="http://wenda.wecenter.com/uploads/avatar/000/00/00/02_avatar_mid.jpg" alt="">
                        </a>
                        <a class="aw-user-name" href="http://wenda.wecenter.com/people/17117" rel="nofollow">
                          <img src="http://wenda.wecenter.com/uploads/avatar/000/01/71/17_avatar_mid.jpg" alt=""></a>
                      </div>
                      <p>
                        <a class="aw-question-tags" href="http://wenda.wecenter.com/explore/category-2">WeCenter 程序</a>
                        • <a href="http://wenda.wecenter.com/people/50813" class="aw-user-name" data-id="50813">cc碳子</a>
                        <span
                          class="text-color-999">回复了问题 • 14 人关注 • 11 个回复 • 1649 次浏览 • 2019-08-18 15:27</span>
                        <span class="text-color-999 related-topic collapse"> • 来自相关话题</span>
                      </p>
                    </div>
                  </div>
                  <div class="aw-item " data-topic-id="2078,3853,">
                    <a class="aw-user-name hidden-xs" href="/people/45510" rel="nofollow">
                      <img src="http://wenda.wecenter.com/uploads/avatar/000/04/55/10_avatar_max.jpg" alt="">
                      <i class="icon icon-v"></i>
                    </a>
                    <div class="aw-question-content">
                      <h4>
                        <a href="http://wenda.wecenter.com/question/32569">WeCenter3.3.3版本发布...</a>
                        <span
                          style="font-style: normal; background: #FF7F00; color: #ffffff; font-size: 12px;  padding: 2px 8px; border-radius: 3px;">
                          置顶
                        </span>
                      </h4>
                      <div class="pull-right hidden-xs contribute">
                        <span class="pull-right text-color-999">贡献</span>
                        <a class="aw-user-name" data-id="44836" href="http://wenda.wecenter.com/people/44836"
                           rel="nofollow">
                          <img src="http://wenda.wecenter.com/static/common/avatar-mid-img.png" alt=""></a>
                        <a class="aw-user-name" data-id="50629" href="http://wenda.wecenter.com/people/50629"
                           rel="nofollow">
                          <img src="http://wenda.wecenter.com/uploads/avatar/000/05/06/29_avatar_mid.jpg" alt="">
                        </a>
                      </div>
                      <p>
                        <a class="aw-question-tags" href="/explore/category-2">WeCenter 程序</a>
                        • <a href="/people/3583" class="aw-user-name" data-id="3583">小宾</a>
                        <span class="text-color-999">回复了问题 • 18 人关注 • 14 个回复 • 1383 次浏览 • 6 天前</span>
                        <span class="text-color-999 related-topic collapse"> • 来自相关话题</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mod-footer">
                <div class="page-control">
                  <ul class="pagination pull-right">
                    <li class="active"><a href="javascript:;">1</a></li>
                    <li><a href="http://wenda.wecenter.com/sort_type-new__day-0__is_recommend-0__page-2">2</a></li>
                    <li><a href="http://wenda.wecenter.com/sort_type-new__day-0__is_recommend-0__page-3">3</a></li>
                    <li><a href="http://wenda.wecenter.com/sort_type-new__day-0__is_recommend-0__page-4">4</a></li>
                    <li><a href="http://wenda.wecenter.com/sort_type-new__day-0__is_recommend-0__page-2">&gt;</a></li>
                    <li><a href="http://wenda.wecenter.com/sort_type-new__day-0__is_recommend-0__page-2762">&gt;&gt;</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- 侧边栏 -->
          <div class="col-sm-12 col-md-3 aw-side-bar hidden-xs hidden-sm">
            <div class="aw-mod aw-text-align-justify">
              <div class="mod-head">
                <a href="http://wenda.wecenter.com/topic/channel-hot" class="pull-right">更多 &gt;</a>
                <h3>热门话题</h3>
              </div>
              <div class="mod-body">
                <dl>
                  <dt class="pull-left aw-border-radius-5">
                    <a href="http://wenda.wecenter.com/topic/2078">
                      <img alt=""
                           src="http://wenda.wecenter.com/uploads/topic/20130426/8af6e6165dbba47be9a1f4374f9e0c92_50_50.png">
                    </a>
                  </dt>
                  <dd class="pull-left">
                    <p class="clearfix">
                      <span class="topic-tag">
                        <a href="http://wenda.wecenter.com/topic/2078" class="text" data-id="2078">wecenter</a>
                      </span>
                    </p>
                    <p><b>1089</b> 个问题, <b>479</b> 人关注</p>
                  </dd>
                </dl>
                <dl>
                  <dt class="pull-left aw-border-radius-5">
                    <a href="http://wenda.wecenter.com/topic/5">
                      <img
                        src="http://wenda.wecenter.com/uploads/topic/20141017/351c5c209f031176b2febc73b0d07eae_50_50.png">
                    </a>
                  </dt>
                  <dd class="pull-left">
                    <p class="clearfix">
                      <span class="topic-tag">
                        <a href="http://wenda.wecenter.com/topic/5" class="text" data-id="5">bug</a>
                      </span>
                    </p>
                    <p><b>1846</b> 个问题, <b>537</b> 人关注</p>
                  </dd>
                </dl>
                <dl>
                  <dt class="pull-left aw-border-radius-5">
                    <a href="http://wenda.wecenter.com/topic/9">
                      <img src="http://wenda.wecenter.com/uploads/topic/20120618/133998172218_50_50.jpg">
                    </a>
                  </dt>
                  <dd class="pull-left">
                    <p class="clearfix">
                      <span class="topic-tag">
                        <a href="http://wenda.wecenter.com/topic/9" class="text" data-id="9">功能</a>
                      </span>
                    </p>
                    <p><b>259</b> 个问题, <b>93</b> 人关注</p>
                  </dd>
                </dl>
                <dl>
                  <dt class="pull-left aw-border-radius-5">
                    <a href="http://wenda.wecenter.com/topic/145">
                      <img src="http://wenda.wecenter.com/static/common/topic-mid-img.png">
                    </a>
                  </dt>
                  <dd class="pull-left">
                    <p class="clearfix">
                    <span class="topic-tag">
                      <a href="http://wenda.wecenter.com/topic/145" class="text" data-id="145">新版本</a>
                    </span>
                    </p>
                    <p><b>138</b> 个问题, <b>46</b> 人关注</p>
                  </dd>
                </dl>
                <dl>
                  <dt class="pull-left aw-border-radius-5">
                    <a href="http://wenda.wecenter.com/topic/4">
                      <img src="http://wenda.wecenter.com/uploads/topic/20120614/133963648400_50_50.jpg">
                    </a>
                  </dt>
                  <dd class="pull-left">
                    <p class="clearfix">
                      <span class="topic-tag">
                        <a href="http://wenda.wecenter.com/topic/4" class="text" data-id="4">ucenter</a>
                      </span>
                    </p>
                    <p><b>192</b> 个问题, <b>106</b> 人关注</p>
                  </dd>
                </dl>
              </div>
            </div>
            <div class="aw-mod aw-text-align-justify">
              <div class="mod-head">
                <a href="http://wenda.wecenter.com/people/" class="pull-right">更多 &gt;</a>
                <h3>热门用户</h3>
              </div>
              <div class="mod-body">
                <template v-for="user in hotUsers">
                  <dl v-bind:key="user.userId">
                    <dt class="pull-left aw-border-radius-5">
                      <a :href="'/people/15613'+user.userId">
                        <img :src="'http://wenda.wecenter.com'+user.avatar"></a>
                    </dt>
                    <dd class="pull-left">
                      <a :href="'/people/15613'+user.userId" class="aw-user-name">{{user.user_name}}
                        <template v-if="user.verified==='enterprise'">
                          <i class="icon-v i-ve" title="企业认证"></i>
                        </template>
                        <template v-else>
                          <i class="icon-v" title="个人认证"></i>
                        </template>
                      </a>
                      <p class="signature"></p>
                      <p>
                        <b>{{user.answer_count}}</b> 个问题,
                        <b>{{user.agree_count}}</b> 次赞同
                      </p>
                    </dd>
                  </dl>
                </template>
              </div>
            </div>
          </div>
          <!-- end 侧边栏 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import UsersApi from '@/api/UsersApi'

  export default {
    name: 'Index',
    data() {
      return {
        content: [{
          'question_id': '1',
          'question_content': '',
          'add_time': '',
          'update_time': '',
          'answer_count': '',
          'agree_count': ''
        }],
        hotUsers: []
      }
    },
    created() {
      this.getHotUsers()
    },
    methods: {
      getHotUsers() {
        let data = {}
        UsersApi.getHotUsers(data).then(result => {
          this.hotUsers = result.data.list
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
</script>

<style scoped>

</style>
