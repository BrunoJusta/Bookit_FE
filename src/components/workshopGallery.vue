<template>
    <div>
        <div class="container">
            <div class="container" style="max-width:300px">
                <b-form-input size="sm" class="mr-sm rounded-0" v-model="searchTxt" placeholder="Pesquisar...">
                </b-form-input>

            </div>
            <div class="row">
                <div class="col-sm-4" v-for="w in filteredRunnings" :key="w.id">
                    <div id="card-maker" style="padding-bottom: 60px">
                        <b-card :title="w.name" style="max-width: 24rem;" :img-src="w.img" img-height="180rem"
                            class="mb-2 border-0">
                            <b-button v-if="w.vacancies !== 0" class="btn-book" squared>
                                <router-link :to="{name: x, params: {workshopId: w.id}}" class="teste"
                                    style="color:white">
                                    Ver Mais </router-link>
                            </b-button>
                            <p v-else>CHEIO</p>

                            <b-button @click="deleteWorkshop(w.name)" class="btn-remove border-0" :id="w.id"
                                v-bind:style="{visibility: remove}" squared> X </b-button>
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
        data: function () {
            return {
                workshops: [],
                users: [],
                searchTxt: "",
                x: "",
                remove: "",
                choose: "",
            };

        },
        created() {
            if (localStorage.getItem("workshops")) {
                this.workshops = JSON.parse(localStorage.getItem("workshops"))
            }
            if (this.$store.getters.getName == "Entrar") {
                this.x = "login"
            } else {
                this.x = "workshopDetail"
            }
            if (this.$store.getters.getUserType === "admin") {
                this.remove = "visible"
                this.choose = "hidden"
            } else {
                this.remove = "hidden"
                this.choose = "visible"
            }


            if (localStorage.getItem("users")) {
                this.$store.state.users = JSON.parse(localStorage.getItem("users"))
            }

            this.users = this.$store.state.users

        },
        methods: {
            deleteWorkshop(name) {
                Swal.fire({
                    icon: 'warning',
                    text: 'Deseja remover este workshop?',
                    showCancelButton: true,
                }).then((result) => {
                    if (result.value) {
                        for (let i = 0; i <= this.workshops.length; i++) {
                            if (this.workshops[i].name === name) {
                                for (let j in this.users) {
                                    if (this.users[j].userType === "cliente") {
                                        this.users[j].notifications.push({
                                            txt: 'O Workshop' + this.workshops[i].name +
                                                ' foi removido da galeria de workshops!'
                                        })
                                        localStorage.setItem("users", JSON.stringify(this.users));
                                    }
                                }
                                this.workshops.splice(i, 1)
                                localStorage.setItem("workshops", JSON.stringify(this.workshops));
                                Swal.fire({
                                    icon: 'success',
                                    text: 'Workshop eliminado!'
                                })
                            }
                        }
                    }
                })
            }
        },
        computed: {
            searchWorkshops() {
                return this.workshops;
            },
            filteredRunnings() {
                return this.workshops.filter(
                    (workS) => {
                        let filterResult = true
                        if (this.searchTxt == "") {
                            return filterResult
                        }
                        if (workS.name.toLowerCase().includes(this.searchTxt.toLowerCase())) {
                            filterResult = workS.name.toLowerCase().includes(this.searchTxt.toLowerCase())
                            return filterResult
                        }

                    }
                )


            }
        },
    }
</script>

<style lang="scss" scoped>
    #card-maker {
        padding-bottom: 60px;
        padding-top: 30px;
        transition: all .2s ease-in-out;
    }

    #card-maker:hover {
        transform: scale(1.1);

    }

    .border-0 {
        --webkit-box-shadow: 0px 4px 5px -1px rgba(184, 184, 184, 0.31);
        -moz-box-shadow: 0px 4px 5px -1px rgba(184, 184, 184, 0.31);
        box-shadow: 0px 4px 5px -1px rgba(184, 184, 184, 0.31);
    }

    .btn-book {
        font-size: 18px;
        background-color: #0A2463;
        margin-bottom: -60px;
    }

    .card-title {
        font-size: 20px;
        margin-bottom: .0rem;
    }

    .card-img {
        border-radius: 0 !important;
    }


    .card {
        border-radius: 0 !important;
    }

    .btn-remove {
        font-size: 10px;
        background-color: #B91C3B;
        margin-top: -218px;
        margin-right: -15px;
        float: right;
    }
</style>