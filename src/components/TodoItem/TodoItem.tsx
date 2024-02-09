import { useState } from "react";
import { Todo } from "../../types/common";

type TodoItemProps = {
  item: Todo;
};

export default function TodoItem(props: TodoItemProps) {
  const [checked, setchecked] = useState(props.item.isDone);

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setchecked(e.target.checked);
  };

  return (
    <li>
      <input type="checkbox" checked={checked} onChange={handleCheck} />

      {props.item.description}
    </li>
  );
}
