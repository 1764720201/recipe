<template>
  <van-empty
    image="/images/空状态.png"
    image-size="80"
    description="什么都没有"
    v-if="!list[0]"
  />
  <div class="collectionList" v-else>
    <div v-for="item in list" :key="item.food_id" class="collection">
      <img :src="item.img_url" @click="goDetail(item.food_id)" />
      <div class="info">
        <span class="food-name">{{ item.food_name }}</span
        ><span>{{ dayjs(item.createAt).format("YYYY-MM-DD HH:mm") }}</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import dayjs from "dayjs";
import { useRouter } from "vue-router";
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
</script>

<style lang="less" scoped>
.collectionList {
  padding: 50px 0 200px 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-left: 38px;
  .collection {
    height: 450px;
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
      display: flex;
      flex-direction: column;
      .food-name {
        margin-bottom: 10px;
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
