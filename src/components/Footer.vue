<template>
    <!--FOOTER-->
    <footer id="myFooter" style="background-color:#B91C3B; padding-top:50px;">
        <div class="container">
            <div class="row" id="firstRow">
                <div class="col-sm-2">
                    <img src="../assets/bookit_white2.svg" id="bookitLogo">
                </div>
                <div class="col-sm-3" align="left">
                    <ul>
                        <li>
                            <h5>Sobre nós</h5>
                        </li>
                        <li>
                            <router-link to="/" style="color:white">Ler o nosso blog</router-link>
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
                            <router-link to="/" style="color:white">Perguntas frequentes</router-link>
                        </li>
                        <li>
                            <router-link to="/menuKits" style="color:white">Galeria de menus</router-link>
                        </li>
                        <li>
                            <router-link to="/workshops" style="color:white">Galeria de workshops</router-link>
                        </li>
                    </ul>
                </div>
                <div class="col-sm-4">
                    <google-map />
                </div>
            </div>

        </div>
        <hr id="hrLine">
        <div class="footer-copyright" style="color: white">
            <p>© 2019 Copyright Bookit </p>
        </div>
    </footer>
</template>

<script>
    import router from '../router';

    import GoogleMap from "@/components/Map.vue"
    export default {
        components: {
            "google-map": GoogleMap
        }
    }
</script>

<style lang="scss" scoped>
    h5 {
        color: white;
        float: left;
    }

    li {
        padding: 2px;
        color: transparent;
        float: left;
    }

    ul {
        margin-top: -30px;
    }

    #hrLine {
        background-color: white;
        height: 1px;
        width: 97%;
    }

    #myFooter {
        position: absolute;
        width: 100%;
        margin-top: 100px;
    }

    #firstRow {
        margin-top: 30px;
        margin-left: -20px;
    }

    #bookitLogo {
        margin-left: -100px;
    }

    #aboutColumn {
        margin-left: 100px;
    }

    #helpColumn {
        margin-left: 10px;
    }
</style>