<template>
    <div>
        <div class="container" style="padding-top:200px; padding-bottom:50px;">
            <img style="width:250px;" src="../assets/bookit_BLUE.svg" id="img">
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
            this.user =  this.$store.state.loggedUser
            if (this.user.type === 0) {
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

    @-webkit-keyframes rotate-vert-center {
        0% {
            transform: rotateY(0);
        }

        100% {
            transform: rotateY(360deg);
        }
    }

    @keyframes rotate-vert-center {
        0% {
            transform: rotateY(0);
        }

        100% {
            transform: rotateY(360deg);
        }
    }

    #img {
        animation: rotate-vert-center 4s cubic-bezier(0.455, 0.030, 0.515, 0.955) infinite both;
    }
</style>