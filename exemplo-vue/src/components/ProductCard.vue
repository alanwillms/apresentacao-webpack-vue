<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">{{ product.name }}</p>
    </header>
    <div class="card-content">
      <div class="content">
        R$ {{ product.price }}
      </div>
    </div>
    <footer class="card-footer">
      <router-link :to="{name: 'edit_product', params: { id: product.id }}" class="card-footer-item">Editar</router-link>
      <a class="card-footer-item" @click="deleteProduct">Excluir</a>
    </footer>
  </div>
</template>

<script>
import Events from './Events'

export default {
  props: {
    product: Object
  },
  methods: {
    deleteProduct () {
      Events.$emit('deleteProduct', this.product)
    }
  }
}
</script>
