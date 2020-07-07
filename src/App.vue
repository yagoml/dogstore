<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  padding: 15px 0px;

  a {
    &:hover {
      text-decoration: none;
    }
  }
}
</style>
