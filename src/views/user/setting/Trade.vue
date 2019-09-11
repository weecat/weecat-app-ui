<template>
  <div class="aw-mod">
    <div class="mod-body">
      <div class="aw-mod aw-user-setting-bind">
        <div class="mod-head">
          <h3>设置交易密码</h3>
        </div>
        <form class="form-horizontal">
          <div class="mod-body">
            <div class="form-group">
              <label class="control-label" for="input-password-old">手机号码</label>
              <div class="row">
                <div class="col-lg-4">
                  <input type="text" class="form-control" id="mobile" name="mobile" value="" style="width: 180px;float: left;">
                </div>
              </div>
            </div>
            <div class="form-group">
              <label class="control-label" for="input-password-old">验证码</label>
              <div class="row">
                <div class="col-lg-4">
                  <input type="text" class="form-control" id="input-password-old" name="smscode" style="width: 180px;float: left;">
                  <input id="sendButton" type="button" value="获取验证码" class="btn btn-danger form-control" style="float: right;width: 90px;height: 34px;">
                </div>
              </div>
            </div>
            <div class="form-group">
              <label class="control-label" for="input-password-new">新的交易密码</label>
              <div class="row">
                <div class="col-lg-4">
                  <input type="password" class="form-control" id="input-password-new" name="password">
                </div>
              </div>
            </div>
            <div class="form-group">
              <label class="control-label" for="input-password-re-new">确认交易密码</label>
              <div class="row">
                <div class="col-lg-4">
                  <input type="password" class="form-control" id="input-password-re-new" name="re_password">
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="mod-footer clearfix">
      <a href="javascript:;" class="btn btn-large btn-success pull-right">保存</a>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Trade'
    }
</script>

<style scoped>

</style>
