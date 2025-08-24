import { type Component } from "solid-js";
import { FilterContextProvider } from "./context/FilterContext";

const App: Component = (props) => {
  return (
    <div class="p-4">
      <FilterContextProvider>{props.children}</FilterContextProvider>
    </div>
  );
};

export default App;
