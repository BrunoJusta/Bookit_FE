<template>
    <div>
        <div id="CoffeeBreaks" class="container">
            <!--    <h2 id="redSubTitle">Coffee Break</h2> -->
            <div class="container" style="max-width:300px">
                <b-form-input size="sm" class="mr-sm rounded-0" v-model="searchTxt" placeholder="Pesquisar...">
                </b-form-input>

                <select id="inputGroupSelect01" @change="filteredKits($event)" v-model="selectTxt">
                    <option selected>Todos</option>
                    <option v-for="k in  menuTypes" :key="k" :value="k">{{k}}</option>
                </select>
            </div>

            <div class="row">
                <div class="col-sm-4" style="min-width: 16rem" v-for="k in  filteredKits" :key="k.id">
                    <div id="card-maker">
                        <b-card :title="k.name + ' - ' + k.type" style="max-width: 20rem; min-width: 14rem"
                            :img-src="k.img" img-height="180rem" class="mb-2 border-0">
                            <b-button class="btn-book" squared>
                                <router-link :to="{name: x, params: {kitId: k.id}}" class="teste" style="color:white">
                                    Ver Mais </router-link>
                            </b-button>
                            <b-button @click="deleteKit(k.name)" class="btn-remove border-0" :id="k.id"
                                v-bind:style="{visibility: remove}" squared> X</b-button>
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
                choose: "",
                users: [],
                searchTxt: "",
                selectTxt: "",
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
            if (this.$store.getters.getName === "Admin") {
                this.remove = "visible"
                this.choose = "hidden"
            } else {
                this.remove = "hidden"
                this.choose = "visible"
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
            this.users = this.$store.state.users
            this.menuTypes = this.$store.state.menuTypes
        },
        methods: {
            deleteKit(name) {
                for (let i = 0; i <= this.kits.length; i++) {
                    if (this.kits[i].name === name) {
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
                        alert("KIT ELIMINADO")
                    }
                }
            },
        },
        updated() {
            
        },
        computed: {
            searchKits() {
                return this.kits;
            },
            filteredKits(e) {
                if (this.selectTxt != "" && this.selectTxt != " ") {
                    alert("ola")
                    return this.kits.filter(
                        (kit) => kit.type === this.selectTxt
                    )
                } else {
                    return this.kits.filter(
                        (kit) => {
                            let filterResult = true
                            if (this.searchTxt == "") {
                                return filterResult
                            }
                            if (kit.name.includes(this.searchTxt)) {
                                filterResult = kit.name.includes(this.searchTxt)
                                return filterResult
                            }
                            if (kit.type.includes(this.searchTxt)) {
                                filterResult = kit.type.includes(this.searchTxt)
                                return filterResult
                            }
                        }
                    )
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    #card-maker {
        padding-bottom: 60px;
        padding-top: 30px;
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
</style>