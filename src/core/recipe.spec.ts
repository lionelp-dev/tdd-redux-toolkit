import {
  createSlice,
  configureStore,
  createEntityAdapter,
} from "@reduxjs/toolkit";

export interface Recipes {
  id: string;
  name: string;
}

const recipesAdapter = createEntityAdapter<Recipes>();

const recipesSlice = createSlice({
  name: "recipes",
  initialState: recipesAdapter.getInitialState(),
  reducers: {},
});

describe("Recipe", () => {
  it("should return an empty list of recipe", () => {
    const store = configureStore({
      reducer: {
        recipes: recipesSlice.reducer,
      },
    });
    type rootState = ReturnType<typeof store.getState>;
    const recipesSelectors = recipesAdapter.getSelectors<rootState>((state) => {
      return state.recipes;
    });
    expect(recipesSelectors.selectAll(store.getState())).toEqual([]);
  });
});

export {};
