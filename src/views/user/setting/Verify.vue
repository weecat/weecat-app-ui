<template>
  <div class="aw-mod">
    <div class="mod-body">
      <div class="aw-mod">
        <div class="mod-head">
          <h3>申请认证</h3>
        </div>
        <form class="form-horizontal">
          <div class="mod-body">
            <div class="form-group">
              <label class="col-lg-2 control-label">当前状态:</label>
              <div class="col-lg-10">
                未认证
              </div>
            </div>
            <div class="form-group">
              <label class="col-lg-2 control-label">认证类型:</label>
              <div class="col-lg-10">
                <input name="type" class="apply-type" type="radio" value="personal" id="type_personal" checked="checked"> 个人认证 &nbsp;
                <input name="type" class="apply-type" type="radio" value="enterprise" id="type_enterprise"> 机构认证
              </div>
            </div>
            <div class="form-group">
              <label class="col-lg-2 control-label verify-name"><span>真实姓名</span>:</label>
              <div class="col-lg-4">
                <input class="form-control" name="name" type="text" value="">
              </div>
            </div>

            <div class="form-group">
              <label class="col-lg-2 control-label verify-code">
                <span>身份证号码</span>:</label>
              <div class="col-lg-4">
                <input class="form-control" name="id_code" type="text" value="">
              </div>
            </div>

            <div class="form-group">
              <label class="col-lg-2 control-label">联系方式:</label>
              <div class="col-lg-8">
                <input class="form-control" name="contact" type="text" value="">
              </div>
            </div>
            <div class="form-group">
              <label class="col-lg-2 control-label">认证说明:</label>
              <div class="col-lg-8">
                <input class="form-control" name="reason" type="text" value="">
              </div>
            </div>
            <div class="form-group" id="upload-attach">
              <label class="col-lg-2 control-label">附件:</label>
              <div class="col-lg-8">
                <a class="btn btn-mini btn-default">上传附件</a>
                <span class="text-color-999 upload-url"></span>
                <p class="text-color-999">请提交对应的身份证或者组织机构代码证件扫描</p>
                <input name="attach" type="file" class="upload-attach form-control collapse">
              </div>
            </div>
          </div>
        </form>
        <div class="mod-footer clearfix">
          <a href="javascript:;" id="submit-form" class="btn btn-large btn-success pull-right" >提交</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Verify'
    }
</script>

<style scoped>

</style>
