import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "@/views/Login";
import OfficalWebSite from "@/views/OfficalWebSite";
import CommonFunction from "@/views/CommonFunction";
import SettingConfig from "@/views/SettingConfig";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/",
        name: "Login",
        component: Login,
      },
      {
        path: "/OfficalWebSite",
        name: "OfficalWebSite",
        component: OfficalWebSite,
      },
      {
        path: "/CommonFunction",
        name: "CommonFunction",
        component: CommonFunction,
      },
      {
        path: "/SettingConfig",
        name: "SettingConfig",
        component: SettingConfig,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
