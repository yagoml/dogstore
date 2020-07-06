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
import { BContainer, BRow, BCol } from 'bootstrap-vue'
import BreedCard from '@/components/BreedCard'
import { listBreeds } from '@/services/dog-api'

export default {
  components: { BContainer, BreedCard, BRow, BCol },

  data() {
    return {
      breeds: [],
      loading: true
    }
  },

  async created() {
    this.breeds = await listBreeds()
    this.loading = false
  }
}
</script>

<style lang="scss">
.breeds-list {
}
</style>
