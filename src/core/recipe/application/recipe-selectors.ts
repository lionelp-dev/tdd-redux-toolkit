import { EntitySelectors } from "@reduxjs/toolkit";
import { RootState, RootStore } from "../../redux/store";
import { recipeAdapter } from "../domain/recipe-usecases";

export type Selector = EntitySelectors<any, RootState>;
export class RecipeSelectors {
  selectors: Selector;
  store: RootStore;
  constructor(store: RootStore) {
    this.selectors = recipeAdapter.getSelectors<RootState>((state) => {
      return state.recipes;
    });
    this.store = store;
  }
  selectAll = () => {
    return this.selectors.selectAll(this.store.getState());
  };
}
