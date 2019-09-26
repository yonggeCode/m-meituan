<template>
    <div class="list-container">
        <el-row class="crumb">
            <span class="m-meituan">
                <router-link to="/"> 南京美团 </router-link>               
            </span>
            <span>
                <router-link to="/s/南京总统府"> 南京总统府 </router-link>
            </span>
        </el-row>
        <el-row class="centent-container">
            <el-col class="left-container" :span="19">
                <el-row class="classify">
                    <m-fliter  :type="'分类'" :list="classifyList" :border="true"/>
                    <m-fliter  :type="'区域'" :list="classifyList"/>
                </el-row>
                <el-row class="goods-list">
                    <div class="tag-ground">
                        <div class="tag">智能排序</div>
                        <div :class="{'tag':true ,'tag-sort':true ,'arrowUp': !arrowUp  && sortNum != 0,'arrowDown':arrowUp}"
                        @click="sortCount"
                        >{{sortTitle}}</div>
                        <div class="tag">人气最高</div>
                        <div class="tag">评价最高</div>
                    </div>
                    <div class="good-ground">
                        <m-goodsCard 
                    v-for="(item,index) in goods"
                    :key="index"
                    :goods="item"/>
                    </div>
                    
                </el-row>
                
            </el-col>
            <el-col class="right-container" :span="5">
                <div class="map">
                    <img src="../assets/image/map.png" alt="">
                </div>
                <div class="youLike">
                    <h3>猜你喜欢</h3>
                    <m-youLikeCard 
                    v-for="(item,index) in goods"
                    :key="index"
                    :goods="item"
                    />
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import mFliter from '@/components/tools/m-fliter'
import mGoodsCard from '@/components/tools/m-goodsCard'
import mYouLikeCard from '@/components/tools/m-youLikeCard'

export default {
    data(){
        return{
            sortValue:'价格排序',
            sortNum:0,
            arrowDown:false,
            arrowUp:false,
            classifyList:[
                {
                    "title": "美食",
                    "type": "food",
                    "subList": [
                        {
                        "name": "日本菜",
                        "id": "Japan"
                        },
                        {
                        "name": "日本菜",
                        "id": "Japan1"
                        },
                        {
                        "name": "日本菜",
                        "id": "Japan2"
                        },
                        {
                        "name": "日本菜",
                        "id": "Japan3"
                        },
                        {
                        "name": "日本菜",
                        "id": "Japan4"
                        },
                        {
                        "name": "日本菜",
                        "id": "Japan5"
                        },
                        {
                        "name": "日本菜",
                        "id": "Japan6"
                        },
                        {
                        "name": "日本菜",
                        "id": "Japan7"
                        },
                    
                    ]
                },
                {  
                    "title": "酒店住宿",
                    "type": "hotal",
                    "subList": [{
                        "name": "温泉酒店",
                        "id": "hot_spring"
                    }]
                },
                {
                    "title": "美食",
                    "type": "food",
                    "subList": [{
                        "name": "日本菜",
                        "id": "Japan"
                    }]
                },
                {  
                    "title": "酒店住宿",
                    "type": "hotal",
                    "subList": [{
                        "name": "温泉酒店",
                        "id": "hot_spring"
                    }]
                },
                {
                    "title": "美食",
                    "type": "food",
                    "subList": [{
                        "name": "日本菜",
                        "id": "Japan"
                    }]
                },
                {  
                    "title": "酒店住宿",
                    "type": "hotal",
                    "subList": [{
                        "name": "温泉酒店",
                        "id": "hot_spring"
                    }]
                },
                {
                    "title": "美食",
                    "type": "food",
                    "subList": [{
                        "name": "日本菜",
                        "id": "Japan"
                    }]
                },
                {  
                    "title": "酒店住宿",
                    "type": "hotal",
                    "subList": [{
                        "name": "温泉酒店",
                        "id": "hot_spring"
                    }]
                },
                {
                    "title": "美食",
                    "type": "food",
                    "subList": [{
                        "name": "日本菜",
                        "id": "Japan"
                    }]
                },
                {  
                    "title": "酒店住宿",
                    "type": "hotal",
                    "subList": [{
                        "name": "温泉酒店",
                        "id": "hot_spring"
                    }]
                }
    ],
            goods: [{
        "image": "http://p0.meituan.net/msmerchant/ea581652ca1946665badd91f5a9cb778198345.jpg@220w_125h_1e_1c",
        "title": "火鸡老店",
        "type": "food",
        "score": "4.1",
        "commentNum": 10,
        "comment": [{
            "username": "xxxx",
            "evalaute": "好吃"
        }],
        "tab": ["火锅", "沙河"],
        "address": "昌平区小汤山尚信村沿温榆河畔北岸向西3．5公里",
        "avgPrice": 64,
        "dealItems": [{
            "title": "火鸡宴，建议10-14人使用",
            "price": 909,
            "counterPrice": 1150,
            "saleNum": 10,
            "priceType": "元"
        }]
    },{
        "image": "http://p0.meituan.net/msmerchant/ea581652ca1946665badd91f5a9cb778198345.jpg@220w_125h_1e_1c",
        "title": "火鸡老店",
        "type": "food",
        "score": "4.1",
        "commentNum": 10,
        "comment": [{
            "username": "xxxx",
            "evalaute": "好吃"
        }],
        "tab": ["火锅", "沙河"],
        "address": "昌平区小汤山尚信村沿温榆河畔北岸向西3．5公里",
        "avgPrice": 64,
        "dealItems": [{
            "title": "火鸡宴，建议10-14人使用",
            "price": 909,
            "counterPrice": 1150,
            "saleNum": 0,
            "priceType": "元"
        }]
    }]
        }
    },
    computed:{
        sortTitle(){
            if( this.sortNum > 0){
                return this.sortNum % 2 == 1 ? '价格最低':'价格最高' 
            }
            return this.sortValue
        }
    },
    methods:{
        sortCount(){
            this.sortNum ++ 
            this.arrowUp = !this.arrowUp;
        }
    },
    components:{
        mFliter,
        mGoodsCard,
        mYouLikeCard
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/goodsList.scss';
</style>