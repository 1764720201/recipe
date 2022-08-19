<template>
  <div class="header">
    <div class="area">
      <div class="content">
        <span class="title">社区</span>
        <span class="publish" @click="toShow">发布</span>
      </div>
    </div>
  </div>

  <Comment v-if="show" :commentId="0"></Comment>
</template>
<script setup lang="ts">
import Comment from "@/components/comment/index.vue";
const show = ref(false);
const toShow = () => {
  if (show.value) {
    show.value = false;
    nextTick(() => {
      show.value = true;
    });
  } else {
    show.value = true;
  }
};
</script>
<style lang="less" scoped>
.wrapper {
  height: 100%;
}
.header {
  .area {
    position: relative;
    height: 200px;
    width: 100%;
    background-color: #fff;
    text-align: center;
    .content {
      width: 390px;
      position: absolute;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      bottom: 0;
      right: 20px;
      .title {
        font-size: 50px;
        font-weight: 500;
      }
      .publish {
        color: rgb(235, 109, 42);
        font-size: 35px;
        font-weight: 900;
      }
    }
  }
}
</style>
