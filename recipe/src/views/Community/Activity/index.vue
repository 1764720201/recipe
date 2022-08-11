<template>
  <div class="activity">
    <Title><p>热门活动</p></Title>
    <swiper class="mySwiper" :slidesPerView="1.1" :spaceBetween="15">
      <swiper-slide v-for="item in activityList" :key="item.id">
        <img :src="item.imgUrl" />
        <div class="footer">
          <div class="title">{{ item.title }}</div>
          <div class="content">
            <p class="time">{{ item.time }}天后结束</p>
            <p class="view-number">浏览次数{{ item.viewNumber }}K</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script setup lang="ts">
import Title from "@/components/Title/index.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
interface Activity {
  id: number;
  title: string;
  imgUrl: string;
  time: string;
  viewNumber: number;
}
const activityList = reactive<Activity[]>([
  {
    id: 1,
    title: "特色文化美食节",
    imgUrl: "/images/活动/活动1.jpeg",
    time: "150",
    viewNumber: 15,
  },
  {
    id: 2,
    title: "全世界都是你的菜",
    imgUrl: "/images/活动/活动2.jpeg",
    time: "130",
    viewNumber: 8,
  },
]);
</script>

<style lang="less" scoped>
.activity {
  width: 100%;
  height: 450px;
  position: relative;
  top: -50px;
  p {
    font-size: 45px;
    margin-left: 35px;
    font-weight: 400;
  }
  .footer {
    display: flex;
    width: 100%;
    background-color: #fff;
    height: 200px;
    position: absolute;
    bottom: -100px;
    flex-direction: column;
    .title {
      position: absolute;
      left: 35px;
      font-size: 35px;
      top: 0;
      font-weight: 700;
    }

    .content {
      display: flex;
      width: 90%;
      height: 150px;
      align-items: center;
      justify-content: space-between;

      .time {
        font-size: 28px;
        color: rgb(220, 83, 14);
        font-weight: 700;
      }
      .view-number {
        font-size: 30px;
        color: rgba(133, 132, 132, 0.778);
        font-weight: 400;
      }
    }
  }

  .swiper {
    margin-top: -50px;
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    width: 100%;
    /* Center slide text vertically */
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
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 25px 25px 0 0;
  }
}
</style>
