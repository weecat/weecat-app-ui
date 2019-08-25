<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import '@/assets/css/bootstrap.css'
import '@/assets/css/icon.css'
import '@/assets/css/default/common.css'
import '@/assets/css/default/link.css'
// import '@/assets/js/plug_module/style.css'
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.geetest_radar_tip_content{
  position: initial !important;
}
</style>
