<template>
    <div>
        <h1 class="orange--text mt-5 ml-5">competition</h1>
        <carousel-3d :width="600" :height="340" >
            <slide :index="0" >
                <img src = "../img/Nsc_1.jpg">
            </slide>
            <slide :index="1" >
                <img src = "../img/Nsc_2.jpg">
            </slide>
            <slide :index="2" >
                <img src = "../img/ACM_1.jpg">
            </slide>
            <slide :index="3" >
                <img src = "../img/ACM_2.jpg">
            </slide>
            <slide :index="4" >
                <img src = "../img/ACM_3.jpg">
            </slide>
        </carousel-3d>
        <h1>Resume</h1>
        <carousel-3d :width="820" :height="1050" >
            <slide :index="0" >
                <img src = "../img/Resume.png">
            </slide>
        </carousel-3d>

    </div>
</template>

<script>
    import { Carousel3d, Slide } from 'vue-carousel-3d';

    export default {
        name: "Gallery",
        components: {
            Carousel3d,
            Slide,
        },
        data(){
            return{

            }

        },
    }
</script>

<style scoped>

</style>
