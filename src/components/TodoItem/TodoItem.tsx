import { Todo } from "../../types/common";

type TodoItemProps = {
  item: Todo;
};

export default function TodoItem(props: TodoItemProps) {
  return <div>{props.item.description}</div>;
}
