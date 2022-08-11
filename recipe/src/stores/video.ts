import { reqVideo } from "./../api/video";
import { defineStore } from "pinia";
import type { ItemList } from "@/types/video";
export const useVideo = defineStore({
  id: "video",
  state: () => ({
    videoList: <ItemList[]>[],
  }),
  actions: {
    async video(videoId: number) {
      let result: any = await reqVideo(videoId);
      this.videoList = result.itemList;
    },
  },
  getters: {},
});
