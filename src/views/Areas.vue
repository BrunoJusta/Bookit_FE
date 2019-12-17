<template>
  <div >
<br>
        <br>
        <br><br>
    <h1 id="redTitle">ESPAÇOS</h1>
    <hr class="back-line">
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
}
.back-line{
    background-color:#0A2463;
    margin-top: -10px;
    width: 1200px;

    
}
</style>