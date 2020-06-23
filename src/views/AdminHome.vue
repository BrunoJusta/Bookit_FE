<template>
  <div class="home">
    <div class="container-full" id="full">
      <!-- <img src="../assets/banner2.jpg" style="max-width: 100%; height: auto;"> -->
      <div class="container-full title">
        <h1 id="redTitle">OPÇÕES DE ADMINISTRADOR</h1>
        <hr class="back-line">
        <div class="container" id="whiteRect">
        </div>
      </div>

      <div class="container">
        <div class="row">
          <router-link id="link" to="/bookingTables">
            <div class="col" style="width:140px; height: 180px;">
              <b-card title="Gestão de Reservas" img-src="../assets/booking_m.svg" style="max-width: 12rem;"
                class="mb-2 border-0">
              </b-card>
            </div>
          </router-link>

          <router-link id="link" to="/workshopTable">
            <div class="col" style="width:140px; height: 180px;">
              <b-card title="Gestão de Workshops" img-src="../assets/workshop_m.svg" style="max-width: 12rem;"
                class="mb-2 border-0">
              </b-card>
            </div>
          </router-link>

          <router-link id="link" to="/userTables">
            <div class="col" style="width:140px; height: 180px;">
              <b-card title="Gestão de Utilizadores" img-src="../assets/user_m.svg" style="max-width: 12rem;"
                class="mb-2 border-0">
              </b-card>
            </div>
          </router-link>

          <router-link id="link" to="/menuAddOns">
            <div class="col" style="width:140px; height: 180px;">
              <b-card title="Gestão de Complementos" img-src="../assets/add_comp.svg" style="max-width: 12rem;"
                class="mb-2 border-0">
              </b-card>
            </div>
          </router-link>

          <router-link id="link" to="/menuManager">
            <div class="col" style="width:140px; height: 180px;">
              <b-card title="Adicionar Menus" img-src="../assets/add_menu.svg" tyle="max-width: 12rem;"
                class="mb-2 border-0">
              </b-card>
            </div>
          </router-link>

          <router-link id="link" to="/areasManager">
            <div class="col" style="width:140px; height: 180px;">
              <b-card title="Adicionar Espaços" img-src="../assets/add_area.svg" style="max-width: 12rem;"
                class="mb-2 border-0">
              </b-card>
            </div>
          </router-link>

          <router-link id="link" to="/WorkshopManager">
            <div class="col" style="width:140px; height: 180px;">
              <b-card title="Adicionar Workshops" img-src="../assets/add_workshop.svg" style="max-width: 12rem;"
                class="mb-2 border-0">
              </b-card>
            </div>
          </router-link>
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
  }

  .col {
    margin: 10px;
    border: 0.5px gainsboro solid;
    box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.1);
    transition: all .2s ease-in-out;
  }

  .col:hover {
    transform: scale(1.1);
  }

  #space {
    color: white;
  }

  .title {
    padding-top: 80px;
    padding-bottom: 45px;
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


  .card-title {
    font-size: 14px;
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
    width: 730px;
    position: relative;
    display: block;
    z-index: 6
  }


  .card-img {
    border-radius: 0 !important;
  }

  #full {
    padding-top: 120px;
  }
</style>