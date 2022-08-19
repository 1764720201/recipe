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
              <img
                src="/images/默认头像.png"
                alt=""
                v-if="!reply.user.avatarUrl"
              />
              <img :src="reply.user.avatarUrl" v-else />
              <div class="replyMsg">
                <span> {{ reply.user.name }}</span>
                <span>评论了你的回复</span>
              </div>
            </div>
            <div class="reply-btn" @click="revert(reply.id, replyList.id)">
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
      <van-dialog
        v-model:show="show"
        title="请输入回复的内容"
        show-cancel-button
        @confirm="revertMessage"
        :close-on-click-overlay="true"
        width="200px"
      >
        <van-field v-model="revertContent" placeholder="请输入回复的内容" />
      </van-dialog>
    </div>
  </div>
</template>
<script setup lang="ts">
import useStore from "@/stores";
import { storeToRefs } from "pinia";
import NotLogin from "@/components/Love/NotLogin/index.vue";
import Nothing from "@/components/Love/Nothing/index.vue";
import { Dialog, Toast } from "vant";
import { reqRevert } from "@/api/user";
const VanDialog = Dialog.Component;
const commentId = ref(0);
const replyId = ref(0);
const revertContent = ref("");
const store = useStore();
const show = ref(false);
const { personReplyList, userId, user } = storeToRefs(store.user);
const revert = (replyid: number, commentid: number) => {
  commentId.value = commentid;
  replyId.value = replyid;
  show.value = true;
};
const revertMessage = async () => {
  await reqRevert(replyId.value, commentId.value, revertContent.value);
  Toast("回复成功");
};
</script>

<style lang="less" scoped>
:deep(.van-popup) {
  position: absolute;
  top: 300px;
}
.reply {
  height: 100%;
  width: 100%;
  position: relative;
}
.content {
  width: 100%;
  display: flex;
  flex-direction: column;
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
