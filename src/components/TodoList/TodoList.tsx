import { Todo } from "../../types/common";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";
import TodoListHeader from "./TodoListHeader";

type TodoListProps = {
  title?: string;
  todoList: Todo[];
};

export default function TodoList(props: TodoListProps) {
  return (
    <div id="todo-list-container">
      <TodoListHeader />
      <ul id="todo-list">
        {props.todoList.map((item: Todo, idx: number) => (
          <TodoItem item={item} key={idx} />
        ))}
      </ul>
    </div>
  );
}
