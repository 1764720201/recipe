<template>
  <van-icon name="arrow-left" @click="backSearch" />
  <div class="header">
    <Header></Header>
  </div>
  <div class="body-img">
    <div v-if="list.length">
      <div class="main-class">
        <van-icon name="bulb-o" />{{ category.name }}
      </div>
      <div class="title">
        <select v-model="className" class="select">
          <option v-for="classify in category.list" :key="classify.classid">
            <div>{{ classify.name }}</div>
          </option>
        </select>
        <div class="remind"><van-icon name="info-o" />请按左边下拉菜单选择</div>
      </div>
      <div class="detail">
        <div
          v-for="item in classifyList"
          :key="item.id"
          @click="goDetail(item.id)"
          class="content"
        >
          <img :src="item.pic" />
          {{ item.name.slice(0, 8) }}
        </div>
      </div>
    </div>

    <div v-else>
      <div class="main-class">
        <van-icon name="bulb-o" />
      </div>
      <div class="title"></div>
      <div class="detail">
        <div
          v-for="item in classifyList"
          :key="item.id"
          @click="goDetail(item.id)"
          class="content"
        >
          <img :src="item.pic" />
          {{ item.name.slice(0, 8) }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useRoute, useRouter } from "vue-router";
import useStore from "@/stores";
import Header from "@/components/Header/index.vue";
const router = useRouter();
const goDetail = (id: number) => {
  router.push({
    path: "/detail",
    query: { foodId: id },
  });
};
const backSearch = () => {
  router.back();
};
const store = useStore();
const route = useRoute();
onMounted(() => {
  store.recipe.recipeClass(Number(route.query.classid));
});
store.recipe.recipeList(Number(route.query.classid));
const { category, classifyList, list, utensilList } = storeToRefs(store.recipe);
let className = ref();
//避免数据接收不到 后期再改
setTimeout(() => {
  if (list.value[0]) {
    className.value = list.value[0].name;
  } else {
    return;
  }
}, 500);

watch(
  () => className.value,
  (newValue) => {
    list.value.map(
      (value) => {
        if (value.name == newValue) {
          store.recipe.recipeList(value.classid);
        }
      },
      { immediate: true }
    );
  }
);
</script>

<style lang="less" scoped>
.van-icon-arrow-left {
  position: absolute;
  z-index: 777;
  font-size: 50px;
  color: #fff;
  top: 100px;
  left: 10px;
}
.body-img {
  background-image: url("./images/bac2.jpeg");
}
.select {
  width: 300px;
  height: 70px;
  font-size: 50px;
  text-align: center;
  margin-left: 5px;
}
.title {
  display: flex;
  align-items: center;
  justify-content: space-around;
  .remind {
    color: rgb(88, 85, 85);
  }
}
.header {
  background-image: url("./images/bac.jpeg");
  height: 150px;
}
.main-class {
  font-size: 80px;
}
.detail {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  .content {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    font-size: 35px;
    font-weight: 700;
    img {
      width: 320px;
      height: 320px;
      border-radius: 50px;
    }
  }
}
</style>
