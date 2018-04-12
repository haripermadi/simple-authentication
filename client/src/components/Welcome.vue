<template>
  <div class="jumbotron">
    <h1 class="display-4">Hello,!</h1>
    <h2> Your Token: {{getToken}}</h2>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  computed: {
    getToken: function () {
      return this.$store.getters.getToken.token
    }
  }
}
</script>

<style>

</style>
