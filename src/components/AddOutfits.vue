<template>
    <div>
        <div class="container-full title">
            <h1 id="redTitle">GERIR FARDAS</h1>
            <hr class="back-line">
            <div class="container box">
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <form @submit.prevent="addOutfit()">
                        <b-input type="text" v-model="name" id="txtOutfit" placeholder="Farda"></b-input>
                        <b-input type="link" v-model="source" id="txtLink" placeholder="link"></b-input>
                        <b-button type="submit" value="Adicionar" class="addBtn rounded-0">Adicionar</b-button>
                    </form>
                </div>
                <div class="col-sm-6" v-if="this.source == ''">
                    <div class="container table" v-if="this.outfits.length != 0">
                        <p class="mt-3" style="float:left">Página Atual: {{ currentPage }}</p>
                        <b-table :per-page="perPage" :current-page="currentPage" id="my-table" striped bordered small
                            hover head-variant="dark" responsive="sm" :items="this.outfits" :fields="fields">
                            <template v-slot:cell(actions)="row">
                                <b-button size="sm" @click="remove(row.item.id)" class="mr-1 deleteBtn">X</b-button>
                            </template>
                        </b-table>
                        <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"
                            aria-controls="my-table" style="float:right;"></b-pagination>
                    </div>
                    <div class="container" v-else>
                        <img src="../assets/bookit_BLUE.svg" class="clearOutfits">
                        <h4> Não existem Fardas</h4>
                    </div>
                </div>
                <div class="col-sm-6" v-else>
                    <label for="imgWorkshop">Imagem da Farda:</label>
                    <img :src="source" id="imgWorkshop">
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
                outfits: [],
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
                source: "",
            }
        },
        created() {
            if (JSON.parse(localStorage.getItem("outfits"))) {
                this.$store.state.outfits = JSON.parse(localStorage.getItem("outfits"))
            }
            this.outfits = this.$store.state.outfits

        },
        methods: {
            addOutfit() {
                let createType = true
                //verificar se existe
                for (let i in this.outfits) {
                    if (this.name.toLowerCase() == this.outfits[i].name.toLowerCase()) {
                        createType = false;
                    }
                }
                if (createType == true) {
                    this.outfits.push({
                        id: this.$store.getters.outfitLastId + 1,
                        name: this.name,
                        source: this.source
                    })
                    localStorage.setItem("outfits", JSON.stringify(this.outfits));
                    this.name = ""
                    this.source = ""
                    Swal.fire({
                        icon: 'success',
                        text: 'Adicionado!',
                    })
                } else {
                    this.name = ""
                    this.source = ""
                    Swal.fire({
                        icon: 'error',
                        text: 'Esta farda já existe!',
                    })
                }
            },
            remove(id) {
                Swal.fire({
                    icon: 'warning',
                    text: 'Deseja remover este outfit?',
                    showCancelButton: true,
                }).then((result) => {
                    if (result.value) {
                        for (let i in this.outfits) {
                            if (this.outfits[i].id === id) {
                                this.outfits = this.outfits.filter(d => this.outfits[i].id != d
                                    .id);
                                localStorage.setItem("outfits", JSON.stringify(this.outfits));
                                Swal.fire({
                                    icon: 'success',
                                    text: 'Removido!',
                                })
                            }
                        }
                    }
                })
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
    .box {
        background-color: white;
        margin-top: -35px;
        height: 35px;
        width: 400px;
        position: relative;
        display: block;
        z-index: 6
    }

    #txtOutfit {
        border-radius: 0;
        width: 300px;
        height: 40px;
        margin-bottom: 20px;
        margin-top: 56px;
    }

    #txtLink {
        border-radius: 0;
        width: 300px;
        height: 40px;
        margin-bottom: 20px;
    }

    .clearOutfits {
        width: 150px;
        margin: 20px
    }

    #imgWorkshop {
        width: 350px;
        height: auto;
    }

    .addBtn {
        height: 40px;
        font-size: 18px;
        background-color: #0A2463;
        color: white;
        margin: auto;
    }

    #redTitle {
        font-family: "bookMan";
        font-size: 45px;
        color: #B91C3B;
        display: block;
        z-index: 7;
        position: relative;
    }

    .title {
        padding-top: 80px;
        padding-bottom: 30px;
    }

    .back-line {
        background-color: #0A2463;
        margin-top: -36px;
        width: 90%;
        display: block;
        z-index: 5;
        position: relative;
        height: 1px;
    }

    .deleteBtn {
        background-color: #B91C3B;
        border: none;
        border-radius: 0;
    }

    .col-sm-6 {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>