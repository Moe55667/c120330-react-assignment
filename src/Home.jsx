import { useState, useEffect } from "react";
import Counter from "./projects/counter/Counter";
import OntextChange from "./projects/onTextChange/OntextChange";
import TodoList from "./projects/todoList/TodoList";
import Switch from "./projects/switch/Switch";

const Home = () => {
  const [activeCounter, setActiveCounter] = useState(false);
  const [activeOnTextChange, setActiveOnTextChange] = useState(false);
  const [activeTodoList, setActiveTodoList] = useState(false);
  const [activeSwitch, setActiveSwitch] = useState(false);

  useEffect(() => {
    setActiveCounter(true);
  }, []);

  return (
    <>
      <div className="home">
        <div className="home_container">
          <Counter />
          <OntextChange />
          <TodoList />
          <Switch />
        </div>
      </div>
    </>
  );
};

export default Home;
