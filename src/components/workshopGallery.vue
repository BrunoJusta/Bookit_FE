<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-sm-4" v-for="w in searchWorkshops" :key="w.id">
                    <div id="card-maker" style="padding-bottom: 60px">
                        <b-card :title="w.name" style="max-width: 24rem;" :img-src="w.img" img-height="180rem"
                            class="mb-2 border-0">
                            <b-button v-if="w.vacancies !== 0" class="btn-book" squared>
                                <router-link :to="{name: x, params: {workshopId: w.id}}" class="teste"
                                    style="color:white">
                                    Ver Mais </router-link>
                            </b-button>
                            <p v-else>CHEIO</p>

                            <b-button @click="deleteWorkshop(w.id)" class="btn-remove border-0" :id="w.id"
                                v-bind:style="{visibility: remove}" squared> X </b-button>
                        </b-card>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'workshopGallery',
        data: function () {
            return {
                kits: [],
                x: "",
                remove: "",
                choose: "",
            };

        },
        created() {
            if (localStorage.getItem("workshops")) {
                this.workshops = JSON.parse(localStorage.getItem("workshops"))
            }
            if (this.$store.getters.getName == "Entrar") {
                this.x = "login"
            } else {
                this.x = "workshopDetail"
            }
            if (this.$store.getters.getName === "Admin") {
                this.remove = "visible"
                this.choose = "hidden"
            } else {
                this.remove = "hidden"
                this.choose = "visible"
            }

        },
        methods: {
            deleteWorkshop(id) {

                for (let i = 0; i <= this.workshops.length; i++) {
                    if (i === id) {
                        this.workshops.splice(i, 1)
                        localStorage.setItem("workshops", JSON.stringify(this.workshops));
                        alert("WORKSHOP ELIMINADO")
                    }



                }
                location.reload()

            }
        },
        computed: {
            searchWorkshops() {
                return this.workshops;
            }
        },
    }
</script>

<style lang="scss" scoped>
    #card-maker {
        padding-bottom: 60px;
        padding-top: 30px;
    }

    .border-0 {
        --webkit-box-shadow: 0px 4px 5px -1px rgba(184, 184, 184, 0.31);
        -moz-box-shadow: 0px 4px 5px -1px rgba(184, 184, 184, 0.31);
        box-shadow: 0px 4px 5px -1px rgba(184, 184, 184, 0.31);
    }

    .btn-book {
        font-size: 18px;
        background-color: #0A2463;
        margin-bottom: -60px;
    }

    .card-title {
        font-size: 20px;
        margin-bottom: .0rem;
    }

    .card-img {
        border-radius: 0 !important;
    }


    .card {
        border-radius: 0 !important;
    }

      .btn-remove {
        font-size: 10px;
        background-color: #B91C3B;
        margin-top: -218px;
        margin-right: -15px;
        float: right;
    }
</style>