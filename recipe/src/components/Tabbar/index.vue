<template>
  <div class="tabbar">
    <div
      class="tabbar-list"
      v-for="item in tabbarList"
      :key="item.id"
      @click="changeRoute(item.path)"
    >
      <van-icon size="30px" :name="item.iconName" :color="change(item.path)" />
      <span>{{ item.title }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();

interface TabbarList {
  id: number;
  iconName: string;
  title: string;
  path: string;
}
const change = (path: string) => {
  return route.path == path ? " #ee0a24" : " #ccc";
};
const tabbarList = reactive<TabbarList[]>([
  {
    id: 1,
    iconName: "wap-home-o",
    title: "首页",
    path: "/",
  },
  {
    id: 2,
    iconName: "comment-circle-o",
    title: "社区",
    path: "/community",
  },
  {
    id: 3,
    iconName: "chat-o",
    title: "消息",
    path: "/message",
  },
  {
    id: 4,
    iconName: "contact",
    title: "我的",
    path: "/mine",
  },
]);
const changeRoute = (path: string) => {
  router.push(path);
};
</script>

<style lang="less" scoped>
.tabbar {
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 150px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: solid 1px #ccc;
  box-shadow: 10px 10px 10px rgba(0, 0.5);
  z-index: 9999;
  &-list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
