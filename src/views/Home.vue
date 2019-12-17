<template>

  <div class="home">

    <div class="container-full banner">
      <img id="banner-img" src="../assets/tabuleiro2.jpg">
      <b-button squared id="banner-btn">
        <router-link id="banner-link" to="/choose"> RESERVAR</router-link>
      </b-button>
    </div>


    <div class="container-full title">
    <h1 id="redTitle">SOBRE NÓS</h1>
    <hr class="back-line">
    <div class="container" id="whiteRect">
      <p id="space">space</p>
    </div>
    </div>


    <div class="container txt">
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard
        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
        specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
        unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop
        publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>

    <div class="container-full title">
    <h1 id="redTitle">RESERVAS</h1>
    <hr class="back-line">
    <div class="container" id="whiteRect">
      <p id="space">space</p>
    </div>
    </div>
    

    <div class="container  options">
      <div class="row">
        <div class="col-sm-4">
          <b-card img-src="https://picsum.photos/600/300/?image=25" class="mb-2 border-0">
            <router-link id="link" to="/menuKits">Eventos & Catering</router-link>
          </b-card>
        </div>
        <div class="col-sm-4">
          <b-card img-src="https://picsum.photos/600/300/?image=25" class="mb-2 border-0">
            <router-link id="link" to="/areas">Espaços</router-link>
          </b-card>
        </div>
        <div class="col-sm-4">
          <b-card img-src="https://picsum.photos/600/300/?image=25" class="mb-2 border-0">
            <router-link id="link" to="/">Workshops</router-link>
          </b-card>
        </div>
      </div>
    </div>

  </div>

</template>

<script>



  export default {
    name: 'home',
  }
</script>

<style lang="scss" scoped>
  @font-face {
    font-family: bookMan;
    src: url(../assets/bookman.ttf);
  }

  .banner {
    padding-top: 125px;
  }

  .title{
    padding-top: 80px;
    padding-bottom: 50px;
  }

  .options{
     padding-top: 60px;
    padding-bottom: 150px;
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

  .txt {
     padding-top: 30px;
    padding-bottom: 50px;
  }

  #space {
    color: white;
  }

  a {
    float: left;

  }

  #link {
    color: black;
    font-size: 25px;
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
    margin-top: -35px;
    width: 90%;
    display: block;
    z-index: 5;
    position: relative;
  }

  .mb-2 {
    max-width: 24rem;
  }
</style>