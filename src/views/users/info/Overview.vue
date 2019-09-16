<template>
  <div class="tab-pane active">
    <!-- 回复 -->
    <div class="aw-mod">
      <div class="mod-head">
        <h3><a class="pull-right aw-more-content">更多 »</a>回复</h3>
      </div>
      <div class="mod-body">
        <div class="aw-profile-answer-list">
          <template v-for="answer in answers">
            <div v-bind:key="answer.id" class="aw-item">
              <div class="mod-head">
                <h4><a href="#">{{answer.title}}</a></h4>
              </div>
              <div class="mod-body">
                <span class="aw-border-radius-5 count pull-left">
                  <i class="icon icon-agree"></i>
                  {{answer.answer_info.agree_count}}
                </span>
                <p class="aw-hide-txt">{{answer.answer_info.answer_content}}</p>
              </div>
            </div>
          </template>
          <template v-if="answers.length === 0">
            <p class="padding10 text-center">没有内容</p>
          </template>
        </div>
      </div>
    </div>
    <!-- end 回复 -->
    <!-- 发问 -->
    <div class="aw-mod">
      <div class="mod-head">
        <h3>
          <a class="pull-right aw-more-content">更多 »</a>发问</h3>
      </div>
      <div class="mod-body">
        <div class="aw-profile-publish-list">
          <div class="aw-item">
            <div class="aw-mod">
              <div class="mod-head">
                <h4 class="aw-hide-txt">
                  <a href="http://wenda.wecenter.com/question/32632">有api接口么</a>
                </h4>
              </div>
              <div class="mod-body">
                <span class="aw-border-radius-5 count pull-left"><i class="icon icon-reply"></i>0</span>
                <p class="text-color-999">14 次浏览 • 1 个关注 • 7 小时前</p>
              </div>
            </div>
          </div>
          <p class="padding10 text-center">没有内容</p>
        </div>
      </div>
    </div>
    <!-- end 发问 -->
    <!-- 最新动态 -->
    <div class="aw-mod">
      <div class="mod-head">
        <h3><a class="pull-right aw-more-content">更多 »</a>动态</h3>
      </div>
      <div class="mod-body">
        <ul>
          <p class="padding10 text-center">没有内容</p>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import UserAnswersApi from '@/api/user/UserAnswersApi'

  export default {
    name: 'Overview',
    data() {
      return {
        answers: []
      }
    },
    created() {
      this.getAnswers()
    },
    methods: {
      getAnswers() {
        let data = {}
        UserAnswersApi.getAnswers(data).then(result => {
          this.answers = result.data.list
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
</script>

<style scoped>

</style>
