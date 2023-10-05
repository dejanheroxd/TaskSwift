import CreateTodo from "./Components/CreateTodo/CreateTodo";
import ControlTodo from "./Components/ControlTodo/ControlTodo";
import { useState } from "react";

function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);
  console.log(todos);

  function handleNewItemInput(input) {
    setNewItem(input);
  }

  function handleOnSubmit(e) {
    e.preventDefault();

    if (newItem === "") return;

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });

    setNewItem("");
  }

  function handleToggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function handleDeleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <div className="h-screen">
      <CreateTodo
        inputItem={newItem}
        onItemSubmit={handleOnSubmit}
        onNewItemInput={handleNewItemInput}
      />
      <ControlTodo
        onDeleteTodo={handleDeleteTodo}
        onToggleTodo={handleToggleTodo}
        todos={todos}
      />
    </div>
  );
}

export default App;
