<template>
  <div class="not-login">
    <span>您还没有登陆,请点击登陆</span>
    <van-button type="primary" @click="goLogin">登陆</van-button>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();

const goLogin = () => {
  router.push("/login");
};
</script>

<style lang="less" scoped>
.not-login {
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  :deep(.van-button) {
    width: 300px;
    height: 60px;
    margin-top: 40px;
    border-radius: 40px;
  }
}
</style>
