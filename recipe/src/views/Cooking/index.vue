<template>
  <NavBar :title="detail.name"></NavBar>
  <div class="cooking">
    <van-swipe lazy-render indicator-color="white">
      <van-swipe-item v-for="(image, index) in detail.process" :key="index">
        <div><img :src="image.pic" /></div>
        <span>{{ image.pcontent }}</span>
      </van-swipe-item>
    </van-swipe>
  </div>
  <div class="time">推荐烹饪时间为:{{ detail.cookingtime }}</div>
</template>
<script setup lang="ts">
import useStore from "@/stores";
import { storeToRefs } from "pinia";
import NavBar from "@/components/NavBar/index.vue";

const store = useStore();
const route = useRoute();
onMounted(() => {
  store.recipe.recipeDetail(Number(route.query.foodId));
});
const { detail } = storeToRefs(store.recipe);
</script>

<style lang="less" scoped>
:deep(.van-swipe__track) {
  width: 100%;
  .van-swipe-item {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    img {
      width: 600px;
      height: 400px;
      border-radius: 30px;
    }
    span {
      width: 90%;
      margin-top: 20px;
      font-size: 40px;
    }
  }
}
:deep(.van-swipe__indicators) {
  position: absolute;
  top: 350px;
  .van-swipe__indicator {
    width: 20px;
    height: 20px;
  }
}
</style>
