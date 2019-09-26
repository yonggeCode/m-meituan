<template>
    <div class="youLikeWrapper">
        <div class="img-box">
            <a href="#">
                <img :src="goods.image" alt="">
            </a>
            
        </div>
        <div class="info-box">
            <div class="item-list">
            <div class="goods-title">
                <a href="#">
                    {{goods.title}}
                </a>
            </div>
            <div class="goods-score">
                <el-rate
                v-model="value"
                disabled
                show-score
                text-color="#ff9900"
                score-template="">
                </el-rate>
                <span class="score" v-if="value >= 4.5">很好</span>
                <span class="score" v-else-if="value >= 4">好</span>
                <span class="score" v-else-if="value > 3.5">不错</span>
                <span class="score" v-else-if="value > 3">一般</span>
                <span class="score" v-else>不推荐</span>
            </div>
            <div class="goods-info">
                <span>
                    {{goods.tab[1]}}
                </span>
            </div>
            <div class="avgPrice">
                <span class="price">
                    ￥
                </span>
                <span class="price font-price">
                    {{goods.avgPrice.toFixed(1)}}
                </span>
                <span class="price">起</span>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['goods'],
    data(){
        return{
            value:+this.goods.score
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/css/tools/m-youLikeCard.scss';
</style>