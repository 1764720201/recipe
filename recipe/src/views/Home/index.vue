<template>
  <van-sticky>
    <Header></Header>
  </van-sticky>
  <Advertising></Advertising>
  <Classify></Classify>
  <MoreDelicious v-if="state.showRouter"></MoreDelicious>
  <Tabbar></Tabbar>
</template>
<script setup lang="ts">
import Tabbar from "@/components/Tabbar/index.vue";
import Header from "@/components/Header/index.vue";
import Advertising from "./Advertising/index.vue";
import Classify from "./Classify/index.vue";
import MoreDelicious from "./MoreDelicious/index.vue";
const state = reactive({
  showRouter: true,
});
const reload = () => {
  state.showRouter = false;
  nextTick().then(() => {
    state.showRouter = true;
  });
};
provide("reload", reload);
</script>

<style lang="less" scoped></style>
