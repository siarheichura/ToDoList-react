import styles from "./RemoveButtons.module.css";

export function RemoveButtons({ removeSelectedTodos, doneSelectedTodos }) {
  return (
    <div className={styles.btnsWrapper}>
      <button className={styles.btn} onClick={removeSelectedTodos}>
        Remove Selected
      </button>
      <button className={styles.btn} onClick={doneSelectedTodos}>
        Done Selected
      </button>
    </div>
  );
}
