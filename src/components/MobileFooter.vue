<template>
    <div class="footer-container">
        <div class="row">
            <img src="../assets/bookit_white2.svg" id="bookitLogo">
        </div>
        <div class="row">
            <router-link id="link" to="/pageNotFound" style="color:white">Sobre nós</router-link>
            <router-link id="link" to="/pageNotFound" style="color:white">Suporte</router-link>
        </div>
        <div class="row">
            <i class="fas fa-map-marker-alt" id="icon"></i>
            <span>Rua D. Sancho I, 981</span>
            <i class="fas fa-home" id="icon"></i>
            <span>4480-876 Vila do Conde</span>
            <i class="fas fa-phone" id="icon"></i>
            <span>252 291 700</span>
        </div>
        <div class="row">
            <hr>
            <p>© 2020 Copyright Bookit </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .row #link {
        margin: 20px;
        font-size: 20px;
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
        padding-right: 50px;
        margin-top: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #bookitLogo {
        height: 80px;
    }

    p {
        color: white;
        font-size: 10px;
        margin: auto;
    }

    span {
        color: white;
        font-size: 11px;
    }

    #icon {
        padding-left: 20px;
        padding-right: 6px;
        color: white;
    }
</style>