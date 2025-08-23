import api from "../api/Api";
import {
  IAreaResponse,
  ICategory,
  IRecipeResponse,
} from "../types/recipe.types";

export const getRecipes = async (search?: string) => {
  const resposne = await api.get<IRecipeResponse>(
    `search.php?f=${search ? search : "b"}`
  );
  return resposne.data;
};

export const getRecipeByID = async (id: number) => {
  const response = await api.get<IRecipeResponse>("lookup.php?i=" + id);
  return response.data;
};

export const getCategories = async () => {
  const response = await api.get<{ categories: ICategory[] }>("categories.php");
  return response.data;
};

export const getAllAreas = async () => {
  const response = await api.get<IAreaResponse>("list.php?a=list");
  return response.data;
};
