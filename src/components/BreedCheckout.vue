<template>
  <b-card class="breed-checkout">
    <div v-if="breed" class="breed-checkout__item">
      Dog breed: <strong>{{ breed }}</strong>
      <span class="ml-auto">R$ 100,00</span>
    </div>
    <div v-if="form.subBreed" class="breed-checkout__item">
      Sub-breed: <strong>{{ form.subBreed }}</strong>
      <span class="ml-auto">R$ 100,00</span>
    </div>
    <div v-if="form.gender" class="breed-checkout__item">
      Gender: <strong>{{ form.gender }}</strong>
      <span class="ml-auto">R$ 100,00</span>
    </div>
    <div v-if="form.age" class="breed-checkout__item">
      Age: <strong>{{ form.age }}</strong>
      <span class="ml-auto">R$ 100,00</span>
    </div>
    <div v-if="form.color" class="breed-checkout__item">
      Color:
      <strong :style="{ color: form.color }">{{ form.color }}</strong>
      <span class="ml-auto">R$ 100,00</span>
    </div>
    <div
      class="d-flex align-items-center justify-content-end breed-checkout__total"
    >
      Total:
      <strong class="ml-3">R$ 100,00</strong>
    </div>
  </b-card>
</template>

<script>
import { mapState } from 'vuex'
import { BCard } from 'bootstrap-vue'

export default {
  components: { BCard },

  computed: {
    ...mapState(['form']),
    breed() {
      return this.$route.params.breed
    }
  }
}
</script>

<style lang="scss">
.breed-checkout {
  &__item {
    display: flex;
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    padding: 15px;

    strong {
      margin-left: 10px;
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }

  &__total {
    padding: 15px;
  }

  .card-body {
    padding: 0;
  }
}
</style>
