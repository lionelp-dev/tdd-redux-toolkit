import { createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import { Recipes } from "./recipe-entities";

export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async (recipes: Array<Recipes>) => {
    return {
      recipes,
    };
  }
);

export const recipeAdapter = createEntityAdapter<Recipes>();
