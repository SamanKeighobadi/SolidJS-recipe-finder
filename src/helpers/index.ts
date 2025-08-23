import { IngredientMeasure } from "./../../types/recipe.types";
import { IRecipe } from "../../types/recipe.types";

export const convertDataToSelectInput = <T>(data: T) => {
  //  console.log(data);

  if (!data) {
    return [];
  }
};

export const getIngredientsAndMeasures = (recipe: IRecipe) => {
  const result: IngredientMeasure[] = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}` as keyof IRecipe];
    const measure = recipe[`strMeasure${i}` as keyof IRecipe];

    if (
      ingredient &&
      ingredient.trim() !== "" &&
      measure &&
      measure.trim() !== ""
    ) {
      return result.push({ ingredient, measure });
    }
  }

  return result;
};

// export const convertDataToSelectInput = <T, K extends keyof T>(
//     data: T[],
//     labelKey: K,
//     labelValue: K
//   ) => {
//     return data.map((item) => {
//       return {
//         label: item[labelKey],
//         value: item[labelValue],
//       };
//     });
//   };
