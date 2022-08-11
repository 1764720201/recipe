import { reqRandomReciple, reqRecipeList } from "./../api/recipe";
import { reqRecipeDetail, reqRecipeSearch, reqRecipeClass } from "@/api/recipe";
import { defineStore } from "pinia";
import type { List } from "@/types/recipeSearch";
import type { Result, List2 } from "@/types/category";
export const useRecipe = defineStore({
  id: "recipe",
  state: () => ({
    searchList: <List[]>[],
    detail: <List>{},
    category: <Result>{},
    classifyList: <List[]>[],
    randomList: <List[]>[],
    utensilList: <List2[]>[],
  }),
  actions: {
    async recipeSearch(keyword: string, num: number = 10, start: number = 0) {
      let result: any = await reqRecipeSearch(keyword, num, start);
      this.searchList = result.result.result.list;
    },
    async recipeDetail(foodId: number) {
      let result: any = await reqRecipeDetail(foodId);
      this.detail = result.result.result;
    },
    async recipeClass(classId: number) {
      let result: any = await reqRecipeClass();
      this.category.list = [];
      this.utensilList = [];
      return result.result.result.map((value: Result) => {
        if (value.classid == classId) {
          this.category = value;
        } else if (value.classid == 524 || value.classid == 561) {
          this.utensilList = value.list;
        }
      });
    },
    async recipeList(classId: number) {
      let result: any = await reqRecipeList(classId);
      this.classifyList = result.result.result.list;
    },
    async recipeRandom(id: number) {
      this.randomList = [];
      let result: any = await reqRandomReciple(id);
      this.randomList.push(result.result.result);
    },
  },
  getters: {
    list(state) {
      return state.category.list || [];
    },
  },
});
