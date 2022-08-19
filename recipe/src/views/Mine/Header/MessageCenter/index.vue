<template>
  <div class="message-center">
    <div class="title">
      <van-icon name="arrow-left" @click="goBack" />
      <span>消息中心</span>
    </div>
    <div class="center"></div>
  </div>
  <van-cell title="系统消息" is-link center @click="goOption">
    <template #icon>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#van-icon-inform"></use>
      </svg>
    </template>
  </van-cell>
  <van-cell title="点赞" is-link center @click="goPraise">
    <template #icon>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#van-icon-praise"></use>
      </svg>
    </template>
  </van-cell>
  <van-cell title="收藏" is-link center @click="goCollect">
    <template #icon>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#van-icon-collect"></use>
      </svg>
    </template>
  </van-cell>
  <van-cell title="回复" is-link center @click="goReply">
    <template #icon>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#van-icon-message"></use>
      </svg>
    </template>
  </van-cell>
</template>
<script setup lang="ts">
const router = useRouter();
const goBack = () => {
  router.push("/mine");
};
const goCollect = () => {
  router.push("/collect");
};
const goPraise = () => {
  router.push("/praises");
};
const goReply = () => {
  router.push("/reply");
};
const goOption = () => {
  router.push("/option");
};
</script>

<style lang="less" scoped>
.title {
  height: 150px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  span {
    width: 60%;
    font-size: 40px;
    font-weight: 700;
  }
  :deep(.van-icon-arrow-left) {
    font-size: 40px;
    color: rgb(77, 75, 75);
  }
}
.center {
  background-color: #fff;
  margin-top: 100px;
}
:deep(.van-cell__title) {
  span {
    font-weight: 500;
    font-size: 40px;
  }
}
.icon {
  font-size: 130px;
  margin-right: 25px;
}
</style>
