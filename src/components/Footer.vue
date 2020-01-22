<template>
    <!--FOOTER-->
    <footer id="myFooter" style="background-color:#B91C3B; padding-top:50px;">
        <div class="container ">
            <div class="row" id="firstRow">
                <div class="col-sm-3">
                    <img src="../assets/bookit_white2.svg" id="bookitLogo">
                </div>
                <div class="col-sm-3" align="left">
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
                <div  class="col-sm-3">
                    <ul>
                        <li>
                            <h5>Suporte</h5>
                        </li>
                        <li>
                            <router-link to="/pageNotFound" style="color:white">Perguntas frequentes</router-link>
                        </li>
                        <li>
                            <router-link to="/menuKits" style="color:white">Galeria de menus</router-link>
                        </li>
                        <li>
                            <router-link to="/workshops" style="color:white">Galeria de workshops</router-link>
                        </li>
                    </ul>
                </div>
                <div class="col-sm-3">
                    <google-map style=" margin-top:40px; margin-right:-80px;" />
                </div>
            </div>

        </div>
        <hr id="hrLine">
        <div class="footer-copyright" style="color: white; font-size:10px">
            <p>© 2019 Copyright Bookit </p>
        </div>
    </footer>
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
    h5 {
        color: white;
        float: left;
    }

    li {
        padding: 2px;
        color: transparent;
        float: left;
    }


    #hrLine {
        background-color: white;
        width: 97%;
    }

    #myFooter {
        position: absolute;
        width: 100%;
        margin-top: 100px;
    }

    #firstRow {
        font-size: 14px;
    }

    #bookitLogo {
        height: 80px;
        margin-top: 20px;
        margin-left: -100px

    }



</style>