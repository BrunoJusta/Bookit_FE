<template>
  <div id="app" v-if="this.$route.name !== 'login' && this.$route.name !== 'register' && this.$route.name !== 'booking' && this.$route.name !== 'areasbooking' && this.$route.name !== 'profile'"> 
    <navbar />
    <router-view />
    <bottom-footer id="desktop-footer" />
    <bottom-footer-mobile id="mobile-footer" />
  </div>
  <div v-else id="app">
    <navbar />
    <router-view />
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue';
  import Footer from '@/components/Footer.vue'
  import MobileFooter from '@/components/MobileFooter.vue'
  export default {
    components: {
      "navbar": NavBar,
      "bottom-footer": Footer,
      "bottom-footer-mobile": MobileFooter
    }
  }
</script>

<style lang="scss" scoped>
  @font-face {
    font-family: gotham;
    src: url(./assets/Gotham-Book.otf);
  }

  #app {
    font-family: gotham;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  #mobile-footer {
    display: none;
  }

  @media screen and (max-width: 1096px) {
    #desktop-footer {
      display: none;
    }
    #mobile-footer {
      display: flex;
    }
  }
</style>