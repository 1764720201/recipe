<template>
  <div class="block">
    <div class="classify">
      <ul class="icon">
        <li
          v-for="item in imagesList"
          @click="goCategory(Number(item.classid))"
        >
          <img :src="item.imgUrl" />
          <span>{{ item.title }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
const goCategory = (classid: number) => {
  router.push({
    path: "/category",
    query: { classid },
  });
};
type Goods = {
  id: number;
  title: string;
  imgUrl: string;
  classid: number;
};
const imagesList = reactive<Goods[]>([
  {
    id: 1,
    title: "口味",
    imgUrl: "./images/分类/口味.png",
    classid: 390,
  },
  {
    id: 2,
    title: "人群",
    imgUrl: "./images/分类/人群.png",
    classid: 113,
  },
  {
    id: 3,
    title: "体质",
    imgUrl: "./images/分类/体质.png",
    classid: 213,
  },
  {
    id: 4,
    title: "菜品",
    imgUrl: "./images/分类/菜品.png",
    classid: 301,
  },
  {
    id: 5,
    title: "患者",
    imgUrl: "./images/分类/疾病.png",
    classid: 144,
  },
  {
    id: 6,
    title: "小吃",
    imgUrl: "./images/分类/小吃.png",
    classid: 269,
  },
  {
    id: 7,
    title: "工艺",
    imgUrl: "./images/分类/工艺.png",
    classid: 453,
  },
  {
    id: 8,
    title: "菜系",
    imgUrl: "./images/分类/菜系.png",
    classid: 223,
  },
  {
    id: 9,
    title: "功效",
    imgUrl: "./images/分类/功效.png",
    classid: 1,
  },
  {
    id: 10,
    title: "场景",
    imgUrl: "./images/分类/场景.png",
    classid: 561,
  },
]);
</script>

<style lang="less" scoped>
.block {
  width: 750px;
  display: flex;
  justify-content: center;
  .classify {
    position: relative;
    top: -100px;
    height: 400px;
    width: 90%;
    background-color: #fff;
    border-radius: 40px;
    box-shadow: 10px 10px 5px 0.1;
    font-weight: 700;
    color: rgb(170, 168, 168);
    .icon {
      position: absolute;
      top: 25px;
      width: 100%;
      height: 350px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-around;

      li {
        display: flex;
        padding: 20px;
        flex-direction: column;
        align-items: center;
        img {
          height: 90px;
        }
      }
      li:nth-child(n + 6) {
        img {
          height: 60px;
        }
      }
    }
  }
}
</style>
