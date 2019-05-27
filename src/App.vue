<template>
  <v-app>
    <Navbar/>
    <v-content>
      <router-view></router-view>
      <Footer/>
    </v-content>
  </v-app>
</template>

<script>

  import Navbar from './views/Navbar'
  import Footer from "./views/Footer";

  export default {
    name: 'App',
    components: {
      Footer,
      Navbar,
    },
    data () {
      return {

        //
      }
    }
  }
</script>
