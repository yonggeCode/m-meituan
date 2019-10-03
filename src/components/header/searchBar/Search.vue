<template>
  <div class="searchWrapper">
    <div class="mSearch">
      <el-input class="m-input" 
      v-model="inputValue" placeholder="搜索商家或地址" 
      @focus="focus" 
      @blur="blur" 
      @input="input"
      />

      <el-button class="m-botton" 
      type="primary" 
      icon="el-icon-search" />
      <ul class="hot-banner">
        <li class="hot-word" v-for="(item,index) in hotTags || ['暂无数据']"
        :key="index">
         <router-link class=" grey__color" :to="{name:'goodsList',params:{name:item}}">{{item}}</router-link>
        </li>
      </ul >
    </div>
    <div class="hotTags"
    v-if="ifHotTags">
      <dt class="hotTitle">热门搜索</dt>
      <dd class="h-tags"
        v-for="(item,index) in innerHotTags || ['暂无数据']"
        :key="index">
        <router-link :to="{name:'goodsList',params:{name:item}}">{{item}}</router-link>
      </dd>   
    </div>
    <div class="searchTags"
        v-if="ifSearchTags">
      <dd class="s-tags"
      v-for="(item,index) in searchTags|| ['暂无数据']"
      :key="index">
        <router-link :to="{name:'goodsList',params:{name:item}}">{{item}}</router-link>
      </dd>
    </div>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data() {
    return {
      inputValue: "",
      hotTags:null,
      innerHotTags:null,
      searchTags:[],
      flag:false,
      timer:null,
      isFocus:false
    }
  },
  created(){
        api.searchHotWords().then((response) => {
        this.hotTags = response.data.data;
        this.innerHotTags = (response.data.data || ['暂无数据']).slice(0,4);
        })
    },
  computed:{
      ifHotTags(){
          return this.isFocus && !this.inputValue
      },
      ifSearchTags(){
          return this.isFocus && this.inputValue
      }
  },
  methods:{
      focus(){
          this.isFocus = true; 
      },
      blur(){
        setTimeout(()=>{
          this.isFocus = false;
        },200)
      },
      input(){
        clearTimeout(this.timer);
        this.timer = setTimeout (()=>{
          let val = this.inputValue;
          api.getSearchList().then((res)=>{
          this.searchTags = (res.data.data.list ||['暂无数据']).filter((item) => {
            return item.indexOf(val) > -1 
          })
          if(this.searchTags.length == 0){
          console.log(11,this.searchTags.length )
          this.searchTags= ['暂不支持该关键字','请搜索关键字如：火锅 自助餐']
        }
        })
        
        },300)
        
      }
  }
};
</script>

<style lang="scss" >
@import "@/assets/css/HomePage/header/search.scss";
</style>