<template>
  <img
    :src="ifPraise() ? '/images/点赞收藏/已赞.png' : '/images/点赞收藏/赞.png'"
    @click="praise"
  />
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
import useStore from "@/stores";
import type { CollectList } from "@/types/user";
import { reqAddPraise, reqCancelPraise } from "@/api/collect";
const store = useStore();
const { detail } = storeToRefs(store.recipe);
const { userId } = storeToRefs(store.user);
const { praiseList } = storeToRefs(store.collect);
const reload = inject<Function>("reload");
const refRoad = (): void => {
  (reload as Function)();
};
const ifPraise = () => {
  const praiseArray: string[] = [];
  praiseList.value.forEach((food: CollectList) => {
    praiseArray.push(food.food_id);
  });
  if (praiseArray.indexOf(String(detail.value.id)) !== -1) {
    return true;
  } else {
    return false;
  }
};
const praise = () => {
  if (!ifPraise()) {
    reqAddPraise({
      foodId: detail.value.id as unknown as string,
      foodName: detail.value.name,
      imgUrl: detail.value.pic,
    })
      .then(() => store.collect.getPraiseList(store.user.userId!))
      .then(() => refRoad());
  } else {
    reqCancelPraise(String(detail.value.id), userId.value!)
      .then(() => store.collect.getPraiseList(store.user.userId!))
      .then(() => refRoad());
  }
};
</script>

<style lang="less" scoped></style>
