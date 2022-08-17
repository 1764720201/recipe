<template>
  <div class="content">
    <div class="production">
      <img src="./images/作品.png" />
      <span>我的作品</span>
    </div>
    <div class="like">
      <img
        :src="
          route.path == '/mine/praise'
            ? '/images/点赞收藏/点赞选中.png'
            : '/images/点赞收藏/点赞.png'
        "
        @click="goPraise"
      />
      <span>我的点赞</span>
    </div>
    <div class="collect">
      <img
        :src="
          route.path == '/mine/collection'
            ? '/images/点赞收藏/收藏选中.png'
            : '/images/点赞收藏/收藏.png'
        "
        @click="goCollection"
      />
      <span>我的收藏</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import useStore from "@/stores";
const store = useStore();
const route = useRoute();
const router = useRouter();
const goCollection = () => {
  store.collect
    .getCollectList(store.user.userId!)
    .then(() => {
      router.push("/mine/collection");
    })
    .catch(() => {
      router.push("/mine/collection");
    });
};
const goPraise = () => {
  store.collect
    .getPraiseList(store.user.userId!)
    .then(() => {
      router.push("/mine/praise");
    })
    .catch(() => {
      router.push("/mine/praise");
    });
};
</script>

<style lang="less" scoped>
.content {
  margin-top: -50px;
  height: 200px;
  width: 90%;
  margin-left: 5%;
  background-color: #fff;
  display: flex;
  border-radius: 25px;
  justify-content: space-around;
  .production,
  .like,
  .collect {
    width: 100%;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 60px;
      padding: 10px 0;
    }
    span {
      font-weight: 700;
    }
  }
}
</style>
