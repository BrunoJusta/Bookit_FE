<template>
    <div>
        <div id="CoffeeBreaks" class="container">
            <!--    <h2 id="redSubTitle">Coffee Break</h2> -->
            <div v-if="this.userType == 'admin'" class="container">
                <div class="row" style="margin:auto;max-width: 680px;">
                    <select id="inputGroupSelect01" @change="filteredKits()" v-model="selectTxt">
                        <option selected>Todos</option>
                        <option v-for="k in  menuTypes" :key="k" :value="k">{{k}}</option>
                    </select>
                    <b-form-input size="sm" class="mr-sm rounded-0" id="searchInput" v-model="searchTxt"
                        placeholder="Nome do Menu...">
                    </b-form-input>
                    <select id="inputGroupSelect02" @change="orderKits()" v-model="orderTxt">
                        <option value="" disabled selected hidden>Ordenar por:</option>
                        <option>Data de Criação</option>
                        <option>Popularidade</option>
                    </select>
                </div>

            </div>
            <div v-else class="container">
                <div class="row" style="margin:auto;max-width: 460px;">
                    <select id="inputGroupSelect01" @change="filteredKits()" v-model="selectTxt">
                        <option selected>Todos</option>
                        <option v-for="k in  menuTypes" :key="k" :value="k">{{k}}</option>
                    </select>
                    <b-form-input size="sm" class="mr-sm rounded-0" id="searchInput" v-model="searchTxt"
                        placeholder="Nome do Menu...">
                    </b-form-input>
                    <select v-if="this.userType == 'admin'" id="inputGroupSelect02" @change="orderKits()"
                        v-model="orderTxt">
                        <option value="" disabled selected hidden>Ordenar por:</option>
                        <option>Data de Criação</option>
                        <option>Popularidade</option>
                    </select>
                </div>

            </div>

            <div v-if="this.userType == 'admin'" class="row">
                <div class="col-sm-4" style="min-width: 16rem" v-for="k in  filteredKits" :key="k.id">
                    <div id="card-maker">
                        <b-card :title="k.name + ' - ' + k.type" style="max-width: 20rem; min-width: 14rem;"
                            :img-src="k.img" img-height="180rem" class="mb-2 border-0">
                            <p align="right" style="padding-top:20px; margin-bottom: -40px; color: #0A2463"><img
                                    style="width:20px; padding-bottom: 5px;" src="../assets/star.svg" alt="" srcset="">
                                {{k.popularity}}</p>
                            <b-button class="btn-book" squared>
                                <router-link :to="{name: x, params: {kitId: k.id}}" style="color:white">
                                    Ver Mais </router-link>
                            </b-button>
                            <b-button @click="deleteKit(k.name, k.type)" class="btn-remove border-0" :id="k.id"
                                v-bind:style="{visibility: remove}" squared> X</b-button>
                        </b-card>
                    </div>
                </div>
            </div>
            <div v-else class="row">
                <div class="col-sm-4" style="min-width: 16rem" v-for="k in  filteredKits" :key="k.id">
                    <div id="card-maker">
                        <b-card :title="k.name + ' - ' + k.type" style="max-width: 20rem; min-width: 14rem"
                            :img-src="k.img" img-height="180rem" class="mb-2 border-0">
                            <b-button class="btn-book" squared>
                                <router-link :to="{name: x, params: {kitId: k.id}}" style="color:white">
                                    Ver Mais </router-link>
                            </b-button>
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
        data: function () {
            return {
                kits: [],
                menuTypes: [],
                x: "",
                onlineUser: "",
                remove: "",
                userType: "",
                choose: "",
                users: [],
                searchTxt: "",
                selectTxt: "Todos",
                orderTxt: "",
                bookings:[],
                reset: {
                    kitname: "",
                    kitType: "",
                }
            };
        },
        created() {
            if (localStorage.getItem("kits")) {
                this.kits = JSON.parse(localStorage.getItem("kits"))
            }
            if (this.$store.getters.getName == "Entrar") {
                this.x = "login"
            } else {
                this.x = "kitDetail"
            }
           
            localStorage.setItem("currentKit", JSON.stringify(this.reset));
            this.$store.state.currentKit = ({
                kitname: "",
                kitType: "",
            })
            if (localStorage.getItem("users")) {
                this.$store.state.users = JSON.parse(localStorage.getItem("users"))
            }
            if (localStorage.getItem("menuTypes")) {
                this.$store.state.menuTypes = JSON.parse(localStorage.getItem("menuTypes"))
            }
            if (localStorage.getItem("bookings")) {
                this.$store.state.bookings = JSON.parse(localStorage.getItem("bookings"))
            }
            this.bookings = this.$store.state.bookings
            this.users = this.$store.state.users
            this.menuTypes = this.$store.state.menuTypes
            this.userType = this.$store.state.loggedUser.userType
        },
        methods: {
            deleteKit(name, type) {
                Swal.fire({
                    icon: 'warning',
                    text: 'Deseja remover este menu?',
                    showCancelButton: true,
                }).then((result) => {
                    if (result.value) {
                        let checker = false
                        for (let i = 0; i <= this.kits.length; i++) {
                            for (let b in this.bookings) {
                                if (name == this.bookings[b].kitName && type == this.bookings[b].kitType && this.bookings[b].state == "Aprovado") {
                                    Swal.fire({
                                        icon: 'error',
                                        text: 'Não Pode eliminar um Menu com Reservas!',
                                    })
                                    checker = true
                                }

                            }
                            if (checker == false) {
                                if (this.kits[i].name === name && this.kits[i].type === type) {
                                    for (let j in this.users) {
                                        if (this.users[j].userType === "cliente") {
                                            this.users[j].notifications.push({
                                                txt: 'O Menu ' + this.kits[i].name +
                                                    ' foi removido da galeria de menus!'
                                            })
                                            localStorage.setItem("users", JSON.stringify(this.users));
                                        }
                                    }
                                    this.kits.splice(i, 1)
                                    localStorage.setItem("kits", JSON.stringify(this.kits));
                                    Swal.fire({
                                        icon: 'success',
                                        text: 'Menu eliminado!',
                                    })
                                }
                            }
                        }
                    }
                })
            },
            orderKits() {
                if (this.orderTxt == "Data de Criação") {
                    this.clearFilters();
                } else if (this.orderTxt == "Popularidade") {
                    this.filterByPopularity();
                }
            },
            clearFilters() {
                this.kits = JSON.parse(localStorage.getItem("kits"))
                this.selectTxt = "Todos";
                this.searchTxt = "";
                return this.kits;

            },
            comparePopularity(a, b) {
                if (parseInt(a.popularity) > parseInt(b.popularity)) return -1
                if (parseInt(a.popularity) < parseInt(b.popularity)) return 1
                else return 0
            },
            filterByPopularity() {
                this.kits.sort(this.comparePopularity)
            }
        },
        computed: {
            searchKits() {
                return this.kits;
            },
            filteredKits() {
                if (this.searchTxt != "" || this.selectTxt != "Todos") {
                    return this.kits.filter(
                        (kit) => {
                            let filterResult = true
                            if (this.searchTxt == "" && this.selectTxt == "Todos") {
                                return filterResult
                            }
                            if (kit.name.toLowerCase().includes(this.searchTxt.toLowerCase())) {
                                if (this.selectTxt != "Todos") {
                                    filterResult = kit.type.includes(this.selectTxt)
                                } else {
                                    filterResult = kit.name.toLowerCase().includes(this.searchTxt.toLowerCase())
                                }
                                return filterResult
                            }

                        }
                    )
                } else {
                    return this.kits
                }
            }
        }
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



    #redSubTitle {
        font-family: "bookMan";
        font-size: 35px;
        color: #0A2463;
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

    .btn-remove {
        font-size: 10px;
        background-color: #B91C3B;
        margin-top: -220px;
        margin-right: -15px;
        float: right;
    }

    .back-line {
        background-color: #0A2463;
        margin-top: -10px;
        margin-left: -50px;
        width: 1200px;
    }

    #btnClear {
        margin-top: 10px;
        margin-left: 10px;
        margin-right: 10px;
        font-size: 12px;
        background-color: #0A2463;
        color: white;
        height: 31px;
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

    #searchInput {
        width: 200px;
        margin: 10px;
        border: 1px solid #C0C0C0;
    }

    #inputGroupSelect01 {
        width: 200px;
        margin: 10px;
        border: 1px solid #C0C0C0;
        color: #5C5C5C;
    }

    #inputGroupSelect02 {
        width: 200px;
        margin: 10px;
        border: 1px solid #C0C0C0;
        color: #5C5C5C;
    }

    label {
        color: #5C5C5C;
    }
</style>