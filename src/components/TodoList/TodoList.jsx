import { useState } from "react";

import { TodoForm } from "../TodoForm";
import { TodoItem } from "../TodoItem";

import styles from "./TodoList.module.css";

export function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (inputValue) => {
    if (inputValue) {
      const newTodo = {
        id: Math.random().toString(36).substr(2, 9),
        task: inputValue,
        isCompleted: false,
      };
      setTodos([...todos, newTodo]);
    }
  };

  const removeTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const toggleTodo = (id) => {};

  return (
    <div className={styles.todoList}>
      <h1 className={styles.todoListTitle}>TODO LIST {todos.length}</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} />;
      })}
    </div>
  );
}
