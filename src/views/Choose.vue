<template>
    <div>
        <br>
        <br>
<br>
        <br>
        <h1 id="redTitle">RESERVAS</h1>
    <hr class="back-line">

        <div class="container" style="padding-top:100px">
            <div class="row">
                <div class="col-sm-6">
                    <div id="card-maker" style="padding-bottom: 60px">
                        <b-card img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article" class="border-0"
                            style="max-width: 30rem;">
                            <h3 class=" card-title">
                                <router-link to="/menuKits" class="teste" style="color:black">EVENTOS & CATERING</router-link>
                            </h3>
                        </b-card>
                    </div>
                </div>

                <div class="col-sm-6">
                    <div id="card-maker" style="padding-bottom: 60px">
                        <b-card img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article" class="border-0"
                            style="max-width: 30rem;">
                            <h3 class=" card-title">
                                <router-link to="/areas" class="teste" style="color:black">ESPAÇOS</router-link>
                            </h3>
                        </b-card>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
#redTitle{
  font-family:"bookMan";
  font-size: 45px;
  color: #B91C3B;
}
a{
  float: left;
}
.back-line{
    background-color:#0A2463;
    margin-top: -10px;
    width: 1200px;

    
}
</style>