<template>
  <div >
<br>
<br>
  <br>
  <br>
  <br>
        <br>
        <br>
    <h1 id="redTitle">WORKSHOPS</h1>
    <hr class="back-line">
     <div class="container" style="background-color:white; margin-top:-35px; height:35px; width:340px;position: relative;display: block; z-index:6">
            <p style="color:white">s</p>
        </div>
    <br>
    <br>
    <br>
    <WorkshopGallery/>

  </div>
</template>

<script>
// @ is an alias to /src
import WorkshopGallery from '@/components/workshopGallery.vue'



export default {
  components: {
    WorkshopGallery
  }
}
</script>

<style lang="scss" scoped>

#redTitle{
  font-family:"bookMan";
  font-size: 45px;
  color: #B91C3B;
   position: relative;
  display: block;
  z-index: 7;
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
