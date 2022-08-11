<template>
  <div class="content">
    <div class="title">我的厨房</div>
    <div class="addEquipment" @click="goEquipment">
      <div class="add">+</div>
      <div>点击添加新设备<br />开启优质生活</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const goEquipment = () => {
  router.push("/equipment");
};
</script>

<style lang="less" scoped>
.content {
  width: 100%;
  position: relative;
  .title {
    position: absolute;
    left: 40px;
    top: 30px;
    font-size: 40px;
  }
  .addEquipment {
    position: absolute;
    height: 250px;
    left: 40px;
    top: 120px;
    width: 350px;
    background-color: #fff;
    text-align: center;
    border-radius: 30px;
    color: rgb(111, 108, 108);
    .add {
      font-size: 80px;
    }
  }
}
</style>
