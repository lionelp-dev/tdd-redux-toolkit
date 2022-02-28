import {
  AnyAction,
  combineReducers,
  configureStore,
  EnhancedStore,
} from "@reduxjs/toolkit";
import { ThunkMiddleware } from "redux-thunk";
import { recipeSlice } from "../recipe/domain/recipe-slice";

export const rootReducer = combineReducers({
  recipes: recipeSlice.reducer,
});

export const makeStore = () => {
  const store = configureStore({
    reducer: rootReducer,
  });
  return store;
};

export type RootState = ReturnType<typeof rootReducer>;
export type RootStore = EnhancedStore<RootState, AnyAction, [ThunkMiddleware]>;
