<template>
  <Cell :list="opinionList"></Cell>
  <div class="record">
    <Cell :list="recordList"></Cell>
  </div>
</template>
<script setup lang="ts">
import type { List } from "@/components/Cell/index.vue";
import Cell from "@/components/Cell/index.vue";
const opinionList = reactive<List[]>([
  {
    id: 1,
    icon: "info-o",
    title: "第三方账号授权",
  },
  {
    id: 2,
    icon: "question-o",
    title: "常见问题",
  },
  {
    id: 3,
    icon: "more-o",
    title: "意见反馈",
  },
]);
const recordList = reactive<List[]>([
  {
    id: 1,
    icon: "records",
    title: "烹饪记录",
  },
  {
    id: 2,
    icon: "cluster-o",
    title: "设备共享",
  },
]);
</script>

<style lang="less" scoped>
.record {
  margin-top: 150px;
}
</style>
