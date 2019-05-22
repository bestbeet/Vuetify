<template>
    <nav>
        <v-toolbar app class="blue">
            <v-toolbar-title class="headline text-uppercase">
                <span>Bossun : </span>
                <span class="font-weight-light">ProjectWeb</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <v-icon>home</v-icon>
                <span class="mr-2">HOME</span>

            <v-btn
                    flat
                    href="https://github.com/vuetifyjs/vuetify/releases/latest"
                    target="_blank"
            >
                <span class="mr-2">Latest Release</span>
            </v-btn>
        </v-toolbar>
    </nav>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>

</style>
