import { getBreedImage } from '@/services/dog-api'
import { mapState, mapMutations } from 'vuex'

export default {
  data() {
    return {
      image: null,
      loading: false
    }
  },

  computed: {
    ...mapState(['images'])
  },

  methods: {
    ...mapMutations(['setImage']),
    async getBreedImage() {
      this.loading = true
      const storedImage = this.images[this.breed]
      if (!storedImage) {
        this.image = await getBreedImage(this.breed)
        this.setImage({
          breed: this.breed,
          image: this.image
        })
      } else this.image = storedImage
      this.loading = false
    }
  }
}