<template>
  <div class="banner-nav">
    <div class="title">全部分类</div>
    <ul class="navList" @mouseleave="Leave">
      <li v-for="(item, index) in nav" :key="index"
      @mouseenter="liEnter(index)">
        <i :class="item.navIcon"></i>
        <router-link to="/">{{ item.navName }}</router-link>
        <span class="arrow"></span>
      </li>
    </ul>
    <dl class="detail"
    v-if="detailShow"
    @mouseenter="detailEnter"
    @mouseleave="Leave"
    >
      <div class="detail-area"
      v-for="(item,index) in deTail"
      :key="index">
        <div class="detail-title">
          <h2>
              {{item.detailName}}
          </h2>
          <span class="more">更多</span>
            <span class="arrow"></span>
        </div>
        <div class="detail-content">
          <a  class="grey__color" href="#"
          v-for="(tag,tagIndex) in item.children"
          :key="tagIndex">{{tag}}</a>
        </div>
      </div>
    </dl>
  </div>
</template>






<script>
import api from '@/api/index.js'
import navData from '@/mock/container/leftNav.js'
export default {
  data() {    
    return {
        detailShow:false,
        navIndex:0,
        timer:null,
        nav: navData.data
    };
  },
  computed:{
      deTail(){
          return this.nav[this.navIndex].children
      }
  },
  methods:{
     liEnter(index){
        clearTimeout(this.timer)
        this.navIndex = index;
        this.detailShow = true;
     },
     Leave(){
         this.timer = setTimeout(()=>{
             this.detailShow = false;
         },200)
         
     },
     detailEnter(){
        clearTimeout(this.timer)
     }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/main/banner/left-banner.scss";
</style>