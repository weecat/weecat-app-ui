<template>
  <div class="container">
    <div class="row">
      <div class="aw-content-wrap clearfix">
        <div class="col-sm-12 col-md-9 aw-main-content">
          <div class="aw-mod aw-inbox">
            <div class="mod-head common-head">
              <h2>
                <a href="javascript:;" class="pull-right btn btn-mini btn-success">新私信</a>
                <span class="pull-right aw-setting-inbox hidden-xs">
                  <a class="text-color-999" href="http://wenda.wecenter.com/setting/privacy/#!inbox">
                    <i class="icon icon-setting"></i> 私信设置
                  </a>
                </span>
                私信
              </h2>
            </div>
            <div class="mod-body aw-feed-list">
              <template v-for="inbox in inboxList">
                <div v-bind:key="inbox.id" class="aw-item">
                  <div class="mod-head">
                    <a class="aw-user-img aw-border-radius-5 hidden-xs" href="/people/11129">
                      <img :src="'http://wenda.wecenter.com/'+inbox.user_info.avatar" alt="">
                    </a>
                    <p>
                      <a class="aw-user-name" href="/people/11129">
                        {{inbox.user_info.username}}
                      </a>
                    </p>
                    <p class="content">
                      <a href="/read/138017">
                        {{inbox.last_message}}.
                      </a>
                    </p>
                    <p class="text-color-999">
                    <span class="pull-right">
                      <a href="/inbox/read/138017">共{{inbox.count}}.条对话</a> &nbsp;
                      <a href="javascript:void(0);" class="text-color-999">删除</a>
                    </span>
                      <span>{{inbox.update_time}}</span>
                    </p>
                  </div>
                </div>
              </template>
            </div>
            <div class="mod-footer">
            </div>
          </div>
        </div>
        <!-- 侧边栏 -->
        <div class="col-sm-12 col-md-3 aw-side-bar hidden-xs hidden-sm">
          <div class="aw-mod side-nav">
            <div class="mod-body">
              <ul>
                <li><a href="http://wenda.wecenter.com/home/#all" rel="all"><i class="icon icon-home"></i>最新动态</a></li>
                <li><a href="http://wenda.wecenter.com/home/#draft_list__draft" rel="draft_list__draft"><i
                  class="icon icon-draft"></i>我的草稿</a></li>
                <li><a href="http://wenda.wecenter.com/favorite/"><i class="icon icon-favor"></i>我的收藏</a></li>
                <li><a href="http://wenda.wecenter.com/home/#all__focus" rel="all__focus"><i
                  class="icon icon-check"></i>我关注的问题</a></li>
                <li><a href="http://wenda.wecenter.com/home/#focus_topic__focus" rel="focus_topic__focus"><i
                  class="icon icon-mytopic"></i>我关注的话题</a></li>
                <li><a href="http://wenda.wecenter.com/home/#focus_column__focus" rel="focus_column__focus"><i
                  class="icon icon-mytopic"></i>我关注的专栏</a></li>
                <li><a href="http://wenda.wecenter.com/home/#invite_list__invite" rel="invite_list__invite"><i
                  class="icon icon-invite"></i>邀请我回复的问题</a></li>
                <li><a href="http://wenda.wecenter.com/home/#initiated_consultation" rel="initiated_consultation"><i
                  class="icon icon-mytopic"></i>我发起的咨询</a></li>
                <li><a href="http://wenda.wecenter.com/home/#get_consultation" rel="get_consultation"><i
                  class="icon icon-mytopic"></i>我收到的咨询</a></li>
              </ul>
            </div>
          </div>

          <div class="aw-mod side-nav">
            <div class="mod-body">
              <ul>
                <li><a href="http://wenda.wecenter.com/topic/"><i class="icon icon-topic"></i>所有话题</a></li>
                <li><a href="http://wenda.wecenter.com/people/"><i class="icon icon-user"></i>所有用户</a></li>
                <li><a href="http://wenda.wecenter.com/explore/doact/?p=consult&amp;a=piazza"><i
                  class="icon icon-cart"></i>咨询广场</a></li>
                <li><a href="http://wenda.wecenter.com/invitation/"><i class="icon icon-inviteask"></i>邀请好友加入
                  <em class="badge">5</em>
                </a></li>
              </ul>
            </div>
          </div>
        </div>
        <!-- end 侧边栏 -->
      </div>
    </div>
  </div>
</template>

<script>
  import UserInboxApi from '@/api/user/UserInboxApi'

  export default {
    name: 'Inbox',
    data() {
      return {
        inboxList: []
      }
    },
    created() {
      this.getInbox()
    },
    methods: {
      getInbox() {
        let data = {}
        UserInboxApi.getInbox(data).then(result => {
          this.inboxList = result.data.list
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
</script>

<style scoped>

</style>
