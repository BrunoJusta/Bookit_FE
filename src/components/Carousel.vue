<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="300"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >


       <b-carousel-slide  img-src="https://s3.amazonaws.com/wp.site/wp-content/uploads/2018/07/wolfgang-puck-catering-los-angeles-mobile.jpg">
        <img src="../assets/bookit_white.svg" width="800px">
        <br>
        <b-button squared variant="primary">RESERVAR</b-button>
      </b-carousel-slide>

      <b-carousel-slide  img-src="https://s3.amazonaws.com/wp.site/wp-content/uploads/2018/07/wolfgang-puck-catering-los-angeles-mobile.jpg">
        <img src="../assets/bookit_white.svg" width="800px">
        <br>
        <b-button squared variant="primary">RESERVAR</b-button>
      </b-carousel-slide>

    <b-carousel-slide  img-src="https://s3.amazonaws.com/wp.site/wp-content/uploads/2018/07/wolfgang-puck-catering-los-angeles-mobile.jpg">
        <img src="../assets/bookit_white.svg" width="800px">
        <br>
        <b-button squared variant="primary">RESERVAR</b-button>
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