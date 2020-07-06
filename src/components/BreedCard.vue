<template>
  <router-link
    :to="`/breeds/${breed}`"
    class="d-flex align-items-center justify-content-center breed-card"
  >
    <div
      v-if="loading"
      class="d-flex align-items-center justify-content-center breed-card__loader"
    >
      <b-spinner variant="dark" label="Loading" />
    </div>
    <b-card
      v-else
      :title="breed"
      :img-src="image"
      :img-alt="breed"
      img-top
      tag="article"
    >
      <b-card-text>
        {{ breed }}
      </b-card-text>
    </b-card>
  </router-link>
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
  height: 347px;
  margin-bottom: 20px;
  transition: 0.25s ease-in-out;

  .card {
    width: 100%;
  }

  .card-img-top {
    height: 240px;
  }

  .card-title,
  .card-text {
    text-transform: capitalize;
    color: black;
  }

  &:hover {
    transform: scale(1.03);

    $shadow: 0px 0px 4px -2px rgba(0, 0, 0, 0.75);

    .card {
      -webkit-box-shadow: $shadow;
      -moz-box-shadow: $shadow;
      box-shadow: $shadow;
    }

    .card-title,
    .card-text {
      text-transform: capitalize;
    }
  }

  &__loader {
    width: 100%;
    height: 100%;
    border: 1px solid rgba(0, 0, 0, 0.125);
  }
}
</style>
