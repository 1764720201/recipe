<template>
  <NotLogin v-if="!userId"></NotLogin>
  <Nothing v-if="userId && !list[0]"></Nothing>
  <div class="collectionList" v-else>
    <div v-for="item in list" :key="item.food_id" class="collection">
      <img :src="item.img_url" @click="goDetail(item.food_id)" />
      <div class="info">
        <span class="food-name">{{ item.food_name }}</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import useStore from "@/stores";
import NotLogin from "./NotLogin/index.vue";
import Nothing from "./Nothing/index.vue";
const store = useStore();
type List = {
  createAt: string;
  food_id: string;
  food_name: string;
  img_url: string;
  updateAt: string;
  user_id: number;
};
defineProps<{ list: List[] }>();
const router = useRouter();
const goDetail = (foodId: string) => {
  router.push({
    path: "/detail",
    query: { foodId },
  });
};

const { userId } = storeToRefs(store.user);
</script>

<style lang="less" scoped>
.collectionList {
  padding-bottom: 200px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  .collection {
    margin-left: 30px;
    height: 400px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    img {
      width: 300px;
      border-radius: 50px;
      padding: 20px;
    }
    .info {
      width: 100%;
      justify-content: center;
      height: 50px;
      align-items: center;
      display: flex;

      .food-name {
        margin-top: -20px;
        font-weight: 700;
        font-size: 40px;
        overflow: hidden;
        display: -webkit-box;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
      }
    }
  }
}
</style>
