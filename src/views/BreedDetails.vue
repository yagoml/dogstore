<template>
  <b-container class="breed-details">
    <h1 class="breed-details__title mb-3">{{ breed }}</h1>
    <b-breadcrumb :items="breadcrumb"></b-breadcrumb>
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
    <div class="d-flex justify-content-lg-end mt-3">
      <button class="btn btn-primary">
        <b-icon-cart-check class="mr-1" /> Buy dog
      </button>
    </div>
  </b-container>
</template>

<script>
import {
  BContainer,
  BCol,
  BRow,
  BSpinner,
  BBreadcrumb,
  BIconCartCheck
} from 'bootstrap-vue'
import BreedMixin from '@/mixins/breed'
import BreedForm from '@/components/BreedForm'
import BreedCheckout from '@/components/BreedCheckout'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'BreedDetails',

  components: {
    BContainer,
    BCol,
    BRow,
    BSpinner,
    BreedForm,
    BreedCheckout,
    BBreadcrumb,
    BIconCartCheck
  },

  mixins: [BreedMixin],

  data() {
    return {
      breed: '',
      breadcrumb: [
        {
          text: 'Dog Store',
          to: '/'
        },
        {
          text: ''
        }
      ]
    }
  },

  computed: {
    ...mapState(['breeds'])
  },

  created() {
    this.breed = this.$route.params.breed
    this.getBreedImage()
    this.loadSubBreeds()
    this.setBreadcrumbText()
  },

  methods: {
    ...mapMutations(['setForm']),
    loadSubBreeds() {
      if (!Object.values(this.breeds).length) this.$store.dispatch('loadBreeds')
    },
    setBreadcrumbText() {
      this.breadcrumb[1].text = this.capitalize(this.breed)
    },
    capitalize(text) {
      const firstLetter = text.charAt(0).toUpperCase()
      const remaining = text.slice(1, text.length)
      return firstLetter + remaining
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
    min-height: 290px;
  }
}
</style>
