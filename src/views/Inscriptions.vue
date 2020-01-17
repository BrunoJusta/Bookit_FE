<template>
    <div>

        <div class="container-full title">
            <h1 id="redTitle">INSCRIÇÕES</h1>
            <hr class="back-line">
            <div class="container" id="whiteRect">
                <p id="space">space</p>
            </div>
        </div>

        <div class="container table" v-if="this.workshops.length != 0">
            <b-input class="rounded-0" type="text" v-model="searchWorkshops" style="max-width: 300px; margin: auto;" placeholder="Pesquisar..."></b-input>
            <p class="mt-3" style="float:left">Página Atual: {{ currentPage }}</p>
            <b-table :per-page="perPage" :current-page="currentPage" id="my-table" striped bordered small hover
                head-variant="dark" responsive="sm" :items="this.filteredWorkshops" :fields="fields">
                <template v-slot:cell(actions)="row">
                    <b-button size="sm" @click="remove(row.item.id)" class="mr-1">X</b-button>
                </template>
            </b-table>
            <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table"
                style="float:right;"></b-pagination>
        </div>
         <div class="container" v-else>
            <img style="width: 150px;  margin:20px" src="../assets/bookit_BLUE.svg" alt="" srcset="">
            <h4> Não existem Workshops</h4>
        </div>


    </div>
</template>

<script>
    export default {
        name: 'InscriptionsTables',
        data: function () {
            return {
                perPage: 3,
                currentPage: 1,
                fields: [{
                        key: 'name',
                        label: "Workshop",
                        sortable: true
                    },
                    {
                        key: 'inscriptions.length',
                        label: "Vagas Preenchidas",
                        sortable: false
                    },
                    {
                        key: 'vacancies',
                        label: "Vagas Livres",
                        sortable: false
                    },
                    {
                        key: 'actions',
                        label: "Ações",
                        sortable: false
                    },
                ],
                workshops: [],
                x: "",
                currentDate: "",
                searchWorkshops: ""
            }
        },
        created() {
            if (localStorage.getItem("workshops")) {
                this.workshops = JSON.parse(localStorage.getItem("workshops"))
            }
            this.currentDate = this.$store.getters.getCurrentDate
        },
        methods: {
            remove(id) {
                for (let i in this.workshops) {
                    if (this.workshops[i].id === id) {
                        if (this.workshops[i].inscriptions.length !== 0) {
                            alert("Não pode remover este workshop porque já existem incrições feitas!")
                        } else {
                            this.workshops = this.workshops.filter(workshop => this.workshops[i].id != workshop.id);
                            localStorage.setItem("workshops", JSON.stringify(this.workshops));
                            alert("Removido")
                        }
                    }
                }
            }
        },
        computed: {
            filteredWorkshops() {
                return this.workshops.filter(
                    (workshop) => {
                        let filterRunResult = true
                        if (this.searchWorkshops == "") {
                            return filterRunResult
                        }
                        //por workshop
                        if (workshop.name.includes(this.searchWorkshops)) {
                            filterRunResult = workshop.name.includes(this.searchWorkshops)
                            return filterRunResult
                        }
                    }
                )
            }
        },
        searchInscriptions() {
                return this.workshops;
            },
            rows() {
                return this.workshops.length
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

    .table {
        padding-bottom: 100px;
    }
</style>