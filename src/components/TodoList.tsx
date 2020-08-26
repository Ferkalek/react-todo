import React from "react";
import { ITodo } from "../interfaces";

type TodoListProps = {
  todos: ITodo[];
  changeHandler(id: number): void;
  removeHandler: (id: number) => void;
};

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  changeHandler,
  removeHandler,
}) => {
  return (
    <ul>
      {todos.map((todo) => {
        const classes = ["todo"];
        if (todo.completed) {
          classes.push("completed");
        }
        return (
          <li className={classes.join(" ")} key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={changeHandler.bind(null, todo.id)}
              />
              <span>{todo.title}</span>
              <i
                className="material-icons red-text"
                onClick={() => removeHandler(todo.id)}
              >
                delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};
