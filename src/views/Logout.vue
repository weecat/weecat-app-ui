<template>
  <div></div>
</template>

<script>
  import Storage from '@/storage'

  export default {
    name: 'Logout',
    created() {
      Storage.removeItem('AUTH_TOKEN')
      window.location.href = '/'
    }
  }
</script>

<style scoped>

</style>
