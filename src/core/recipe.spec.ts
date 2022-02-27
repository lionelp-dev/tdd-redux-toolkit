import {
  createSlice,
  configureStore,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";

export interface Recipes {
  id: number;
  name: string;
}

const recipesAdapter = createEntityAdapter<Recipes>();

export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async (recipes: any) => {
    return {
      recipes,
    };
  }
);

const recipesSlice = createSlice({
  name: "recipes",
  initialState: recipesAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRecipes.fulfilled, (state, action) => {
      recipesAdapter.setAll(state, action.payload.recipes);
    });
  },
});
// First, create the thunk
const makeSut = () => {
  const store = configureStore({
    reducer: {
      recipes: recipesSlice.reducer,
    },
  });
  type rootState = ReturnType<typeof store.getState>;
  const recipesSelectors = recipesAdapter.getSelectors<rootState>((state) => {
    return state.recipes;
  });
  const selectAllRecipes = () => {
    return recipesSelectors.selectAll(store.getState());
  };
  return {
    store,
    recipesSelectors,
    selectAllRecipes,
  };
};

describe("Recipe", () => {
  it("should return an empty list of recipe", () => {
    const { store, selectAllRecipes } = makeSut();
    expect(selectAllRecipes()).toEqual([]);
  });
  it("should return a list of many recipes", async () => {
    const { store, selectAllRecipes } = makeSut();
    await store.dispatch(
      fetchRecipes([
        {
          id: "1",
          name: "columbo",
        },
        {
          id: "2",
          name: "columbo",
        },
      ])
    );
    expect(selectAllRecipes()).toEqual([
      {
        id: "1",
        name: "columbo",
      },
      {
        id: "2",
        name: "columbo",
      },
    ]);
  });
});

export {};
