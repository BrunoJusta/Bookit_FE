<template>
    <div class="menuDetail">
        <div class="container">
            <b-card no-body class="border-1" style="width: 1100px;">
                <b-row no-gutters>
                    <b-col md="6">
                        <b-card-img v-bind:src="img" class="rounded-0"></b-card-img>
                    </b-col>
                    <b-col md="6">
                        <b-card-body>
                            <h3 class="display-3" v-if="newType !== ''">
                                {{name}} - {{newType}}</h3>
                            <h3 class="display-3" v-else>
                                {{name}} - {{type}}</h3>
                            <div class="row">
                                <div class="col-sm-6 drinks">
                                    <h6><i class="fas fa-wine-glass-alt" id="icon"></i>BEBIDA</h6>
                                    <p>{{ drinks.length == 0 ? 'Sem Bebida' : '' + drinks }}</p>
                                </div>
                                <div class="col-sm-6 food">
                                    <h6><i class="fas fa-cheese" id="icon"></i>COMIDA</h6>
                                    <p>{{ food.length == 0 ? 'Sem Comida' : '' + food }}</p>
                                </div>
                            </div>
                        </b-card-body>
                    </b-col>
                </b-row>
            </b-card>
        </div>
    </div>

</template>

<script>
    export default {
        props: {
            name: String,
            type: String,
            newType: String,
            img: String,
            food: Array,
            drinks: Array
        }
    }
</script>
<style lang="scss" scoped>
    @font-face {
        font-family: bookMan;
        src: url(../assets/bookman.ttf);
    }

    #editTitle {
        margin: auto;
        margin-top: 180px;
        margin-bottom: 30px;
    }

    .display-2 {
        padding-top: 160px;
        padding-bottom: 20px;
        font-family: bookMan;
        font-size: 40px;
        color: #B91C3B;
    }

    .display-3 {
        padding-bottom: 20px;
        font-family: bookMan;
        font-size: 30px;
        color: #B91C3B;
    }

    .card-img {
        border-radius: 0 !important;
    }


    .card {
        border-radius: 0 !important;
    }

    h6 {
        color: #0A2463;
        font-weight: bold;
    }

    img {
        border-right: solid 10px #0A2463;
        height: 350px;
    }

    .border-1 {
        -webkit-box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.12);
        -moz-box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.12);
        box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.12);
    }

    .food,
    .drinks {
        padding-top: 0px;
    }

    #icon {
        padding-right: 6px;
    }
</style>