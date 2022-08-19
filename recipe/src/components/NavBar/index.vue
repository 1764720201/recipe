<template>
  <van-nav-bar
    :title="props.title"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
  />
</template>
<script setup lang="ts">
const props = defineProps<{ title: string }>();
const router = useRouter();
const onClickLeft = () => {
  router.back();
};
</script>

<style lang="less" scoped>
:deep(.van-nav-bar__content) {
  width: 100%;
  height: 200px;
  .van-nav-bar__left,
  .van-nav-bar__title {
    font-size: 40px;
    .van-icon-arrow-left {
      font-size: 40px;
    }
  }
  .van-ellipsis {
    display: flex;
    align-items: center;
    font-size: 40px;
    height: 100%;
  }
}
</style>
