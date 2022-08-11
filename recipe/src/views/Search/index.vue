<template>
  <div class="search">
    <div class="header">
      <van-icon name="arrow-left" @click="backHome" />
      <Header></Header>
    </div>
    <List></List>
  </div>
</template>
<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import useStore from "@/stores";
import Header from "@/components/Header/index.vue";
import List from "./List/index.vue";
const store = useStore();
const router = useRouter();
const route = useRoute();

onMounted(() => {
  store.recipe.recipeSearch(route.query.keyword as string);
});
const backHome = () => {
  router.push("/");
};
</script>

<style lang="less" scoped>
.search {
  width: 100%;
  .header {
    position: relative;
    height: 200px;
    background-image: url("./images/bac.jpeg");
  }
}
:deep(.van-icon-arrow-left) {
  margin-top: 30px;
  font-size: 60px;
  color: #fff;
  z-index: 9999;
}
</style>
