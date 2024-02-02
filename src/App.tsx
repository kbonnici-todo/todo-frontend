import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import { Todo } from "./types/common";

function App() {
  const [list, setList] = useState<Todo[]>([]);

  useEffect(() => {
    setList([{ description: "foo blah", isDone: false }]);
  }, []);

  return (
    <>
      <Header />
      <TodoList todoList={list} />
    </>
  );
}

export default App;
