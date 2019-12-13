<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#">NavBar</b-navbar-brand>

                    <b-collapse id="nav-collapse" is-nav>
                        <b-navbar-nav>
                            <b-nav-item href="#">Início</b-nav-item>
                            <b-nav-item href="#">Reservas</b-nav-item>
                            <b-nav-item href="#">Workshops</b-nav-item>
                        </b-navbar-nav>
                    </b-collapse>

             <b-navbar-nav class="ml-auto">
                <b-nav-form>
                    <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                    <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                </b-nav-form>
            </b-navbar-nav>
            <b-button size="sm" class="my-4 my-sm-0" id="profileTxt" squared>Entrar</b-button>
        </b-navbar>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="scss" scoped>
    .bg-info {
        background-color: white !important;
    }

    .navbar-dark .navbar-brand {
        color: black
    }

    .navbar-dark .navbar-nav .nav-link {
        color: black;
    }

    .navbar-dark .navbar-nav {
        margin-left: 50%;
    }

    em {
        color: black;
    }

    #profileTxt {
        background-color: #0a2463;
    }







    .banner {
  background: #fff;
  font-family: Lato, sans-serif;
}
.navbar-nav-primary {
  text-transform: uppercase;
}

.navbar-form-search {
  position: relative;
  .form-control {
    width: 250px;
  }
  .btn {
    border: 0;
    background: transparent;
    font-size: 18px;
    &:active,
    &:hover,
    &:focus {
      color: #000;
      outline: none;
      box-shadow: none;
    }
  }
  
  .search-form-container {
    text-align: right;
    position: absolute;
    width: 300px;
    overflow: hidden;
    background: #fff;
    right: 60px;
    top: 0;
    z-index: 9;
    transition: all .3s ease-in-out;
    &.hdn {
      width: 0;
    }
    
    .search-input-group {
      width: 300px;
    }
  }
}
</style>