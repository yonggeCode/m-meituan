<template>
  <div class="register">
    <el-header>
      <div class="header">
        <router-link to="/home">
          <img class="header-imageBox" src="../assets/image/logo.png" alt />
        </router-link>
        <div class="_hasAccount">
          <span>已有美团账号?</span>
          <span class="button_orange">登录</span>
        </div>
      </div>
    </el-header>
    <el-main>
      <div class="main">
        <div class="from_register">
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="手机号" prop="userName">
              <el-input v-model.number="ruleForm.userName" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="rePassword">
              <el-input type="password" v-model="ruleForm.rePassword" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </el-main>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  data() {
    var checkPhone = (rule, value, callback) => {
      console.log(typeof value);
      if (!value) {
        return callback(new Error("手机号不能为空"));
      } else if (typeof value !== "number") {
        callback(new Error("请输入数字"));
      } else if ((value + "").length != 11) {
        callback(new Error("请输入正确的手机号码"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.rePassword !== "") {
          this.$refs.ruleForm.validateField("rePassword");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        password: "",
        rePassword: "",
        userName: ""
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        rePassword: [{ validator: validatePass2, trigger: "blur" }],
        userName: [{ validator: checkPhone, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
        let params = this.ruleForm;
        let router = this.$router;
        console.log(router.push);
      this.$refs[formName].validate(valid => {
        if (valid) {
        //   alert("submit!");
        api.register({
            params
        }).then((res)=>{
            console.log(res);
            if(res.data.status === 'success'){
                alert('注册成功');
                router.push('/login');
            }else{
                alert(res.data.msg);
            }
        })
        } else {
          console.log("请正确填写表单");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.register {
  header {
    border-bottom: 2px solid #d8d8d8;
  }
  .header {
    height: 100%;
    background-color: #fff;
    width: 980px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-imageBox {
      display: inline-block;
      width: 120px;
      height: 36px;
    }
    ._hasAccount {
      width: 150px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      color: #666;
      .button_orange {
        border-color: rgba(191, 105, 0, 0.15);
        font-size: 12px;
        color: #000;
        font-weight: 400;
        padding: 5px 10px;
        letter-spacing: 2px;
        background-image: linear-gradient(135deg, #ffd000 0, #ffbd00 100%);
        box-shadow: 0 2px 1px rgba(191, 105, 0, 0.15);
        border-radius: 4px;
      }
    }
  }
  .main {
    width: 980px;
    margin: 0 auto;
    .from_register{
        width: 360px;
    }
  }
}
</style>