<template>
  <div class="container" style="width: 1120px !important;">
    <div class="row">
      <div class="aw-content-wrap clearfix">
        <div class="col-sm-12 col-md-9 aw-main-content">
          <!-- 用户数据内容 -->
          <div class="aw-mod aw-user-detail-box">
            <div class="mod-head">
              <img src="http://wenda.wecenter.com/uploads/avatar/000/01/11/29_avatar_max.jpg" alt="mycms2013">
              <span class="pull-right operate">
                  <a class="btn btn-mini btn-success">余额:0.00元</a>
                  <a class="btn btn-mini btn-success">提现</a>
                  <a href="/setting/profile/" class="btn btn-mini btn-success">编辑</a>
                </span>
              <h1>mycms2013 </h1>
              <p class="text-color-999"></p>
              <p class="aw-user-flag">
                  <span>绑定认证 <a href="http://www.weibo.com/3281931332" title="微博">
                    <i class="icon icon-weibo"></i>
                  </a>
                  </span>
              </p>
            </div>
            <div class="mod-body">
              <div class="meta">
                <span><i class="icon icon-prestige"></i> 威望 : <em class="aw-text-color-green">0</em></span>
                <span><i class="icon icon-score"></i> 积分 : <em class="aw-text-color-orange">500</em></span> <span><i
                class="icon icon-agree"></i> 赞同 : <em class="aw-text-color-orange">0</em></span>
                <span><i class="icon icon-thank"></i> 感谢 : <em class="aw-text-color-orange">0</em></span>
                <span><i class="icon icon-check"></i> 好评率 : <em class="aw-text-color-orange">0%</em></span>
                <span><i class="icon icon-count"></i> 咨询答复次数 : <em class="aw-text-color-orange">0</em></span>
              </div>

            </div>
            <div class="mod-footer">
              <ul class="nav nav-tabs aw-nav-tabs">
                <router-link to="/users/info/overview" tag="li" active-class="active">
                  <a href="javascript:void(0);">概述</a>
                </router-link>
                <router-link to="/users/info/questions" tag="li" active-class="active">
                  <a href="javascript:void(0);">发问<span class="badge">0</span></a>
                </router-link>
                <router-link to="/users/info/answers" tag="li" active-class="active">
                  <a href="javascript:void(0);">回复<span class="badge">0</span></a>
                </router-link>
                <router-link to="/users/info/articles" tag="li" active-class="active">
                  <a href="javascript:void(0);">文章<span class="badge">0</span></a>
                </router-link>
                <router-link to="/users/info/focus" tag="li" active-class="active">
                  <a href="javascript:void(0);">关注</a>
                </router-link>
                <router-link to="/users/info/actions" tag="li" active-class="active">
                  <a href="javascript:void(0);">动态</a>
                </router-link>
                <router-link to="/users/info/integral" tag="li" active-class="active">
                  <a href="javascript:void(0);">我的积分</a>
                </router-link>
                <router-link to="/users/info/orders" tag="li" active-class="active">
                  <a href="javascript:void(0);">交易订单</a>
                </router-link>
                <router-link to="/users/info/withdraw" tag="li" active-class="active">
                  <a href="javascript:void(0);">提现记录</a>
                </router-link>
              </ul>
            </div>
          </div>
          <!-- end 用户数据内容 -->

          <div class="aw-user-center-tab">
            <div class="tab-content">
              <router-view></router-view>
              <!--Overview-->
              <!--Overview-END-->
              <!--questions-->
              <!--questions END-->
              <!--answers-->
              <!--answers END-->
              <!--articles-->
              <!--articles END-->
              <!--focus-->
              <!--focus END-->
              <!--actions-->
              <!--actions  END-->

              <!--orders-->
              <!--orders END-->
              <!--integral -->
              <!--integral END-->
              <!--提现记录 start-->
              <!--提现记录 end-->
            </div>
          </div>
        </div>

        <!-- 侧边栏 -->
        <div class="col-sm-12 col-md-3 aw-side-bar">
          <div class="aw-mod people-following">
            <div class="mod-body">
              <a class="pull-right font-size-12">更多 »</a>
              <span>
                  关注 <em class="aw-text-color-blue">17</em> 人
                </span>
              <p>
                <template v-for="user in followings">
                  <a v-bind:key="user.userId" class="aw-user-name" :href="'/people/'+user.userId">
                    <img :src="'http://wenda.wecenter.com'+user.avatar" :alt="user.user_name">
                  </a>
                </template>
              </p>
            </div>
          </div>
          <div class="aw-mod people-following">
            <div class="mod-body">
              <a class="pull-right font-size-12">更多 »</a>
              <span>
                  被 <em class="aw-text-color-blue">1</em> 人关注
                </span>
              <p>
                <template v-for="user in followers">
                  <a v-bind:key="user.userId" class="aw-user-name" :href="'/people/'+user.userId">
                    <img :src="'http://wenda.wecenter.com'+user.avatar" :alt="user.user_name">
                  </a>
                </template>
              </p>
            </div>

          </div>
          <div class="aw-mod people-following">
            <div class="mod-body">
              关注 <em class="aw-text-color-blue">0</em> 话题
            </div>
          </div>
          <div class="aw-mod">
            <div class="mod-body">
                  <span class="aw-text-color-666">
                      主页访问量 : 256 次访问
                  </span>
            </div>
          </div>
        </div>
        <!-- end 侧边栏 -->
      </div>
    </div>
  </div>
</template>
<script>
  import '@/assets/css/default/user.css'

  import UserApi from '@/api/user/UserApi'

  export default {
    name: 'Users',
    components: {},
    data() {
      return {
        followings: [],
        followers: [],
        hotUsers: []
      }
    },
    created() {
      this.getMyFollowings()
      this.getMyFollowers()
    },
    methods: {
      getMyFollowings() {
        let data = {}
        UserApi.getMyFollowings(data).then(result => {
          this.followings = result.data.list
        }).catch(err => {
          console.log(err)
        })
      },
      getMyFollowers() {
        let data = {}
        UserApi.getMyFollowers(data).then(result => {
          this.followers = result.data.list
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
</script>

<style scoped>

</style>
