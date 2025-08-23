import { useParams } from "@solidjs/router";
import { createResource, For, Match, Show, Switch } from "solid-js";
import { getRecipeByID } from "../../services/recipe.services";
import WorldIcon from "../assets/Icons/WorldIcon";
import CategoryIcon from "../assets/Icons/CategoryIcon";
import TagsIcon from "../assets/Icons/TagsIcon";
import { getIngredientsAndMeasures } from "../helpers";

const RecipeDetails = () => {
  const { id } = useParams();

  const [recipe] = createResource(+id!, getRecipeByID);

  return (
    <div>
      <Show when={recipe.loading}>
        <p>loading...</p>
      </Show>
      <Switch>
        <Match when={recipe.error}>
          <span>Error: {recipe.error}</span>
        </Match>
        <Match when={recipe()}>
          <div class="mx-auto w-[800px]">
            <div>
              <img
                src={recipe()?.meals[0]?.strMealThumb}
                alt={recipe()?.meals[0].strMeal}
                class="h-96 w-[100%] rounded mb-"
              />
              <h6 class="text-3xl my-4">{recipe()?.meals[0]?.strMeal}</h6>
              <div class="flex mb-4">
                <div class="flex items-center">
                  <WorldIcon />
                  <span class="px-2">{recipe()?.meals[0]?.strArea}</span>
                </div>
                <div class="flex items-center">
                  <CategoryIcon />
                  <span class="px-2">{recipe()?.meals[0]?.strCategory}</span>
                </div>
                <div class="flex items-center">
                  <TagsIcon />
                  <span class="pl-2">{recipe()?.meals[0]?.strTags}</span>
                </div>
              </div>
            </div>

            <div>
              <p>{recipe()?.meals[0]?.strInstructions}</p>
            </div>

            {JSON.stringify(getIngredientsAndMeasures(recipe()?.meals[0]))}
            <div class="mb-4">
              <h3 class="text-2xl mb-2">Ingredients</h3>
              <ul class="list-disc pl-5">
                <For each={getIngredientsAndMeasures(recipe()?.meals[0])}>
                  {(item) => (
                    <li>
                      {item.measure} {item.ingredient}
                    </li>
                  )}
                </For>
              </ul>
            </div>
          </div>
        </Match>
      </Switch>
    </div>
  );
};

export default RecipeDetails;
