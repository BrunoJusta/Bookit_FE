<template>
    <div>

        <div id="CoffeeBreaks" class="container">
            <h2 id="redSubTitle">Coffee Break</h2>
            <hr class="back-line">
            <div class="row">
                <div class="col-sm-4" v-for="k in searchKits" :key="k.id">
                    <div id="card-maker" v-if="k.type=='cB'">
                        <b-card img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article"
                            style="max-width: 20rem;" class="mb-2 border-0">
                            <h2 class=" card-title">{{k.name}}</h2>
                            <b-button class="btn-book" squared>
                                <router-link :to="{name: x, params: {kitId: k.id}}" class="teste" style="color:white">
                                    Reservar </router-link>
                            </b-button>
                        </b-card>
                    </div>

                </div>
            </div>
        </div>


        <div id="JantarGala" class="container">
            <h2 id="redSubTitle">Jantar de Gala</h2>
            <hr class="back-line">

            <div class="row">
                <div class="col-sm-4" v-for="k in searchKits" :key="k.id">
                    <div id="card-maker" v-if="k.type=='jG'">
                        <b-card img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article"
                            style="max-width: 20rem;" class="mb-2 border-0">
                            <h2 class=" card-title">{{k.name}}</h2>
                            <b-button class="btn-book" squared>
                                <router-link :to="{name: x, params: {kitId: k.id}}" class="teste" style="color:white">
                                    Reservar </router-link>
                            </b-button>
                        </b-card>
                    </div>

                </div>
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        name: 'KitGallery',
        computed: {
            searchKits() {
                return this.kits;
            }
        },
        data: function () {
            return {};
            kits: [];
            x: "";
            teste: $store.state.logged;
        },

        created() {
            if (localStorage.getItem("kits")) {
                this.kits = JSON.parse(localStorage.getItem("kits"))
            }
            if (!this.$store.getters.getUserOn) {
                this.x = "login"
            } else {
                this.x = "kitDetail"
            }
        },

    }
</script>

<style lang="scss" scoped>
    #card-maker {
        padding-bottom: 60px;
        padding-top: 30px;
    }

    #redSubTitle {
        font-family: "bookMan";
        font-size: 35px;
        color: #B91C3B;
    }

    .mb-2 {
        --webkit-box-shadow: 0px 4px 5px -1px rgba(184, 184, 184, 0.31);
        -moz-box-shadow: 0px 4px 5px -1px rgba(184, 184, 184, 0.31);
        box-shadow: 0px 4px 5px -1px rgba(184, 184, 184, 0.31);
    }

    .btn-book {
        font-size: 18px;
        background-color: #0A2463;
        margin-bottom: -60px;
    }

    .back-line {
        background-color: #0A2463;
        margin-top: -10px;
        margin-left: -50px;
        width: 1200px;


    }
</style>