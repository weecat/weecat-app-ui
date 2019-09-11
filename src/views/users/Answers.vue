<template>
  <div class="tab-pane active">
    <div class="aw-mod">
      <div class="mod-head">
        <h3>回复</h3>
      </div>
      <div class="mod-body">
        <div class="aw-profile-answer-list">
          <template v-for="answer in answers">
            <div v-bind:key="answer.id" class="aw-item">
              <div class="aw-mod">
                <div class="mod-head">
                  <h4 class="aw-hide-txt">
                    <a href="#">{{answer.title}}</a>
                  </h4>
                </div>
                <div class="mod-body">
                  <span class="aw-border-radius-5 count pull-left">
                    <i class="icon icon-agree"></i>
                    {{answer.answer_info.agree_count}}
                  </span>
                  <p class="text-color-999">{{answer.answer_info.answer_content}}</p>
                  <p class="text-color-999">{{answer.answer_info.add_time}}</p>
                </div>
              </div>
            </div>
          </template>
          <template v-if="answers.length === 0">
            <p style="padding: 15px 0" align="center">没有内容</p>
          </template>
        </div>
      </div>
      <div class="mod-footer">
        <!-- 加载更多内容 -->
        <a class="aw-load-more-content disabled">
          <span>没有更多了</span>
        </a>
        <!-- end 加载更多内容 -->
      </div>
    </div>
  </div>
</template>

<script>
  import UserAnswersApi from '@/api/user/UserAnswersApi'

  export default {
    name: 'Answers',
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
