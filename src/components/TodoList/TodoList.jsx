import { useState, useEffect } from "react";

import { TodoForm } from "../TodoForm";
import { RadioButtons } from "../RadioButtons";
import { TodoItem } from "../TodoItem";
import { RemoveButtons } from "../RemoveButtons";

import styles from "./TodoList.module.css";

export function TodoList() {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState(todos);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    setTodos(todos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));

    setFilteredTodos(todos);
  }, [todos]);

  const addTodo = (inputValue) => {
    if (inputValue) {
      const newTodo = {
        id: Math.random().toString(36).substr(2, 9),
        task: inputValue,
        isMarked: false,
        isCompleted: false,
        isEditable: false,
      };
      setTodos([...todos, newTodo]);
    }
  };

  const removeTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const doneTodo = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      ),
    ]);
  };

  const markTodo = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, isMarked: !todo.isMarked } : { ...todo }
      ),
    ]);
  };

  const editTodo = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, isEditable: !todo.isEditable } : { ...todo }
      ),
    ]);
  };

  const removeSelectedTodos = () => {
    setTodos([...todos.filter((todo) => !todo.isMarked)]);
  };

  const doneSelectedTodos = () => {
    setTodos([
      ...todos.map((todo) =>
        todo.isMarked && !todo.isCompleted
          ? {
              ...todo,
              isMarked: !todo.isMarked,
              isCompleted: !todo.isCompleted,
            }
          : { ...todo }
      ),
    ]);
  };

  const filterTodos = (event) => {
    const allTodos = [...todos];
    const doneTodos = [...allTodos.filter((todo) => todo.isCompleted)];
    const notDoneTodos = [...allTodos.filter((todo) => !todo.isCompleted)];
    if (event.target.id === "all") {
      setFilteredTodos(todos);
    } else if (event.target.id === "done") {
      setFilteredTodos(doneTodos);
    } else if (event.target.id === "notDone") {
      setFilteredTodos(notDoneTodos);
    }
  };

  return (
    <div className={styles.todoList}>
      <header>
        <h1 className={styles.todoListTitle}>
          TODO LIST
          <div className={styles.todoTitleCounter}>
            {todos.length ? todos.length : ""}
          </div>
        </h1>
        {todos.some((item) => item.isMarked) ? (
          <RemoveButtons
            removeSelectedTodos={removeSelectedTodos}
            doneSelectedTodos={doneSelectedTodos}
          />
        ) : null}
      </header>

      <div className={styles.todoListBody}>
        <TodoForm addTodo={addTodo} />
        {todos.length ? <RadioButtons filterTodos={filterTodos} /> : null}

        {filteredTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              doneTodo={doneTodo}
              markTodo={markTodo}
              editTodo={editTodo}
            />
          );
        })}
      </div>
    </div>
  );
}
