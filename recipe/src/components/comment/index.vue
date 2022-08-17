<template>
  <van-popup
    v-model:show="show"
    closeable
    position="bottom"
    :lock-scroll="false"
    :style="{ height: '30%' }"
    ><van-cell-group inset>
      <van-field
        v-model="message"
        rows="3"
        autosize
        type="textarea"
        maxlength="30"
        placeholder="在此处输入"
        show-word-limit
      />
    </van-cell-group>
    <van-button type="primary" size="large" @click="issueComment"
      >确认发布</van-button
    >
  </van-popup>
</template>
<script setup lang="ts">
import "vant/lib/index.less";
import { getReply, reqIssueComment, reqReply } from "@/api/user";
import { storeToRefs } from "pinia";
import { Toast } from "vant";
import useStore from "@/stores";
import { Dialog } from "vant";
import { useRouter } from "vue-router";
const router = useRouter();
const store = useStore();
const { userId } = storeToRefs(store.user);
const message = ref("");
const show = ref(true);

const reload = inject<Function>("reload");
const refRoad = (): void => {
  (reload as Function)();
};
const props = defineProps<{ commentId: number }>();

const issueComment = async () => {
  try {
    if (!message.value) {
      Toast("请输入文字");
    }
    if (message.value && userId && !props.commentId) {
      await reqIssueComment(message.value)
        .then(() => {
          refRoad();
          Toast("发布成功");
        })
        .then(() => (show.value = false));
      message.value = "";
    } else if (message.value && userId && props.commentId) {
      await reqReply(props.commentId, message.value)
        .then(async () => {
          refRoad();
          await getReply(props.commentId);
        })
        .then(() => {
          refRoad();
          Toast("评论成功");
        })
        .then(() => (show.value = false));
      message.value = "";
    }
  } catch (error) {
    return Dialog.confirm({
      message: "您还未登录,点击确认可跳转到登陆界面",
    })
      .then(() => {
        router.push("/login");
      })
      .catch(() => {});
  }
};
</script>

<style lang="less" scoped>
:deep(.van-field__control, #van-field-1-input) {
  line-height: 50px;
  height: 50px;
  font-size: 50px;
}
</style>
