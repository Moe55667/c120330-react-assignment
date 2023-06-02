import { useState, Fragment, useEffect } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      if (selectedTodo) {
        // Update existing todo
        const updatedTodos = todos.map((todo) => {
          if (todo.id === selectedTodo.id) {
            return { ...todo, text: inputValue };
          }
          return todo;
        });
        setTodos(updatedTodos);
        setSelectedTodo(null);
        setIsEditing(false);
      } else {
        // Add new todo
        setTodos([...todos, { id: Date.now(), text: inputValue }]);
      }
      setInputValue("");
    }
  };

  return (
    <Fragment>
      <div className="todoList">
        <div className="todo_title">To-Do-List</div>
        <div className="todo_header">
          <input
            type="text"
            value={inputValue}
            className="text_field"
            placeholder="Type text..."
            onChange={(e) => {
              handleInputChange(e);
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleAddTodo();
              }
            }}
          />
          <button className="submitBtn" onClick={handleAddTodo}>
            Submit
          </button>
        </div>
        <div className="items">
          <ul>
            {todos.map((todo) => {
              return (
                <>
                  <div className="item">
                    <li key={todo.id}>{todo.text}</li>
                    <div className="operations"></div>
                  </div>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default TodoList;
