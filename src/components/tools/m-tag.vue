
<template>
  <div class="tag">
    <span @mouseenter="tagOn" @mouseleave="tagOff">{{tag.title}}</span>
    <i class="el-icon-caret-bottom"></i>
    <div class="list" @mouseenter="listOn" @mouseleave="listOff" v-if="flag">
      <h3>{{tag.title}}</h3>
      <span v-for="item in tag.subList" :key="item.id">{{item.name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tag"],
  data() {
    return {
      flag: false,
      timer: null,
      timer2: null
    };
  },
  methods: {
    tagOn() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.flag = true;
      }, 200);
    },
    tagOff() {
      clearTimeout(this.timer2);
      this.timer2 = setTimeout(() => {
        this.flag = false;
      }, 200);
    },
    listOn() {
      clearTimeout(this.timer2);
      this.flag = true;
    },
    listOff() {
      this.flag = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/tools/m-tag.scss";
</style>