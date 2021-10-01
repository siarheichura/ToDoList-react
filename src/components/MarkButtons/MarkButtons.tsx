import styles from "./MarkButtons.module.css";

export interface IMarkButtons {
  removeSelectedTodos: () => void;
  doneSelectedTodos: () => void;
}

export function MarkButtons({
  removeSelectedTodos,
  doneSelectedTodos,
}: IMarkButtons) {
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
