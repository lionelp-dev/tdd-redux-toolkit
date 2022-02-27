import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { recipeSlice } from "../recipe/application/recipe-slice";

export const rootReducer = combineReducers({
  recipes: recipeSlice.reducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});
