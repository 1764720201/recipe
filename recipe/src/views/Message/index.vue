<template>
  <div class="message">
    <div class="title">消息</div>
    <van-tabs v-model:active="active" swipeable>
      <van-tab v-for="index in components" :title="index.title">
        <keep-alive>
          <component
            :is="index.conName"
            class="animate__animated animate__lightSpeedInLeft"
            v-show="state.showRouter"
          ></component>
        </keep-alive>
      </van-tab>
    </van-tabs>
  </div>
  <Tabbar></Tabbar>
</template>
<script setup lang="ts">
import MyComment from "./MyComment/index.vue";
import Reply from "./Reply/index.vue";
import Tabbar from "@/components/Tabbar/index.vue";
import useStore from "@/stores";
import { storeToRefs } from "pinia";
const store = useStore();
onMounted(() => {
  if (userId.value) {
    store.user.getPersonComment(store.user.userId!);
    store.user.getPersonReply(store.user.userId!);
  }
});
const { userId } = storeToRefs(store.user);

const components = reactive([
  {
    title: "收到的回复",
    conName: markRaw(Reply),
  },
  {
    title: "我的评论",
    conName: markRaw(MyComment),
  },
]);
const state = reactive({
  showRouter: true,
});
const active = ref(0);
</script>

<style lang="less" scoped>
.message {
  width: 100%;
  text-align: center;
  .title {
    margin-bottom: 100px;
    margin-top: 30px;
    color: rgb(136, 133, 133);
    font-weight: 900;
  }
  :deep(.van-tabs__wrap) {
    height: 70px;
    .van-tab__text--ellipsis {
      font-size: 40px;
      line-height: 70px;
      height: 70px;
    }
    .van-tab__text {
      font-size: 40px;
    }
  }
}
</style>
