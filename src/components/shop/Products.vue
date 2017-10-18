<template>
  <div class="row">
    <div class="col-sm-4">
      <product></product>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import Product from './Product'

  export default {
    name: 'products',
    components: {
      Product
    },
    methods: {
      ...mapActions({
        getProducts: 'getProducts'
      })
    },
    mounted () {
      this.getProducts()
    }
  }
</script>

<style>
  .thumbnail img {
    width: 100%;
  }
</style>
