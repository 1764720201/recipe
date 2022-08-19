<template>
  <div class="discussion">
    <p>讨论区</p>
  </div>
  <div class="allComment">
    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      loading-text="加载中"
      @load="onLoad"
    >
      <div
        v-for="item in commentList"
        :key="item.id"
        class="topic"
        v-lazy="item"
      >
        <div class="author">
          <img :src="item.author.avatarUrl" v-if="item.author.avatarUrl" />
          <img src="/images/默认头像.png" v-else />
          <div class="message" @click="reply(item.id)">
            <div class="name">{{ item.author.name }}</div>
            <div class="comment">{{ item.content }}</div>
          </div>
          <van-badge
            :content="item.replyCount"
            @click.once="checkReply(item)"
            class="checkReply"
          >
            <span>查看回复</span>
          </van-badge>
        </div>
        <div v-for="replyList in replyArr" :key="replyList.id">
          <van-cell-group
            class="reply animate__animated animate__zoomIn"
            v-for="reply in replyList.replys"
            :key="reply.id"
            v-if="item.id == replyList.id"
          >
            <van-cell>
              <div class="replyer">
                <img :src="reply.user.avatarUrl" v-if="reply.user.avatarUrl" />
                <img src="/images/默认头像.png" v-else />
                <div class="replyMsg">
                  <div class="reply-name">{{ reply.user.name }}</div>
                  <div class="reply-msg">{{ reply.reply }}</div>
                </div>
              </div>
            </van-cell>
          </van-cell-group>
        </div>
      </div>
    </van-list>
  </div>
  <Comment v-if="show" :commentId="commentId"></Comment>
</template>
<script setup lang="ts">
import { reqGetAllComment } from "@/api/user";
import useStore from "@/stores";
import { storeToRefs } from "pinia";
import Comment from "@/components/comment/index.vue";
import type { CommentList } from "@/types/user";
import { Toast } from "vant";
const commentId = ref(0);
const show = ref(false);
const loading = ref(false);
const finished = ref(false);
const offset = ref(0);
const size = ref(5);
const store = useStore();
onMounted(() => {
  store.user.getAllComment(offset.value, size.value);
});
const onLoad = async () => {
  let total: any = await reqGetAllComment(0, 99999);
  if (commentList.value.length >= total.length) {
    finished.value = true;
  } else {
    await reqGetAllComment((offset.value += size.value), size.value).then(
      () => {
        store.user.getAllComment(0, offset.value);
        loading.value = false;
      }
    );
  }
};
const reply = (id: number) => {
  commentId.value = id;
  if (show.value) {
    show.value = false;
    nextTick(() => {
      show.value = true;
    });
  } else {
    show.value = true;
  }
};
const checkReply = (reply: CommentList) => {
  if (reply.replyCount) {
    store.user.getReply(reply.id);
  } else {
    Toast("该评论没有任何回复");
  }
};
const { commentList, replyArr } = storeToRefs(store.user);
</script>

<style lang="less" scoped>
.allComment {
  padding-bottom: 180px;
}
.discussion {
  width: 100%;
  height: 200px;
  line-height: 200px;
  p {
    font-size: 45px;
    margin-left: 35px;
    font-weight: 900;
  }
}
:deep(.van-badge) {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  width: 50px;
  height: 50px;
  position: absolute;
  right: 20px;
  top: -20px;
}

.topic {
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;

  .author {
    margin-left: 20px;
    display: flex;
    .checkReply {
      margin-top: 50px;
    }
  }
  img {
    width: 130px;
    height: 130px;
    border-radius: 65px;
  }
  .message {
    height: 180px;
    width: 400px;
    display: flex;
    flex-direction: column;
    .name {
      font-size: 40px;
      font-weight: 900;
    }
    .comment {
      color: rgb(117, 115, 115);
    }
  }
  .reply {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: relative;
    img {
      width: 80px;
      height: 80px;
    }
    .replyer {
      display: flex;
      align-items: center;
      .reply-name {
        height: 30px;
        font-size: 25px;
        font-weight: 700;
      }
      .reply-msg {
        color: rgb(112, 110, 110);
      }
    }
  }
}
</style>
