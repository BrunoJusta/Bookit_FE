<template>
  <div class="home">
    <Carousel/>
    <br>
    <br>
    <h1 id="redTitle" style="padding-top:30px;">SOBRE NÓS</h1>
    <hr class="back-line">
    
    <div class="container" style="padding-bottom:50px; padding-top:10px;">
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was 
        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
        publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
    
    <h1 id="redTitle">RESERVAS</h1>
            <hr class="back-line">

    <br>
    <div class="container">
            <div class="row">
                <div class="col-sm-4">
                        <b-card img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article"
                            style="max-width: 24rem;" class="mb-2 border-0">
                            <router-link  id="link" to="/menuKits">Eventos & Catering</router-link>
                        </b-card>
                </div>
                   <div class="col-sm-4">
                        <b-card img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article"
                            style="max-width: 24rem;" class="mb-2 border-0">
                             <router-link id="link" to="/areas">Espaços</router-link>
                        </b-card>
                </div>
                   <div class="col-sm-4">
                        <b-card img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article"
                            style="max-width: 24rem;" class="mb-2 border-0">
                             <router-link id="link" to="/">Workshops</router-link>
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
  font-size: 25px;
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