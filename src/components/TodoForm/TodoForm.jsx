import { useState } from "react";

import styles from "./TodoForm.module.css";

export function TodoForm({ addTodo }) {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onBtnClick = () => {
    addTodo(inputValue);
    setInputValue("");
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      addTodo(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className={styles.todoForm}>
      <input
        className={styles.todoInput}
        value={inputValue}
        onChange={onInputChange}
        onKeyDown={onKeyPress}
        type="text"
        placeholder="Enter your todo"
      />
      <button className={styles.todoBtn} onClick={onBtnClick}>
        Add
      </button>
    </div>
  );
}
