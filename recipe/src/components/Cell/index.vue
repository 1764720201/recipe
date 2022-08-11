<template>
  <van-cell-group class="cell">
    <van-cell
      v-for="item in list"
      :key="item.id"
      :title="item.title"
      :icon="item.icon"
    >
      <template #right-icon>
        <van-icon name="arrow" />
      </template>
    </van-cell>
  </van-cell-group>
</template>
<script setup lang="ts">
export interface List {
  id: number;
  icon: string;
  title: string;
}
defineProps<{ list: List[] }>();
</script>

<style lang="less" scoped>
.cell {
  height: 200px;
  width: 90%;
  margin-left: 5%;
  margin-top: 50px;
  border-radius: 50px;
}
:deep(.van-cell) {
  display: flex;
  align-items: center;
  height: 100px;
}
:deep(.van-cell__title) {
  span {
    font-size: 35px;
  }
}
:deep(.van-cell__left-icon) {
  width: 100px;
  font-size: 40px;
}
</style>
