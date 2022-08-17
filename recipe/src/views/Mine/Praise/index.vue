<template>
  <Love :list="praiseList"></Love>
</template>
<script setup lang="ts">
import Love from "@/components/Love/index.vue";
import useStore from "@/stores";
const store = useStore();
const { praiseList } = store.collect;
</script>

<style lang="less" scoped></style>
