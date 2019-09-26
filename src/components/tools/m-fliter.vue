<template>
    <el-row class="fliter-container">
        <el-col class="label">
            <span class="title">{{type}}</span>
            <span class="all">全部</span>
        </el-col>
        <el-col :class="{'tags':true, 'border':border}">
            <m-tag 
            v-for="(item,index) in list"
            :key="index"
            :tag="item" />
        </el-col>
    </el-row>
</template>

<script>
import mTag from '@/components/tools/m-tag.vue'
export default {
    mounted(){
        console.log(this.list)
    },
    props:['type','list','border'],
    components:{
        mTag
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/tools/m-fliter.scss';
</style>