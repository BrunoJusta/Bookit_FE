<template>
  <div class="home">
    <br>
    <br>
    <br>
    <br>
    <br>
    <div class="container-full">
      <img src="../assets/tabuleiro3.jpg" style="max-width: 100%; height: auto;">
      <b-button squared style="background-color:#0A2463;  margin-top:-150px; border-color:white; font-size:18px;">
        RESERVAR</b-button>

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
            <b-card img-src="https://picsum.photos/600/300/?image=25" style="max-width: 12rem;" class="mb-2 border-0">
              <router-link id="link" to="/bookingTables">Tabela de Reservas</router-link>
            </b-card>
          </div>
          <div class="col">
            <b-card img-src="https://picsum.photos/600/300/?image=25" style="max-width: 12rem;" class="mb-2 border-0">
              <router-link id="link" to="/inscriptions">Tabela de Inscrições</router-link>
            </b-card>
          </div>
           <div class="col">
            <b-card img-src="https://picsum.photos/600/300/?image=25" style="max-width: 12rem;" class="mb-2 border-0">
              <router-link id="link" to="/menukits">Tabela Utilizadores</router-link>
            </b-card>
          </div>
          <div class="col">
            <b-card img-src="https://picsum.photos/600/300/?image=25" tyle="max-width: 12rem;" class="mb-2 border-0">
              <router-link id="link" to="/kitManeger">Adicionar Menu</router-link>
            </b-card>
          </div>
          <div class="col">
            <b-card img-src="https://picsum.photos/600/300/?image=25" style="max-width: 12rem;" class="mb-2 border-0">
              <router-link id="link" to="/WorkshopManeger">Adicionar Workshop</router-link>
            </b-card>
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

  a {
    float: left;

  }

  #link {
    color: black;
    font-size: 18px;
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
    width: 340px;
    position: relative;
    display: block;
    z-index: 6
  }
</style>