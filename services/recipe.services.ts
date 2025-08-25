import { IRecipeFilters } from "./../types/recipe.types";
import api from "../api/Api";
import {
  IAreaResponse,
  ICategory,
  IRecipeResponse,
} from "../types/recipe.types";

/**
 * Given a search query or filters, fetches recipes from the API and returns them.
 * If no search query or filters are provided, returns a list of all recipes.
 * @param search The search query to search for recipes by name.
 * @param filters The filters to apply to the recipe search.
 * @returns The list of recipes as an IRecipeResponse object.
 */
export const getRecipes = async (search?: string, filters?: IRecipeFilters) => {
  let endpoint = "";

  if (search) {
    endpoint = `search.php?s=${encodeURIComponent(search)}`;
  } else if (filters?.category) {
    endpoint = `filter.php?c=${encodeURIComponent(filters.category)}`;
  } else if (filters?.area) {
    endpoint = `filter.php?a=${encodeURIComponent(filters.area)}`;
  } else {
    endpoint = `search.php?s=b`;
  }
  const resposne = await api.get<IRecipeResponse>(endpoint);
  return resposne.data;
};

/**
 * Given a recipe ID, fetches the recipe data from the API and returns it.
 * @param id The ID of the recipe to fetch.
 * @returns The recipe data.
 */
export const getRecipeByID = async (id: number) => {
  const response = await api.get<IRecipeResponse>("lookup.php?i=" + id);
  return response.data;
};

/**
 * Fetches a list of all categories from the API and returns it.
 * @returns A response object containing an array of ICategory objects.
 */
export const getCategories = async () => {
  const response = await api.get<{ categories: ICategory[] }>("categories.php");
  return response.data;
};

/**
 * Fetches a list of all areas from the API and returns it.
 * @returns A response object containing an array of IArea objects.
 */
export const getAllAreas = async () => {
  const response = await api.get<IAreaResponse>("list.php?a=list");
  return response.data;
};
