<template>
  <swiper :slidesPerView="swiperWidth" :spaceBetween="20" class="mySwiper">
    <swiper-slide v-for="item in list" :key="item.id">
      <img :src="item.imgUrl" />
      <div class="title" v-if="list.length > 20">{{ item.title }}</div>
    </swiper-slide>
  </swiper>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { useRouter } from "vue-router";

export interface Goods {
  id: number;
  title: string;
  imgUrl: string;
  classid?: number;
}
const router = useRouter();

defineProps<{ swiperWidth: number; list: Goods[] }>();
</script>
<style lang="less" scoped>
#app {
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
  .title {
    position: absolute;
    top: 10px;
    left: 20px;
    font-size: 35px;
    font-weight: 700;
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
  width: 100%;
  height: 100%;
  object-fit: cover;
}
// :deep(.swiper-wrapper) {
//   width: 90%;
//   position: absolute;
//   left: 20px;
//   overflow: ;
// }
// .swiper-slide:first-child {
//   margin-left: 20px;
// }
</style>
