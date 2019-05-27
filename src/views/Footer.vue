<template>
    <v-footer
            dark
            height="auto"
    >
        <v-card
                class="flex"
                flat
                tile
        >
            <v-card-actions class="grey darken-3 justify-center">
                &copy;2019 — <strong>Nattawat  Thong-aram</strong>
            </v-card-actions>
        </v-card>
    </v-footer>
</template>

<script>
    export default {
        name: "Footer",
        data (){
            return{
                lists: [

                    {icons:'fab fa-medium', href:'medium.com/@bestbeet2538'}

                ],

            }
        },

    }
</script>

<style scoped>

</style>
