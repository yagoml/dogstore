<template>
  <b-card class="breed-checkout">
    <div v-if="breed" class="breed-checkout__item">
      Dog breed: <strong>{{ breed }}</strong>
      <span class="ml-auto">{{ getPrice(breedPrice) }}</span>
    </div>
    <div v-if="form.subBreed" class="breed-checkout__item">
      Sub-breed: <strong>{{ form.subBreed }}</strong>
      <span class="ml-auto">{{ getPrice(subBreedPrice) }}</span>
    </div>
    <div v-if="form.gender" class="breed-checkout__item">
      Gender: <strong>{{ form.gender }}</strong>
      <span class="ml-auto">
        {{ getPrice(genderPrice) }}
      </span>
    </div>
    <div v-if="form.age" class="breed-checkout__item">
      Age: <strong>{{ form.age }}</strong>
      <span class="ml-auto">{{ getPrice(agePrice) }}</span>
    </div>
    <div v-if="form.color" class="breed-checkout__item">
      Color:
      <strong :style="{ color: form.color }">{{ form.color }}</strong>
      <span class="ml-auto">{{ getPrice(colorPrice) }}</span>
    </div>
    <div
      class="d-flex align-items-center justify-content-end breed-checkout__total"
    >
      Total:
      <strong class="ml-3">{{ getPrice(totalPrice) }}</strong>
    </div>
  </b-card>
</template>

<script>
import { mapState } from 'vuex'
import { BCard } from 'bootstrap-vue'
import { getPrices } from '@/services/local-storage'
import PriceModifiers from '@/assets/price-modifiers'

export default {
  components: { BCard },

  computed: {
    ...mapState(['form']),
    breed() {
      return this.$route.params.breed
    },
    lsPrices() {
      return getPrices()
    },
    breedPrice() {
      const priceData = this.lsPrices[this.breed]
      if (typeof priceData !== 'number') return priceData.price
      else return priceData
    },
    genderPrices() {
      return {
        male: this.breedPrice * PriceModifiers.gender.male,
        female: this.breedPrice * PriceModifiers.gender.female
      }
    },
    genderPrice() {
      if (!this.form.gender) return 0
      return this.form.gender === 'male'
        ? this.genderPrices.male
        : this.genderPrices.female
    },
    agePrice() {
      const age = parseInt(this.form.age)
      if (!age) return 0
      if (age <= 3) return this.breedPrice * PriceModifiers.age.baby
      if (age <= 5) return this.breedPrice * PriceModifiers.age.children
      if (age <= 10) return this.breedPrice * PriceModifiers.age.adult
      return 0
    },
    totalPrice() {
      return (
        this.breedPrice +
        this.genderPrice +
        this.agePrice +
        this.colorPrice +
        this.subBreedPrice
      )
    },
    colorPrice() {
      const { color } = this.form
      if (!color) return 0
      return this.breedPrice * PriceModifiers.colors[color]
    },
    subBreedPrice() {
      const priceData = this.lsPrices[this.breed]
      if (typeof priceData === 'number') return 0
      return priceData.subBreeds[this.form.subBreed]
    }
  },

  methods: {
    getPrice(price) {
      return price.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      })
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
