<template>
    <v-container>
        <v-layout row warp>
            <v-flex >
                <div id="prof">
                    <h1 class="display-2 pa-5"><b>Resume</b></h1>

                    <p class="pa-2" id="picture"></p>
                    <table>
                        <tbody>
                        <tr>
                            <strong class="display-1">Nattawat   Thong-aram</strong>
                        </tr>
                        <tr>
                            <strong class="display-1">Birth :</strong>
                            <td><strong class="display-1">06 November 1995</strong></td>

                        </tr>
                        <tr>
                            <strong class="display-1">Age :</strong>
                            <td><strong class="display-1">24</strong></td>
                        </tr>
                        <tr>
                            <th>Address : </th>
                            <td>Thungsong , Nakhon Si Thammarat 80110 , Thailand </td>
                        </tr>
                        <tr>
                            <th>GitHub : </th>
                            <td><a href='https://github.com/bestbeet' target="_blank">@bestbeet</a></td>
                        </tr>
                        <tr>
                            <th>Youtube : </th>
                            <td><a href='https://www.youtube.com/channel/UCkM1aUHTMMbWCn7fyQz2WRA?view_as=subscriber' target="_blank">@bossun</a></td>
                        </tr>
                        <tr>
                            <th>Medium : </th>
                            <td><a href='https://medium.com/@bestbeet2538' target="_blank">@bestbeet2538</a></td>
                        </tr>
                        </tbody>
                    </table>
                    <p class="heading">What you want to do now.</p>
                    <p class="eng">- Contribution to the world by utilizing technology -</p>
                    <p class="eng">- I want to work with your company  -</p>
                    <p class="heading">Strength</p>
                    <div id="feature">
                        <ul>

                        </ul>
                        <p class="heading">Things you can do casually</p>
                        <ul>

                        </ul>
                        <p class="heading">What I'm doing recently.</p>
                        <ul>

                        </ul>
                    </div>
                </div>
            </v-flex>
        </v-layout>

    </v-container>

</template>

<script>
    export default {
        name: 'Resume',
        title: ' ',
        components: {

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
