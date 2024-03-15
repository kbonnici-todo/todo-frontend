import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import { Todo } from "./types/common";

const data: Todo[] = [
  { description: "foo blah", isDone: false },
  { description: "echo", isDone: true },
];

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  async function fetchTodos() {
    const result = await fetch("http://localhost:3000/todos");
    const data = (await result.json()) as Todo[];
    setTodos(data);
  }
  useEffect(() => {
    fetchTodos();
  }, []);
  useEffect(() => {
    setTodos(data); // TODO: call backend API to retrieve data
  }, []);

  return (
    <>
      <Header />
      <TodoList todoList={todos} />
    </>
  );
}

export default App;
