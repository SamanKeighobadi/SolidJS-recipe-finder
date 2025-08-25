import { IngredientMeasure } from "./../../types/recipe.types";
import { IRecipe } from "../../types/recipe.types";

/**
 * Converts an array of objects into an array of objects that can be used as
 * input for a select element. The resulting array will contain objects
 * with 'value' and 'label' properties, which are derived from the
 * corresponding properties of the input objects.
 *
 * @param data The array of objects to convert.
 * @param valueKey The key of the property in the input objects that will
 *   be used as the value of the select element.
 * @param labelKey The key of the property in the input objects that will
 *   be used as the label of the select element.
 * @returns An array of objects with 'value' and 'label' properties, which
 *   can be used as input for a select element.
 */
export const convertDataToSelectInput = <T>(
  data: T[] | undefined,
  valueKey: keyof T,
  labelKey: keyof T
) => {
  if (!data) {
    return [];
  }

  return data.map((item) => ({
    value: item[valueKey],
    label: item[labelKey],
  }));
};

/**
 * Given a recipe object, returns an array of IngredientMeasure objects
 * representing the ingredients and corresponding measures of the recipe.
 * Only includes ingredients and measures that are not empty strings.
 * @param recipe The recipe object to process.
 * @returns An array of IngredientMeasure objects.
 */
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
      result.push({ ingredient, measure });
    }
  }

  return result;
};
