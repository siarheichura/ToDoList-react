import { useState } from "react";

import styles from "./TodoForm.module.css";

export interface IFormTodo {
  addTodo: any;
}

export function TodoForm({ addTodo }: IFormTodo) {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const onAddBtnClick = () => {
    addTodo(inputValue);
    setInputValue("");
  };

  const onEnterPress = (event: any) => {
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
        onKeyDown={onEnterPress}
        type="text"
        placeholder="Enter your todo"
      />
      <button className={styles.todoBtn} onClick={onAddBtnClick}>
        Add
      </button>
    </div>
  );
}
