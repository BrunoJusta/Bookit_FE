<template>
    <div>
        <div class="container-full title">
            <h1 id="redTitle">GERIR DECORAÇÃO</h1>
            <hr class="back-line">
            <div class="container box">
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <form @submit.prevent="addDecor()">
                        <b-input type="text" v-model="name" id="txtDecor" placeholder="Decoração"></b-input>
                        <b-button type="submit" value="Adicionar" class="addBtn rounded-0">Adicionar</b-button>
                    </form>
                </div>
                <div class="col-sm-6">
                    <div class="container table" v-if="this.decor.length != 0">
                        <p class="mt-3" style="float:left">Página Atual: {{ currentPage }}</p>
                        <b-table :per-page="perPage" :current-page="currentPage" id="my-table" striped bordered small
                            hover head-variant="dark" responsive="sm" :items="this.decor" :fields="fields">
                            <template v-slot:cell(actions)="row">
                                <b-button size="sm" @click="remove(row.item.id)" class="mr-1 deleteBtn">X</b-button>
                            </template>
                        </b-table>
                        <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"
                            aria-controls="my-table" style="float:right;"></b-pagination>
                    </div>
                    <div class="container" v-else>
                        <img class="image" src="../assets/bookit_BLUE.svg">
                        <h4> Não existem decorações</h4>
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
                name: "",
                type: "",
                perPage: 3,
                currentPage: 1,
                fields: [{
                        key: 'name',
                        label: "Decoração",
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
            if (JSON.parse(localStorage.getItem("decor"))) {
                this.$store.state.decor = JSON.parse(localStorage.getItem("decor"))
            }
            this.decor = this.$store.state.decor
        },
        methods: {
            addDecor() {
                let createType = true
                //verificar se existe
                for (let i in this.decor) {
                    if (this.name.toLowerCase() == this.decor[i].name.toLowerCase()) {
                        createType = false;
                    }
                }
                if (createType == true) {
                    this.decor.push({
                        id: this.$store.getters.decorLastId + 1,
                        name: this.name
                    })
                    localStorage.setItem("decor", JSON.stringify(this.decor));
                    this.name = ""
                    Swal.fire({
                        icon: 'success',
                        text: 'Adicionado!'
                    })
                } else {
                    this.name = ""
                    Swal.fire({
                        icon: 'error',
                        text: 'Esta Decoração já existe!',
                    })
                }
            },
            remove(id) {
                Swal.fire({
                    icon: 'warning',
                    text: 'Deseja remover esta decoração?',
                    showCancelButton: true,
                }).then((result) => {
                    if (result.value) {
                        for (let i in this.decor) {
                            if (this.decor[i].id === id) {
                                this.decor = this.decor.filter(d => this.decor[i].id != d
                                    .id);
                                localStorage.setItem("decor", JSON.stringify(this.decor));
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
                return this.decor;
            },
            rows() {
                return this.decor.length
            }
        }
    }
</script>

<style lang="scss" scoped>

    .title {
        padding-top: 80px;
        padding-bottom: 30px;
    }

    .box {
        background-color: white;
        margin-top: -35px;
        height: 35px;
        width: 500px;
        position: relative;
        display: block;
        z-index: 6
    }

    #txtDecor {
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
        margin-top: -36px;
        width: 90%;
        display: block;
        z-index: 5;
        position: relative;
        height: 0.5px;
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

    .image {
        width: 150px;
        margin: 20px;
    }
</style>