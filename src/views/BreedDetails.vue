<template>
  <b-container class="breed-details">
    <h1 class="breed-details__title mb-3">{{ breed }}</h1>
    <b-row>
      <b-col cols="12" lg="5">
        <b-card
          class="d-flex align-items-center justify-content-center breed-details__img-card"
        >
          <div
            v-if="loading"
            class="d-flex align-items-center justify-content-center breed-details__loader"
          >
            <b-spinner variant="dark" label="Loading" />
          </div>
          <img v-else class="breed-details__image" :src="image" :alt="breed" />
        </b-card>
      </b-col>
      <b-col cols="12" lg="7">
        <BreedForm />
        <BreedCheckout class="mt-3" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { BContainer, BCol, BRow, BSpinner } from 'bootstrap-vue'
import BreedMixin from '@/mixins/breed'
import BreedForm from '@/components/BreedForm'
import BreedCheckout from '@/components/BreedCheckout'
import { mapState, mapMutations } from 'vuex'

export default {
  components: {
    BContainer,
    BCol,
    BRow,
    BSpinner,
    BreedForm,
    BreedCheckout
  },

  mixins: [BreedMixin],

  data() {
    return {
      breed: ''
    }
  },

  computed: {
    ...mapState(['breeds'])
  },

  created() {
    this.breed = this.$route.params.breed
    this.getBreedImage()
    this.loadSubBreeds()
  },

  methods: {
    ...mapMutations(['setForm']),
    loadSubBreeds() {
      if (!Object.values(this.breeds).length) this.$store.dispatch('loadBreeds')
    }
  },

  destroyed() {
    this.setForm({})
  }
}
</script>

<style lang="scss">
.breed-details {
  &__title {
    text-transform: capitalize;
  }

  &__loader {
    width: 100%;
    height: 300px;
  }

  &__image {
    max-width: 100%;
  }

  &__img-card {
    min-height: 300px;
  }
}
</style>
