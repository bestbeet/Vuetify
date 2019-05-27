<template>
    <v-container>
        <v-layout row warp>

            <v-flex md4>
                <h1> Experience And Education </h1>
            </v-flex>
        </v-layout>
        <v-layout pa-5 row warp>
            <v-flex md2></v-flex>
            <v-flex md8 xs12>
                <v-timeline>
                    <v-timeline-item
                            v-for="(year, i) in years"
                            :key="i"
                            :color="year.color"
                            small
                    >
                        <template v-slot:opposite>
                        <span
                                :class="`headline font-weight-bold ${year.color}--text`"
                                v-text="year.year"
                        ></span>
                        </template>
                        <div class="py-3">
                            <h2 :class="`headline font-weight-light mb-3 ${year.color}--text`"
                                v-text="year.degree"></h2>
                            <h2 :class="`headline font-weight-light mb-3 ${year.color}--text`"
                                v-text="year.education"></h2>
                            <div>

                            </div>
                        </div>
                    </v-timeline-item>
                </v-timeline>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>

    export default {
        name: 'Experience',
        components: {

        },
        data: () => ({
            years: [
                {
                    color: 'cyan',
                    year: '2008-2010',
                    degree: 'Junior High School ',
                    education: 'Satri Tungsong School',
                    conten:'test'
                },
                {
                    color: 'green',
                    year: '2011-2013',
                    degree: 'Senior High School ',
                    education: 'Satri Tungsong School',
                    conten:'test'
                },
                {
                    color: 'pink',
                    year: '2014-2018',
                    degree: 'B.Eng. ,Computer of Engineer',
                    education: 'Prince of Songkla University Phuket Campus',
                    conten:'test'
                },
                {
                    color: 'amber',
                    year: '2018',
                    education: 'Apprentice ' +
                        'FOPC CO.,LTD.',
                    conten:'test'
                },

            ]
        })
    }
</script>

<style>

</style>
