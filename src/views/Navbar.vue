<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <nav>
        <v-toolbar app class="blue">
            <v-toolbar-side-icon @click="drawer=!drawer"/>
            <v-toolbar-title class="headline text-uppercase">
                <span>Bossun : </span>
                <span class="font-weight-light">ProjectWeb</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn
                    flat
                    href="/"
            >

                <v-icon left>home</v-icon>
                    <span class="mr-2">HOME</span>
            </v-btn>

            <v-btn class="hidden-sm-and-down"
                    flat
                    href="https://www.facebook.com/best.bossun"
                    target="_blank"
            >
                <span class="mr-2 hiddenline text-uppercase">Facebook</span>
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
                <v-list-group
                        v-for="item in items"
                        :key="item.title"
                        v-model="item.active"
                        :prepend-icon="item.action"
                        no-action
                        class="mt-3 mx-2"
                >
                    <template v-slot:activator >
                        <v-list-tile >
                            <v-list-tile-content>
                                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </template>

                    <v-list-tile
                            v-for="subItem in item.items"
                            :key="subItem.title"
                            router :to="subItem.route"
                            @click=" "
                    >
                        <v-list-tile-content>
                            <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                        </v-list-tile-content>

                        <v-list-tile-action>
                            <v-icon>{{ subItem.action }}</v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list-group>
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
                    {icon:"folder_special",text:"Project",route:"/project"},
                    {icon:"assignment_ind",text:"Portfolio",route:"/profile/portfolio"}

                ],
                items: [
                    {
                        action: 'image',
                        title: 'Gallery',
                        items: [
                            { title: 'ACM-ICPC', route:"/gallery/acm-icpc",},
                            { title: 'Apprentice' ,route:"/gallery/apprentice"},
                            { title: 'NSC',route:"/gallery/nsc"},

                        ],

                    },

                ]
            }
        }
    }
</script>

<style scoped>

</style>
