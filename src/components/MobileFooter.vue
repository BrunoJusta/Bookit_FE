<template>
    <!--FOOTER-->
    <div class="footer-container">
        <div class="row">
            <img src="../assets/bookit_white2.svg" id="bookitLogo">
        </div>
        <div class="row">
            <router-link id="link" to="/pageNotFound" style="color:white">Sobre nós</router-link>
            <router-link id="link" to="/pageNotFound" style="color:white">Suporte</router-link>
        </div>
        <div class="row">
            <google-map class="map" />
        </div>
        <div class="row">
            <hr>
            <p>© 2020 Copyright Bookit </p>
        </div>
    </div>
</template>

<script>
    import GoogleMap from "@/components/Map.vue"
    export default {
        components: {
            "google-map": GoogleMap
        }
    }
</script>

<style lang="scss" scoped>
    .row #link {
        margin: 20px;
    }

    .row hr {
        background-color: white;
        width: 90vw;
    }

    .footer-container {
        background-color: #B91C3B;
        padding-top: 50px;
        position: absolute;
        width: 100%;
        margin-top: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .row {
        font-size: 14px;
    }


    #bookitLogo {
        height: 80px;
    }

    p {
        color: white;
        font-size: 10px;
        margin: auto;
    }

    .map {
        margin-top: 60px;
    }
</style>