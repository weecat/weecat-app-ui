<template>
  <div class="tab-pane active">
    <div class="aw-mod">
      <div class="mod-head">
        <h3>发问</h3>
      </div>
      <div class="mod-body">
        <div class="aw-profile-publish-list">
          <template v-for="question in questions">
            <div v-bind:key="question.id" class="aw-item">
              <div class="aw-mod">
                <div class="mod-head">
                  <h4 class="aw-hide-txt">
                    <a href="#">{{question.title}}</a>
                  </h4>
                </div>
                <div class="mod-body">
                <span class="aw-border-radius-5 count pull-left">
                  <i class="icon icon-reply"></i>
                  {{question.question_info.answer_count}}
                </span>
                  <p class="text-color-999">
                    {{question.question_info.view_count}}次浏览
                    {{question.question_info.focus_count}}个关注
                    {{question.question_info.add_time}}
                  </p>
                </div>
              </div>
            </div>
          </template>
          <template v-if="questions.length === 0">
            <p style="padding: 15px 0" align="center">没有内容</p>
          </template>
        </div>
      </div>
      <div class="mod-footer">
        <!-- 加载更多内容 -->
        <a class="aw-load-more-content disabled" data-page="0">
          <span>没有更多了</span>
        </a>
        <!-- end 加载更多内容 -->
      </div>
    </div>
  </div>
</template>

<script>
  import UserQuestionsApi from '@/api/user/UserQuestionsApi'

  export default {
    name: 'Questions',
    data() {
      return {
        questions: []
      }
    },
    created() {
      this.getQuestions()
    },
    methods: {
      getQuestions() {
        let data = {}
        UserQuestionsApi.getQuestions(data).then(result => {
          this.questions = result.data.list
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
</script>

<style scoped>

</style>
