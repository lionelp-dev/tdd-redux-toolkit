import { RecipeSelectors } from "../application/recipe-selectors";
import { makeStore } from "../../redux/store";
import * as useCases from "../domain/recipe-usecases";

const makeSut = () => {
  const store = makeStore();
  const recipeSelectors = new RecipeSelectors(store);
  return { store, recipeSelectors };
};

describe("Recipe", () => {
  it("should return an empty list of recipe", () => {
    const { recipeSelectors } = makeSut();
    expect(recipeSelectors.selectAll()).toEqual([]);
  });
  it("should return a list of many recipes", async () => {
    const { store, recipeSelectors } = makeSut();
    await store.dispatch(
      useCases.fetchRecipes([
        {
          id: 1,
          name: "columbo",
        },
        {
          id: 2,
          name: "columbo",
        },
      ])
    );
    expect(recipeSelectors.selectAll()).toEqual([
      {
        id: 1,
        name: "columbo",
      },
      {
        id: 2,
        name: "columbo",
      },
    ]);
  });
});
