import {  type Component } from "solid-js";


const App: Component = (props) => {
  return (
    <div class="p-4">
      {/* <Routes></Routes> */}
      {props.children}
    </div>
  );
};

export default App;
