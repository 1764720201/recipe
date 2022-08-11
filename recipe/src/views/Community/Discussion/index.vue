<template>
  <div class="discussion">
    <Title><p>讨论区</p></Title>
  </div>
  <swiper :effect="'cards'" :grabCursor="true" :modules="modules">
    <swiper-slide v-for="item in commentList" :key="item.id">
      <img :src="item.author.avatarUrl" v-if="item.author.avatarUrl" />
      <img src="/images/默认头像.jpeg" v-else />
      <div class="name">{{ item.author.name }}</div>
      <div class="comment">{{ item.content }}</div>
    </swiper-slide>
  </swiper>
</template>
<script setup lang="ts">
import Title from "@/components/Title/index.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import useStore from "@/stores";
import { storeToRefs } from "pinia";

const store = useStore();
onMounted(() => {
  store.user.getAllComment(0, 10);
});

const modules = [EffectCards];
const { commentList } = storeToRefs(store.user);
</script>

<style lang="less" scoped>
.discussion {
  margin-top: 50px;
  width: 100%;
  display: flex;

  p {
    font-size: 45px;
    margin-left: 35px;
    font-weight: 400;
  }
}
.name {
  position: absolute;
  left: 260px;
  top: 30px;
  font-size: 50px;
}
.comment {
  position: absolute;
  left: 260px;
  height: 160px;
  top: 100px;
  width: 380px;
  font-size: 30px;
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
}
.swiper {
  position: relative;
  width: 90%;
  height: 300px;
  overflow: hidden;
  top: -40px;
}

.swiper-slide {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  background-color: #fff;
}
.swiper-slide img {
  border-radius: 100px;
  position: absolute;
  display: block;
  width: 200px;
  height: 200px;
  object-fit: cover;
  left: 30px;
  top: 30px;
}
</style>
