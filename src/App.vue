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
  background-color: #3c6e71;
  min-height: 100vh;

  h1 {
    color: #f4743b;
  }

  a {
    color: #beee62;
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
    color: #483c46;

    &:focus {
      box-shadow: 0 0 2px 0.1rem rgba(190, 238, 98, 0.75);
    }
  }

  .btn {
    &-primary {
      background-color: #f4743b;
      border: 1px solid #f4743b;
    }

    &:focus {
      box-shadow: 0 0 2px 0.1rem rgba(190, 238, 98, 0.75);
    }
  }

  .pagination {
    .page-item {
      .page-link {
        transition: 0.2s ease-in-out;
        border-color: #483c46;
        color: #483c46;
      }

      &.active {
        .page-link {
          background-color: #f4743b;
          color: #beee62;
          border-color: #beee62;
        }
      }
    }
  }
}
</style>
