<template>
  <div class="container-wraper">
    <el-row>
      <dl class="type-title clearFix" :style="background">
        <dt>{{Data.typeName}}</dt>
        <dd
          :class="{index:index == typeIndex}"
          v-for="(item,index) in Data.typeList"
          :key="index"
          @mouseenter="changeIndex(index)"
        >{{item}}</dd>
      </dl>
    </el-row>
    <el-row class="main-container">
      <a href="#" v-for="(item, index) in cardData[typeIndex]" :key="index">
        <el-col :span="8">
          <el-card class="card" :body-style="{ padding: '0'}" :shadow="'hover '">
            <img :src="item.image" class="image" />
            <div class="card-message">
              <h3 class="card-title">{{item.title}}</h3>
              <p class="sub-title">{{item.subTitle}}</p>
              <div>
                <span>￥</span>
                <span class="price">{{item.price}}</span>
                <del class="old-price">{{item.oldPrice}}</del>
                <address class="address">{{item.address}}</address>
              </div>
            </div>
          </el-card>
        </el-col>
      </a>
    </el-row>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.cardData);
  },
  props: ["Data"],
  data() {
    return {
      timer: null,
      typeIndex: 0
    };
  },
  computed: {
    background() {
      return { background: this.Data.color };
    },
    cardData() {
      return Object.values(this.Data.data);
    }
  },
  methods: {
    changeIndex(index) {
    clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.typeIndex = index;
      }, 200);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/main/container/container.scss";
</style>