export interface IRecipe {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string;
  strYoutube: string;
}

export interface ICategory {
  idCategory: string | number;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

export interface IngredientMeasure {
  ingredient: string;
  measure: string;
}

export interface IArea{
  strArea: string
}

export interface IRecipeResponse {
  meals: IRecipe[];
}


export interface IAreaResponse {
  meals: IArea[]
}

export interface IRecipeFilters {
  category: string;
  area: string;
}