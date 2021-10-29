<template>
  <div class="container">
    <el-menu mode="vertical" default-active="1" class="menuArea" router>
      <el-menu-item
        :index="Action_item.index"
        v-for="(Action_item, Act_i) in functionList"
        :key="Act_i"
      >
        <i :class="Action_item.class"></i>
        <span slot="title">{{ Action_item.name }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      functionList: [
        {
          name: "登录/注册",
          index: "/",
          class: "el-icon-monitor",
        },
        {
          name: "官网",
          index: "/OfficalWebSite",
          class: "el-icon-s-promotion",
        },
        {
          name: "常用功能",
          index: "/CommonFunction",
          class: "el-icon-s-operation",
        },
        {
          name: "设置",
          index: "/SettingConfig",
          class: "el-icon-set-up",
        },
      ],
    };
  },
  methods: {},
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
