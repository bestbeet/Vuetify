<template>
    <div class='stack'>
        <div class="icon">
            <img :src=item.icon />
        </div>
        <div class="biko">
            <p>Experience {{item.term}}</p>
            <p>Skill {{item.proficiency}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'stack',
        props: ['item'],
        data () {
            return {
            }
        }
    }
</script>

<style>
    .stack {
    }
    .stack .icon {
        width: 80px;
        text-align: left;
        vertical-align: middle;
        display: inline-block;
    }
    .stack .icon img {
        margin-right: 10px;
        width: 45px;
    }
    .stack .biko {
        width: 180px;
        text-align: left;
        vertical-align: middle;
        display: inline-block;
    }
</style>
