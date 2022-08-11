import type { CollectList } from "@/types/user";
import { reqGetCollect, reqGetPraise } from "@/api/collect";
import { defineStore } from "pinia";
export const useCollect = defineStore({
  id: "collect",
  state: () => ({
    collectList: <CollectList[]>[],
    praiseList: <CollectList[]>[],
  }),
  getters: {},
  actions: {
    async getCollectList(userId: number) {
      let result: any = await reqGetCollect(userId);
      this.collectList = result;
    },
    async getPraiseList(userId: number) {
      let result: any = await reqGetPraise(userId);
      this.praiseList = result;
    },
  },
});
