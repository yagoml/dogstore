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
@import 'src/variables';

.breed-card {
  height: 347px;
  margin-bottom: 20px;
  transition: $transition-default;

  .card {
    width: 100%;
    border: 1px solid $matterhorn;
  }

  .card-img-top {
    height: 240px;
    background-color: $matterhorn;
  }

  .card-title,
  .card-text {
    text-transform: capitalize;
    color: $matterhorn;
  }

  &:hover {
    transform: scale(1.03);
    text-decoration: none;
    $shadow: 0px 0px 5px 1px $sulu;

    .card {
      border: 1px solid $matterhorn;
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
    border: 1px solid $light-gray;
  }
}
</style>
