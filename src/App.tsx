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
  const [list, setList] = useState<Todo[]>([]);

  useEffect(() => {
    setList(data); // TODO: call backend API to retrieve data
  }, []);

  return (
    <>
      <Header />
      <TodoList todoList={list} />
    </>
  );
}

export default App;
