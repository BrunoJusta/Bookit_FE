<template>
    <div>

<br>
<br>
<br>
<br>
<br>
<br>
<br>
   
    <h1 id="redTitle">ADICIONAR MENU</h1>
     <hr class="back-line">
     <div class="container" style="background-color:white; margin-top:-35px; height:35px; width:580px;position: relative;display: block; z-index:6">
     <p style="color:white">s</p>
        </div>
<br>
<br>

        <AddKit/>
    </div>
</template>

<script>
    import AddKit from '@/components/AddKit.vue';
    import KitGallery from '@/components/KitGallery.vue'

    export default {
        data: function () {
            return {
            }
        },
         components: {
            AddKit,
            KitGallery

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