<template>
  <div class="login">
    <div class="back">
      <img src="./images/返回.png" @click="back" />
    </div>
    <van-form @submit="onSubmit">
      <div class="interface">
        <div class="title">{{ title }}</div>
        <van-cell-group inset>
          <slot> </slot>
        </van-cell-group>
        <div style="margin: 30px">
          <van-button
            round
            block
            type="primary"
            native-type="submit"
            @click="loginOrRegister"
          >
            {{ title }}
          </van-button>
        </div>
        <div class="register" @click="register" v-if="route.path == '/login'">
          快速注册
        </div>
      </div>
    </van-form>
  </div>
</template>
<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import useStore from "@/stores";
import { Dialog, Toast } from "vant";
export type UserInfo = {
  id?: number;
  phone: string;
  name: string;
  password: string;
  avatarUrl?: string;
};
const store = useStore();
const router = useRouter();
const route = useRoute();
const title = ref(route.path == "/login" ? "登陆" : "注册");
const { userInfo } = defineProps<{ userInfo: UserInfo }>();
const loginOrRegister = () => {
  if (route.path == "/register") {
  }
};
const back = () => {
  if (route.path == "/login") {
    router.push("/mine");
  } else {
    router.push("/login");
  }
};
const register = () => {
  router.push("/register");
};
const onSubmit = async () => {
  if (route.path == "/login") {
    try {
      await store.user
        .login(userInfo)
        .then(() => store.user.getUserInfo())
        .then(() => router.push("./mine"));
    } catch (error) {
      Toast("请输入正确的账号或密码");
    }
  } else {
    try {
      await store.user.register(userInfo).then(() =>
        Dialog.confirm({
          message: "你是否要直接登录",
        })
          .then(async () => {
            await store.user
              .login(userInfo)
              .then(() => store.user.getUserInfo())
              .then(() => router.push("./mine"));
          })
          .catch(() => {
            router.push("login");
          })
      );
    } catch (error) {
      Toast("输入有误");
    }
  }
};
</script>

<style lang="less" scoped>
.login {
  height: 100%;
  width: 100%;
  background-image: url(./images/bac.jpeg);
  display: flex;
  justify-content: center;
  position: absolute;
  .back {
    position: absolute;
    top: 50px;
    left: 50px;
    img {
      width: 150px;
    }
  }
  .interface {
    margin-top: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 800px;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 50px;
    .title {
      font-size: 60px;
      margin-bottom: 20px;
    }
    :deep(.van-form) {
      width: 600px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    :deep(.van-cell-group) {
      align-items: center;
      border-radius: 20px;
      width: 500px;
    }
    :deep(.van-field) {
      background: rgb(254, 254, 254);
      width: 100%;
      display: flex;
      align-items: center;
      height: 100px;
    }
    :deep(.van-field__label) {
      width: 120px;
      font-size: 30px;
      font-weight: 700;
    }
    :deep(.van-field__body) {
      font-size: 30px;
    }
    :deep(.van-button) {
      width: 450px;
      height: 70px;
      .van-button__content {
        font-size: 35px;
      }
    }
  }
}
</style>
