<template>
  <b-container class="breed-details">
    <h1 class="breed-details__title mb-3">{{ breed }}</h1>
    <b-row>
      <b-col cols="12" lg="5">
        <div
          v-if="loading"
          class="d-flex align-items-center justify-content-center breed-details__loader"
        >
          <b-spinner variant="dark" label="Loading" />
        </div>
        <img v-else class="breed-details__image" :src="image" :alt="breed" />
      </b-col>
      <b-col cols="12" lg="7">
        <b-form>
          <b-row>
            <b-col cols="12" lg="6">
              <b-form-group label="Sub breed:">
                <b-form-select v-model="form.subBreed" :options="subBreeds" />
              </b-form-group>
            </b-col>
            <b-col cols="12" lg="6">
              <b-form-group label="Color:">
                <div class="d-flex">
                  <div
                    v-for="color in colors"
                    :key="color"
                    class="breed-details__color-ball"
                    :style="{ 'background-color': color }"
                  ></div>
                </div>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12" lg="6">
              <b-form-group label="Gender:">
                <b-form-select v-model="form.gender" :options="subBreeds" />
              </b-form-group>
            </b-col>
            <b-col cols="12" lg="6">
              <b-form-group label="Age:">
                <b-form-input v-model="form.age" type="number" />
              </b-form-group>
            </b-col>
          </b-row>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import {
  BContainer,
  BCol,
  BRow,
  BSpinner,
  BForm,
  BFormInput,
  BFormSelect,
  BFormGroup
} from 'bootstrap-vue'
import BreedMixin from '@/mixins/breed'

export default {
  components: {
    BContainer,
    BCol,
    BRow,
    BSpinner,
    BForm,
    BFormInput,
    BFormSelect,
    BFormGroup
  },

  mixins: [BreedMixin],

  data() {
    return {
      colors: [
        'red',
        'blue',
        'yellow',
        'black',
        'purple',
        'green',
        'orange',
        'pink'
      ],
      breed: {},
      form: {
        subBreed: null,
        color: null,
        gender: null,
        age: null
      },
      subBreeds: []
    }
  },

  created() {
    this.breed = this.$route.params.breed
    this.getBreedImage()
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
    height: 100%;
  }

  &__image {
    max-width: 100%;
  }

  &__color-ball {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    border-radius: 30px;
    transition: 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      transform: scale(1.15);
      $shadow: 0px 0px 5px -1px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: $shadow;
      -moz-box-shadow: $shadow;
      box-shadow: $shadow;
    }
  }
}
</style>
