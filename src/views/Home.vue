<template>
  <transition appear>
    <div id="hello">
      <Snowf :amount="80" :size="5" :speed="0.1" :wind="0" :opacity="0.9" :swing="1" :image = "null" :zIndex = "null" :resize = "true" color = "#ffffff" />
      <h1>Welcome to BEST's Portfolio Site.</h1>
      <h2>Developer : Web, Application, Maker</h2>
    </div>
  </transition>
</template>

<script>
 import Snowf from 'vue-snowf';

export default {
  name: 'home',
  components: {
    Snowf,
  }
}
</script>
<style>
  #hello {
    position: relative;
    height: 96vh;
    text-align: center;
    color: white;
    font-family: cursive;
    background: linear-gradient(-45deg, rgba(246, 255, 0, .8), rgba(255, 0, 161, .8) ,rgba(255, 128 ,0, .8)
    ,rgba(64,255,0, .8)),
    url('../img/background.gif');
    background-size: cover;
    text-shadow: 0px 4px 3px #999999;
  }
  #hello h1 {
    padding-top: 33vh;
    font-size: 50px;
    letter-spacing: 3px;
    font-weight: normal;
    padding-right : 20px;
    padding-left : 20px;
    margin: 0;
  }
  #hello h2 {
    padding-top: 10vh;
    font-size: 25px;
  }
  .v-enter-active {
    transition: opacity 1.5s;
  }
  .v-enter {
    opacity: 0;
  }
  @media (max-width : 670px){
    #hello {
      height: 75vh;
      font-family: 'arial unicode ms';
    }
    #hello h1 {
      padding-top: 22vh;
      font-size: 30px;
    }
    #hello h2 {
      padding-top: 10vh;
      font-size: 20px;
    }
  }
</style>
