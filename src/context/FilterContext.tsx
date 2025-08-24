import {
  Accessor,
  createContext,
  createSignal,
  JSX,
  useContext,
} from "solid-js";

type FilterContextType = {
  category: Accessor<string>;
  setCategory: (value: string) => void;
  area: Accessor<string>;
  setArea: (value: string) => void;
  clearFilters: () => void;
};

type FilterContextProviderType = {
  children: JSX.Element;
};

export const FilterContext = createContext<FilterContextType>({
  category: () => "",
  setCategory: () => {},
  area: () => "",
  setArea: () => {},
  clearFilters: () => {},
});

export const FilterContextProvider = (props: FilterContextProviderType) => {
  const [category, setCategory] = createSignal<string>("");
  const [area, setArea] = createSignal<string>("");

  const clearFilters = () => {
    setCategory("");
    setArea("");
  };

  const values = { category, setCategory, area, setArea, clearFilters };

  return (
    <FilterContext.Provider value={values}>
      {props.children}
    </FilterContext.Provider>
  );
};

export const useFilters = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilters must be used within a FilterProvider");
  }
  return context;
};
