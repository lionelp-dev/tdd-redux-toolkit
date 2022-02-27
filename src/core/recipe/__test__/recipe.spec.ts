import { selectAllRecipes } from "../application/recipe-selectors";
import { fetchRecipes } from "../domain/recipe-usecases";
import { store } from "../../redux/store";

describe("Recipe", () => {
  it("should return an empty list of recipe", () => {
    expect(selectAllRecipes()).toEqual([]);
  });
  it("should return a list of many recipes", async () => {
    await store.dispatch(
      fetchRecipes([
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
    expect(selectAllRecipes()).toEqual([
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
