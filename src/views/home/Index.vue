<template>
  <div class="aw-container-wrap">
    <div class="container">
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
                  <template v-for="question in questions">
                    <div v-bind:key="question.question_id" class="aw-item " data-topic-id="78,2078,3851,3792,">
                      <a class="aw-user-name hidden-xs" href="/people/45510" rel="nofollow">
                        <img :src="'http://wenda.wecenter.com'+question.user_info.avatar">
                        <template v-if="question.user_info.verified==='enterprise'">
                          <i class="icon icon-v i-ve"></i>
                        </template>
                        <template v-else>
                          <i class="icon icon-v"></i>
                        </template>
                      </a>
                      <div class="aw-question-content">
                        <h4>
                          <a :href="'/question/'+question.question_id">{{question.question_content}}</a>
                        </h4>
                        <div class="pull-right hidden-xs contribute">
                          <span class="pull-right text-color-999">贡献</span>
                          <template v-for="user in question.answer_users">
                            <a v-bind:key="user.uid" class="aw-user-name" :href="'/people/'+user.uid" rel="nofollow">
                              <img :src="'http://wenda.wecenter.com'+user.avatar" alt="">
                            </a>
                          </template>
                        </div>
                        <p>
                          <a class="aw-question-tags" href="http://wenda.wecenter.com/explore/category-2">WeCenter
                            程序</a>
                          <a href="/people/50813" class="aw-user-name">{{question.user_info.user_name}}</a>
                          <span class="text-color-999">
                            回复了问题 14 人关注 • {{question.comments}} 个回复  {{question.views}} 次浏览  {{question.add_time}}
                          </span>
                          <span class="text-color-999 related-topic collapse"> 来自相关话题</span>
                        </p>
                      </div>
                    </div>
                  </template>
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
                <a href="/topic/channel-hot" class="pull-right">更多 &gt;</a>
                <h3>热门话题</h3>
              </div>
              <div class="mod-body">
                <template v-for="topic in hotTopics">
                  <dl v-bind:key="topic.topic_id">
                    <dt class="pull-left aw-border-radius-5">
                      <a :href="'/topic/'+topic.topic_id">
                        <img :src="'http://wenda.wecenter.com'+topic.topic_pic">
                      </a>
                    </dt>
                    <dd class="pull-left">
                      <p class="clearfix">
                      <span class="topic-tag">
                        <a :href="'/topic/'+topic.topic_id" class="text" data-id="2078">{{topic.topic_title}}</a>
                      </span>
                      </p>
                      <p><b>{{topic.discuss_count}}</b> 个问题, <b>{{topic.focus_count}}</b> 人关注</p>
                    </dd>
                  </dl>
                </template>
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
  import TopicsApi from '@/api/TopicsApi'
  import PostsApi from '@/api/PostsApi'

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
        questions: [],
        hotTopics: [],
        hotUsers: []
      }
    },
    created() {
      this.getExplore()
      this.getHotUsers()
      this.getHotTopics()
    },
    methods: {
      getExplore() {
        let data = {}
        PostsApi.getExplore(data).then(result => {
          this.questions = result.data.list
        }).catch(err => {
          console.log(err)
        })
      },
      getHotUsers() {
        let data = {}
        UsersApi.getHotUsers(data).then(result => {
          this.hotUsers = result.data.list
        }).catch(err => {
          console.log(err)
        })
      },
      getHotTopics() {
        let data = {}
        TopicsApi.getHotTopics(data).then(result => {
          this.hotTopics = result.data.list
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
</script>

<style scoped>

</style>
