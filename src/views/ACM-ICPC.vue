<template>
    <v-container>
        <v-layout pa-4>
            <strong class="display-2 font-weight-black"> ACM-ICPC Asia 2017 - (ICT) Mahidol University </strong>
        </v-layout>
        <v-layout row warp pa-5>
            <v-flex auto>
                <v-carousel>
                    <v-carousel-item
                            v-for="(item,i) in items"
                            :key="i"
                            :src="item.src"
                    ></v-carousel-item>
                </v-carousel>
            </v-flex>
        </v-layout>
    </v-container>

</template>

<script>

    export default {
        name: "ACM-ICPC",
        components: {
        },
        data () {
            return {
                items: [
                    {
                        src : require('../img/ACM-ICPC/ACM_1.jpg'),
                    },
                    {
                        src: require('../img/ACM-ICPC/ACM_2.jpg'),
                    },
                    {
                        src: require('../img/ACM-ICPC/ACM_3.jpg')
                    },

                ]
            }
        }

    }
</script>

<style scoped>
</style>
