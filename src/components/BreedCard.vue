<template>
  <router-link
    :to="`/breeds/${breed}`"
    class="d-flex align-items-center justify-content-center breed-card"
  >
    <div
      v-if="loading"
      class="d-flex align-items-center justify-content-center breed-card__loader"
    >
      <b-spinner variant="light" label="Loading" />
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
import { BSpinner, BCard } from 'bootstrap-vue'
import BreedMixin from '@/mixins/breed'

export default {
  props: {
    breed: { type: String, required: true }
  },

  mixins: [BreedMixin],

  components: { BSpinner, BCard },

  created() {
    this.getBreedImage()
  }
}
</script>

<style lang="scss">
.breed-card {
  height: 347px;
  margin-bottom: 20px;
  transition: 0.2s ease-in-out;

  .card {
    width: 100%;
    border: 1px solid #483c46;
  }

  .card-img-top {
    height: 240px;
    background-color: #483c46;
  }

  .card-title,
  .card-text {
    text-transform: capitalize;
    color: #483c46;
  }

  &:hover {
    transform: scale(1.03);
    text-decoration: none;
    $shadow: 0px 0px 5px 1px #beee62;

    .card {
      border: 1px solid #483c46;
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
