import { useUser } from "./user";
import { useRecipe } from "./recipe";
import { useCollect } from "./collect";
export default function useStore() {
  return {
    recipe: useRecipe(),
    user: useUser(),
    collect: useCollect(),
  };
}
