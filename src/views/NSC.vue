<template>
    <v-container >
        <v-layout colum>
            <v-flex class ="pa-2">
                <img class = "nsclogo " src="../img/NSC/NSC-icon.png">
                <h1>National Software Contest</h1>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <h1 class="orange--text mt-5 ml-5" align="center">NSC 2018 (PSU Songkhla)</h1>
            <carousel-3d :width="auto" :height="auto" align="center">
                <slide :index="0" >
                    <img src = "../img/NSC/NSC_9.jpg">
                </slide>
                <slide :index="1" >
                    <img src = "../img/NSC/NSC_10.jpg">
                </slide>
                <slide :index="2" >
                    <img src = "../img/NSC/NSC_8.jpg">
                </slide>
                <slide :index="3" >
                    <img src = "../img/NSC/NSC_7.jpg">
                </slide>
                <slide :index="4" >
                    <img src = "../img/NSC/NSC_6.jpg">
                </slide>
            </carousel-3d>
        </v-layout>
        <v-layout row wrap>
            <h1 class="orange--text mt-5 ml-5" align="center" >NSC 2018 (Bangkok)</h1>
            <carousel-3d :width="auto" :height="auto" align="center">
                <slide :index="0" >
                    <img src = "../img/NSC/NSC_0.jpg">
                </slide>
                <slide :index="1" >
                    <img src = "../img/NSC/NSC_1.jpg">
                </slide>
                <slide :index="2" >
                    <img src = "../img/NSC/NSC_2.jpg">
                </slide>
            </carousel-3d>
        </v-layout>
        <v-layout row wrap>
            <h1 class="orange--text mt-5 ml-5" align="center" >FarmPar Poster</h1>
            <carousel-3d :width="auto" :height="450" align="center">
                <slide :index="0" >
                    <img src = "../img/NSC/NSC_Poster.png">
                </slide>
            </carousel-3d>
        </v-layout>
    </v-container>

</template>

<script>
    import { Carousel3d, Slide } from 'vue-carousel-3d';

    export default {
        name: "NSC",
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
.nsclogo{
    height: calc(5vmin + 100px);
    width: calc(5vmin + 100px);
}

</style>
