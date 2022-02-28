import { createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import { Recipes } from "./recipe-entities";

export const recipeAdapter = createEntityAdapter<Recipes>();

export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async (recipes: Array<Recipes>) => {
    return {
      recipes,
    };
  }
);
