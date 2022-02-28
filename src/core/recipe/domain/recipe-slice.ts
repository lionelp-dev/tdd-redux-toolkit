import { createSlice } from "@reduxjs/toolkit";
import { fetchRecipes, recipeAdapter } from "./recipe-usecases";

export const recipeSlice = createSlice({
  name: "recipes",
  initialState: recipeAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRecipes.fulfilled, (state, action) => {
      recipeAdapter.setAll(state, action.payload.recipes);
    });
  },
});
