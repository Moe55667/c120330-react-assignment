import { useState } from "react";
import Counter from "./projects/counter/Counter";
import OntextChange from "./projects/onTextChange/OntextChange";
import TodoList from "./projects/todoList/TodoList";
import Switch from "./projects/switch/Switch";
import Home from "./Home";

function App() {
  return (
    <>
      <div className="App">
        {/* <h1 className="text-3xl font-bold underline cursor: pointer">
          Hello world!
        </h1> */}
        <Home />
      </div>
    </>
  );
}

export default App;
