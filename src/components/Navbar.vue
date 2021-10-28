<template>
  <div class="container">
    <el-menu
      mode="vertical"
      default-active="2"
      class="menuArea"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">登录/注册</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">官网</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-menu"></i>
        <span slot="title">常用功能</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
.container {
  height: 100%;
}
.menuArea {
  height: 100%;
  width: 150px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  /*justify-content: center;*/
}
</style>
