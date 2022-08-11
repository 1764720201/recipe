<template>
  <Love :list="collectList"></Love>
</template>
<script setup lang="ts">
import useStore from "@/stores";
import { storeToRefs } from "pinia";
import Love from "@/components/Love/index.vue";

const store = useStore();
const { collectList } = storeToRefs(store.collect);
</script>

<style lang="less" scoped></style>
