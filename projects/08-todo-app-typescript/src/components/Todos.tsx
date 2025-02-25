import { useState } from "react";
import { type Todo as TodoType } from "../types";
import { Todo } from "./Todo";

interface Props {
  todos: TodoType[]
  setCompleted: (id: string, completed: boolean) => void
  removeTodo: (id: string) => void
  setTitle: (params: { id: string; title: string }) => void;
}

export const Todos: React.FC<Props> = ({
  todos,
  setCompleted,
  setTitle,
  removeTodo
}) => {
  const [isEditing, setIsEditing] = useState("");

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li
          key={todo.id}
          onDoubleClick={() => {
            setIsEditing(todo.id);
          }}
          className={`
          ${todo.completed ? "completed" : ""}
          ${isEditing === todo.id ? "editing" : ""}
        `}
        >
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            setTitle={setTitle}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            completed={todo.completed}
            removeTodo={removeTodo}
            setCompleted={setCompleted}
          />
        </li>
      ))}
    </ul>
  );
};
