<template>
  <b-form class="breed-form">
    <b-row>
      <b-col v-if="subBreeds && subBreeds.length" cols="12" lg="6">
        <b-form-group label="Sub breed:">
          <b-form-select
            v-model="form.subBreed"
            :options="subBreeds"
            @input="formChanged()"
          />
        </b-form-group>
      </b-col>
      <b-col cols="12" lg="6">
        <b-form-group label="Gender:">
          <b-form-select
            v-model="form.gender"
            :options="genders"
            @input="formChanged()"
          />
        </b-form-group>
      </b-col>
      <b-col cols="12" lg="6">
        <b-form-group label="Age:">
          <b-form-input
            v-model="form.age"
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
              :class="{ active: color === form.color }"
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
      form: {
        subBreed: null,
        color: null,
        gender: null,
        age: null
      }
    }
  },

  computed: {
    ...mapState(['breeds']),
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
      this.form.color = color
      this.formChanged()
    },
    formChanged() {
      this.setForm(this.form)
    }
  }
}
</script>

<style lang="scss">
.breed-form {
  &__color-ball {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    border-radius: 30px;
    transition: 0.25s ease-in-out;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
      $shadow: 0px 0px 5px -1px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: $shadow;
      -moz-box-shadow: $shadow;
      box-shadow: $shadow;
    }

    &.active {
      transform: scale(1.15);
      $shadow: 0 0 2.5px 2.5px rgb(0, 225, 255);
      -webkit-box-shadow: $shadow;
      -moz-box-shadow: $shadow;
      box-shadow: $shadow;
    }

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
