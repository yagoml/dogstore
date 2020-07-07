<template>
  <b-form class="breed-form">
    <b-row>
      <b-col v-if="subBreeds && subBreeds.length" cols="12" lg="6">
        <b-form-group label="Sub breed:">
          <b-form-select
            v-model="formData.subBreed"
            :options="subBreeds"
            @input="formChanged()"
          />
        </b-form-group>
      </b-col>
      <b-col cols="12" lg="6">
        <b-form-group label="Gender:">
          <b-form-select
            v-model="formData.gender"
            :options="genders"
            @input="formChanged()"
          />
        </b-form-group>
      </b-col>
      <b-col cols="12" lg="6">
        <b-form-group label="Age:">
          <b-form-input
            v-model="formData.age"
            type="number"
            @input="formChanged()"
          />
        </b-form-group>
      </b-col>
      <b-col cols="12" lg="6">
        <b-form-group label="Color:">
          <div class="d-flex">
            <div
              v-for="color in colors"
              :key="color"
              class="breed-form__color-ball"
              :class="{ active: color === formData.color }"
              :style="{ 'background-color': color }"
              @click="selectColor(color)"
            ></div>
          </div>
        </b-form-group>
      </b-col>
    </b-row>
  </b-form>
</template>

<script>
import {
  BCol,
  BRow,
  BForm,
  BFormInput,
  BFormSelect,
  BFormGroup
} from 'bootstrap-vue'
import { mapState, mapMutations } from 'vuex'
import { savePurchaseData } from '@/services/local-storage'

export default {
  components: {
    BCol,
    BRow,
    BForm,
    BFormInput,
    BFormSelect,
    BFormGroup
  },

  data() {
    return {
      colors: ['red', 'blue', 'yellow', 'black', 'purple', 'green', 'orange'],
      genders: ['male', 'female'],
      formData: {
        breed: null,
        subBreed: null,
        color: null,
        gender: null,
        age: null
      }
    }
  },

  created() {
    this.fillFormData()
  },

  computed: {
    ...mapState(['breeds', 'form']),
    breed() {
      return this.$route.params.breed
    },
    subBreeds() {
      return this.breeds[this.breed]
    }
  },

  methods: {
    ...mapMutations(['setForm']),
    selectColor(color) {
      this.formData.color = color
      this.formChanged()
    },
    formChanged() {
      this.setForm(this.formData)
      savePurchaseData(this.formData)
    },
    fillFormData() {
      if (!this.form) return
      this.formData.breed = this.breed
      this.formData = { ...this.formData, ...this.form }
    }
  }
}
</script>

<style lang="scss">
@import 'src/variables';

.breed-form {
  &__color-ball {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    border-radius: 30px;
    transition: $transition-default;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
      $shadow: 0px 0px 5px -1px $sulu;
      -webkit-box-shadow: $shadow;
      -moz-box-shadow: $shadow;
      box-shadow: $shadow;
    }

    &.active {
      transform: scale(1.15);
      $shadow: 0 0 2.5px 2.5px $sulu;
      -webkit-box-shadow: $shadow;
      -moz-box-shadow: $shadow;
      box-shadow: $shadow;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  .col-form-label {
    color: white;
  }
}
</style>
