import {
  reqRegister,
  reqLogin,
  reqUserInfo,
  reqGetAvatar,
  reqGetAllComment,
} from "./../api/user";
import type { CommentList, UserInfo } from "@/types/user";
import { defineStore } from "pinia";
export const useUser = defineStore({
  id: "user",
  state: () => ({
    user: <UserInfo>{},
    token: <string>localStorage.getItem("token"),
    code: <number>0,
    commentList: <CommentList[]>[],
  }),
  actions: {
    async register(userInfo: UserInfo) {
      await reqRegister(userInfo);
    },
    async login(userInfo: UserInfo) {
      let result: any = await reqLogin(userInfo);
      console.log(result);
      if (result.code == 200) {
        this.token = result.token;
        localStorage.setItem("token", result.token);
        return true;
      } else {
        return Promise.reject(new Error("请输入正确的账号和密码"));
      }
    },
    async getUserInfo() {
      let result: any = await reqUserInfo();
      this.user = result;
    },
    async getAvatar(id: number) {
      let result: any = await reqGetAvatar(id);
      this.user.avatarUrl = window.URL.createObjectURL(result);
    },
    async getAllComment(offset: number, size: number) {
      let result: any = await reqGetAllComment(offset, size);
      result.forEach((comment: CommentList) => {
        comment.author.avatarUrl = "";
      });
      this.commentList = result;
      this.commentList.forEach(async (comment: CommentList) => {
        let result: any = await reqGetAvatar(comment.author.id);
        comment.author.avatarUrl = window.URL.createObjectURL(result);
      });
    },
  },
  getters: {
    avatarUrl(state) {
      return state.user.avatarUrl;
    },
    userId(state) {
      return state.user.id;
    },
  },
});
