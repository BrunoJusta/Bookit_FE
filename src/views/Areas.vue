<template>
  <div >
<br>
        <br>
        <br>
        <br>
        <br>

        <br><br>
    <h1 id="redTitle">ESPAÇOS</h1>
    <hr class="back-line">
     <div class="container" style="background-color:white; margin-top:-35px; height:35px; width:270px;position: relative;display: block; z-index:6">
            <p style="color:white">s</p>
        </div>
    <br>
    <br>
    <br>
    <AreasGallery/>

  </div>
</template>

<script>
// @ is an alias to /src
import AreasGallery from '@/components/AreasGallery.vue'



export default {
  components: {
    AreasGallery
  }
}
</script>

<style lang="scss" scoped>

#redTitle{
  font-family:"bookMan";
  font-size: 45px;
  color: #B91C3B;
  display: block; 
    z-index: 7;
    position: relative;
}
.back-line{
    background-color:#0A2463;
    margin-top: -35px;
     width: 90%;
    display: block; 
    z-index: 5;
    position: relative;
}
</style>