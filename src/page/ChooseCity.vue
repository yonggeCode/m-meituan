<template>
  <div class="chooseCity-wrapper">
    <el-row class="chooseBar">
      <el-col :span="10" >
        <h3>按省份选择：</h3>
        <m-select
          :active="provinceActive"
          :type="provinceSelect"
          :list="provinceList || []"
          @active="handelProvinceActive"
          @changeProvince="changeProvince"
          :disabled="false"
        />
        <m-select
          :active="cityActive"
          :type="citySelect"
          :list="cityList || []"
          @active="handelCityActive"
          @changeCity="changeCity"
          :disabled="disabled"
        />
      </el-col>
      <el-col :span="7" :offset="1">
        <h3>直接搜索：</h3>
        <el-select
          v-model="searchWord"
          filterable
          remote
          reserve-keyword
          placeholder="请输入关键词"
          :remote-method="remoteMethod"
          :loading="loading"
          >
          <el-option v-for="item in searchList" :key="item" :label="item" :value="item"></el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-row class="hotCity">
      <m-list :title="'热门城市'" :list="hotList"/>
    </el-row>
    <el-row class="recentCity">
      <m-list :title="'最近访问'" :list="recentList"/>
    </el-row>
    <el-row>
      <el-row class="alphabet">
        <h3 class="title">按拼音首字母选择:</h3>
        <a :href="'#city-'+ item"
        v-for="(item,index) in list"
        :key="index"
        >
        <span>{{ item }}</span>
        </a>
      </el-row>
      <el-row class="alphabetCity-area">
        <div
        v-for="(item) in list"
        :key="item"
        class="city-area" :id="'city-'+ item">
          <span class="city-label">{{item}}</span>
          <span class="cities">
            <a href="#">南京</a>
            <a href="#">南京</a>
            <a href="#">南京</a>
            <a href="#">南京</a>
          </span>
        </div>
      </el-row>
    </el-row>
  </div>
</template>

<script>
import mSelect from "@/components/tools/m-select";
import mList from "@/components/tools/m-list";
import api from '@/api/index.js'
export default {
  created(){
    api.getHotCity().then((res)=>{
      this.hotList = res.data.data
    });
    api.getRecentCity().then((res)=>{
      this.recentList = res.data.data
    });
    api.getProvince().then((res)=>{
      console.log(res.data.data)
      this.provinceData = res.data.data;
      this.provinceList = res.data.data.map((item)=>{
        return item.provinceName
      })
    })
  },
  data() {
    return {
      disabled:true,
      provinceList:[],
      provinceData:[],
      provinceActive: false,
      cityActive: false,
      provinceSelect: "省份",
      curProvince:'',
      citySelect: "城市",
      searchList: [
        "山东",
        "甘肃",
        "江苏",
        "北京",
        "云南",
        "海南",
        "浙江",
        "上海",
        "天津",
        "陕西",
        "新疆",
        "贵州",
        "安徽",
        "澳门",
        "湖南",
        "河北",
        "香港",
        "辽宁",
        "四川"
      ],
      searchWord: "",
      loading:false,
      hotList:[],
      recentList:[],
      list:'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    };
  },
  computed:{
    cityList(){
      let cities = [];
      let list = this.provinceData.map((item)=>{
        if(item.provinceName == this.curProvince){
          cities = item.cityInfoList
        }
      })
      return cities
    }
  },
  components: {
    mSelect,
    mList
  },
  methods: {
    handelProvinceActive() {
      this.provinceActive = true;
      this.cityActive = false;
    },
    handelCityActive() {
      this.cityActive = true;
      this.provinceActive = false;
    },
    remoteMethod(val){
        console.log(val)
    },
    changeProvince(val){
      this.curProvince = val;
      this.disabled = false;
      console.log(this.curProvince)
    },
    changeCity(val){
      console.log(val)
      this.$store.dispatch('setCity',val.name);
      this.$router.push({name:'mainPage'})
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/chooseCity/container.scss";
</style>













