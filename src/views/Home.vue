<template>
  <div class="layout-default">
    <el-container>
      <div class="m-header">
        <el-header height="40px">
          <m-header />
        </el-header>
        <el-row class="m-searchBar">
          <searchBar />
        </el-row>
      </div>
      <el-main>
        <router-view />
      </el-main >
      <el-footer height="auto">
        <mFooter />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import mHeader from "@/components/header/index";
import SearchBar from "@/components/header/searchBar/SearchBar";
import mFooter from "@/components/footer/Footer.vue";

export default {
  name: "home",
  components: {
    mHeader,
    SearchBar,
    mFooter
  }
};
</script>

<style lang="scss" >
@import "@/assets/css/indexPage";
</style>

