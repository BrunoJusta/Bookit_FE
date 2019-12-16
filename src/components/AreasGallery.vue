<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-sm-6" v-for="a in searchAreas" :key="a.id">
                    <div id="card-maker" style="padding-bottom: 60px">
                        <b-card img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article"
                            style="max-width: 30rem;" class="border-0">
                            <h2 class=" card-title">{{a.name}}</h2>
                            <b-button class="btn-book" squared>
                                <router-link :to="{name: x, params: {areaId: a.id}}" class="teste" style="color:white">
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
        name: 'AreasGallery',
        computed: {
            searchAreas() {
                return this.areas;
            }
        },
        data: function () {
            return {};
            areas: [];
            x: "";
            teste: $store.state.logged;
        },
        created() {
            if (localStorage.getItem("areas")) {
                this.areas = JSON.parse(localStorage.getItem("areas"))
            }
            if (!this.$store.getters.getUserOn) {
                this.x = "login"
            } else {
                this.x = "areaDetail"
            }
        },
    }
</script>

<style lang="scss" scoped>
.border-0 {
--webkit-box-shadow: 0px 4px 5px -1px rgba(184,184,184,0.31);
-moz-box-shadow: 0px 4px 5px -1px rgba(184,184,184,0.31);
box-shadow: 0px 4px 5px -1px rgba(184,184,184,0.31);
}
.btn-book{
    font-size: 18px;
    background-color:#0A2463; 
    margin-bottom:-60px;
}
</style>