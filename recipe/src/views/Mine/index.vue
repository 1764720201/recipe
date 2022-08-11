<template>
  <Header v-if="state.showRouter"></Header>
  <Operation></Operation>
  <RouterView></RouterView>
  <Tabbar></Tabbar>
</template>
<script setup lang="ts">
import Tabbar from "@/components/Tabbar/index.vue";
import Header from "./Header/index.vue";
import Operation from "./Operation/index.vue";
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
