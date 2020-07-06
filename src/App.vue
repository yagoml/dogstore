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
  a {
    &:hover {
      text-decoration: none;
    }
  }
}
</style>
