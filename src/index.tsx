/* @refresh reload */
import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";

import "./index.css";

import App from "./App";
import Home from "./page/Home";
import About from "./page/About";
import RecipeDetails from "./page/RecipeDetails";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

render(
  () => (
    <Router root={App}>
      <Route path={"/"} component={Home} />
      <Route path={"/recipe/:id"} component={RecipeDetails} />
      <Route path={"/about"} component={About} />
    </Router>
  ),
  root!
);
