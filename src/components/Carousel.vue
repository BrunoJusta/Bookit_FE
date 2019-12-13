<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#CECECE"
      img-width="1024"
      img-height="300"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >


    <b-carousel-slide  img-blank="" >
       <div id="wow">
            <img id="logo" src="../assets/bookit_white.svg" width="800px">
            <br>
            <b-button squared style="background-color:#0A2463;  margin-top:-300px; ">RESERVAR</b-button>
       </div>
    </b-carousel-slide>

   <b-carousel-slide  img-blank="" >
       <div id="wow">
            <img id="logo" src="../assets/bookit_white.svg" width="800px">
            <br>
            <b-button squared style="background-color:#0A2463;  margin-top:-300px; ">RESERVAR</b-button>
       </div>
    </b-carousel-slide>

    <b-carousel-slide  img-blank="" >
        <div id="wow">
            <img id="logo" src="../assets/bookit_white.svg" width="800px">
            <br>
            <b-button squared style="background-color:#0A2463;  margin-top:-300px; ">RESERVAR</b-button>
       </div>
    </b-carousel-slide>
</b-carousel>

  </div>
</template>

<script>
  export default {
    name: 'Carousel',
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style scoped>
    #wow{
        margin-bottom: -90px;
    }
</style>