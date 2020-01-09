<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-sm-4" v-for="W in searchWorkshops" :key="W.id">
                    <div id="card-maker" style="padding-bottom: 60px">
                        <b-card style="max-width: 24rem;" :img-src="W.img" img-height="180rem" class="mb-2 border-0">
                            <h2 class=" card-title">{{W.name}}</h2>
                            <b-button class="btn-book" squared>
                                <router-link :to="{name: x, params: {workshopId: W.id}}" class="teste" style="color:white">
                                    Reservar </router-link>
                            </b-button>
                            <b-button @click="deleteWorkshop(W.id)" class="btn-remove" :id="W.id"
                                v-bind:style="{visibility: remove}" squared> Remover </b-button>
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
        computed: {
            searchWorkshops() {
                return this.workshops;
            }
        },
        data: function () {
            return {
                kits: [],
                x: "",
                teste: $store.state.logged,
                remove: "",
                choose: ""
            };

        },
        created() {
            if (localStorage.getItem("workshops")) {
                this.workshops = JSON.parse(localStorage.getItem("workshops"))
            }
            if (!this.$store.getters.getUserOn) {
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

        },methods:{
            deleteWorkshop(id){

                for(let i=0; i<=this.workshops.length; i++){
                    if(i === id){
                    this.workshops.splice(i,1)
                    localStorage.setItem("workshops", JSON.stringify(this.workshops));
                    alert("WORKSHOP ELIMINADO")
                    }
                    
                    

                }
                location.reload()

            }
        }
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
</style>