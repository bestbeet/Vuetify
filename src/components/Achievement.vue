<template>
    <v-container>
        <v-layout pa-4>
            <strong class="display-2 font-weight-black"> Achievement </strong>
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
                        src : require('../img/Achievement/Achievement_1.png'),
                    },
                    {
                        src: require('../img/Achievement/Achievement_2.png'),
                    },
                    {
                        src: require('../img/Achievement/Achievement_3.png')
                    },
                    {
                        src: require('../img/Achievement/Achievement_4.png'),
                    },
                    {
                        src: require('../img/Achievement/Achievement_5.png')
                    },

                ]
            }
        }

    }
</script>

<style scoped>
</style>
