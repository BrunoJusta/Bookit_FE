<template>
    <div>
        <div class="container-full title">
            <h1 id="redTitle">RESERVAS</h1>
            <hr class="back-line">
            <div class="container" id="whiteRect">
                <p id="space">space</p>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm-5">
                    <router-link to="/menuGallery" class="link">
                        <div id="card-maker">
                            <b-card title="EVENTOS & CATERING" img-src="../assets/eventosCatering.png" class="border-0">
                                <h3 class=" card-title">

                                </h3>
                            </b-card>
                        </div>
                    </router-link>
                </div>
                <div class="col-sm-2">
                </div>
                <div class="col-sm-5">
                    <router-link to="/areasGallery" class="link">
                        <div id="card-maker">
                            <b-card title="ESPAÇOS" img-src="../assets/bar.png" class="border-0">
                                <h3 class=" card-title">
                                </h3>
                            </b-card>
                        </div>
                    </router-link>
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
    #redTitle {
        font-family: "bookMan";
        font-size: 45px;
        color: #B91C3B;
        display: block;
        z-index: 7;
        position: relative;
    }


    .border-0 {
        max-width: 30rem;
    }

    .back-line {
        background-color: #0A2463;
        margin-top: -35px;
        width: 90%;
        display: block;
        z-index: 5;
        position: relative;
    }

    #space {
        color: white;
    }

    .title {
        padding-top: 180px;
        padding-bottom: 80px;
    }

    #whiteRect {
        background-color: white;
        margin-top: -35px;
        height: 35px;
        width: 290px;
        position: relative;
        display: block;
        z-index: 5;
    }

    .link {
        color: black;
        font-size: 20px;
    }

    .card-img {
        border-radius: 0 !important;
    }
  
  #card-maker{
  transition: all .2s ease-in-out;
  }

  #card-maker:hover {
    transform: scale(1.1);
  }

</style>