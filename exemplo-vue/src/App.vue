<template>
  <div id="app">
    <div class="nav">
      <div class="nav-menu nav-center">
        <router-link :to="{ name: 'root' }" class="nav-item">Home</router-link>
        <router-link :to="{ name: 'products'}" class="nav-item">Produtos</router-link>
      </div>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
.container {
  max-width: 1000px;
}
</style>
