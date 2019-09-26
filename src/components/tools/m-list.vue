<template>
    <div class="list-wrapper">
        <h3 class="title">{{title+'：'}}</h3>
        <a href="#"
        v-for="(item,index) in list"
        :key="index"
        >
        <span>{{item.name ? item.name : item }}</span>
        </a>
    </div>
</template>

<script>
export default {
    props:['title','list'],

}
</script>

<style lang="scss" scoped>
@import '@/assets/css/tools/m-list.scss';
</style>