<template>
  <div class="home">
     <br>
    <br>
    <br>
    <br>
    <br>
    <div class="container-full">
      <img src="../assets/tabuleiro.jpg" style="max-width: 100%; height: auto;">
        <b-button squared style="background-color:#0A2463;  margin-top:-150px; border-color:white; font-size:18px;" >RESERVAR</b-button>
    </div>
    <br>
    <br>
    <h1 id="redTitle" style="padding-top:30px;">OPÇÕES</h1>
    <hr class="back-line">
    
    <br>
    <div class="container">
            <div class="row">
                <div class="col">
                        <b-card img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article"
                            style="max-width: 12rem;" class="mb-2 border-0">
                            <router-link  id="link" to="/bookings">Resrvas</router-link>
                        </b-card>
                </div>
                   <div class="col">
                        <b-card img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article"
                            style="max-width: 12rem;" class="mb-2 border-0">
                             <router-link id="link" to="/areas">Workshops</router-link>
                        </b-card>
                </div>
                   <div class="col">
                        <b-card img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article"
                            style="max-width: 12rem;" class="mb-2 border-0">
                             <router-link id="link" to="/">Kits</router-link>
                        </b-card>
                </div>
                <div class="col">
                        <b-card img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article"
                            style="max-width: 12rem;" class="mb-2 border-0">
                             <router-link id="link" to="/areas">Stock</router-link>
                        </b-card>
                </div>
                   <div class="col">
                        <b-card img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article"
                            style="max-width: 12rem;" class="mb-2 border-0">
                             <router-link id="link" to="/">Utilizadores</router-link>
                        </b-card>
                </div>
            </div>
        </div>
        <br>
    <br>
    <br>
    <br>
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
    Carousel,
  }
}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: bookMan;
  src: url(../assets/bookman.ttf);
}
a{
  float: left;

}
#link{
  color: black;
  font-size: 20px;
}

#redTitle{
  font-family:"bookMan";
  font-size: 45px;
  color: #B91C3B;
}
.card-body{
  padding:0rem;
  padding-top: 1rem;
}
.back-line{
    background-color:#0A2463;
    height: 0.1px;
    margin-top: -10px;
    width: 1200px;   
}

</style>