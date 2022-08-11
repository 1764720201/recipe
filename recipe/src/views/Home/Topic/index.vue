<template>
  <div class="topic">
    <div class="topic-title">
      <Title>
        <template v-slot>
          <span>热门专题</span>
        </template>
      </Title>
    </div>
    <div class="topic-content">
      <div class="topic-list" v-for="item in topicList" :key="item.id">
        <img :src="item.imgUrl" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { Goods } from "@/components/Swiper/index.vue";
import Title from "../../../components/Title/index.vue";
const topicList = reactive<Goods[]>([
  {
    id: 1,
    title: "饮食搭配1",
    imgUrl: "./images/专题/饮食搭配1.jpeg",
  },
  {
    id: 2,
    title: "饮食搭配2",
    imgUrl: "./images/专题/饮食搭配2.jpeg",
  },
]);
</script>

<style lang="less" scoped>
.topic {
  width: 100%;
  .topic-title {
    display: flex;
    height: 100px;
    align-items: center;
    justify-content: space-between;
    span {
      font-size: 45px;
      margin-left: 35px;
      font-weight: 400;
    }
  }
  .topic-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .topic-list {
      width: 90%;
      padding: 10px;
      img {
        width: 100%;
        border-radius: 20px;
      }
    }
  }
}
</style>
