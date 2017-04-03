<template>
  <div>
    <h1 class="title">{{ title }}</h1>
    <form class="form">
      <div class="field">
        <label class="label">Nome</label>
        <input class="input" type="text" v-model="input.name">
        <div class="help is-danger" v-if="errors && errors.name" v-text="errors.name.join(' ')"></div>
      </div>

      <div class="field">
        <label class="label">Preço</label>
        <input class="input" type="number" step="0.01" min="0.01" v-model="input.price">
      </div>

      <button type="button" class="button is-primary" @click="submit">Salvar</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      title: this.isNew() ? 'Cadastrar Produto' : 'Editar Produto',
      input: {
        name: null,
        price: null
      },
      errors: null
    }
  },
  methods: {
    submit () {
      const thenFunction = (response) => {
        this.$router.push({name: 'products'})
      }

      const errorFunction = (error) => {
        this.errors = error.response.data
      }

      if (this.isNew()) {
        axios.post('http://localhost:3000/products', this.input).then(thenFunction).catch(errorFunction)
      } else {
        axios.patch('http://localhost:3000/products/' + this.getId(), this.input).then(thenFunction).catch(errorFunction)
      }
    },
    isNew () {
      return this.$route.name === 'new_product'
    },
    getId () {
      return this.$route.params.id
    }
  },
  mounted () {
    if (this.isNew()) {
      return
    }

    axios.get('http://localhost:3000/products/' + this.getId()).then((response) => {
      this.input.price = response.data.price
      this.input.name = response.data.name
    })
  }
}
</script>
