<template>
  <div class="searchList">
    <div
      class="list"
      v-for="food in searchList"
      :key="food.id"
      @click="goDetail(food.id)"
    >
      <div class="foodImg">
        <img :src="food.pic" />
      </div>
      <div class="foodRight">
        <div class="foodName">{{ food.name }}</div>
        <div class="foodContent">
          <span
            ><van-icon name="comment-circle-o" color="blue" size="30px" />{{
              food.content
            }}</span
          >
        </div>
        <div class="tag">
          <van-icon name="label-o" color="blue" />{{ food.tag }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import useStore from "@/stores";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
const router = useRouter();
const store = useStore();
const goDetail = (id: number) => {
  router.push({
    path: "/detail",
    query: { foodId: id },
  });
};
const { searchList } = storeToRefs(store.recipe);
</script>

<style lang="less" scoped>
.searchList {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .list {
    height: 300px;
    background-color: #fff;
    width: 95%;
    border-radius: 50px;
    margin-top: 50px;
    position: relative;
    .foodImg {
      display: flex;
      align-items: center;
      height: 300px;
      position: absolute;
      left: 10px;
      img {
        width: 280px;
        border-radius: 140px;
      }
    }
    .foodRight {
      display: flex;
      width: 58%;
      flex-direction: column;
      height: 100%;
      justify-content: space-evenly;
      position: absolute;
      flex-wrap: wrap;
      right: 0;
      .foodName {
        font-size: 50px;
        font-weight: 700;
      }
      .foodContent {
        overflow: hidden;
        display: -webkit-box;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
      .tag {
        overflow: hidden;
        display: -webkit-box;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        color: rgb(104, 104, 100);
      }
    }
  }
}
</style>
