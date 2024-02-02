import { Todo } from "../../types/common";
import TodoItem from "../TodoItem/TodoItem";

type TodoListProps = {
  title?: string;
  todoList: Todo[];
};

export default function TodoList(props: TodoListProps) {
  return props.todoList.map((item: Todo) => <TodoItem item={item} />);
}
