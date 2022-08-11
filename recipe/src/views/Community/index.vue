<template>
  <Header></Header>
  <Activity></Activity>
  <Discussion v-if="state.showRouter"></Discussion>
  <Recommend></Recommend>
  <Tabbar></Tabbar>
</template>
<script setup lang="ts">
import Tabbar from "@/components/Tabbar/index.vue";
import Activity from "./Activity/index.vue";
import Discussion from "./Discussion/index.vue";
import Header from "./Header/index.vue";
import Recommend from "./Recommend/index.vue";
onMounted(() => {});
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

<style lang="less">
body {
  height: 1950px;
}
</style>
