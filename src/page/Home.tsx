import { createResource } from "solid-js";
import { getRecipes } from "../../services/recipe.services";
// ****** Custom Components ****** //
import FilterSidebar from "../components/Filter/FilterSIdebar";
import RecipeCard from "../components/Recipes/RecipeCard";
// ****** Utils ****** //
import { createDebouncedSignal } from "../utils";
// ****** Context API ****** //
import { useFilters } from "../context/FilterContext";

const Home = () => {
  const [source, setSource, debounced] = createDebouncedSignal("", 500);
  const { area, category } = useFilters();

  const [recipes] = createResource(
    () => ({
      search: debounced(),
      filters: { category: category(), area: area() },
    }),
    ({ search, filters }) => getRecipes(search, filters)
  );

  return (
    <div>
      <div class="grid grid-cols-4 gap-4">
        <div class="col-span-3">
          <div class=" flex justify-center mb-5">
            <input
              type="text"
              value={source()}
              onInput={(e) => setSource(e.currentTarget.value)}
              placeholder="search recipes"
              class="input mb-3 w-96 "
            />
          </div>
          <div class=" grid grid-cols-3 ">
            {recipes.loading && <p>Loading...</p>}

            {recipes() && recipes()!.meals
              ? recipes()!.meals.map((recipe) => <RecipeCard {...recipe} />)
              : !recipes.loading && <p>No recipes found.</p>}
          </div>
        </div>
        <div class=" col-span-1">
          <FilterSidebar />
        </div>
      </div>
    </div>
  );
};

export default Home;
