<template>
  <div class="home">
    <Carousel/>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Carousel from '@/components/Carousel.vue'


export default {
  name: 'home',
  components: {
    HelloWorld,
    Carousel
  }
}
</script>
