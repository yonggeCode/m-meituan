<template>
  <div class="nav">
    <div class="nav-child inline-block dropBar">
      <router-link class="nav-childTag pointer" tag="li" to="/">我的美团</router-link>
      <ul class="list">
        <li v-for="(item, index) in myMeituan" :key="index">
          <router-link to="item.navPath">{{item.navName}}</router-link>
        </li>
      </ul>
    </div>
    <div class="nav-child inline-block">
      <router-link class="nav-childTag pointer" tag="li" to="/">手机APP</router-link>
    </div>
    <div class="nav-child inline-block dropBar">
      <router-link class="nav-childTag" tag="li" to="/">商家中心</router-link>
      <ul class="list setLeftDrop">
        <li v-for="(item, index) in businessCenter" :key="index">
          <router-link to="item.navPath">{{item.navName}}</router-link>
        </li>
      </ul>
    </div>
    <div class="nav-child inline-block dropBar pointer">
      <router-link class="nav-childTag" tag="li" to="/">美团规则</router-link>
      <ul class="list">
        <li v-for="(item, index) in meituanRule" :key="index">
          <router-link to="item.navPath">{{item.navName}}</router-link>
        </li>
      </ul>
    </div>
    <div class="nav-child inline-block dropBar">
      <router-link class="nav-childTag" tag="li" to="/">网址导航</router-link>
      <div class="list webNav">
        <dl class="webNav-wrapper">
          <dt>{{webNav.hotel.webTag}}</dt>
          <dd v-for="(item, index) in hotelArr" :key="index">
            <router-link to="item.navPath">{{item.navName}}</router-link>
          </dd>
        </dl>
        <dl class="webNav-wrapper">
          <dt>{{webNav.food.webTag}}</dt>
          <dd v-for="(item, index) in foodArr" :key="index">
            <router-link to="item.navPath">{{item.navName}}</router-link>
          </dd>
        </dl>
        <dl class="webNav-wrapper">
          <dt>{{webNav.movie.webTag}}</dt>
          <dd v-for="(item,index) in movieArr" :key="index">
            <router-link to="item.navPath">{{item.navName}}</router-link>
          </dd>
        </dl>
        <dl class="webNav-wrapper">
          <dt>{{webNav.phoneApp.webTag}}</dt>
          <dd v-for="(item, index) in appArr"
          :key="index">
            <a :href="item.src" target="_blank">
              <img :src="item.imageSrc" alt />
            </a>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import mockData from "@/mock/headerNav/mocknav.js";
export default {
  data() {
    return {
      ...mockData
    };
  },
  computed: {
    hotelArr() {
      return this.webNav.hotel.navTags;
    },
    foodArr() {
      return this.webNav.food.navTags;
    },
    movieArr() {
      return this.webNav.movie.navTags;
    },
    appArr() {
      return this.webNav.phoneApp.navTags;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/HomePage/header/nav.scss";
</style>

