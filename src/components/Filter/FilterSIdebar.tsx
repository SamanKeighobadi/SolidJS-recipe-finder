import { createResource } from "solid-js";
import Select from "../UI/Select";
import { getAllAreas, getCategories } from "../../../services/recipe.services";
import { convertDataToSelectInput } from "../../helpers";

const FilterSidebar = () => {
  const [categories] = createResource(getCategories);
  const [areas] = createResource(getAllAreas);

  const convertedCategories = () => {
    if (!categories() || !categories()?.categories) {
      return [];
    }

    return categories()?.categories.map((category) => ({
      value: category.idCategory,
      label: category.strCategory,
    }));
  };

  const convertedAreas = convertDataToSelectInput(areas()?.areas);
  //   console.log(convertedAreas);

  return (
    <div>
      {categories.loading && areas.loading && <p>Loading...</p>}
      <div>
        <Select
          title="Categories"
          label="Categories"
          options={convertedCategories()}
        />
      </div>
      <div>
        {/* <Select title="Areas" label="Areas" options={convertedAreas} /> */}
      </div>
    </div>
  );
};

export default FilterSidebar;
