import { useState } from "react";

import styles from "./TodoForm.module.css";

export function TodoForm({ addTodo }) {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onBtnClick = (event) => {
    addTodo(inputValue);
    setInputValue("");
  };

  return (
    <div className={styles.todoForm}>
      <input
        className={styles.todoInput}
        value={inputValue}
        onChange={onInputChange}
        type="text"
        placeholder="Type..."
      />
      <button className={styles.todoBtn} onClick={onBtnClick}>
        Add
      </button>
    </div>
  );
}
