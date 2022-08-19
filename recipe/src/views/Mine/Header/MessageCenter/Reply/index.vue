<template>
  <NavBar :title="title"></NavBar>
  <NotLogin v-if="!userId"></NotLogin>
  <Nothing v-if="userId && !myReplyList[0]"></Nothing>
  <div class="reply" v-for="myReply in myReplyList" :key="myReply.id" v-else>
    <div v-if="avatarUrl"><img :src="avatarUrl" /></div>
    <div v-else><img src="/images/默认头像.png" /></div>
    <div class="info">
      <div class="name">{{ user.name }}</div>
      <div class="replyContent">{{ myReply.reply }}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import NavBar from "@/components/NavBar/index.vue";
import NotLogin from "@/components/Love/NotLogin/index.vue";
import Nothing from "@/components/Love/Nothing/index.vue";
import useStore from "@/stores";
import { storeToRefs } from "pinia";
const store = useStore();
const title = ref("回复");
onMounted(() => {
  store.user.getMyReply();
  store.user.getAvatar(store.user.userId);
});
const { userId, myReplyList, avatarUrl, user } = storeToRefs(store.user);
</script>

<style lang="less" scoped>
.reply {
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 20px 0px;
  img {
    width: 150px;
    height: 150px;
    border-radius: 150px;
  }
  .info {
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .name {
      font-size: 33px;
      font-weight: 900;
    }
    .replyContent {
      color: rgb(53, 52, 52);
    }
  }
}
</style>
