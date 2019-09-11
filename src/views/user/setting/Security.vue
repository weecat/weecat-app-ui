<template>
  <div class="aw-mod">
    <div class="mod-body">
      <div class="aw-mod aw-user-setting-bind">
        <div class="mod-head">
          <h3>修改密码</h3>
        </div>
        <form class="form-horizontal">
          <div class="mod-body">
            <div class="form-group">
              <label class="control-label" for="input-password-old">当前密码</label>
              <div class="row">
                <div class="col-lg-4">
                  <input type="password" class="form-control" id="input-password-old" name="old_password">
                </div>
              </div>
            </div>
            <div class="form-group">
              <label class="control-label" for="input-password-new">新的密码</label>
              <div class="row">
                <div class="col-lg-4">
                  <input type="password" class="form-control" id="input-password-new" name="password">
                </div>
              </div>
            </div>
            <div class="form-group">
              <label class="control-label" for="input-password-re-new">确认密码</label>
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
        name: 'Security'
    }
</script>

<style scoped>

</style>
