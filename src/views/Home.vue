<template>
  <div class="home">
    <Carousel/>
    <br>
    <br>
    <h1>RESERVAS</h1>
    <br>
    <div class="container">
            <div class="row">
                <div class="col-sm-4">
                        <b-card title="" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article"
                            style="max-width: 24rem;" class="mb-2">
                            <router-link to="/menuKits">Eventos & Catering</router-link>
                        </b-card>
                </div>
                   <div class="col-sm-4">
                        <b-card title="" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article"
                            style="max-width: 24rem;" class="mb-2">
                             <router-link to="/">Espaços</router-link>
                        </b-card>
                </div>
                   <div class="col-sm-4">
                        <b-card title="" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article"
                            style="max-width: 24rem;" class="mb-2">
                             <router-link to="/">Workshops</router-link>
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
