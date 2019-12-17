<template>
  <div >
<br>
<br>
        <br>
        <br>
    <h1 id="redTitle">WORKSHOPS</h1>
    <hr class="back-line">
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
}
.back-line{
    background-color:#0A2463;
    margin-top: -10px;
    width: 1200px;

    
}
</style>
