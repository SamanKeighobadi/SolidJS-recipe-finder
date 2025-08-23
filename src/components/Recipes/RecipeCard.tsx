import { A } from "@solidjs/router";
import { IRecipe } from "../../../types/recipe.types";
import CategoryIcon from "../../assets/Icons/CategoryIcon";
import WorldIcon from "../../assets/Icons/WorldIcon";
import TagsIcon from "../../assets/Icons/TagsIcon";

const RecipeCard = (props: IRecipe) => {
  return (
    <div class="card bg-base-100 w-80 h-96 shadow-md mb-6">
      <figure>
        <img src={`${props.strMealThumb}`} alt={props.strMeal} class="" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{props.strMeal}</h2>
        <p>{props.strInstructions.slice(0, 80) + "..."}</p>
        <div class="flex  py-1">
          <div class="flex items-center">
            <WorldIcon />
            <span class="px-2">{props.strArea}</span>
          </div>
          <div class="flex items-center">
            <CategoryIcon />
            <span class="pl-2">{props.strCategory}</span>
          </div>
        </div>
        <div class="flex items-center">
          <TagsIcon />
          <span class="pl-2">{props.strTags}</span>
        </div>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">
            <A href={`/recipe/${props.idMeal}`}>More</A>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
