<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-sm-4" v-for="W in searchWorkshops" :key="W.id">
                    <div id="card-maker" style="padding-bottom: 60px">
                        <b-card img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article"
                            style="max-width: 24rem;" class="border-0">
                            <h2 class=" card-title">{{W.name}}</h2>
                            <b-button class="btn-book" style="background-color:#0A2463; margin-bottom:-60px;" squared>Reservar</b-button>
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
                return this.$store.state.workshops;
            }
        },
        data() {
            return {};
        }
    }
</script>

<style lang="scss" scoped>
#card-maker{
padding-bottom: 60px;
padding-top: 30px;
}

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