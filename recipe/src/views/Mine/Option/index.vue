<template>
  <NavBar :title="title"></NavBar>
  <Nothing></Nothing>
</template>
<script setup lang="ts">
import NavBar from "@/components/NavBar/index.vue";
import Nothing from "@/components/Love/Nothing/index.vue";
const title = ref("啥也没");
</script>

<style lang="less" scoped></style>
