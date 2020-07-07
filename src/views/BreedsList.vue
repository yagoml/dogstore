<template>
  <div class="breeds-list">
    <b-container>
      <h1>Dog Store</h1>
      <p>Please select the dog breed</p>
      <b-row>
        <b-col v-for="breed in currentBreeds" cols="12" lg="4" :key="breed">
          <BreedCard :breed="breed" />
        </b-col>
      </b-row>
      <div class="d-flex justify-content-md-center mt-3">
        <b-pagination
          v-model="page"
          :total-rows="total"
          :per-page="perPage"
        ></b-pagination>
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { BContainer, BRow, BCol, BPagination } from 'bootstrap-vue'
import BreedCard from '@/components/BreedCard'

export default {
  name: 'BreedsList',

  components: { BContainer, BreedCard, BRow, BCol, BPagination },

  data() {
    return {
      page: 1,
      perPage: 9
    }
  },

  computed: {
    ...mapState(['breeds', 'loading']),
    total() {
      return Object.values(this.breeds).length
    },
    currentBreeds() {
      const startIndex = (this.page - 1) * 9
      return Object.keys(this.breeds).splice(startIndex, this.perPage)
    }
  },

  created() {
    this.$store.dispatch('loadBreeds')
  },

  methods: {}
}
</script>
