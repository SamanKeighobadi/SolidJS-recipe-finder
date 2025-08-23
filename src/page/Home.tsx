import { createResource, createSignal } from "solid-js";
import { getRecipes } from "../../services/recipe.services";
import FilterSidebar from "../components/Filter/FilterSIdebar";
import RecipeCard from "../components/Recipes/RecipeCard";

const Home = () => {

      const [search, setSearch] = createSignal("");
    
      const [recipes] = createResource(search, getRecipes);

  return (
    <div>
      <input
        type="text"
        value={search()}
        onInput={(e) => setSearch(e.currentTarget.value)}
        placeholder="search recipes"
        class="input mb-3"
      />
      <div class="grid grid-cols-4 gap-4">
        <div class="col-span-3">
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
