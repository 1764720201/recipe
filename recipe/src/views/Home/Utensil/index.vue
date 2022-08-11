<template>
  <div class="utensil">
    <swiper :slidesPerView="swiperWidth" class="mySwiper">
      <swiper-slide
        v-for="item in utensilsList"
        :key="item.id"
        @click="goCategory(item.classid)"
      >
        <img :src="item.imgUrl" />
        <div class="title">
          {{ item.title }}
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { useRouter } from "vue-router";
import useStore from "@/stores";
const store = useStore();
const router = useRouter();
const goCategory = (classid: number) => {
  store.recipe.recipeClass(classid);
  router.push({
    path: "/category",
    query: { classid },
  });
};
const swiperWidth = ref<number>(2.5);
interface Goods {
  id: number;
  title: string;
  imgUrl: string;
  classid: number;
}
const utensilsList = reactive<Goods[]>([
  {
    id: 1,
    title: "砂锅",
    imgUrl: "./images/厨具/砂锅.jpeg",
    classid: 525,
  },
  {
    id: 2,
    title: "平底锅",
    imgUrl: "./images/厨具/平底锅.jpeg",
    classid: 526,
  },
  {
    id: 3,
    title: "煎锅",
    imgUrl: "./images/厨具/煎锅.jpeg",
    classid: 527,
  },
  {
    id: 4,
    title: "蒸锅",
    imgUrl: "./images/厨具/蒸锅.jpeg",
    classid: 528,
  },
  {
    id: 5,
    title: "汤锅",
    imgUrl: "./images/厨具/汤锅.jpeg",
    classid: 529,
  },
  {
    id: 6,
    title: "奶锅",
    imgUrl: "./images/厨具/奶锅.jpeg",
    classid: 530,
  },
  {
    id: 7,
    title: "炒锅",
    imgUrl: "./images/厨具/炒锅.jpeg",
    classid: 531,
  },
  {
    id: 8,
    title: "炖锅",
    imgUrl: "./images/厨具/炖锅.jpeg",
    classid: 532,
  },
  {
    id: 9,
    title: "电火锅",
    imgUrl: "./images/厨具/电火锅.jpeg",
    classid: 533,
  },
  {
    id: 10,
    title: "塔吉锅",
    imgUrl: "./images/厨具/塔吉锅.jpeg",
    classid: 535,
  },
  {
    id: 11,
    title: "高压锅",
    imgUrl: "./images/厨具/高压锅.jpeg",
    classid: 536,
  },
  {
    id: 12,
    title: "电压力锅",
    imgUrl: "./images/厨具/电压力锅.jpeg",
    classid: 537,
  },
  {
    id: 13,
    title: "电饭煲",
    imgUrl: "./images/厨具/电饭煲.jpeg",
    classid: 538,
  },
  {
    id: 14,
    title: "微波炉",
    imgUrl: "./images/厨具/微波炉.jpeg",
    classid: 542,
  },
  {
    id: 15,
    title: "烧烤炉",
    imgUrl: "./images/厨具/烧烤炉.jpeg",
    classid: 543,
  },
  {
    id: 16,
    title: "多士炉",
    imgUrl: "./images/厨具/多士炉.jpeg",
    classid: 544,
  },
  {
    id: 17,
    title: "电饼铛",
    imgUrl: "./images/厨具/电饼铛.jpeg",
    classid: 545,
  },
  {
    id: 18,
    title: "榨汁机",
    imgUrl: "./images/厨具/榨汁机.jpeg",
    classid: 548,
  },
  {
    id: 19,
    title: "料理机",
    imgUrl: "./images/厨具/料理机.jpeg",
    classid: 549,
  },
  {
    id: 20,
    title: "豆浆机",
    imgUrl: "./images/厨具/豆浆机.jpeg",
    classid: 550,
  },
  {
    id: 21,
    title: "酸奶机",
    imgUrl: "./images/厨具/酸奶机.jpeg",
    classid: 551,
  },
]);
</script>
<style lang="less" scoped>
.utensil {
  height: 278px;
  width: 100%;
  margin-top: -45px;
  position: relative;
  .title {
    position: absolute;
    left: 10px;
    top: 10px;
    font-weight: 700;
    font-size: 33px;
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
  width: 90%;
  height: 90%;
}
.swiper-slide img {
  border-radius: 30px;
  display: block;
  width: 90%;
  height: 90%;
  object-fit: cover;
}
</style>
