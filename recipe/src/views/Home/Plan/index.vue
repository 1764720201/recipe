<template>
  <div class="plan">
    <p>今天吃什么</p>
    <swiper :slidesPerView="1.3" :spaceBetween="30" class="mySwiper">
      <swiper-slide
        v-for="item in mealList"
        :key="item.id"
        @click="goCategory(Number(item.classid))"
      >
        <img :src="item.imgUrl" />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { useRouter } from "vue-router";
import type { Goods } from "@/components/Swiper/index.vue";
const router = useRouter();
const goCategory = (classid: number) => {
  router.push({
    path: "category",
    query: { classid },
  });
};
const mealList = reactive<Goods[]>([
  {
    id: 1,
    title: "早餐",
    imgUrl: "/images/吃什么/早餐.jpeg",
    classid: 562,
  },
  {
    id: 2,
    title: "午餐",
    imgUrl: "/images/吃什么/午餐.jpeg",
    classid: 563,
  },
  {
    id: 3,
    title: "下午茶",
    imgUrl: "/images/吃什么/下午茶.jpeg",
    classid: 564,
  },
  {
    id: 4,
    title: "晚餐",
    imgUrl: "./images/吃什么/晚餐.jpeg",
    classid: 565,
  },
]);
</script>

<style lang="less" scoped>
.plan {
  height: 300px;
  width: 100%;
  p {
    font-size: 45px;
    margin-left: 35px;
    font-weight: 400;
  }
}
.mySwiper {
  overflow: hidden;
}
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  border-radius: 30px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.swiper-slide img {
  border-radius: 30px;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
