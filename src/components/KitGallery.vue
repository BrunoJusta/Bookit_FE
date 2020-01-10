<template>
    <div>

        <div id="CoffeeBreaks" class="container" >
         <!--    <h2 id="redSubTitle">Coffee Break</h2> -->

            <div class="row">
                <div class="col-sm-4" v-for="k in searchKits" :key="k.id">
                    <div id="card-maker">
                        <b-card :title="k.name + ' - ' + k.type" style="max-width: 20rem;" :img-src="k.img" img-height="180rem" class="mb-2 border-0">
                            <b-button class="btn-book" squared  >
                                <router-link :to="{name: x, params: {kitId: k.id}}" class="teste" style="color:white">
                                    Reservar </router-link>
                            </b-button>
                            <b-button @click="deleteKit(k.id)" class="btn-remove border-0" :id="k.id" v-bind:style="{visibility: remove}" squared> X</b-button>
                        </b-card>
                    </div>
                </div>
            </div>
        </div>


       <!--  <div id="JantarGala" class="container">
            <h2 id="redSubTitle">Jantar de Gala</h2>
            <div class="row">
                <div class="col-sm-4" v-for="k in searchKits" :key="k.id">
                    <div id="card-maker" v-if="k.type=='Jantar de Gala'">
                                              <b-card :title="k.name" style="max-width: 20rem;" :img-src="k.img" img-height="180rem" class="mb-2 border-0">

                            <b-button class="btn-book" squared > 
                                <router-link :to="{name: x, params: {kitId: k.id}}" class="teste" style="color:white">
                                    Reservar </router-link>
                            </b-button>
                            <b-button class="btn-remove border-0" @click="deleteKit(k.id)"  v-bind:style="{visibility: remove}" squared> X </b-button>
                        </b-card>
                    </div>
                </div>
            </div>
        </div>
 -->

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
            return {
                kits: [],
                x: "",
                onlineUser: "",
                remove: "",
                choose: ""
            };


        },

        created() {
            if (localStorage.getItem("kits")) {
                this.kits = JSON.parse(localStorage.getItem("kits"))
            }
            if (this.$store.getters.getName == "Entrar") {
                this.x = "login"
            } else {
                this.x = "kitDetail"
            }
            if(this.$store.getters.getName === "Admin"){
                this.remove = "visible"
                this.choose = "hidden"
            }
            else{
                 this.remove = "hidden"
                this.choose = "visible"
            }

            console.log(this.kits[0].img)

        },methods:{
            deleteKit(id){

                for(let i=0; i<=this.kits.length; i++){
                    if(i === id){
                    this.kits.splice(i,1)
                    localStorage.setItem("kits", JSON.stringify(this.kits));
                    alert("KIT ELIMINADO")
                    }
                    
                    

                }

            }
        }


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
        color: #0A2463;
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

    .btn-remove {
        font-size: 10px;
        background-color: #B91C3B;
        margin-top: -230px;
        float: right;
    }

    .back-line {
        background-color: #0A2463;
        margin-top: -10px;
        margin-left: -50px;
        width: 1200px;


    }
</style>