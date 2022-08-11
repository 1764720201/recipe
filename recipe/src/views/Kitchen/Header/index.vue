<template>
  <div class="header">
    <p class="title">一周烹饪</p>
    <p class="time">(08.30-19.05)</p>
    <p class="number">
      一共烹饪0次,烹饪时长0分钟 <br />
      超过了0%的用户
    </p>
  </div>
</template>
<script setup lang="ts"></script>

<style lang="less" scoped>
.header {
  height: 500px;
  width: 100%;
  background-image: url("/images/bkg.jpeg");
  background-position: 30px;
  position: relative;
  .title {
    position: absolute;
    top: 30px;
    left: 50px;
    font-size: 50px;
    color: rgb(249, 231, 231);
  }
  .time {
    position: absolute;
    left: 50px;
    top: 120px;
    color: rgb(249, 231, 231);
  }
  .number {
    position: absolute;
    top: 190px;
    left: 50px;
    color: rgb(249, 231, 231);
  }
}
</style>
