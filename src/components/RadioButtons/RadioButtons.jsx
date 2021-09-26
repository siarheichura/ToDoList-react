import styles from "./RadioButtons.module.css";

export function RadioButtons({ filterTodos }) {
  return (
    <div className={styles.radioBtns}>
      <input
        type="radio"
        name="filterTodos"
        id="all"
        value="all"
        onChange={filterTodos}
      />
      <label htmlFor="all">All</label>

      <input
        type="radio"
        name="filterTodos"
        id="done"
        value="done"
        onChange={filterTodos}
      />
      <label htmlFor="done">Done</label>

      <input
        type="radio"
        name="filterTodos"
        id="notDone"
        value="notDone"
        onChange={filterTodos}
      />
      <label htmlFor="notDone">Not Done</label>
    </div>
  );
}
