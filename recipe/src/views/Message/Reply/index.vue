<template>
  <div>
    <NotLogin v-if="!userId"></NotLogin>
    <Nothing v-if="userId && !personReplyList[0]"></Nothing>
    <div class="reply" v-else>
      <div v-for="replyList in personReplyList" :key="replyList.id">
        <div
          v-for="reply in replyList.replys"
          :key="reply.id"
          v-if="replyList.replys"
        >
          <div class="content">
            <div class="replyList">
              <img :src="reply.user.avatarUrl" />
              <div class="replyMsg">
                <span> {{ reply.user.name }}</span>
                <span>评论了你的回复</span>
              </div>
            </div>
            <div class="reply-btn">
              <span>回复:{{ reply.reply }}</span>
              <div class="btn">
                <van-icon name="comment-o" />
                <span>回复</span>
              </div>
            </div>
            <div class="author">
              <span>{{ user.name }}:</span>
              <span>{{ replyList.content }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import useStore from "@/stores";
import { storeToRefs } from "pinia";
import NotLogin from "@/components/Love/NotLogin/index.vue";
import Nothing from "@/components/Love/Nothing/index.vue";
const store = useStore();
const { personReplyList, userId, user } = storeToRefs(store.user);
</script>

<style lang="less" scoped>
.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 30px 0;
  .replyList {
    width: 100%;
    display: flex;

    img {
      width: 100px;
      height: 100px;
      border-radius: 50px;
    }
    .replyMsg {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 100px;
    }
    span:last-child {
      color: rgb(167, 166, 166);
      font-size: 15px;
    }
    span:first-child {
      font-weight: 900;
    }
  }
  .reply-btn {
    position: relative;
    display: flex;
    height: 100px;
    width: 100%;
    align-items: center;
    height: 100px;
    span {
      margin-left: 10px;
    }
    .btn {
      position: absolute;
      right: 50px;
      span {
        padding: 0 10px;
      }
    }
  }
  .author {
    align-items: center;
    height: 100px;
    background-color: rgb(236, 233, 233);
    display: flex;
    width: 100%;
    span:first-child {
      color: rgb(28, 28, 181);
    }
  }
}
</style>
