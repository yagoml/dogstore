<template>
  <div class="breeds-list">
    <b-container>
      <h1>Dog Store</h1>
      <p class="breeds-list__description">Dogs for sale</p>
      <b-row>
        <b-col cols="12" lg="4">
          <b-form-input
            class="mb-3"
            type="text"
            v-model="filter"
            placeholder="Search for a breed"
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col v-for="breed in currentBreeds" cols="12" lg="4" :key="breed">
          <BreedCard :breed="breed" />
        </b-col>
      </b-row>
      <div v-if="totalPages > 1" class="d-flex justify-content-md-center mt-3">
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
      perPage: 9,
      filter: ''
    }
  },

  computed: {
    ...mapState(['breeds']),
    total() {
      return this.filteredBreeds.length
    },
    totalPages() {
      return Math.ceil(this.total / this.perPage)
    },
    filteredBreeds() {
      return Object.keys(this.breeds).filter(breed => breed.match(this.filter))
    },
    currentBreeds() {
      const startIndex = (this.page - 1) * 9
      const filtered = this.filteredBreeds
      return filtered.splice(startIndex, this.perPage)
    }
  },

  created() {
    this.$store.dispatch('loadBreeds')
  },

  methods: {}
}
</script>

<style lang="scss">
.breeds-list {
  &__description {
    color: #beee62;
  }
}
</style>
