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
@import 'src/variables';

#app {
  padding: 15px 0px;
  background-color: $william;
  min-height: 100vh;

  h1 {
    color: $jaffa;
  }

  a {
    color: $sulu;
  }

  .breadcrumb {
    background-color: transparent;

    &-item {
      color: white;

      &::before {
        color: white;
      }
    }
  }

  .form-control,
  .custom-select {
    color: $matterhorn;

    &:focus {
      box-shadow: $shadow-green;
    }
  }

  .btn {
    &-primary {
      background-color: $jaffa;
      border: 1px solid $jaffa;
    }

    &:focus {
      box-shadow: $shadow-green;
    }
  }

  .pagination {
    .page-item {
      .page-link {
        transition: $transition-default;
        border-color: $matterhorn;
        color: $matterhorn;
      }

      &.active {
        .page-link {
          background-color: $jaffa;
          color: $sulu;
          border-color: $sulu;
        }
      }
    }
  }
}
</style>
