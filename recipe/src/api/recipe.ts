import server from "./request";
const appkey = "7dc60805e26343f12dd8337d2bf5d831";

export const reqRecipeSearch = (
  keyword: string,
  num: number = 10,
  start: number = 0
) =>
  server({
    url: `/jisuapi/search?keyword=${keyword}&num=${num}&start=${start}&appkey=${appkey}`,
    method: "GET",
  }).catch((err) => {
    return Promise.reject(err);
  });
export const reqRecipeDetail = (id: number) =>
  server({
    url: `/jisuapi/detail?id=${id}&appkey=${appkey}`,
    method: "GET",
  });
export const reqRecipeClass = () =>
  server({
    url: `/jisuapi/recipe_class?appkey=${appkey}`,
    method: "GET",
  });
export const reqRecipeList = (classId: number) =>
  server({
    url: `/jisuapi/byclass?classid=${classId}&appkey=${appkey}`,
    method: "GET",
  });
export const reqRandomReciple = (id: number) =>
  server({
    url: `/jisuapi/detail?id=${id}&appkey=${appkey}`,
    method: "GET",
  });
