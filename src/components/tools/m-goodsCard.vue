<template>
    <div class="goods-wrapper">
        <div class="goods-box">
            <a href="#">
            <img :src="goods.image" alt="">
            </a>
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
                    <span>{{value}}分</span>
                    <span>{{goods.commentNum}}人评论</span>
                </div>
                <div class="goods-info">
                    <span>
                        {{goods.tab[0]}} | {{goods.tab[1]}}
                    </span>
                    <span>
                        {{goods.address}}
                    </span>
                    <i class="el-icon-location icon"></i>
                    <span class="geo">查看地图</span>
                </div>
                <div class="avgPrice">
                    <span>
                        人均￥{{goods.avgPrice}}
                    </span>
                </div>
                <div class="dealList"
                    v-for="(v,i) in goods.dealItems"
                    :key="i"
                >
                <h3 class="dealTitle">{{v.title}}</h3>
                <div class="item-info">
                    <span class="item-price">￥</span>
                    <span class="item-price font-price">{{v.price}}</span>
                    <span>{{'门市价￥' + v.counterPrice}}</span>
                    <span>已售{{v.saleNum}}</span>
                </div>
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
    @import '@/assets/css/tools/m-goodCard.scss';
</style>