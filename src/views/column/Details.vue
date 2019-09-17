<template>
  <div class="aw-container-wrap">
    <div class="container">
      <div class="row">
        <div class="aw-content-wrap clearfix simpobox">
          <div class="N-left clearfix">
            <div class="N-myzllist">
              <template v-for="article in articles">
                <dl v-bind:key="article.id">
                  <dt>
                    <router-link :to="'/article/details/'+article.id">
                      <img :src="'http://wenda.wecenter.com'+article.article_img">
                    </router-link>
                  </dt>
                  <dd>
                    <h2>
                      <router-link :to="'/article/details/'+article.id">
                        {{article.title}}
                      </router-link>
                    </h2>
                    <p style="cursor: pointer;">
                      你的网站是不是也被灌水机攻击了，删问题删的手软，以下方法可以让它自动清理：
                      1、禁止灌水发提问的用户（这是关键）
                      2、在程序目录下的&nbsp;models\question.php 代码最下面 ...
                    </p>
                    <span>
                    <em><img src="@/assets/css/default/img/ntime.png">{{article.add_time}}</em>
                    <em><img src="@/assets/css/default/img/nsee.png">{{article.views}}</em>
                    <em>
                      <a href="/article/1675#!answer_form">
                        <img src="@/assets/css/default/img/simpoly.png">评论
                      </a>
                    </em>
                </span>
                  </dd>
                </dl>
              </template>
              <div class="mod-footer fl_none">
              </div>
            </div>
          </div>
          <div class="N-right clearfix">

            <div class="author">
              <div class="author-phone">
                <p>
                  <img src="http://wenda.wecenter.com/uploads/column/c880d3d99c04e854bd108121b0f50157.png?3750">
                </p>
                <span class="author-icon"></span>
              </div>
              <p class="author-name">二次开发</p>
              <p class="author-profile">Wecenter 二次开发</p>
              <span class="author-fav">
                <a href="javascript:;" class="active"><span>取消关注</span></a>
                <a href="javascript:;" class="author-sx">私信</a>
              </span>
              <div class="author-record">
                <p class="newCount">
                  <img src="http://wenda.wecenter.com/static/css/default/img/nsee.png">
                  文章总浏览量<span class="rt">3.37 K</span>
                </p>
                <p class="newCount">
                  <img src="http://wenda.wecenter.com/static/css/default/img/nsan.png">发表文章总数
                  <span class="rt">4</span>
                </p>
                <p class="newCount">
                  <img src="http://wenda.wecenter.com/static/css/default/img/nsvn.png">被关注数
                  <span class="rt">50</span>
                </p>
              </div>
            </div>

            <div class="m-hot">
              <div class="m-hot-tt"><i></i>TA的热门文章</div>
              <dl>
                <dt>
                  <i><img src="http://wenda.wecenter.com/static/css/default/img/nicon.png"></i>
                  <a href="http://wenda.wecenter.com/article/110#!answer_form"><img class="m-imgtop" src="">
                    <h2>分享一个自定义WC首页的方法(修改默认首...</h2></a>
                </dt>
                <dd class="clearfix">
                  <a href="http://wenda.wecenter.com/article/1236#!answer_form"><img src=""><i>2</i></a>
                  <a href="http://wenda.wecenter.com/article/1236#!answer_form" class="mhottitle">【分享】文章列表显示图片列表的...</a>
                </dd>
                <dd class="clearfix">
                  <a href="http://wenda.wecenter.com/article/1325#!answer_form"><img src=""><i>3</i></a>
                  <a href="http://wenda.wecenter.com/article/1325#!answer_form" class="mhottitle">让你网站的积分动起来，股票积分...</a>
                </dd>

                <dd class="clearfix">
                  <a href="http://wenda.wecenter.com/article/1250#!answer_form"><img src=""><i>4</i></a>
                  <a href="http://wenda.wecenter.com/article/1250#!answer_form" class="mhottitle">sitemap.xml文章和问...</a>
                </dd>

                <dd class="clearfix">
                  <a href="http://wenda.wecenter.com/article/1237#!answer_form"><img src=""><i>5</i></a>
                  <a href="http://wenda.wecenter.com/article/1237#!answer_form" class="mhottitle">附件图片结构你知道在那配置吗？</a>
                </dd>

                <dd class="clearfix">
                  <a href="http://wenda.wecenter.com/article/1399#!answer_form"><img src=""><i>6</i></a>
                  <a href="http://wenda.wecenter.com/article/1399#!answer_form" class="mhottitle">给您的网站注册增加一个邮箱后辍...</a>
                </dd>

                <dd class="clearfix">
                  <a href="http://wenda.wecenter.com/article/1252#!answer_form"><img src=""><i>7</i></a>
                  <a href="http://wenda.wecenter.com/article/1252#!answer_form" class="mhottitle">研究一个网站，大家一起探讨</a>
                </dd>

                <dd class="clearfix">
                  <a href="http://wenda.wecenter.com/article/1403#!answer_form"><img src=""><i>8</i></a>
                  <a href="http://wenda.wecenter.com/article/1403#!answer_form" class="mhottitle">WC文件缓存</a>
                </dd>

                <dd class="clearfix">
                  <a href="http://wenda.wecenter.com/article/1571#!answer_form"><img
                    src="http://wenda.wecenter.com/uploads/article/20180731/b616930e956ea98dd84140160bee39eb.jpg?9805"><i>9</i></a>
                  <a href="http://wenda.wecenter.com/article/1571#!answer_form" class="mhottitle">wecenter投票功能</a>
                </dd>

                <dd class="clearfix">
                  <a href="http://wenda.wecenter.com/article/1261#!answer_form"><img src=""><i>10</i></a>
                  <a href="http://wenda.wecenter.com/article/1261#!answer_form" class="mhottitle">IIS主机静态规则共享参考</a>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ColumnsApi from '@/api/ColumnsApi'

  export default {
    name: 'Index',
    data() {
      return {
        articles: []
      }
    },
    created() {
      this.getArticles()
    },
    methods: {
      getArticles() {
        let data = {}
        ColumnsApi.getArticles(data).then(result => {
          this.articles = result.data.list
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
</script>

<style scoped>

</style>
