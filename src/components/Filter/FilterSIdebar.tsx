import { createResource } from "solid-js";
import Select from "../UI/Select";
import { getAllAreas, getCategories } from "../../../services/recipe.services";
import { convertDataToSelectInput } from "../../helpers";
import { useFilters } from "../../context/FilterContext";

const FilterSidebar = () => {
  const [categories] = createResource(getCategories);
  const [areas] = createResource(getAllAreas);

  const { area, category, clearFilters, setArea, setCategory } = useFilters();

  const convertedCategories = () =>
    convertDataToSelectInput(
      categories()?.categories,
      "idCategory",
      "strCategory"
    );

  const convertedAreas = () =>
    convertDataToSelectInput(areas()?.meals, "strArea", "strArea");

  return (
    <div class="shadow-lg py-6 rounded-md px-3 fixed w-[100%] mt-20 ">
      <div>
        <p  class="text-2xl font-bold">Filters</p>
      </div>
      <div>
        <Select
          title="Categories"
          label="Categories"
          options={convertedCategories()}
          value={category()}
          onChange={setCategory}
          placeholder="Select category..."
        />
      </div>
      <div>
        <Select
          title="Areas"
          label="Areas"
          options={convertedAreas()}
          value={area()}
          onChange={setArea}
          placeholder="Select Area..."
        />
      </div>
      <div class="pt-3">
        <button class="btn btn-primary mr-2">Apply</button>
        {area() || category() ? (
          <button class="btn btn-secondary" onClick={clearFilters}>
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default FilterSidebar;
