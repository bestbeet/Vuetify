<template>
    <nav>
        <v-toolbar app class="blue">
            <v-toolbar-side-icon @click="drawer=!drawer"/>
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
        <v-navigation-drawer app v-model="drawer" class="black--text light-blue">
            <v-list>
                <v-list-tile class="mt-3 mx-2" v-for ="list in lists" :key="list.text" router :to="list.route">
                    <v-list-tile-action>
                        <v-icon>{{list.icon}}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        {{list.text}}
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>


    export default {
        name: "Navbar",
        data(){
            return{
                drawer: true,
                lists: [
                    {icon:"home",text:"Home",route:"/"},
                    {icon:"assignment_ind",text:"Profile",route:"/profile"},
                    {icon:"folder_special",text:"Project",route:"/project"},
                    {icon:"contacts",text:"Contacts",route:"/contacts"},
                    {icon:"image",text:"Gallery",route:"/gallery"}

                ],
            }
        }
    }
</script>

<style scoped>

</style>
