<template>
  <div class="header">
    <div class="set">
      <img src="./images/铃铛.png" @click="goMessageCenter" />
      <img src="./images/设置.png" @click="set" />
    </div>
    <van-popup
      v-model:show="show"
      closeable
      position="right"
      :style="{ height: '20%' }"
    >
      <div class="logout">
        <div class="blank"></div>
        <van-button
          type="primary"
          size="normal"
          color="linear-gradient(to right, #ff6034, #ee0a24)"
          @click="login"
          >切换账号</van-button
        >
        <van-button
          type="primary"
          size="normal"
          color="linear-gradient(to right, #ff6034, #ee0a24)"
          @click="logout"
          >退出登录</van-button
        >
      </div>
    </van-popup>
    <div class="portrait">
      <img
        src="/images/默认头像.jpeg"
        v-show="!avatarUrl && !userId"
        @click="login"
      />
      <van-uploader :after-read="afterRead" v-if="userId">
        <img :src="avatarUrl" v-show="avatarUrl" />
        <img src="/images/默认头像.jpeg" v-show="!avatarUrl" />
      </van-uploader>
      <span v-if="user.name">{{ user.name }}</span>
      <span v-else>未登录</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
import useStore from "@/stores";
import { storeToRefs } from "pinia";
import { reqUploadAvatar } from "@/api/user";
const reload = inject<Function>("reload");
const refRoad = (): void => {
  (reload as Function)();
};
const store = useStore();
const router = useRouter();
const show = ref(false);
const goMessageCenter = () => {
  router.push("/messageCenter");
};
onMounted(() => {
  store.user.getAvatar(Number(userId.value));
});
const logout = () => {
  localStorage.removeItem("token");
  location.reload();
};
const login = () => {
  router.push("/login");
};
const set = () => {
  show.value = true;
};
const afterRead = async (file: any) => {
  let param = new FormData();
  param.append("avatar", file.file);
  reqUploadAvatar(param).then(() => refRoad());
};
let { user, avatarUrl, userId } = storeToRefs(store.user);
</script>

<style lang="less" scoped>
.header {
  background-image: url("/images/bkg.jpeg");
  width: 100%;
  height: 400px;
  background-position: 50px;
  .set {
    display: flex;
    width: 100%;
    justify-content: space-between;
    img {
      padding: 0 20px;
      margin-top: 50px;
      width: 55px;
      color: #fff;
    }
  }
  .portrait {
    height: 250px;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    left: 40px;

    span {
      position: absolute;
      left: 150px;
      color: rgb(248, 241, 241);
      font-size: 40px;
    }
    img {
      width: 130px;
      border-radius: 65px;
    }
  }
}
.logout {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .blank {
    height: 38%;
  }
}
:deep(.van-icon-cross) {
  font-size: 80px;
  width: 80px;
}
:deep(.van-button) {
  height: 90px;
  width: 300px;
  .van-button__text {
    font-size: 30px;
  }
}
:deep(.van-popup) {
  position: absolute;
  top: 180px;
  right: 50px;
  border-radius: 10px;
}
</style>
