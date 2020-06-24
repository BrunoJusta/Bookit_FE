<template>
  <div class="home">
    <div class="container-full banner">
      <img id="banner-img" src="../assets/banner.jpg">
      <b-button squared id="banner-btn">
        <router-link id="banner-link" to="/choose"> RESERVAR</router-link>
      </b-button>
    </div>

    <div class="container-full title">
      <h1 id="redTitle">SOBRE NÓS</h1>
      <hr class="back-line">
      <div class="container box">
      </div>
    </div>

    <div class="container txt">
      <p>Os estudantes de <b> Gestão e Administração Hoteleira </b> convidam-no a saborear as receitas criadas
        para si. Venha conhecer-nos.</p>
      <p>
        O Restaurante de Aplicação da <b>Escola Superior de Hotelaria e Turismo</b> é da responsabilidade do Politécnico
        do Porto, com capacidade para 50 pessoas sentadas.
        Durante estes últimos anos, o Restaurante tem acolhido diversos eventos, conseguindo sempre estar à altura das
        expectativas dos clientes.</p>
      <p>
      </p>

    </div>

    <div class="container-full title">
      <h1 id="redTitle">RESERVAS</h1>
      <hr class="back-line">
      <div class="container box">
      </div>
    </div>


    <div class="container options">
      <div class="row">
        <div class="col-sm-4">
          <router-link id="link" to="/menuGallery">
            <b-card title="Eventos & Catering" img-src="../assets/eventosCateringg.jpg" class="mb-2 border-0">
            </b-card>
          </router-link>
        </div>
        <div class="col-sm-4">
          <router-link id="link" to="/areasGallery">
            <b-card title="Espaços" img-src="../assets/rooms.jpg" class="mb-2 border-0">
            </b-card>
          </router-link>
        </div>
        <div class="col-sm-4">
          <router-link id="link" to="/workshops">
            <b-card title="Workshops" img-src="../assets/workshoptem.jpg" class="mb-2 border-0 ">
            </b-card>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @font-face {
    font-family: bookMan;
    src: url(../assets/bookman.ttf);
  }

  .box {
    background-color: white;
    margin-top: -35px;
    height: 35px;
    width: 340px;
    position: relative;
    display: block;
    z-index: 6
  }

  .banner {
    padding-top: 120px;
  }

  .title {
    padding-top: 80px;
    padding-bottom: 50px;
  }

  .options {
    padding-top: 50px;
    padding-bottom: 40px;
  }

  .col-sm-4 {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #banner-link {
    color: white;
  }

  #banner-img {
    max-width: 100%;
    height: auto;
  }

  #banner-btn {
    background-color: #0A2463;
    margin-top: -150px;
    border-color: white;
    font-size: 18px;
    transition: all .2s ease-in-out;
  }

  #banner-btn:hover {
    transform: scale(1.1);
  }

  .txt {
    padding-top: 30px;
    padding-bottom: 50px;
  }

  #link {
    color: black;
    font-size: 20px;
  }

  #redTitle {
    font-family: "bookMan";
    font-size: 45px;
    color: #B91C3B;
    display: block;
    z-index: 7;
    position: relative;
  }

  .card-body {
    padding: 0rem;
    padding-top: 1rem;
  }

  .back-line {
    background-color: #0A2463;
    margin-top: -36px;
    width: 90%;
    display: block;
    z-index: 5;
    position: relative;
    height: 1px;
  }

  .mb-2 {
    max-width: 24rem;
  }

  .card-img {
    border-radius: 0 !important;
    transition: all .2s ease-in-out;

  }

  .card-img:hover {
    transform: scale(1.1);
  }
</style>