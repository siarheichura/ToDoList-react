import { useState } from "react";
import styles from "./TodoItem.module.css";

import { ITodo } from "../TodoList/TodoList";

export interface ITodoItem {
  todo: ITodo;
  removeTodo: (id: string) => void;
  doneTodo: (id: string) => void;
  selectTodo: (id: string) => void;
  setEditTodo: (id: string, newTask: string) => void;
}

export function TodoItem({
  todo,
  removeTodo,
  doneTodo,
  selectTodo,
  setEditTodo,
}: ITodoItem) {
  const [inputValue, setInputValue] = useState(todo.task);
  const [isEditable, setIsEditable] = useState(false);

  const onBtnSaveEditClick = () => {
    setEditTodo(todo.id, inputValue);
    setIsEditable(!isEditable);
  };

  const onInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const todoClasses = [
    `${styles.todoItem}`,
    todo.isCompleted ? `${styles.todoItemDone}` : ``,
    todo.isMarked ? `${styles.todoItemMarked}` : ``,
  ];

  return (
    <div
      onDoubleClick={() => selectTodo(todo.id)}
      className={todoClasses.join(" ")}
      key={todo.id}
    >
      {isEditable ? (
        <div className={styles.todoText}>
          <input
            className={styles.todoEditableInput}
            value={inputValue}
            onChange={onInputChange}
            autoFocus
          />
          <button
            className={styles.todoEditableBtn}
            onClick={onBtnSaveEditClick}
          >
            Save
          </button>
        </div>
      ) : (
        <div className={styles.todoText}>{todo.task}</div>
      )}
      <button
        className={styles.todoDoneBtn}
        onClick={() => doneTodo(todo.id)}
      ></button>
      <button
        className={styles.todoEditBtn}
        onClick={() => setIsEditable(!isEditable)}
      ></button>
      <button
        className={styles.todoCloseBtn}
        onClick={() => removeTodo(todo.id)}
      ></button>
    </div>
  );
}
