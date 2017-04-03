<template>
  <div>
    <h1 class="title">Produtos</h1>
    <p>
      <router-link :to="{name: 'new_product'}" class="button is-primary">
        Cadastrar
      </router-link>
    </p>
    <div class="products" v-if="products">
      <div class="product" v-for="product in products">
        <product-card :product="product"></product-card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Events from './Events'
import ProductCard from './ProductCard'

export default {
  data () {
    return {
      products: null
    }
  },
  components: {
    ProductCard
  },
  mounted () {
    axios.get('http://localhost:3000/products').then((response) => {
      this.products = response.data
    })

    Events.$on('deleteProduct', (product) => {
      axios.delete('http://localhost:3000/products/' + product.id)
      for (let position in this.products) {
        if (this.products[position].id === product.id) {
          this.products.splice(position, 1)
          break
        }
      }
    })
  }
}
</script>

<style>
.products {
  overflow: hidden;
  padding-top: 1rem;
}

.product {
  float: left;
  margin: 1rem 5%;
  width: 40%;
}
</style>
