<template>
    <div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <h2>Gerir Fardas</h2>

        <div class="container">

            <div class="row">

                <div align="center" id="AddIng" class="col-sm-6">
                    <form @submit.prevent="addOutfit()">
                        <input type="text" v-model="name" name="" id="ingNome" placeholder="Farda">
                        <br>
                        <input type="link" v-model="source" name="" id="ingNome" placeholder="link">
                        <br>
                        <button type="submit" value="Adicionar" class="btn btn-book rounded-0">Adicionar</button>
                    </form>
                </div>


                <div class="col-sm-6">

                    <div class="container table" v-if="this.outfits.length != 0">
                        <p class="mt-3" style="float:left">Página Atual: {{ currentPage }}</p>
                        <b-table :per-page="perPage" :current-page="currentPage" id="my-table" striped bordered small
                            hover head-variant="dark" responsive="sm" :items="this.outfits" :fields="fields">
                            <template v-slot:cell(actions)="row">
                                <b-button size="sm" @click="remove(row.item.id)" class="mr-1">X</b-button>
                            </template>
                        </b-table>
                        <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"
                            aria-controls="my-table" style="float:right;"></b-pagination>
                    </div>
                    <div class="container" v-else>
                        <img style="width: 150px;  margin:20px" src="../assets/bookit_BLUE.svg" alt="" srcset="">
                        <h4> Não existem Fardas</h4>
                    </div>

                </div>






            </div>

        </div>







    </div>
</template>

<script>
    export default {
        name: "AddOns",
        data: function () {
            return {
                decor: [],
                perPage: 3,
                currentPage: 1,
                fields: [{
                        key: 'name',
                        label: "Farda",
                        sortable: true
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
                searchWorkshops: "",
                name: "",
                type: "",
            }
        },
        created() {
            if (JSON.parse(localStorage.getItem("outfits"))) {
                this.$store.state.outfits= JSON.parse(localStorage.getItem("outfits"))
            }
            this.outfits = this.$store.state.outfits

        },
        methods: {
            addOutfit() {
                this.outfits.push({
                    id: this.$store.getters.outfitLastId + 1,
                    name: this.name,
                    source: this.source
                })
                localStorage.setItem("outfits", JSON.stringify(this.outfits));
                alert("Adicionado!")



            },
            remove(id) {
                for (let i in this.outfits) {
                    if (this.outfits[i].id === id) {
                        this.outfits = this.outfits.filter(d => this.outfits[i].id != d
                            .id);
                        localStorage.setItem("outfits", JSON.stringify(this.outfits));
                        alert("Removido")
                    }
                }
            }
        },
        computed: {
            searchKits() {
                return this.outfits;
            },
            rows() {
                return this.outfits.length
            }
        }
    }
</script>

<style lang="scss" scoped>
    #ingNome {
        width: 300px;
        height: 40px;
        margin-bottom: 20px;
        margin-top: 56px;
    }

    #ingType {
        width: 300px;
        height: 40px;
        margin-bottom: 20px;
    }


    .btn-book {
        font-size: 18px;
        background-color: #0A2463;
        color: white;
        margin: 20px;
        margin-top: 50px;

    }
</style>