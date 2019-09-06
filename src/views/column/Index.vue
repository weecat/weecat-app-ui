<template>
  <div class="aw-container-wrap">
    <div class="container">
      <div class="row">
        <div class="aw-content-wrap clearfix simpobox">
          <div class="N-left clearfix">
            <div class="N-mytitle">
              <h2><img src="@/assets/css/default/img/np.png">专栏</h2>
              <ul>
                <li class="cur clearfix">
                  <a href="/column/ajax/list/#column">默认</a>
                </li>
                <li class="clearfix">
                  <a href="/column/ajax/list/sort-new#column">最新</a>
                </li>
                <li class="clearfix">
                  <a href="/column/ajax/list/sort-hot#column">热门</a>
                </li>
                <li class="clearfix">
                  <a href="/column/my/" data-sort="hot">我的专栏</a>
                </li>
              </ul>
            </div>

            <div class="N-zllist clearfix">
              <div class="N-myzilistbox clearfix">
                <template v-for="column in latestColumns">
                  <dl v-bind:key="column.column_id">
                    <dt>
                      <img class="N-zimg" :src="'http://wenda.wecenter.com'+column.column_pic" style="cursor: pointer;">
                      <a href="#">
                        <img alt="关注" src="@/assets/css/default/img/nadd.png">
                      </a>
                    </dt>
                    <dd>
                      <h2>
                        <a href="/column/details/9">{{column.column_name}}</a>
                      </h2>
                      <p>{{column.column_description}}</p>
                      <span>
                        <em><i><img src="@/assets/css/default/img/nz.png"></i> {{column.votes_count}}</em>
                        <em><i><img src="@/assets/css/default/img/nsee.png"></i> {{column.views_count}}</em>
                      </span>
                      <span>
                      <em>浏览量:{{column.views_count}}</em>
                      <em>文章数:{{column.article_count}}</em>
                    </span>
                    </dd>
                  </dl>
                </template>
              </div>
              <h6 class="nhref" id="bp_all_more" data-page="1"><i>
                <img src="@/assets/css/default/img/href.png"></i>换一换
              </h6>
              <div class="N-mytitles">
                <h2><img src="@/assets/css/default/img/np.png">文章</h2>
                <a href="/article/1687" class="nckmore">更多&gt;&gt;</a>
              </div>
              <template v-for="article in articles">
                <div v-bind:key="article.article_id" class="nzllist">
                  <dl>
                    <dt>
                      <a href="/article/1687">
                        <img :src="'http://wenda.wecenter.com'+article.article_img">
                      </a>
                    </dt>
                    <dd>
                      <h2>
                        <a href="http://wenda.wecenter.com/article/1687">{{article.title}}</a>
                      </h2>
                      <b>{{article.user.user_name}}</b>
                      <span>
                        <em>
                          <i><img src="@/assets/css/default/img/nz.png"></i> {{article.votes}}</em>
                          <em><i><img src="@/assets/css/default/img/nsee.png"></i> {{article.views}}</em>
                          <em class="ntime">{{article.add_time}}</em>
                    </span>
                    </dd>
                  </dl>
                </div>
              </template>
              <!--<h6 class="nhref" id="article_all_more" data-page="1"><i><img-->
                <!--src="@/assets/css/default/img/href.png"></i>换一换</h6>-->
            </div>
          </div>
          <div class="N-right clearfix">
            <div class="N-tjpop">
              <h2><img src="@/assets/css/default/img/tjpop.png">推荐专栏</h2>
            </div>
            <template v-for="column in hotColumns">
              <div v-bind:key="column.column_id" class="N-poplist">
                <div class="N-popbox">
                  <em>1</em>
                  <dl>
                    <dt>
                      <img :src="'http://wenda.wecenter.com'+column.column_pic">
                      <a href="/column/details/14">{{column.column_name}}</a>
                    </dt>
                    <dd>{{column.column_description}}</dd>
                  </dl>
                  <ul>
                    <li>
                      <img src="@/assets/css/default/img/nsee.png">
                      文章总浏览量:<i>{{column.views_count}}</i>
                    </li>
                    <li>
                      <img src="@/assets/css/default/img/nnum.png">
                      发表文章总数:<i>{{column.article_count}}</i>
                    </li>
                  </ul>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ColumnsApi from '@/api/ColumnsApi'
  import ArticlesApi from '@/api/ArticlesApi'

  export default {
    name: 'Index',
    data() {
      return {
        latestColumns: [],
        hotColumns: [],
        articles: []
      }
    },
    created() {
      this.getLatestColumns()
      this.getHotColumns()
      this.getLatestArticles()
    },
    methods: {
      getLatestColumns() {
        let data = {}
        ColumnsApi.getLatest(data).then(result => {
          this.latestColumns = result.data.list
        }).catch(err => {
          console.log(err)
        })
      },
      getHotColumns() {
        let data = {}
        ColumnsApi.getHotColumns(data).then(result => {
          this.hotColumns = result.data.list
        }).catch(err => {
          console.log(err)
        })
      },
      getLatestArticles() {
        let data = {}
        ArticlesApi.getLatest(data).then(result => {
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
