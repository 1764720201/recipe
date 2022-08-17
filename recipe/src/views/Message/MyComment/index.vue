<template>
  <div>
    <NotLogin v-if="!userId"></NotLogin>
    <Nothing v-if="userId && !personCommentList[0]"></Nothing>
    <div class="main" v-else>
      <div
        class="myCommentList"
        v-for="comment in personCommentList"
        :key="comment.id"
      >
        <div class="author">
          <img :src="comment.avatarUrl" />
          <div class="info">
            <span>{{ user.name }}</span>
            <span>{{ dayjs(comment.createAt).format("YYYY MM-DD ") }}</span>
          </div>
        </div>
        <div class="comment">
          <span>评论:{{ comment.content }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import dayjs from "dayjs";
import useStore from "@/stores";
import { storeToRefs } from "pinia";
import NotLogin from "@/components/Love/NotLogin/index.vue";
import Nothing from "@/components/Love/Nothing/index.vue";
const store = useStore();
const { personCommentList, user, userId } = storeToRefs(store.user);
</script>

<style lang="less" scoped>
.main {
  padding: 80px 0;

  .myCommentList {
    margin-left: 30px;
    .author {
      display: flex;
      img {
        width: 75px;
        height: 75px;
        border-radius: 37.5px;
      }
      .info {
        display: flex;
        justify-content: space-around;
        flex-direction: column;
      }
    }
    .comment {
      height: 100px;
      display: flex;
      align-items: center;
    }
  }
}
</style>
