<template>
  <b-container>
    <Hero/>
    <Input/>
    <Lista/>
  </b-container>
</template>

<script>
import Hero from '../components/Hero.vue'
import Input from '../components/Input.vue'
import Lista from '../components/List.vue'
export default {
  setup() {
    
  },
  components: {
    Hero, Input, Lista
  }
}
</script>