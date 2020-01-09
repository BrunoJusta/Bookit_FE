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
                <div class="col-sm-6">
                    <div id="card-maker">
                        <b-card img-src="../assets/eventosCatering.png" class="border-0">
                            <h3 class=" card-title">
                                <router-link to="/menuKits" class="link">EVENTOS & CATERING</router-link>
                            </h3>
                        </b-card>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div id="card-maker">
                        <b-card img-src="../assets/bar.png" class="border-0">
                            <h3 class=" card-title">
                                <router-link to="/areas" class="link">ESPAÇOS</router-link>
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
    #redTitle {
        font-family: "bookMan";
        font-size: 45px;
        color: #B91C3B;
        display: block;
        z-index: 7;
        position: relative;
    }

    a {
        float: left;
    }

    #card-maker {
        padding-bottom: 160px
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
        padding-bottom: 150px;
    }

    #whiteRect {
        background-color: white;
        margin-top: -35px;
        height: 35px;
        width: 340px;
        position: relative;
        display: block;
        z-index: 5;
    }

    .link {
        color: black;
    }
    
</style>