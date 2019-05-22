<template>
  <v-app>
    <Navbar/>
    <v-content>
      <Hello/>
    </v-content>
  </v-app>
</template>

<script>
import Hello from './components/Hello'
import Navbar from './components/Navbar'

export default {
  name: 'App',
  components: {
    Hello,
    Navbar
  },
  data () {
    return {
      //
    }
  }
}
</script>
