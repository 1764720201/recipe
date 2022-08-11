<template>
  <div class="course">
    <div class="course-title">
      <Title
        ><template v-slot>
          <span>大厨课堂</span>
        </template></Title
      >
    </div>
    <div class="swiper">
      <Swiper :list="courseList" :swiper-width="1"></Swiper>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { Goods } from "@/components/Swiper/index.vue";
import Title from "@/components/Title/index.vue";
const courseList = reactive<Goods[]>([
  {
    id: 1,
    title: "大厨1",
    imgUrl: "./images/课程/大厨1.jpeg",
  },
  {
    id: 2,
    title: "大厨2",
    imgUrl: "./images/课程/大厨2.jpeg",
  },
  {
    id: 3,
    title: "大厨3",
    imgUrl: "./images/课程/大厨3.jpeg",
  },
]);
</script>

<style lang="less" scoped>
.course {
  height: 400px;
  width: 100%;
  &-title {
    height: 100px;
    margin-top: 120px;
    align-items: center;
    width: 100%;
    display: flex;
    justify-content: space-between;
    span {
      font-size: 45px;
      margin-left: 35px;
      font-weight: 400;
    }
  }
}

.swiper {
  height: 300px;
}
</style>
