<template>
  <div class="aw-container-wrap">
    <div class="container">
      <div class="row">
        <div class="aw-content-wrap clearfix">
          <div class="aw-user-setting">
            <div class="tabbable">
              <ul class="nav nav-tabs aw-nav-tabs active">
                <li><a href="http://wenda.wecenter.com/setting/verify/">申请认证</a></li>
                <li><a href="http://wenda.wecenter.com/setting/trade/">账户设置</a></li>
                <li><a href="http://wenda.wecenter.com/setting/security/">安全设置</a></li>
                <li><a href="http://wenda.wecenter.com/setting/openid/">账号绑定</a></li>
                <li><a href="http://wenda.wecenter.com/setting/privacy/">隐私/提醒</a></li>
                <li class="active"><a href="http://wenda.wecenter.com/setting/profile/">基本资料</a></li>
                <h2><i class="icon icon-setting"></i> 用户设置</h2>
              </ul>
            </div>
            <div class="tab-content clearfix">
              <!-- 基本信息 -->
              <div class="aw-mod">
                <div class="mod-body">
                  <div class="aw-mod mod-base">
                    <div class="mod-head">
                      <h3>基本信息</h3>
                    </div>
                    <form method="post" action="/account/ajax/profile_setting/">
                      <div class="mod-body">
                        <dl>
                          <dt>邮箱:</dt>
                          <dd>845885222@qq.com</dd>
                        </dl>
                        <dl>
                          <dt>真实姓名:</dt>
                          <dd>mycms2013</dd>
                        </dl>
                        <dl>
                          <dt>咨询单价:</dt>
                          <dd><input class="form-control" name="consult_price" maxlength="10" type="text" value="0.00">
                          </dd>
                        </dl>
                        <dl>
                          <dt>性别:</dt>
                          <dd>
                            <label>
                              <input name="sex" value="1" type="radio"> 男 </label>
                            <label>
                              <input name="sex" value="2" type="radio"> 女 </label>
                            <label>
                              <input name="sex" value="3" type="radio" checked="checked"> 保密 </label>
                          </dd>
                        </dl>
                        <dl>
                          <dt>生日:</dt>
                          <dd>
                            <select name="birthday_y">
                              <option value=""></option>
                              <option value="2019">2019</option>
                            </select>
                            日
                          </dd>
                        </dl>
                        <dl>
                          <dt><label>现居:</label></dt>
                          <dd>
                            <select name="province" class="select_area" style="display: inline-block;">
                              <option value="">请选择省份或直辖市</option>
                            </select> <select name="city" class="select_area"></select>
                          </dd>
                        </dl>
                        <dl>
                          <dt><label>职业:</label></dt>
                          <dd>
                            <select name="job_id">
                              <option value="0">--</option>
                              <option value="1">站长</option>
                              <option value="2">产品经理</option>
                              <option value="3">视觉设计师</option>
                              <option value="4">程序员</option>
                              <option value="5">前端工程师</option>
                              <option value="6">风险投资者</option>
                              <option value="7">职业经理人</option>
                              <option value="8">运营人员</option>
                              <option value="9">人力资源</option>
                              <option value="10">运维人员</option>
                              <option value="11">创业者</option>
                              <option value="12">媒体</option>
                              <option value="13">天使</option>
                              <option value="14">学生</option>
                              <option value="17">其他</option>
                            </select>
                          </dd>
                        </dl>
                        <dl>
                          <dt><label>介绍:</label></dt>
                          <dd class="introduce">
                            <input class="form-control" name="signature" maxlength="128" type="text" value="">
                          </dd>
                        </dl>
                        <dl class="form-horizontal">
                          <dt><label>个性网址:</label></dt>
                          <dd>
                            http://wenda.wecenter.com/people/ <input type="text" class="form-control" value="mycms2013"
                                                                     maxlength="32" name="url_token"
                                                                     style="display:inline;width:30%;margin-bottom:0;">
                            <p class="text-color-999">可输入 4~20 位的英文或数字, 30 天内只能修改一次</p>
                          </dd>
                        </dl>
                        <dl>
                          <dt><label>时区:</label></dt>
                          <dd>
                            <select class="time" name="default_timezone">
                              <option value="">使用系统默认时区</option>
                              <option value="Etc/GMT+12">(GMT - 12:00 小时) 安尼威托克岛，卡瓦加兰</option>
                            </select>
                          </dd>
                        </dl>
                        <!-- 上传头像 -->
                        <div class="side-bar">
                          <dl>
                            <dt class="pull-left">
                              <img class="aw-border-radius-5" width="100" height="100"
                                                       src="http://wenda.wecenter.com/uploads/avatar/000/01/11/29_avatar_max.jpg?rand=737"
                                                       alt="" id="avatar_src"></dt>
                            <dd class="pull-left">
                              <h5>头像设置</h5>
                              <p>支持 jpg、gif、png 等格式</p>
                              <a class="btn btn-mini btn-success" id="avatar_uploader" href="javascript:;">
                                <form method="post" enctype="multipart/form-data" id="upload-form-" class="upload-form"
                                      action="http://wenda.wecenter.com/account/ajax/avatar_upload/"
                                      target="ajaxUpload">
                                  <input type="submit" class="submit">
                                  <input type="file" class="file-input" name="aws_upload_file" multiple="multiple" accept="">
                                </form>
                                上传头像</a> <span id="avatar_uploading_status" class="collapse"><i class="aw-loading"></i> 文件上传中...</span>
                            </dd>
                          </dl>
                        </div>
                        <!-- end 上传头像 -->
                      </div>
                    </form>
                  </div>
                  <!-- end 基本信息 -->

                  <!-- 联系方式 -->
                  <div class="aw-mod mod-contact">
                    <div class="mod-head">
                      <h3>联系方式</h3>
                    </div>
                    <div class="mod-body clearfix">
                      <ul>
                        <li>
                          <label for="input-qq">QQ:</label>
                          <input class="form-control" type="text" id="input-qq" name="qq" value="0">
                        </li>
                        <li>
                          <label for="input-mobile">手机号码:</label>
                          <input class="form-control" type="text" id="input-mobile" name="mobile" value="">
                        </li>
                        <li>
                          <label for="input-common-email">常用邮箱:</label>
                          <input class="form-control" type="text" id="input-common-email" name="common_email" value="">
                        </li>
                        <li>
                          <label for="input-homepage">网站:</label>
                          <input class="form-control" type="text" id="input-homepage" name="homepage" value="">
                        </li>
                      </ul>
                    </div>
                  </div>
                  <!-- end 联系方式 -->
                  <!-- 教育经历 -->
                  <div class="aw-mod aw-user-educate">
                    <div class="mod-head">
                      <h3>教育经历</h3>
                    </div>
                    <div class="mod-body">
                      <table class="table">
                        <thead>
                        <tr>
                          <th>学校名称</th>
                          <th>所在院系</th>
                          <th width="20%">入学年份</th>
                          <th width="20%">操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td>
                            <input type="text" class="school form-control" placeholder="如:xx大学...">
                          </td>
                          <td>
                            <input type="text" class="departments form-control" placeholder="如:工程学院计算机系...">
                          </td>
                          <td>
                            <select class="year">
                              <option value=""></option>
                              <option value="2019">2019</option>
                            </select>
                            年
                          </td>
                          <td><a class="add-educate">添加</a></td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <!-- end 教育经历 -->

                  <!-- 工作经历 -->
                  <div class="aw-mod aw-user-work">
                    <div class="mod-head">
                      <h3>工作经历</h3>
                    </div>
                    <div class="mod-body">
                      <table class="table">
                        <thead>
                        <tr>
                          <th width="30%">公司名称</th>
                          <th>所在职位</th>
                          <th>工作时间</th>
                          <th width="15%">操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td>
                            <input type="text" class="company form-control" placeholder="xx上市公司...">
                          </td>
                          <td>
                            <select class="work">
                              <option value=""></option>
                              <option value="1">站长</option>
                              <option value="2">产品经理</option>
                              <option value="3">视觉设计师</option>
                              <option value="4">程序员</option>
                              <option value="5">前端工程师</option>
                              <option value="6">风险投资者</option>
                              <option value="7">职业经理人</option>
                              <option value="8">运营人员</option>
                              <option value="9">人力资源</option>
                              <option value="10">运维人员</option>
                              <option value="11">创业者</option>
                              <option value="12">媒体</option>
                              <option value="13">天使</option>
                              <option value="14">学生</option>
                              <option value="17">其他</option>
                            </select>
                          </td>
                          <td>
                            <select class="syear">
                              <option value=""></option>
                              <option value="2019">2019</option>
                              <option value="2018">2018</option>
                            </select>
                            &nbsp;&nbsp;年 &nbsp;&nbsp; 至&nbsp;&nbsp;
                            <select class="eyear">
                              <option value=""></option>
                              <option value="2019">2019</option>
                            </select>
                            年
                          </td>
                          <td><a class="add-work">添加</a></td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <!-- end 工作经历 -->
                </div>
                <div class="mod-footer clearfix">
                  <a class="btn btn-large btn-success pull-right">保存</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Setting'
  }
</script>

<style scoped>

</style>
