<template>
    <div>
        <h1 class="orange--text mt-5 ml-5"> ACM-ICPC Asia 2017 - (ICT) Mahidol University </h1>
        <carousel-3d :width="600" :height="340" >
            <slide :index="0" >
                <img src = "../img/ACM-ICPC/ACM_1.jpg">
            </slide>
            <slide :index="1" >
                <img src = "../img/ACM-ICPC/ACM_2.jpg">
            </slide>
            <slide :index="2" >
                <img src = "../img/ACM-ICPC/ACM_3.jpg">
            </slide>
        </carousel-3d>
    </div>
</template>

<script>
    import {Carousel3d,Slide} from 'vue-carousel-3d'
    export default {
        name: "ACM-ICPC",
        components: {
            Carousel3d,
            Slide,
        },
    }
</script>

<style scoped>
</style>
