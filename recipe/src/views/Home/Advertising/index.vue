<template>
  <div class="adversing">
    <div class="bac"><img src="./images/bac.jpeg" /></div>
    <div class="ellipse"></div>
  </div>
</template>
<script setup lang="ts"></script>

<style lang="less" scoped>
.adversing {
  width: 100%;
  .bac {
    z-index: 999;
  }
  img {
    width: 100%;
    z-index: 555;
  }
  .ellipse {
    width: 100%;
    height: 60px;
    background-color: #1b4623;
    position: relative;
    border-radius: 100%;
    bottom: 40px;
  }
}
</style>
