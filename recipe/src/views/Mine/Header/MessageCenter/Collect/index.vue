<template>
  <NavBar :title="title"></NavBar>
  <NotLogin v-if="!userId"></NotLogin>
  <Nothing v-if="userId && !collectList[0]"></Nothing>
  <div v-for="collect in collectList" :key="collect.food_id">
    <div class="collect">
      <div>
        <img :src="collect.img_url" alt="" />
      </div>
      <div class="title">
        <div class="name">{{ collect.food_name }}</div>
        <div class="time">
          {{ dayjs(collect.createAt).format("YYYY MM-DD HH:mm:ss") }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import NavBar from "@/components/NavBar/index.vue";
import useStore from "@/stores";
import dayjs from "dayjs";
import { storeToRefs } from "pinia";
const store = useStore();
const title = ref("收藏");
const { collectList } = storeToRefs(store.collect);
const { userId } = storeToRefs(store.user);
</script>

<style lang="less" scoped>
.collect {
  display: flex;
  width: 100%;
  justify-content: space-around;
  img {
    height: 230px;
    width: 300px;
    border-radius: 20px;
  }
  .title {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .name {
      font-size: 40px;
      font-weight: 900;
      overflow: hidden;
      display: -webkit-box;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
    }
    .time {
      color: rgb(90, 88, 88);
    }
  }
}
</style>
