<template>
  <div class="tabbar">
    <div class="function">
      <div class="share">
        <van-icon name="share-o" @click="showShare = true" />
      </div>
      <div class="collect">
        <van-icon
          name="star-o"
          :color="ifCollect() ? 'red' : 'black'"
          @click="collect"
        />
      </div>
      <div class="message"><van-icon name="comment-o" /></div>
    </div>
    <div class="start" @click="goCooking">开始烹饪</div>
    <van-share-sheet
      v-model:show="showShare"
      title="立即分享给好友"
      :options="options"
      @select="onSelect"
    />
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
import useStore from "@/stores";
import type { CollectList } from "@/types/user";
import { reqAddCollect, reqCancelCollect } from "@/api/collect";
import { Dialog, Toast, type ToastOptions } from "vant";
const store = useStore();
const router = useRouter();
const route = useRoute();
const { detail } = storeToRefs(store.recipe);
const { userId } = storeToRefs(store.user);
const { collectList } = storeToRefs(store.collect);
const reload = inject<Function>("reload");
const showShare = ref(false);
const options = [
  { name: "微信", icon: "wechat" },
  { name: "微博", icon: "weibo" },
  { name: "复制链接", icon: "link" },
  { name: "分享海报", icon: "poster" },
  { name: "二维码", icon: "qrcode" },
];

const onSelect = (option: { name: string | ToastOptions | undefined }) => {
  Toast(option.name);
  showShare.value = false;
};
const refRoad = (): void => {
  (reload as Function)();
};
const ifCollect = () => {
  const collectArray: string[] = [];
  collectList.value.forEach((food: CollectList) => {
    collectArray.push(food.food_id);
  });
  if (collectArray.indexOf(String(detail.value.id)) !== -1) {
    return true;
  } else {
    return false;
  }
};
const goCooking = () => {
  if (userId.value == 0) {
    Dialog.confirm({
      message: "您还未登录,是否要现在登录？",
    })
      .then(() => {
        router.push("/login");
      })
      .catch(() => {
        // on cancel
      });
  } else {
    router.push({
      path: "/cooking",
      query: { foodId: route.query.foodId },
    });
  }
};
const collect = () => {
  if (!ifCollect()) {
    reqAddCollect({
      foodId: detail.value.id as unknown as string,
      foodName: detail.value.name,
      imgUrl: detail.value.pic,
    })
      .then(() => store.collect.getCollectList(store.user.userId!))
      .then(() => refRoad());
  } else {
    reqCancelCollect(String(detail.value.id), userId.value!)
      .then(() => store.collect.getCollectList(store.user.userId!))
      .then(() => refRoad());
  }
};
</script>

<style lang="less" scoped>
.tabbar {
  height: 100px;
  border-top: 1px solid #ccc;
  width: 750px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .function {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  .start {
    height: 75px;
    width: 400px;
    background-color: rgb(248, 124, 29);
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    border-radius: 30px;
    margin-right: 30px;
    color: rgb(252, 245, 245);
  }
}
:deep(.van-icon) {
  font-size: 60px;
}
</style>
