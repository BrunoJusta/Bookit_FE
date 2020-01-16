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
        <br>
        <br>
        <br>
        <div class="container col-sm-4">
            <form @submit.prevent="addWorkshop()">
                <!-- NOME -->
                <label for="name">Nome:</label>
                <input id="name" v-model="name">
                <br>
                <br>
                <!-- NOME -->
                <label for="img">Image Link:</label>
                <input id="img" v-model="img">
                <!-- MOTIVAÇÃO -->
                <br>
                <br>
                <label for="description">Descrição</label>
                <br>
                <textarea id="description" v-model="description" rows="4" cols="50"></textarea>
                <br>
                <img :src="img" alt="" srcset="">

                <button type="submit" value="Adicionar" class="btn btn-primary">Adicionar</button>

            </form>
        </div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
    </div>
</template>

<script>
    export default {
        name: "AddWorkshop",
        data: function () {
            return {
                name: "",
                description: "",
                img: "",
                users:[],
                areas:[]
            }
        },
        created() {

            if (localStorage.getItem("users")) {
                this.$store.state.users = JSON.parse(localStorage.getItem("users"))
            }

            this.users = this.$store.state.users
        },
        methods: {
            addWorkshop() {
                for (let j in this.users) {

                    if (this.users[j].userType === "cliente") {
                        this.users[j].notifications.push({
                            txt: 'Nova Area ' + this.name +
                                ' foi adicionado a galeria de Espaços!'
                        })
                        localStorage.setItem("users", JSON.stringify(this.users));
                    }
                }
                this.$store.commit('ADD_AREA', {
                    id: this.$store.getters.getAreaLastId + 1,
                    name: this.name,
                    description: this.description,
                    img: this.img

                })
                alert("adicionado")
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>