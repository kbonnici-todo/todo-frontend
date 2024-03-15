import { FiEdit2 } from "react-icons/fi";
import "./TodoListHeader.css";
import { useState } from "react";

type TodoListHeaderProps = {
  title?: string;
};

export default function TodoListHeader(props: TodoListHeaderProps) {
  const [editingTitle, setEditingTitle] = useState(false);

  const onClickEditTitle = () => {
    setEditingTitle(!editingTitle);
  };

  return (
    <div id="todo-list-header">
      {editingTitle ? (
        <input id="title-editor" className="todo-list-title" />
      ) : (
        <h2 className="todo-list-title">{props.title ?? "No Title"}</h2>
      )}
      <button id="todo-list-title-edit" onClick={onClickEditTitle}>
        <FiEdit2 id="todo-list-title-edit-icon" />
      </button>
    </div>
  );
}
