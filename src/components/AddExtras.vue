<template>
    <div>
        <div class="container-full title">
            <h1 id="redTitle">GERIR EXTRAS</h1>
            <hr class="back-line">
            <div class="container box">
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <form @submit.prevent="addExtra()">
                        <b-input type="text" v-model="name" id="txtExtra" placeholder="Extra"></b-input>
                        <b-button type="submit" value="Adicionar" class="addBtn rounded-0">Adicionar</b-button>
                    </form>
                </div>
                <div class="col-sm-6">
                    <div class="container table" v-if="this.extras.length != 0">
                        <p class="mt-3" style="float:left">Página Atual: {{ currentPage }}</p>
                        <b-table :per-page="perPage" :current-page="currentPage" id="my-table" striped bordered small
                            hover head-variant="dark" responsive="sm" :items="this.extras" :fields="fields">
                            <template v-slot:cell(actions)="row">
                                <b-button size="sm" @click="remove(row.item.id)" class="mr-1 deleteBtn"><i class="fas fa-trash-alt"></i></b-button>
                            </template>
                        </b-table>
                        <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"
                            aria-controls="my-table" style="float:right;"></b-pagination>
                    </div>
                    <div class="container" v-else>
                        <img class="image" src="../assets/bookit_BLUE.svg" alt="" srcset="">
                        <h4> Não existem Extras</h4>
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
                extras: [],
                name: "",
                type: "",
                perPage: 3,
                currentPage: 1,
                fields: [{
                        key: 'name',
                        label: "Extra",
                        sortable: true
                    },
                    {
                        key: 'actions',
                        label: "Ações",
                        sortable: false
                    },
                ],

            }
        },
        created() {
            if (JSON.parse(localStorage.getItem("extras"))) {
                this.$store.state.extras = JSON.parse(localStorage.getItem("extras"))
            }
            this.extras = this.$store.state.extras

        },
        methods: {
            addExtra() {
                let createType = true
                //verificar se existe
                for (let i in this.extras) {
                    if (this.name.toLowerCase() == this.extras[i].name.toLowerCase()) {
                        createType = false;
                    }
                }
                if (createType == true) {
                    this.extras.push({
                        id: this.$store.getters.extrasLastId + 1,
                        name: this.name
                    })
                    localStorage.setItem("extras", JSON.stringify(this.extras));
                    this.name = ""
                    Swal.fire({
                        icon: 'success',
                        text: 'Adicionado!',
                    })
                } else {
                    this.name = ""
                    Swal.fire({
                        icon: 'error',
                        text: 'Este extra já existe!',
                    })
                }
            },
            remove(id) {
                Swal.fire({
                    icon: 'warning',
                    text: 'Deseja remover este extra?',
                    showCancelButton: true,
                }).then((result) => {
                    if (result.value) {
                        for (let i in this.extras) {
                            if (this.extras[i].id === id) {
                                this.extras = this.extras.filter(extra => this.extras[i].id != extra
                                    .id);
                                localStorage.setItem("extras", JSON.stringify(this.extras));
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
            searchExtras() {
                return this.extras;
            },
            rows() {
                return this.extras.length
            }
        }
    }
</script>

<style lang="scss" scoped>
    .image {
        width: 150px;
        margin: 20px;
    }

    .title {
        padding-top: 80px;
        padding-bottom: 30px;
    }

    .box {
        background-color: white;
        margin-top: -35px;
        height: 35px;
        width: 400px;
        position: relative;
        display: block;
        z-index: 6
    }

    #txtExtra {
        border-radius: 0;
        width: 300px;
        height: 40px;
        margin-bottom: 20px;
        margin-top: 56px;
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

    .back-line {
        background-color: #0A2463;
        margin-top: -35px;
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