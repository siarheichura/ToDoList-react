import { useState, useEffect } from "react";

import { TodoItem } from "../TodoItem";
import { TodoForm } from "../TodoForm";
import { Tabs } from "../Tabs";
import { MarkButtons } from "../MarkButtons";

import styles from "./TodoList.module.css";

export interface ITodo {
  id: string;
  task: string;
  isMarked: boolean;
  isCompleted: boolean;
}

export function TodoList() {
  const [todos, setTodos]: any = useState([]);
  const [filteredTodos, setFilteredTodos] = useState(todos);

  useEffect(() => {
    const todosFromStorage: any = localStorage.getItem("todos") || [];
    const todos = JSON.parse(todosFromStorage);

    setTodos(todos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));

    setFilteredTodos(todos);
  }, [todos]);

  const addTodo = (inputValue: string) => {
    if (inputValue) {
      const newTodo: ITodo = {
        id: Math.random().toString(36).substr(2, 9),
        task: inputValue,
        isMarked: false,
        isCompleted: false,
      };
      setTodos([...todos, newTodo]);
    }
  };

  const removeTodo = (id: string) => {
    setTodos(todos.filter((todo: ITodo) => todo.id !== id));
  };

  const setEditTodo = (id: string, newTask: string) => {
    setTodos(
      todos.map((todo: ITodo) =>
        todo.id === id ? { ...todo, task: newTask } : todo
      )
    );
  };

  const doneTodo = (id: string) => {
    setTodos(
      todos.map((todo: ITodo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const selectTodo = (id: string) => {
    setTodos(
      todos.map((todo: ITodo) =>
        todo.id === id ? { ...todo, isMarked: !todo.isMarked } : todo
      )
    );
  };

  const removeSelectedTodos = () => {
    setTodos(todos.filter((todo: ITodo) => !todo.isMarked));
  };

  const doneSelectedTodos = () => {
    setTodos(
      todos.map((todo: ITodo) =>
        todo.isMarked && !todo.isCompleted
          ? {
              ...todo,
              isMarked: !todo.isMarked,
              isCompleted: !todo.isCompleted,
            }
          : todo
      )
    );
  };

  const filterTodos = (event: any) => {
    const doneTodos = todos.filter((todo: any) => todo.isCompleted);
    const notDoneTodos = todos.filter((todo: any) => !todo.isCompleted);
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
      </header>
      <div className={styles.todoListBody}>
        <TodoForm addTodo={addTodo} />
        {todos.length ? <Tabs filterTodos={filterTodos} /> : null}
        {filteredTodos.map((todo: ITodo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              doneTodo={doneTodo}
              selectTodo={selectTodo}
              setEditTodo={setEditTodo}
            />
          );
        })}
      </div>
      {todos.some((todo: ITodo) => todo.isMarked) ? (
        <MarkButtons
          removeSelectedTodos={removeSelectedTodos}
          doneSelectedTodos={doneSelectedTodos}
        />
      ) : null}
    </div>
  );
}
