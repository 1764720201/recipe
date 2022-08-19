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
          <img src="/images/默认头像.png" v-if="!comment.avatarUrl" />
          <img :src="comment.avatarUrl" v-else />
          <div class="edit">
            <div class="info">
              <span>{{ user.name }}</span>
              <span>{{ dayjs(comment.createAt).format("YYYY MM-DD ") }}</span>
            </div>
            <div>
              <van-icon name="delete-o" @click="deleteComment(comment.id)" />
            </div>
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
import { Dialog } from "vant";
import { reqDeleteComment } from "@/api/user";
const store = useStore();
const deleteComment = (commentId: number) =>
  Dialog.confirm({
    title: "警告",
    message: "你确定要删除该评论吗",
  })
    .then(async () => {
      await reqDeleteComment(commentId);
      store.user.getPersonComment(store.user.userId);
    })
    .catch(() => {
      // on cancel
    });

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
      .edit {
        width: 80%;
        justify-content: space-between;
        display: flex;
        align-items: center;
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
