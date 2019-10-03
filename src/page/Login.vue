<template>
  <div class="logIn">
    <el-header class="header">
      <router-link class="header-img_meituan" to="/home" />
    </el-header>
    <el-main>
      <div class="main">
        <div class="img"></div>
        <div class="logIn">
          <el-row :class="['default','logIn-error',{'show':errorText}]">
            <span v-if="errorText">{{errorText}}</span>
          </el-row>
          <el-row class="default logIn-text">
            <span>账号登录</span>
            <span>手机动态码登录</span>
          </el-row>
          <el-row class="default logIn-userName">
            <el-input
              prefix-icon="el-icon-phone"
              placeholder="请输入电话号码"
              v-model="userName"
              @focus="cleanErrorText"
              clearable
            ></el-input>
          </el-row>
          <el-row class="default logIn-passWord">
            <el-input
              prefix-icon="el-icon-key"
              placeholder="请输入密码"
              v-model="passWord"
              @focus="cleanErrorText"
              show-password
            ></el-input>
          </el-row>
          <el-row class="default logIn-forget">
            <span>忘记密码</span>
          </el-row>
          <el-row class="default logIn-button">
            <el-button @click="submit" type="primary" round>点击登录</el-button>
          </el-row>
          <el-row class="default logIn-register">
            <span>还没有账户?</span>
            <router-link to="/register">免费注册</router-link>
          </el-row>
          <el-row class="default logIn-friendSite">
            <span>用合作网站账号登录</span>
          </el-row>
        </div>
      </div>
    </el-main>
    <el-footer >
      <el-row class="website-nav">
        <ul>
          <li>关于美团</li>
          <li>加入我们</li>
          <li>商家入驻</li>
          <li>帮助中心</li>
          <li>美团手机版</li>
        </ul>
      </el-row>
      <el-row class="copyright">
        <p>
          ©
          <span>2019</span>
          <a href="https://www.meituan.com">美团网团购</a>
          meituan.com
          <a href="http://www.miibeian.gov.cn/" target="_blank">京ICP证070791号</a>
          京公网安备11010502025545号
        </p>
      </el-row>
    </el-footer>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      userName: "",
      passWord: "",
      errorText: ""
    };
  },
  methods: {
    submit() {
      api
        .login({
          params: {
            userName: this.userName,
            password: this.passWord
          }
        })
        .then(res => {
          console.log(res);
          if (res.data.status == "success") {
            console.log(res.data.msg);
            this.$store.commit('isLogin',res.data.data)
            this.$router.push("/home");
          } else {
            this.errorText = res.data.msg;
          }
        });
    },
    cleanErrorText() {
      this.errorText = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.logIn {
  font: 400 14px/1.5 "Hiragino Sans GB", "WenQuanYi Micro Hei", tahoma,
    sans-serif;
  .header {
    background-color: #fff;
    width: 980px;
    height: auto;
    margin: 40px auto 30px;
    &-img_meituan {
      width: 82px;
      height: 54px;
      background-image: url("https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png");
      background-position: -188px -808px;
      background-repeat: no-repeat;
      float: left;
    }
  }
  .main {
    width: 980px;
    height: 370px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .img {
      width: 480px;
      height: 370px;
      background-image: url("//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg");
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
    .logIn {
      width: 270px;
      height: 100%;
      .default {
        margin-top: 16px;
      }
      &-error {
        min-height: 40px;
        margin-bottom: 10px;
        padding: 10px;
        border-radius: 2px;
        font-size: 12px;
        &.show {
          border: 1px solid #f5d8a7;
          background: #fff6db;
        }
      }
      &-text {
        display: flex;
        justify-content: space-around;
        span {
          flex-grow: 1;
          text-align: left;
        }
        span:nth-last-child(1) {
          font-size: 12px;
          font-weight: 400;
          text-align: right;
        }
      }
      &-forget {
        width: 100%;
        text-align: right;

        span {
          font-size: 12px;
          color: #fe8c00;
        }
      }
      &-button {
        text-align: center;
      }
      &-register {
        text-align: left;
        a {
          font-size: 12px;
          color: #fe8c00;
        }
      }
      &-friendSite {
        position: relative;
        span {
          padding: 0 10px;
          background: #fff;
          &::before {
            content: "";
            display: inline-block;
            width: 270px;
            height: 1px;
            background-color: #aaa;
            position: absolute;
            left: 0;
            top: 50%;
            z-index: -1;
          }
        }
      }
    }
  }
  footer{
        width:980px;
        font-size: 12px;
        color: #999;
        margin: 0 auto 30px;
        height: auto;
      .website-nav{
        margin-top:20px; 
        padding: 12px 0;
        border-top: 1px solid #EEE;
        border-bottom: 1px solid #EEE;
        
        ul{
            list-style: none;
            display: flex;
            padding: 0;
            li{
                text-align: left;
                margin: 5px 0;
                padding: 0 16px;
                line-height: 14px;
                border-right: 1px solid #EEE;
            }
        }
    }
    .copyright{
        padding: 0 16px;
        text-align: left;
    }
  }
  
}
</style>