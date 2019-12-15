<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-sm-6" v-for="a in searchAreas" :key="a.id">
                    <div id="card-maker" style="padding-bottom: 60px">
                        <b-card img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article"
                            style="max-width: 30rem;">
                            <h2 class=" card-title">{{a.name}}</h2>
                            <b-button style="background-color:#0A2463; margin-bottom:-60px;" squared>Reservar</b-button>
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
                return this.$store.state.areas;
            }
        },
        data() {
            return {};
        }
    }
</script>