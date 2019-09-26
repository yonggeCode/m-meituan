<template>
  <div class="topBar textLeft clearFix">
    <el-row>
      <el-col class="position" :span="10">
        <geo class="inline-block geo" />
        <login class="inline-block login" />
      </el-col>
      <el-col class="nav" :span="14">
          <tagNav />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Geo from "./Geo";
import Login from "./login";
import tagNav from "./nav"
export default {
  components: {
    Geo,
    Login,
    tagNav
  }
};
</script>

<style lang="scss" scoped>
.topBar {
  width: 1190px;
  margin: 0 auto;
}
.position{
  padding: 12px 0 0;
}
.login {
  margin-left: 15px;
}
</style>

