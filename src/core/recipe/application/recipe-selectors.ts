import { rootReducer, store } from "../../redux/store";
import { recipeAdapter } from "../domain/recipe-usecases";

export const recipeSelectors = recipeAdapter.getSelectors<
  ReturnType<typeof rootReducer>
>((state) => {
  return state.recipes;
});

export const selectAllRecipes = () => {
  return recipeSelectors.selectAll(store.getState());
};
