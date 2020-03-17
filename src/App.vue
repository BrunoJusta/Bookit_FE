<template>
  <div id="app">
    <top-header />
    <router-view />
    <bottom-footer id="desktop-footer" />
    <bottom-footer-mobile id="mobile-footer" />
  </div>
</template>

<script>
  import TopHeader from '@/components/TopHeader.vue';
  import Footer from '@/components/Footer.vue'
  import MobileFooter from '@/components/MobileFooter.vue'
  export default {
    components: {
      "top-header": TopHeader,
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