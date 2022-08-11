import server from "./request";
export const reqVideo = (num: number) =>
  server({
    url: `/api/v4/discovery/hot?start=${num}&num=4`,
    method: "GET",
  });
