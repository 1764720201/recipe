<template>
  <div class="recommend">
    <Title><p>精品推荐</p></Title>
    <swiper :slidesPerView="2.5" :grabCursor="true" class="mySwiper">
      <swiper-slide v-for="(item, index) in videoList" :key="index"
        ><img
          :src="item.data?.cover?.feed"
          @click="checkVideoFun(item.data.playUrl)"
        />
        <span class="title">{{ item.data?.title }}</span>
      </swiper-slide>
    </swiper>
    <div class="videomasks" v-if="videoState == true">
      <video width="400" height="400" controls autoplay>
        <source :src="urlVideo" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <div class="mask" v-if="videoState == true" @click="masksCloseFun"></div>
  </div>
</template>
<script setup lang="ts">
import Title from "@/components/Title/index.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import useStore from "@/stores";
import "swiper/css";
import { storeToRefs } from "pinia";
const store = useStore();
onMounted(() => {
  store.video.video(Math.floor(Math.random() * 100000));
});
let urlVideo = ref<string>();
const videoState = ref(false);
const checkVideoFun = (videoUrl: string) => {
  urlVideo.value = videoUrl;
  videoState.value = true;
};
const masksCloseFun = () => {
  videoState.value = false;
};
const { videoList } = storeToRefs(store.video);
</script>

<style lang="less" scoped>
.mask {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  background-color: #000000;
  opacity: 0.6;
}
.videomasks {
  max-width: 1200px;
  position: fixed;
  left: 0;
  top: 50%;
  margin-top: -30%;
  z-index: 20;
}

.recommend {
  margin-top: -90px;
  width: 100%;
  height: 450px;
  p {
    font-size: 45px;
    margin-left: 35px;
    font-weight: 400;
  }
  .swiper {
    width: 100%;
    height: 100%;
    position: relative;
    top: -40px;

    .title {
      width: 80%;
      position: absolute;
      bottom: 15px;
      font-size: 30px;
      font-weight: 700;
      color: rgb(250, 240, 240);
    }
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
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
    width: 85%;
    height: 100%;
    object-fit: cover;
    border-radius: 50px;
  }
}
</style>
