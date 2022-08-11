<template>
  <div class="header">
    <div class="area">
      <div class="content">
        <span class="title">摄区</span>
        <span class="publish" @click="issueComment">发布</span>
        <!-- <van-overlay

          z-index="700"
          :show="show"
          @click="show = false"
          class="wrapper"
        >
          <div class="block">
            <van-cell-group border>
              <van-cell title="视频" center>
                <template #icon>
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#van-icon-shipin"></use>
                  </svg>
                </template>
              </van-cell>
              <van-cell title="图文" center>
                <template #icon>
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#van-icon-tuwen"></use>
                  </svg>
                </template>
              </van-cell>
            </van-cell-group>
          </div>
        </van-overlay> -->
      </div>
      <van-cell-group inset>
        <van-field
          v-model="message"
          rows="2"
          autosize
          label="话题"
          type="textarea"
          maxlength="50"
          placeholder="在此处输入"
          show-word-limit
        />
      </van-cell-group>
    </div>
  </div>
</template>
<script setup lang="ts">
import "vant/lib/index.less";
import { reqIssueComment } from "@/api/user";
import { storeToRefs } from "pinia";
import { Toast } from "vant";
import useStore from "@/stores";
import { Dialog } from "vant";
import { useRouter } from "vue-router";
const router = useRouter();
const store = useStore();
const message = ref("");

const reload = inject<Function>("reload");
const refRoad = (): void => {
  (reload as Function)();
};
const issueComment = async () => {
  try {
    if (!message.value) {
      Toast("请输入文字");
    }
    if (message.value && userId) {
      await reqIssueComment(message.value).then(() => {
        refRoad();
        Toast("发布成功");
      });
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
const { userId } = storeToRefs(store.user);
</script>
<style lang="less" scoped>
.icon {
  font-size: 70px;
}
.wrapper {
  height: 100%;
}

:deep(.van-field__label) {
  font-size: 50px;
  width: 150px;
}
:deep(.van-field) {
  margin-top: 20px;
  height: 100px;
  width: 100%;
}
:deep(#van-field-1-input) {
  font-size: 30px;
}

// .block {
//   position: relative;
//   width: 100%;
//   height: 200px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-around;
//   background-color: rgb(240, 238, 238);
//   border-radius: 15px;
//   :deep(span) {
//     font-size: 35px;
//     font-weight: 900;
//     margin-left: 30px;
//   }
// }
// :deep(.van-cell) {
//   background-color: rgb(240, 238, 238);
// }
// :deep(.van-cell-group) {
//   background-color: rgb(240, 238, 238);
// }
// :deep(.van-cell):first-child {
//   border-bottom: 1px solid rgb(143, 141, 141);
// }
.header {
  .area {
    position: relative;
    height: 200px;
    width: 100%;
    background-color: #fff;
    text-align: center;
    .content {
      width: 390px;
      position: absolute;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      bottom: 0;
      right: 20px;
      .title {
        font-size: 50px;
        font-weight: 500;
      }
      .publish {
        color: rgb(235, 109, 42);
        font-size: 35px;
        font-weight: 900;
      }
    }
  }
}
</style>
