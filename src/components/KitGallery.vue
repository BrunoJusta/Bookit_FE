<template>
    <div>

        <div id="CoffeeBreaks" class="container">
            <h2>Coffee Break</h2>
            <div class="row">
                <div class="col-sm-4" v-for="k in searchKits" :key="k.id">
                    <div id="card-maker" v-if="k.type=='cB'">
                        <b-card img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article"
                            style="max-width: 20rem;" class="mb-2">
                            <h2 class=" card-title">{{k.name}}</h2>
                            <b-button style="background-color:#0A2463; margin-bottom:-60px;" squared>Reservar</b-button>
                        </b-card>
                    </div>

                </div>
            </div>
        </div>

        <br>
        <br>
        <br>

        <div id="JantarGala" class="container">
            <h2>Jantar de Gala</h2>
            <div class="row">
                <div class="col-sm-4" v-for="k in searchKits" :key="k.id">
                    <div id="card-maker" v-if="k.type=='jG'">
                        <b-card img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article"
                            style="max-width: 20rem;" class="mb-2">
                            <h2 class=" card-title">{{k.name}}</h2>
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
        name: 'KitGallery',
        computed: {
            searchKits() {
                return this.$store.state.kits;
            }
        },
        data() {
            return {};
        }
    }
</script>