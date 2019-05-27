<template>
    <v-container>
        <h1 class="display-3 red--text">Skill Programming</h1>
            <v-layout row class="pa-3">
            </v-layout>
            <v-layout row wrap >
                <v-flex d-flex xs12 sm6 md1 child-flex>
                </v-flex>
                <v-flex d-flex xs12 sm6 md4>
                    <v-card color="purple" dark>
                        <v-card-title primary class="title">Basic Programming</v-card-title>
                        <v-card-text>
                            <stack v-bind:key='serverside' v-for='serverside in serversides' v-bind:item='serverside'>
                            </stack>
                        </v-card-text>
                    </v-card>
                </v-flex>

                <v-flex d-flex xs12 sm6 md2 child-flex>
                </v-flex>
                <v-flex d-flex xs12 sm6 md4>
                    <v-card color="green" dark>
                        <v-card-title primary class="title">Front end</v-card-title>
                        <v-card-text>
                            <stack v-bind:key='frontend' v-for='frontend in frontends' v-bind:item='frontend'>
                            </stack>
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex d-flex xs12 sm6 md1 child-flex>
                </v-flex>

            </v-layout>
            <v-layout row class="pa-5">
            </v-layout>
            <v-layout>
                <v-flex d-flex xs12 sm6 md1 child-flex>
                </v-flex>
                <v-flex d-flex xs12 sm6 md4>
                    <v-card color="amber">
                        <v-card-title primary class="title">Framework & Library</v-card-title>
                        <v-card-text>
                            <stack v-bind:key='framework' v-for='framework in frameworks' v-bind:item='framework'>
                            </stack>
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex d-flex xs12 sm6 md2 child-flex>
                </v-flex>
                <v-flex d-flex xs12 sm6 md4>
                    <v-card color="pink lighten" dark>
                        <v-card-title primary class="title">Database</v-card-title>
                        <v-card-text>
                            <stack v-bind:key='db' v-for='db in dbs' v-bind:item='db'>
                            </stack>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
            <v-layout row class="pa-5">
            </v-layout>

            <v-layout>
                <v-flex d-flex xs12 sm6 md1 child-flex>
                </v-flex>
                <v-flex d-flex xs12 sm6 md4>
                    <v-card color="indigo lighten-1" dark>
                        <v-card-title primary class="title">Tools</v-card-title>
                        <v-card-text>
                            <stack v-bind:key='tool' v-for='tool in tools' v-bind:item='tool'>
                            </stack>
                        </v-card-text>
                    </v-card>
                </v-flex>

                <v-flex d-flex xs12 sm6 md2 child-flex>
                </v-flex>
                <v-flex d-flex xs12 sm6 md4>
                    <v-card color="teal" dark>
                        <v-card-title primary class="title">Software Design</v-card-title>
                        <v-card-text>
                            <stack v-bind:key='middleware' v-for='middleware in middlewares' v-bind:item='middleware'>
                            </stack>
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex d-flex xs12 sm6 md1 child-flex>
                </v-flex>
            </v-layout>
            <v-layout pa-5>

            </v-layout>
        <v-layout>
            <v-flex d-flex xs12 sm6 md4 child-flex>
            </v-flex>
            <v-flex d-flex xs12 sm6 md4>
                <v-card color="purple darken-1" dark>
                    <v-card-title primary class="title">Train Skill</v-card-title>
                    <v-card-text>
                        <stack v-bind:key='train' v-for='train in trains' v-bind:item='train'>
                        </stack>
                    </v-card-text>
                </v-card>
            </v-flex>

        </v-layout>


    </v-container>
</template>

<script>
    import stack from '@/components/stack'
    export default {
        name: 'Skill',
        title: ' ',
        components: {
            stack
        },
        data () {
            return {
                serversides: {
                    c1: {
                        icon: require('../assets/c.svg'),
                        proficiency: '★★★★★',
                        term: '5 years'
                    },
                    c2: {
                        icon: require('../assets/cplus.svg'),
                        proficiency: '★★★★☆',
                        term: '3 years'
                    },
                    arduino: {
                        icon: require('../assets/arduino.svg'),
                        proficiency: '★★☆☆☆',
                        term: '2 years'
                    },
                    java: {
                        icon: require('../assets/java.svg'),
                        proficiency: '★★★☆☆',
                        term: '2 years'
                    },
                    python: {
                        icon: require('../assets/python.svg'),
                        proficiency: '★★★★☆',
                        term: '2 years'
                    },


                },
                frontends: {
                    html: {
                        icon: require('../assets/html-5.svg'),
                        proficiency: '★★★☆☆',
                        term: '2 years'
                    },
                    css: {
                        icon: require('../assets/css-3.svg'),
                        proficiency: '★★★☆☆',
                        term: '2 years'
                    },
                    javascript: {
                        icon: require('../assets/javascript.svg'),
                        proficiency: '★★★☆☆',
                        term: '2 years'
                    },
                    php: {
                        icon: require('../assets/php.svg'),
                        proficiency: '★★★☆☆',
                        term: '2 years'
                    },
                    bootstrap: {
                        icon: require('../assets/bootstrap.svg'),
                        proficiency: '★★★☆☆',
                        term: '6 months'
                    }
                },
                frameworks: {
                    laravel: {
                        icon: require('../assets/laravel.svg'),
                        proficiency: '★★☆☆☆',
                        term: '6 months'
                    },
                    vue: {
                        icon: require('../assets/vue.svg'),
                        proficiency: '★★★☆☆',
                        term: '1 years'
                    },
                    react: {
                        icon: require('../assets/react.svg'),
                        proficiency: '★★★☆☆',
                        term: '1.5 years'
                    },
                    angular:{
                        icon: require('../assets/angularjs.svg'),
                        proficiency: '★★☆☆☆',
                        term: '6 months'
                    }
                },
                dbs: {
                    mysql: {
                        icon: require('../assets/mysql.svg'),
                        proficiency: '★★★☆☆',
                        term: '2 years'
                    },
                    mongo: {
                        icon: require('../assets/mongodb.svg'),
                        proficiency: '★★☆☆☆',
                        term: '3 months'
                    },
                    firebase: {
                        icon: require('../assets/firebase.svg'),
                        proficiency: '★★★★☆',
                        term: '2 years'
                    },
                    postgresql: {
                        icon: require('../assets/postgresql.svg'),
                        proficiency: '★★☆☆☆',
                        term: '3 months'
                    }
                },
                middlewares: {
                    photoshop: {
                        icon: require('../assets/photoshop.svg'),
                        proficiency: '★★★☆☆',
                        term: '2 years'
                    },
                    affter_effects: {
                        icon: require('../assets/after-effects.svg'),
                        proficiency: '★★★☆☆',
                        term: '2 years'
                    },
                    dreamweaver: {
                        icon: require('../assets/dreamweaver.svg'),
                        proficiency: '★★★☆☆',
                        term: '1 years'
                    },
                    visio: {
                        icon: require('../assets/visio.svg'),
                        proficiency: '★★★☆☆',
                        term: '1 years'
                    },
                    sketchup:{
                        icon: require('../assets/google-sketchup.svg'),
                        proficiency: '★★★☆☆',
                        term: '1 years'
                    },

                },
                tools: {
                    android: {
                        icon: require('../assets/android.svg'),
                        proficiency: '★★★★☆',
                        term: '3 years'
                    },
                    intellij: {
                        icon: require('../assets/intellij.svg'),
                        proficiency: '★★★☆☆',
                        term: '2 years'
                    },
                    cmd: {
                        icon: require('../assets/command.png'),
                        proficiency: '★★★☆☆',
                        term: '2 years'
                    },
                    vscode:{
                        icon: require('../assets/visual-studio.svg'),
                        proficiency: '★★★☆☆',
                        term: '2 years'
                    },
                    git: {
                        icon: require('../assets/gitlab.svg'),
                        proficiency: '★★★☆☆',
                        term: '2 years'
                    },
                    vim: {
                        icon: require('../assets/vim.svg'),
                        proficiency: '★★☆☆☆',
                        term: '1 years'
                    },



                },
                trains: {
                    golang: {
                        icon: require('../assets/golang.svg'),
                        proficiency: 'Coming',
                        term: 'Coming'
                    },
                    ruby: {
                        icon: require('../assets/ruby.svg'),
                        proficiency: 'Coming',
                        term: 'Coming'
                    },



                }
            }
        }
    }
</script>

<style>
    #skill_container {
        color: #222222;
        font-family: 'arial unicode ms';
        text-shadow: 0px 0.3px 0.1px #999999;
    }
    #skill {
        margin: 0px auto;
        padding: 20px 0px;
        max-width: 1250px;
    }
    #skill .sbox {
        width: 350px;
        margin: 30px;
        display: inline-block;
        background-color: #ffffff;
        box-shadow: 0 0 8px gray;
    }
    #skill .heading {
        font-size: 22px;
        font-weight: bold;
    }
    #skill .eng {
        font-family: cursive;
    }
    .v-enter-active {
        transition: opacity 1.5s;
    }
    .v-enter {
        opacity: 0;
    }
    @media (max-width : 670px){
        #skill .sbox {
            width: 310px;
            height: 590px;
        }
    }
</style>
