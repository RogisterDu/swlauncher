<template>
  <div class="container">
    <h2 style="align-self: center">SoulWoker 登录器</h2>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
      label-position="right"
    >
      <el-form-item>
        <el-radio v-model="ruleForm.website" label="Hangame">Hangame</el-radio>
        <el-radio v-model="ruleForm.website" label="WeMade">WeMade</el-radio>
      </el-form-item>
      <el-form-item label="账户名:" prop="account">
        <el-input
          v-model="ruleForm.account"
          clearable
          class="inputbox"
        ></el-input>
        <el-link type="primary" class="link">注册账户</el-link>
      </el-form-item>
      <el-form-item label="密码:" prop="password">
        <el-input
          v-model="ruleForm.password"
          clearable
          class="inputbox"
          show-password
        ></el-input>
        <el-link type="primary" class="link">忘记密码</el-link>
      </el-form-item>
      <div style="margin-left: 300px; font-size: 14px">
        <el-switch v-model="ruleForm.isRemember"></el-switch>记住密码
      </div>
      <!--      <el-form-item label="记住密码">-->
      <!--       -->
      <!--      </el-form-item>-->
      <el-form-item class="buttonArea">
        <el-button size="mini" @click="tologin" class="flexbutton">
          登录
        </el-button>
        <el-button size="mini" class="flexbutton"> 过检测启动 </el-button>
        <el-button size="mini" class="flexbutton"> 正常启动 </el-button>
        <el-button size="mini" class="flexbutton"> 退出 </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { shell } from "electron";
export default {
  name: "Login",
  data() {
    return {
      ruleForm: {
        account: "",
        password: "",
        isRemember: true,
        website: "WeMade",
      },
      rules: {
        account: [
          {
            required: true,
            message: "请输入账户名",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    tologin() {
      shell.openExternal("https://www.baidu.com");
      // window.open("www.baidu.com", "_blank");
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  //margin-top: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  //align-items: center;
}
.inputbox {
  margin-left: 10px;
  width: 200px;
}
.link {
  margin-left: 10px;
}
.buttonArea {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: -10px;
  //padding: 20px;
}

.flexbutton {
  //flex: 1;
  width: 33.3%;
  margin-top: 10px;
  margin-left: 10px;
}
</style>
