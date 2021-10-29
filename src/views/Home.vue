<template>
  <div class="home">
    <el-container style="height: 100%; overflow-x: hidden">
      <!--      <el-aside class="functionmenu" width="50px" height="100%">-->
      <Navbar></Navbar>
      <!--      </el-aside>-->
      <router-view></router-view>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar";
export default {
  name: "Home",
  components: {
    Navbar,
  },
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.home {
  height: 100%;
}
.el-container {
  height: 100%;
}

.functionmenu {
  background-color: grey;
}
</style>
