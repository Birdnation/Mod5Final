<template>
  <b-container>
    <Hero/>
    <Input/>
    <List/>
  </b-container>
</template>

<script>
import Hero from '../components/Hero.vue'
import Input from '../components/Input.vue'
import List from '../components/List.vue'
export default {
  setup() {
    
  },
  components: {
    Hero, Input, List
  }
}
</script>