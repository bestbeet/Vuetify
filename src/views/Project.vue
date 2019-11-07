<template>
    <v-container>

    </v-container>
</template>

<script>

    import FiSho from "../components/FiSho";
    export default {
        name: 'Information',
        title: ' ',
        components: {
            FiSho,

        },
        data () {
            return {
            }
        }
    }
</script>

<style>
    #prof {
        position: relative;
        color: #222222;
        text-align: center;
        font-family: 'arial unicode ms';
        text-shadow: 0px 0.3px 0.1px #999999;
    }
    #prof p {
        margin-top: 0px;
    }
    #picture {
        margin: 30px auto;
        border-radius: 50%;
        width: calc(1vmin + 200px);
        height: calc(1vmin + 200px);
        background-size: contain;
        border: solid 1px #c0c0c0;
        background: url('http://graph.facebook.com/2357769200950904/picture?type=large');

    }
    #prof table {
        padding: 0px 70px;
        font-size: 18px;
        display: inline-block;
        text-align: left;
    }
    #prof table th {
        padding-right: 20px;
        font-weight: normal;
    }
    #prof table td {
        padding : 5px 0px;
    }
    #prof table td a {
        margin: 0px;
        height: 25px;
        font-size: 18px;
        color: #6495ed;
        line-height: 25px;
    }
    #prof .heading {
        padding-top: 5vh;
        font-size: 22px;
        font-weight: bold;
    }
    #prof .goal {
        font-size: 18px;
    }
    #prof .eng {
        font-family: cursive;
    }
    #prof #feature ul {
        width: 650px;
        margin: 0px auto;
        text-align: left;
    }
    #prof #feature ul li {
        margin: 15px 0px;
    }
    #prof #license {
        margin-bottom: 20px;
    }
    .v-enter-active {
        transition: opacity 1.5s;
    }
    .v-enter {
        opacity: 0;
    }
    @media (max-width : 670px){
        #prof {
            font-family: 'arial unicode ms';
        }
        #prof #feature ul {
            width: 85%;
            width: 80%;
            font-size: 14px;
        }
        #license {
            display: inline-block;
        }
    }
</style>
