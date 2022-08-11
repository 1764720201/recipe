import server from "./request";
import type { Collect } from "@/types/user";
export const reqAddCollect = (collect: Collect) =>
  server.post("/recipe/upload/collect", collect);
export const reqGetCollect = (userId: number) =>
  server({
    url: "/recipe/upload/collect",
    method: "GET",
    data: userId,
  });
export const reqCancelCollect = (foodId: string, userId: number) =>
  server({
    url: "/recipe/upload/collect",
    method: "DELETE",
    data: { foodId, userId },
  });
export const reqAddPraise = (Praise: Collect) =>
  server.post("/recipe/upload/praise", Praise);
export const reqGetPraise = (userId: number) =>
  server({
    url: "/recipe/upload/praise",
    method: "GET",
    data: userId,
  });
export const reqCancelPraise = (foodId: string, userId: number) =>
  server({
    url: "/recipe/upload/praise",
    method: "DELETE",
    data: { foodId, userId },
  });
