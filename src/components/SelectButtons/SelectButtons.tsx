import styles from "./SelectButtons.module.css";

export interface ISelectButtons {
  removeSelectedTodos: () => void;
  doneSelectedTodos: () => void;
}

export function SelectButtons({
  removeSelectedTodos,
  doneSelectedTodos,
}: ISelectButtons) {
  return (
    <div className={styles.markBtnsWrapp}>
      <button
        className={`${styles.markBtn} ${styles.markBtnRemove}`}
        onClick={removeSelectedTodos}
      >
        Remove Selected
      </button>
      <button
        className={`${styles.markBtn} ${styles.markBtnDone}`}
        onClick={doneSelectedTodos}
      >
        Done Selected
      </button>
    </div>
  );
}
