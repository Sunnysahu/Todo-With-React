import { useState, useEffect } from "react";
import { TodoProvider } from "./Context/";
import { useTodo } from "./Context/";

import TodoItems from "./Components/TodoItems";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [TodoMsg, setTodoMsg] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    // console.log(todo);
    if (!TodoMsg) return;

    setTodos((prev) => [
      { id: Date.now(), completed: false, TodoMsg },
      ...prev,
    ]);
    setTodoMsg("");
    console.log("Todos : ", todos);
  };

  const updateTodo = (todo) => {};

  const deleteTodo = (id) => {};

  const toggleComplete = (todo) => {};

  return (
    <TodoProvider value={{ addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-blue-950 min-h-screen mx-10 text-center text-lg flex ">
        <div className="py-7 bg-black"></div>
        <div className="text-white bg-blue-900 shadow-2xl mx-96 py-3 my-5 rounded-md h-fit flex-auto  ">
          <h1 className="py-2 font-bold ">Enter Todo</h1>
          <form onSubmit={addTodo}>
            <input
              type="text"
              name="InputText"
              id="InputText"
              className=" my-2 rounded-lg h-8 w-22 text-center border-solid text-black  border-black border-2"
              placeholder="Enter Your Todo..."
              value={TodoMsg}
              onChange={(e) => {
                setTodoMsg(e.target.value);
              }}
            />
            <button
              type="submit"
              onClick={(e) => addTodo(TodoMsg)}
              className="mx-2 bg-slate-300 text-black rounded-lg text-center w-14"
            >
              Add
            </button>
          </form>
          <div className="bg-transparent"></div>
          {/* Display the List Here */}
          {todos.map((todo) => (
            <div key={todo.id} className="w-full">
              <TodoItems key={todo.id} todo={todo} />
            </div>
          ))}
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
