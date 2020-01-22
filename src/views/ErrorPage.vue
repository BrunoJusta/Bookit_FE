<template>
    <div>
        <div class="container" style="padding-top:200px; padding-bottom:50px;">
            <img style="width:250px;" src="../assets/bookit_BLUE.svg" alt="" srcset="">
            <h1>Página não encontrada!</h1>
            <b-button id="logged-btn" squared>
                <router-link id="btn" :to="{name:this.path}">Início</router-link>
            </b-button>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                user: "",
                path: "home"
            }
        },
        created() {
            this.user = JSON.parse(localStorage.getItem("loggedUser"))
            if (this.user.userType === "admin") {
                this.path = "adminHome"
            } else {
                this.path = "home"
            }
        }
    }
</script>

<style lang="scss" scoped>
    h1 {
        color: black;
        padding-top: 10px;
    }

    #logged-btn {
        margin-top: 20px;
        height: auto;
        width: 100px;
        font-weight: bold;
        font-size: 20px;
        background-color: #0a2463;
        transition: all .2s ease-in-out;
    }

    #logged-btn:hover {
        transform: scale(1.1);
    }

    #btn {
        color: white;
    }
</style>