<template>
  <b-container>
    <Hero/>
    <Input/>
    <Lista/>
    <Footer/>
  </b-container>
</template>

<script>
import Hero from '../components/Hero.vue'
import Input from '../components/Input.vue'
import Lista from '../components/List.vue'
import Footer from '../components/Footer.vue'
export default {
  setup() {
    
  },
  components: {
    Hero, Input, Lista, Footer
  }
}
</script>