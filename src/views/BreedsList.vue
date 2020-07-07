<template>
  <div class="breeds-list">
    <b-container>
      <h1>Dog Store</h1>
      <p>Please select the dog breed</p>
      <b-row>
        <b-col
          v-for="breed in Object.keys(breeds)"
          cols="12"
          lg="4"
          :key="breed"
        >
          <BreedCard :breed="breed" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { BContainer, BRow, BCol } from 'bootstrap-vue'
import BreedCard from '@/components/BreedCard'
import { savePurchaseData } from '@/services/local-storage'

export default {
  name: 'BreedsList',

  components: { BContainer, BreedCard, BRow, BCol },

  computed: {
    ...mapState(['breeds', 'loading'])
  },

  created() {
    this.$store.dispatch('loadBreeds')
    savePurchaseData({})
  }
}
</script>
