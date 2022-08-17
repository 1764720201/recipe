<template>
  <div class="header">
    <div class="search">
      <form action="/">
        <van-search v-model="value" placeholder="请输入食谱" />
      </form>
      <span @click="goSearch()">搜索</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import useStore from "@/stores";
const store = useStore();
const router = useRouter();
const route = useRoute();
const value = ref("");
const goSearch = () => {
  if (route.path == "/search") {
    store.recipe.recipeSearch(route.query.keyword as string);
  }
  router.push({
    path: "/search",
    query: { keyword: value.value },
  });
};
</script>

<style lang="less" scoped>
.header {
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  border-radius: 50px;
  .search {
    display: flex;
    width: 700px;
    height: 100%;
    justify-content: space-evenly;
    align-items: center;
    span {
      color: #fff;
      font-size: 33px;
    }
  }
  :deep(.van-search) {
    width: 600px;
  }
  :deep(.search-input) {
    height: 60px;
    display: flex;
    align-items: center;
  }
  :deep(.van-field__control) {
    height: 40px;
  }
  :deep(.van-search__field) {
    display: flex;
    align-items: center;
    font-size: 40px;
  }
  :deep(.van-icon-search) {
    font-size: 40px;
  }
}
</style>
