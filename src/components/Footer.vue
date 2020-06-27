<template>
    <!--FOOTER-->
    <div class="footer-container ">
        <div class="row">
            <div class="col-sm-3">
                <img src="../assets/bookit_white2.svg" id="bookitLogo">
            </div>
            <div class="col-sm-3">
                <ul>
                    <li>
                        <h5>Sobre nós</h5>
                    </li>
                    <li>
                        <router-link to="/pageNotFound" style="color:white">Ler o nosso blog</router-link>
                    </li>
                    <li>
                        <router-link to="/choose" style="color:white">Fazer reserva
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/workshops" style="color:white">Participar em workshops
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="col-sm-3">
                <ul>
                    <li>
                        <h5>Suporte</h5>
                    </li>
                    <li>
                        <router-link to="/pageNotFound" style="color:white">Perguntas frequentes</router-link>
                    </li>
                    <li>
                        <router-link to="/menuGallery" style="color:white">Galeria de menus</router-link>
                    </li>
                    <li>
                        <router-link to="/workshops" style="color:white">Galeria de workshops</router-link>
                    </li>
                </ul>
            </div>
            <div class="col-sm-3">
                <google-map id="map" />
            </div>
        </div>
        <hr id="hrLine">
        <p>© 2020 Copyright Bookit </p>
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
    .col-sm-3 {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .col-sm-3 ul {
        margin-left: 20px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    h5 {
        color: white;
    }

    li {
        padding: 2px;
        color: transparent;
    }


    #hrLine {
        background-color: white;
        width: 97vw;
    }

    .footer-container {
        background-color: #B91C3B;
        padding-top: 50px;
        position: absolute;
        width: 100%;
        padding-right: 50px;
        margin-top: 220px;
    }

    .row,
    p {
        font-size: 12px;
        color: white;
    }

    #bookitLogo {
        height: 70px;
        margin-top: 20px;
        margin-left: 60px;
    }

    #map {
        margin-top: 40px;
    }
</style>