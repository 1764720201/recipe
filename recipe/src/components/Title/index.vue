<template>
  <div class="title">
    <slot class="slot"></slot>
    <div class="more">
      <span>查看更多</span>
      <van-icon name="arrow" />
    </div>
  </div>
</template>
<script setup lang="ts"></script>

<style lang="less" scoped>
.title {
  width: 100%;
  display: flex;
  height: 200px;
  align-items: center;
  justify-content: space-between;
  .more {
    width: 220px;
  }
}
</style>
