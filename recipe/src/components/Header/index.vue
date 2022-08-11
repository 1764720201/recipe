<template>
  <div class="header">
    <div class="position">
      <span>浙江</span>
      <van-icon name="arrow-down" color="#fff" />
    </div>
    <div class="search">
      <form action="/">
        <van-search
          class="search-input"
          v-model="value"
          size="80px"
          clearable
          placeholder="请输入食物名称"
          shape="round"
          background="none"
        />
      </form>
      <span @click="goSearch()">搜索</span>
    </div>
    <div class="qr-code">
      <van-icon name="scan" color="#fff" />
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
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  .position {
    width: 200px;
    height: 100%;
    align-items: center;
    display: flex;
    justify-content: space-around;
    span {
      color: #fff;
    }
  }
  .search {
    display: flex;
    width: 500px;
    height: 100%;
    justify-content: space-evenly;
    align-items: center;
    span {
      color: #fff;
      font-size: 15px;
    }
  }
  :deep(.search-input) {
    height: 60px;
    display: flex;
    align-items: center;
  }
  :deep(.van-field__control) {
    height: 40px;
  }
}
</style>
