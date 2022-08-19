import {
  reqRegister,
  reqLogin,
  reqUserInfo,
  reqGetAvatar,
  reqGetAllComment,
  reqGetReply,
  reqGetPersonComment,
  reqGetComment,
  reqMyReply,
} from "./../api/user";
import type {
  CommentList,
  UserInfo,
  PersonComment,
  PersonReply,
  GetReply,
  ReplyList,
  MyReply,
} from "@/types/user";
import { defineStore } from "pinia";
export const useUser = defineStore({
  id: "user",
  state: () => ({
    user: <UserInfo>{},
    token: <string>localStorage.getItem("token"),
    code: <number>0,
    commentList: <CommentList[]>[],
    personCommentList: <PersonComment[]>[],
    personReplyList: <PersonReply[]>[],
    replyArr: <ReplyList[]>[],
    myReplyList: <MyReply[]>[],
  }),
  actions: {
    async register(userInfo: UserInfo) {
      await reqRegister(userInfo);
    },
    async login(userInfo: UserInfo) {
      let result: any = await reqLogin(userInfo);
      if (result.code == 200) {
        this.token = result.token;
        localStorage.setItem("token", result.token);
        return true;
      } else {
        return Promise.reject(new Error("请输入正确的账号和密码"));
      }
    },
    async getReply(commentId: number) {
      let result: any = await reqGetComment(commentId);
      this.replyArr.push(result);
      this.replyArr.forEach((replyList: ReplyList) => {
        replyList.replys.forEach(async (reply: GetReply) => {
          let result: any = await reqGetAvatar(reply.user.id);
          reply.user.avatarUrl = window.URL.createObjectURL(result);
        });
      });
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
      this.commentList = result;
      result.forEach((comment: CommentList) => {
        comment.author.avatarUrl = "";
      });
      this.commentList.forEach(async (comment: CommentList) => {
        let result: any = await reqGetAvatar(comment.author.id);
        comment.author.avatarUrl = window.URL.createObjectURL(result);
      });
    },
    async getPersonComment(userId: number) {
      let result: any = await reqGetPersonComment(userId);
      this.personCommentList = result.reverse();
      this.personCommentList.forEach(async (personComment: PersonComment) => {
        let result: any = await reqGetAvatar(userId);
        personComment.avatarUrl = window.URL.createObjectURL(result);
      });
    },
    async getPersonReply(userId: number) {
      let result: any = await reqGetPersonComment(userId);
      this.personReplyList = result.reverse();
      this.personReplyList.forEach(async (personComment: PersonReply) => {
        let result2: any = await reqGetReply(personComment.id);
        personComment.replys = result2;
        personComment.replys.forEach(async (replys) => {
          if (replys.user.id) {
            let result: any = await reqGetAvatar(replys.user.id);
            replys.user.avatarUrl = window.URL.createObjectURL(result);
          }
        });
      });
    },
    async getMyReply() {
      let result: any = await reqMyReply();
      this.myReplyList = result;
    },
  },
  getters: {
    avatarUrl(state) {
      return state.user.avatarUrl || "";
    },
    userId(state) {
      return state.user.id || 0;
    },
  },
});
