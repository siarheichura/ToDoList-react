import { useState } from "react";
import styles from "./TodoItem.module.css";

export function TodoItem({ todo, removeTodo, doneTodo, markTodo, editTodo }) {
  const [inputValue, setInputValue] = useState(todo.task);

  const onBtnDoneClick = (event) => {
    doneTodo(todo.id);
    event.stopPropagation();
  };

  const onBtnCloseClick = (event) => {
    removeTodo(todo.id);
    event.stopPropagation();
  };

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const todoClasses = [
    `${styles.todoItem}`,
    todo.isCompleted ? `${styles.todoItemDone}` : ``,
    todo.isMarked ? `${styles.todoItemMarked}` : ``,
  ];

  return (
    <div
      onDoubleClick={() => markTodo(todo.id)}
      className={todoClasses.join(" ")}
      key={todo.id}
    >
      {todo.isEditable ? (
        <div className={styles.todoText}>
          <input
            className={styles.todoEditableInput}
            value={inputValue}
            onChange={onInputChange}
            autoFocus
          />
          <button
            className={styles.todoEditableBtn}
            onClick={() => {
              editTodo(todo.id);
              todo.task = inputValue;
              console.log(todo.task);
            }}
          >
            Save
          </button>
        </div>
      ) : (
        <div className={styles.todoText}>{todo.task}</div>
      )}
      <button className={styles.todoDoneBtn} onClick={onBtnDoneClick}></button>
      <button
        className={styles.todoEditBtn}
        onClick={() => editTodo(todo.id)}
      ></button>
      <button
        className={styles.todoCloseBtn}
        onClick={onBtnCloseClick}
      ></button>
    </div>
  );
}
