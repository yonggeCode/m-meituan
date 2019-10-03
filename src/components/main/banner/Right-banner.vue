<template>
  <div class="right-banner-wrapper">
    <div class="banner-top-links">
        <span>美团外卖</span>
        <span>猫眼电影</span>
        <span>美团酒店</span>
        <span>民宿／公寓</span>
        <span>商家入驻</span>
        <span>美团公益</span>
    </div>
    <el-row class="banner-top clearFix">
      <el-col>
        <el-col :span="18">
          <div class="inline-block">
            <el-carousel class="slider" height="240px">
              <el-carousel-item v-for="item in sliderImg" :key="item">
                <img :src="item" alt />
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="life">
            <img src="http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg" alt />
          </div>
        </el-col>
        <el-col :span="6">
          <div class="login">
            <div class>
              <div class="avatar">
                <img src="//s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg" alt="">
              </div>
            </div>
            <p class="Hi"> 
              {{user || 'Hi! 你好'}}
            </p>
            <div class="welcome" v-if="user">
              欢迎来到勇哥的美团
            </div>
            <div>
              <router-link
              v-if="!user"
               type="div" to="/register">
                <el-button class="button" round>注册</el-button>
              </router-link>
            </div>
            <div>
              <router-link 
              v-if="!user"
              type="div" to="/login">
                <el-button class="button" round>立即登录</el-button>
              </router-link>
            </div>
          </div>
        </el-col>
      </el-col>
    </el-row>
    <el-row class="banner-bottom">
        <el-col  :span="18">
            <div class="itemPic">
                <img src="http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png" alt="">
            </div>
            <div class="itemPic">
                <img src="http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg" alt="">
            </div>
            <div class="itemPic2">
                <img src="http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg" alt="">
            </div>
        </el-col>
        <el-col :span="6" >
            <div class="QRcode">
                <div class="QR">
                    <img src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="">
                </div>
                <p class="m-APP-p">
                    美团APP手机版
                </p>
                <p class="black__color">
                    <span class="red__color">一元起</span>
                    吃喝玩乐
                </p>
            </div>
        </el-col>
        
    </el-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  mounted(){
    console.log(this.$store.state.user);
    console.log(this.user)
  },
  data() {
    return {
      sliderImg: [
        "http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg",
        "http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg",
        "http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg",
        "http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg",
        "https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png"
      ],
      // userName:''
    };
  },
  computed:{
    ...mapState(['user']),
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/main/banner/right-banner.scss";
</style>