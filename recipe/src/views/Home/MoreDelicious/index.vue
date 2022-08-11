<template>
  <div class="more-delicious">
    <div class="title" @click="refRoad">
      <span>更多美味</span>
      <div class="reflash">换一换 <img src="./images/刷新.png" /></div>
    </div>
    <div
      v-for="item in randomList"
      :key="item.id"
      class="delicious"
      @click="goDetail(item.id)"
    >
      <img :src="item.pic" />
      <div class="describe">
        <p>{{ item.name }}</p>
        <span>{{ item.content }}</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import useStore from "@/stores";
import { useRouter } from "vue-router";

import { storeToRefs } from "pinia";
const reload = inject<Function>("reload");
const refRoad = (): void => {
  (reload as Function)();
};
const router = useRouter();
const store = useStore();
onMounted(() => {
  randomNumber.forEach((random: number) => {
    store.recipe.recipeRandom(random);
  });
});
const goDetail = (foodId: number) => {
  router.push({
    path: "/detail",
    query: { foodId },
  });
};
const { randomList } = storeToRefs(store.recipe);
const randomNumber = new Set([
  Math.floor(Math.random() * 50000),
  Math.floor(Math.random() * 50000),
  Math.floor(Math.random() * 50000),
]);
</script>

<style lang="less" scoped>
.more-delicious {
  margin-top: 30px;
  width: 100%;
  padding: 0 0 120px 0;
  .title {
    height: 100px;
    display: flex;
    width: 90%;
    justify-content: space-between;
    span {
      font-size: 48px;
      margin-left: 50px;
    }
    .reflash {
      display: flex;
      height: 60px;
      align-items: center;
      img {
        width: 50px;
        margin-left: 30px;
      }
    }
  }
  .delicious {
    display: flex;
    background-color: #fff;
    width: 90%;
    margin-bottom: 40px;
    margin-left: 30px;
    border-radius: 30px;
    img {
      width: 280px;
    }
    .describe {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      margin-left: 30px;
      p {
        font-size: 39px;
        font-weight: 700;
      }
      span {
        overflow: hidden;
        display: -webkit-box;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        color: rgb(97, 93, 93);
      }
    }
  }
}
</style>
