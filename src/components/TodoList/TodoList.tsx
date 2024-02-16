import { Todo } from "../../types/common";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

type TodoListProps = {
  title?: string;
  todoList: Todo[];
};

export default function TodoList(props: TodoListProps) {
  return (
    <div id="todo-list-container">
      <h2 id="todo-list-title">{props.title ?? "No Title"}</h2>

      <ul id="todo-list">
        {props.todoList.map((item: Todo, idx: number) => (
          <TodoItem item={item} key={idx} />
        ))}
      </ul>
    </div>
  );
}
