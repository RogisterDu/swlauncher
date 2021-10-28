<template>
  <div class="home">
    <el-container style="height: 100%">
<!--      <el-aside class="functionmenu"></el-aside>-->
      <el-container>
        <el-header>
          SW登录
        </el-header>
        <el-main>
          <el-button>登录</el-button>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>
<style lang="scss" scoped>
.functionmenu{
  width: 20%;
  background-color: grey;
}
</style>
