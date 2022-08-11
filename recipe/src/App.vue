<template>
  <RouterView></RouterView>
</template>
<script setup lang="ts">
import useStore from "./stores";
const store = useStore();
onMounted(() => {
  store.user.getUserInfo();
  store.collect.getCollectList(Number(store.user.userId));
});
</script>

<style lang="less">
html,
body,
#app {
  width: 100%;
  height: 100%;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
