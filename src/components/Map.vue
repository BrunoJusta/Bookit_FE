<template>
  <div>
    <div class="google-map" id="myMap"></div>
    <button id="mapButton" @click="renderMap()" style="display: none"></button>
  </div>
</template>

<script>
  export default {
    name: "Maps",
    data: function () {
      return {
        map: "",
        marker: ""
      }
    },
    created() {
      window.onload = function () {
        document.getElementById('mapButton').click()
      }
    },
    updated() {
      window.onload = function () {
        document.getElementById('mapButton').click()
      }
    },
    methods: {
      renderMap() {
        this.map = new google.maps.Map(document.querySelector("#myMap"), {
          center: {
            lat: 41.3667925,
            lng: -8.739608
          },
          zoom: 16
        });

        this.marker = new google.maps.Marker({
          position: {
            lat: 41.3667925,  
            lng: -8.739608
          },
          map: this.map
        });
        this.map.setMapTypeId(google.maps.MapTypeId.SATELLITE);

      }
    }
  };
</script>
<style scoped>
  .google-map {
    width: 250px;
    height: 150px;
    margin: 0 auto;
    margin-top: -60px;
    border: solid 1px white;

  }
</style>