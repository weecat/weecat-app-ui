<template>
  <div class="container">
    <div class="row">
      <div class="aw-content-wrap clearfix">
        <div class="col-sm-12 col-md-9 aw-main-content">
          <div class="aw-mod">
            <div class="mod-head common-head">
              <h2><i class="icon icon-users"></i>用户推荐</h2>
            </div>
            <div class="mod-body aw-people-list">
              <template v-for="(user,idx) in list">
                <div v-bind:key="user.id" class="aw-item">
                  <template v-if="idx+1 <= 3">
                    <span class="aw-user-sort-count aw-border-radius-5 active">
                    <i class="icon icon-flag"></i> <em>{{idx+1}}</em>
                  </span>
                  </template>
                  <template v-else>
                    <span class="aw-user-sort-count aw-border-radius-5">
                    <i class="icon icon-flag"></i> <em>{{idx+1}}</em>
                  </span>
                  </template>
                  <a class="aw-user-img aw-border-radius-5" :href="'/people/'+user.userId">
                    <img :src="'http://wenda.wecenter.com'+user.avatar">
                  </a>
                  <p class="text-color-999 title">
                    <a :href="'/people/'+user.userId" class="aw-user-name">{{user.user_name}}</a>
                    <template v-if="user.verified==='enterprise'">
                      <i class="icon-v i-ve" title="企业认证"></i>
                    </template>
                    <template v-else>
                      <i class="icon-v" title="个人认证"></i>
                    </template>
                  </p>
                  <p class="text-color-999 signature">WeCenter 产品经理</p>
                  <div class="meta">
                    <span><i class="icon icon-prestige"></i>威望 <b>{{user.reputation}}</b></span>
                    <span><i class="icon icon-score"></i>积分 <b>{{user.integral}}</b></span>
                    <span><i class="icon icon-agree"></i>赞同 <b>{{user.agree_count}}</b></span>
                    <span><i class="icon icon-thank"></i>感谢 <b>{{user.thanks_count}}</b></span>
                  </div>
                  <div class="operate">
                    <template v-if="user.hasFollow">
                      <a href="javascript:;" class="follow btn btn-normal btn-success active">
                        <span>取消关注</span> <em>|</em> <b>{{user.follows}}</b>
                      </a>
                    </template>
                    <template v-else>
                      <a href="javascript:;" class="follow btn btn-normal btn-success">
                        <span>关注</span> <em>|</em> <b>{{user.follows}}</b>
                      </a>
                    </template>
                    <a class="text-color-999">问Ta</a>
                    <em class="text-color-999">•</em>
                    <a class="text-color-999">私信</a>
                  </div>
                  <p class="text-color-999">
                    <a href="/topic/516" class="aw-topic-name"><span>程序功能</span></a>
                    <a href="/topic/1627" class="aw-topic-name"><span>开发框架</span></a>
                    <a href="/topic/1785" class="aw-topic-name"><span>开发成本</span></a>
                    <a href="/topic/1915" class="aw-topic-name"><span>开发文档</span></a>
                    等话题下共获得 11 个赞同
                  </p>
                </div>
              </template>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-3 aw-side-bar hidden-xs hidden-sm active">
          <div class="aw-mod side-nav">
            <div class="mod-body">
              <ul>
                <li><a href="http://wenda.wecenter.com/people/">全部</a></li>
                <li><a href="http://wenda.wecenter.com/people/group_id-104">商业用户组</a></li>
              </ul>
            </div>
          </div>

          <div class="aw-mod side-nav">
            <div class="mod-body">
              <ul>
                <li>
                  <a href="http://wenda.wecenter.com/people/topic_id-765">下载</a>
                </li>
                <li>
                  <a href="http://wenda.wecenter.com/people/topic_id-49" class="active">开发</a>
                </li>
                <li>
                  <a href="http://wenda.wecenter.com/people/topic_id-858">微信</a>
                </li>
                <li>
                  <a href="http://wenda.wecenter.com/people/topic_id-82">模板</a>
                </li>
                <li>
                  <a href="http://wenda.wecenter.com/people/topic_id-819">程序</a>
                </li>
                <li>
                  <a href="http://wenda.wecenter.com/people/topic_id-2694">网站</a>
                </li>
                <li>
                  <a href="http://wenda.wecenter.com/people/topic_id-158">设计</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import UsersApi from '@/api/users/UsersApi'

  export default {
    name: 'Lists',
    data() {
      return {
        list: []
      }
    },
    created() {
      this.getUsersLists()
    },
    methods: {
      getUsersLists() {
        let data = {}
        UsersApi.getUsersLists(data).then(result => {
          this.list = result.data.list
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
</script>

<style scoped>

</style>
