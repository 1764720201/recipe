<template>
  <van-icon name="arrow-left" @click="backSearch" />
  <div class="body-img">
    <div class="food-detail">
      <div class="food-img">
        <van-image
          width="100%"
          height="220px"
          fit="cover"
          position="bottom"
          :src="detail.pic"
        />
      </div>
      <div class="title">
        <div class="food-name">{{ detail.name }}</div>
        <Praise v-if="state.showRouter"></Praise>
      </div>
      <div class="process">
        <div class="cooking-time">
          <van-icon name="clock-o" />{{ detail.cookingtime }}
        </div>
        <div class="people-num">
          <van-icon name="friends-o" />{{ detail.peoplenum }}
        </div>
        <div class="tag"><van-icon name="passed" />{{ detail.tag }}</div>
      </div>
      <div class="main">
        <div class="content">{{ detail.content }}</div>
        <div class="material">
          <van-icon name="notes-o" />
          <div v-for="(item, index) in detail.material" :key="index">
            <span class="mount">{{ item.amount }}</span
            ><span>{{ item.mname }}</span
            >、
          </div>
        </div>
        <div class="step" v-for="(step, index) in detail.process" :key="index">
          <div class="step-img"><img :src="step.pic" /></div>
          <span>{{ step.pcontent }}</span>
        </div>
      </div>
    </div>
    <van-sticky position="bottom">
      <DetailTabbar v-if="state.showRouter"></DetailTabbar>
    </van-sticky>
  </div>
</template>
<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import useStore from "@/stores";
import { storeToRefs } from "pinia";
import DetailTabbar from "./DetailTabbar/index.vue";
import Praise from "./Praise/index.vue";
const store = useStore();
const route = useRoute();
const router = useRouter();
const state = reactive({
  showRouter: true,
});
const reload = () => {
  state.showRouter = false;
  nextTick().then(() => {
    state.showRouter = true;
  });
};
provide("reload", reload);
const backSearch = () => {
  router.back();
};
onMounted(() => {
  store.recipe.recipeDetail(route.query.foodId as unknown as number);
});
const { detail } = storeToRefs(store.recipe);
</script>

<style lang="less" scoped>
.body-img {
  background-image: url("./image/bac.jpeg");
}
.title {
  display: flex;
  width: 100%;
  justify-content: space-around;
  height: 60px;
  align-items: center;
  font-size: 50px;
  font-weight: 900;
  img {
    width: 80px;
    height: 80px;
  }
}
.van-icon-arrow-left {
  position: absolute;
  z-index: 777;
  font-size: 80px;
  color: #fff;
  top: 20px;
  left: 10px;
}
:deep(.van-icon) {
  font-size: 60px;
}
.food-detail {
  width: 100%;
  position: relative;

  .process {
    margin-top: 10px;
    margin-left: 35px;
    width: 95%;
    display: flex;
    font-weight: 500;
    height: 200px;
    align-items: center;
    justify-content: space-between;
    .tag {
      width: 300px;
      overflow: hidden;
      display: -webkit-box;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
    }
  }
  .main {
    margin-top: -50px;
    margin-left: 45px;
    display: flex;
    flex-direction: column;
    width: 85%;
    align-items: center;
    justify-content: space-between;
    .content {
      color: rgb(235, 110, 21);
      text-indent: 2em;
    }
    .material {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      margin-top: 50px;
      .mount {
        color: orangered;
        padding: 0 10px;
      }
    }
    .step {
      display: flex;
      width: 80%;
      margin-left: -120px;
      height: 250px;
      background-color: rgb(176, 218, 231);
      margin-top: 50px;
      align-items: center;
      border-radius: 30px;
      &-img {
        flex-shrink: 1;
        img {
          width: 200px;
          height: 200px;
          border-radius: 30px;
        }
      }
      span {
        flex-shrink: 3;
        margin-left: 20px;
        overflow: hidden;
        display: -webkit-box;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5;
      }
    }
  }
}
</style>
