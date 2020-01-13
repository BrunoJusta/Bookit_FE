<template>
  <div>
    <button @click="renderMap()">RENDER MAP</button>
    <div class="google-map" id="myMap"></div>
  </div>
</template>

<script>
export default {
  name: "Maps",
  data: function () {
    return {
      map:""
    }
  },
  methods: {
    renderMap() {
      this.map = new google.maps.Map(document.querySelector("#myMap"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
      });
      this.map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
    }
  }
};
</script>
<style scoped>
.google-map {
  width: 400px;
  height: 200px;
  margin: 0 auto;;
}
</style>