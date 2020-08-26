import React, { useState, useEffect } from "react";

import { TodoForm } from "../components/TodoForm";
import { TodoList } from "../components/TodoList";

import { ITodo } from "../interfaces";

declare var confirm: (question: string) => boolean;

export const TodoPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[];
    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addHandler = (todo: string) => {
    const newTodo: ITodo = {
      title: todo,
      id: Date.now(),
      completed: false,
    };
    setTodos((prev) => {
      return [...prev, newTodo];
    });
  };

  const changeCompleted = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const removeTodo = (id: number) => {
    const conf = confirm("Are you sure you want to remove element?");
    // const conf = window.confirm("Are you sure you want to remove element?");
    if (conf) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
  };
  return (
    <React.Fragment>
      <TodoForm onAdd={addHandler} />

      <TodoList
        todos={todos}
        changeHandler={changeCompleted}
        removeHandler={removeTodo}
      />
    </React.Fragment>
  );
};
