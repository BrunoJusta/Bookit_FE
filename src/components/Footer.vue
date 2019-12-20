<template>
    <!--FOOTER-->
    <footer id="myFooter" style="background-color:#B91C3B; padding-top:50px;">
        <div class="container">
            <div class="row">
                <p></p>
            </div>
            <div class="row">
                <div class="col-sm-3">
                    <img src="../assets/bookit_white2.svg" id="bookitLogo">
                </div>
                <div class="col-sm-3">
                    <h5>Sobre nós</h5>
                    <ul>
                        <li>
                            <router-link to="/" style="color:white">Ler o nosso blog</router-link>
                        </li>
                        <li>
                            <router-link to="/reservas" style="color:white">Registar para fazer reserva
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/workshops" style="color:white">Participar em workshops
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div class="col-sm-3">
                    <h5>Suporte</h5>
                    <ul>
                        <li>
                            <router-link to="/" style="color:white">Perguntas frequentes</router-link>
                        </li>
                        <li>
                            <router-link to="/" style="color:white">Visualizar kits</router-link>
                        </li>
                        <li>
                            <router-link to="/" style="color:white">Visualizar workshops</router-link>
                        </li>
                    </ul>
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
    export default {

    }
</script>

<style lang="scss" scoped>
    h5 {
        color: white;
    }

    li {
        color: transparent;
        float: left;
    }

    #hrLine {
        background-color: white;
        height: 1px;
        width: 97%;
    }

    #myFooter {
        position: absolute;
        width: 100%;
    }
</style>