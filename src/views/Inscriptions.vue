<template>
    <div>


        <div class="container-full title">
            <h1 id="redTitle">INSCRIÇÕES</h1>
            <hr class="back-line">
            <div class="container" id="whiteRect">
                <p id="space">space</p>
            </div>
        </div>


        <div class="container table">

            <p class="mt-3" style="float:left">Página Atual: {{ currentPage }}</p>

            <b-table :per-page="perPage" :current-page="currentPage" id="my-table" striped bordered fixed small hover
                head-variant="dark" responsive="sm" :items="this.inscriptions" :fields="fields">
            </b-table>

            <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table"
                style="float:right"></b-pagination>
        </div>



    </div>
</template>

<script>
    export default {
        name: 'InscriptionsTables',
        computed: {
            searchInscriptions() {
                return this.inscriptions;
            }
        },
        data: function () {
            return {
                perPage: 3,
                currentPage: 1,
                fields: [{
                        key: 'workshopName',
                        label: "Workshop",
                        sortable: true
                    },
                    {
                        key: 'date',
                        label: "Data",
                        sortable: false
                    },
                    {
                        key: 'time',
                        label: "Duração",
                        sortable: false
                    },
                    {
                        key: 'clientName',
                        label: "Inscrito",
                        sortable: true
                    }
                ],
            };
            inscriptions: [];
            x: "";
        },
        created() {
            if (localStorage.getItem("inscriptions")) {
                this.inscriptions = JSON.parse(localStorage.getItem("inscriptions"))
            }
        },
        computed: {
            rows() {
                return this.inscriptions.length
            }
        }

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
        padding-bottom: 80px;
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

    .table{
        padding-bottom: 100px;
    }
</style>