import { useUser } from "./user";
import { useVideo } from "./video";
import { useRecipe } from "./recipe";
import { useCollect } from "./collect";
export default function useStore() {
  return {
    recipe: useRecipe(),
    video: useVideo(),
    user: useUser(),
    collect: useCollect(),
  };
}
