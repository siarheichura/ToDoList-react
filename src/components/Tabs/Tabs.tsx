import styles from "./Tabs.module.css";

export interface ITabs {
  filterTodos: (event: any) => void;
}

export function Tabs({ filterTodos }: ITabs) {
  return (
    <div className={styles.tabs}>
      <button className={styles.tab} id="all" onClick={filterTodos}>
        All
      </button>
      <button className={styles.tab} id="done" onClick={filterTodos}>
        Done
      </button>
      <button className={styles.tab} id="notDone" onClick={filterTodos}>
        Not Done
      </button>
    </div>
  );
}
