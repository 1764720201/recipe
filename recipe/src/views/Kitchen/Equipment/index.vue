<!-- <template>
  <div class="header">
    <van-icon name="arrow-left" @click="router.go(-1)" /> <span>添加设备</span
    ><van-icon name="question-o" />
  </div>
  <van-tree-select
    v-model:main-active-index="activeIndex"
    height="800px"
    :items="utensilList[]"
  >
    <template #content>
      <div class="utensil-bar">
        <div v-for="utensil in utensilList" :key="utensil.id" class="utensil">
          <div
            v-for="item in utensil.children"
            v-if="activeIndex == utensil.id"
            class="attribute"
          >
            <van-image :src="item.imgUrl" />
            <span class="title">{{ item.title }}</span>
          </div>
        </div>
      </div>
    </template>
  </van-tree-select>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
import type { Goods } from "@/components/Swiper/index.vue";
const router = useRouter();
interface Utensil {
  id: number;
  text: string;
  children: Goods[];
}
const activeIndex = ref(0);

const utensilList = reactive<Utensil[]>([
  {
    id: 0,
    text: "电饭煲",
    children: [
      { title: "格兰仕", id: 1, imgUrl: "/images/电饭煲/格兰仕.jpeg" },
      { title: "苏泊尔", id: 2, imgUrl: "/images/电饭煲/苏泊尔.jpeg" },
      { title: "九阳电饭煲", id: 3, imgUrl: "/images/电饭煲/九阳电饭煲.jpeg" },
    ],
  },
  {
    id: 1,
    text: "炒锅",
    children: [
      {
        title: "彩虹系列32cm炒锅",
        id: 4,
        imgUrl: "/images/炒锅/彩虹系列32cm炒锅.jpeg",
      },
      {
        title: "双立人不锈钢炒锅",
        id: 5,
        imgUrl: "/images/炒锅/双立人不锈钢炒锅.jpeg",
      },
      {
        title: "苏泊尔super芯片",
        id: 6,
        imgUrl: "/images/炒锅/苏泊尔super芯片.jpeg",
      },
    ],
  },
]);
</script>

<style lang="less" scoped>
.header {
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  height: 150px;
  align-items: center;
  font-size: 40px;
  font-weight: 700;
}

.utensil {
  width: 90%;
  display: flex;
  margin-left: 30px;
  flex-wrap: wrap;
  justify-content: space-between;
  .attribute {
    display: flex;
    flex-direction: column;
    height: 260px;
    position: relative;
    align-items: center;
    .title {
      position: absolute;
      bottom: 0px;
      color: rgb(141, 136, 136);
      font-size: 35px;
    }
  }
}

:deep(.van-image__img) {
  width: 180px;
  height: 180px;
}
:deep(.van-sidebar) {
  text-align: center;
}
:deep(.van-sidebar-item__text) {
  font-size: 35px;
  padding: 30px 0;
  font-weight: 900;
}
</style> -->
