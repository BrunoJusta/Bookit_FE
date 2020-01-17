<template>
  <div class="home">
    <br>
    <br>
    <br>
    <br>
    <br>
    <div class="container-full">
      <img src="../assets/banner.jpg" style="max-width: 100%; height: auto;">
      <div class="container-full title">
        <h1 id="redTitle">OPÇÕES</h1>
        <hr class="back-line">
        <div class="container" id="whiteRect">
          <p id="space">space</p>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col">
            <router-link id="link" to="/bookingTables">
              <b-card img-src="../assets/booking_m.svg" style="max-width: 12rem;" class="mb-2 border-0">
              </b-card>
              Gerir Reservas
            </router-link>

          </div>
          <div class="col">
            <router-link id="link" to="/inscriptions">
              <b-card img-src="../assets/workshop_m.svg" style="max-width: 12rem;" class="mb-2 border-0">
              </b-card>Gerir Workshops
            </router-link>

          </div>
          <div class="col">
            <router-link id="link" to="/userTables">
              <b-card img-src="../assets/user_m.svg" style="max-width: 12rem;" class="mb-2 border-0">
              </b-card>Gerir Utilizadores
            </router-link>

          </div>
          <div class="col">
            <router-link id="link" to="/kitManeger">
              <b-card img-src="../assets/add_menu.svg" tyle="max-width: 12rem;" class="mb-2 border-0">
              </b-card>Adicionar Menu
            </router-link>

          </div>
          <div class="col">
            <router-link id="link" to="/WorkshopManeger">
              <b-card img-src="../assets/add_workshop.svg" style="max-width: 12rem;" class="mb-2 border-0">
              </b-card>Adicionar Workshop
            </router-link>

          </div>
          <div class="col">
            <router-link id="link" to="/addArea">
              <b-card img-src="../assets/add_area.svg" style="max-width: 12rem;" class="mb-2 border-0">
              </b-card>Adicionar Espaços
            </router-link>
          </div>
          <div class="col">
            <router-link id="link" to="/menuAddOns">
              <b-card img-src="../assets/add_workshop.svg" style="max-width: 12rem;" class="mb-2 border-0">
              </b-card>Adicionar
            </router-link>
          </div>
        </div>
      </div>
      <br>
      <br>
      <br>
      <br>
    </div>
  </div>

</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  @font-face {
    font-family: bookMan;
    src: url(../assets/bookman.ttf);
  }


  #link {
    color: black;
    font-size: 16px;
  }

  #space {
    color: white;
  }

  .title {
    padding-top: 80px;
    padding-bottom: 80px;
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
    margin-top: -30px;
    width: 90%;
    display: block;
    z-index: 5;
    position: relative;
  }

  #whiteRect {
    background-color: white;
    margin-top: -35px;
    height: 35px;
    width: 250px;
    position: relative;
    display: block;
    z-index: 6
  }


  .card-img {
    border-radius: 0 !important;
  }
</style>