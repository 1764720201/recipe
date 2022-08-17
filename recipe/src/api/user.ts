import server from "./request";
import type { UserInfo } from "@/types/user";
export const reqRegister = (userInfo: UserInfo) =>
  server({
    url: "/recipe/user/register",
    method: "POST",
    data: userInfo,
  });
export const reqLogin = (userInfo: UserInfo) =>
  server({
    url: "/recipe/user/login",
    data: userInfo,
    method: "POST",
  });
export const reqUserInfo = () =>
  server({
    url: "/recipe/user/verify",
    method: "GET",
  });
export const reqUploadAvatar = (param: FormData) =>
  server.post("/recipe/upload/avatar", param);
export const reqGetAvatar = (id: number) =>
  server.get(`/recipe/user/${id}/avatar`, {
    responseType: "blob",
  });
export const reqIssueComment = (content: string) =>
  server({
    url: "/recipe/comment",
    method: "POST",
    data: { content },
  });
export const reqGetAllComment = (offset: number, size: number) =>
  server({
    url: `/recipe/comment?offset=${offset}&size=${size}`,
    method: "GET",
  });
export const reqGetPersonComment = (userId: number) =>
  server({ url: `/recipe/comment/${userId}/user`, method: "GET" });
export const reqReply = (commentId: number, reply: string) =>
  server({ url: "/recipe/reply", method: "POST", data: { commentId, reply } });
export const reqGetReply = (commentId: number) =>
  server({ url: `/recipe/reply?commentId=${commentId}`, method: "GET" });
