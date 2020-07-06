<template>
  <div class="breed-card">
    <b-spinner v-if="loading" />
    <b-card
      :title="breed"
      :img-src="image"
      :img-alt="breed"
      img-top
      tag="article"
      class="breed-card mb-4"
    >
      <b-card-text>
        {{ breed }}
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
import { getBreedImage } from '@/services/dog-api'
import { BSpinner, BCard } from 'bootstrap-vue'

export default {
  props: {
    breed: { type: String, required: true }
  },

  components: { BSpinner, BCard },

  data() {
    return {
      image: null,
      loading: true
    }
  },

  async created() {
    this.image = await getBreedImage(this.breed)
    this.loading = false
  }
}
</script>

<style lang="scss">
.breed-card {
  .card-img-top {
    height: 240px;
  }

  .card-title {
    text-transform: capitalize;
  }
}
</style>
