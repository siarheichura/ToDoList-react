import styles from "./TodoItem.module.css";

export function TodoItem({ todo, removeTodo }) {
  return (
    <div className={styles.todoItem} key={todo.id}>
      <div>{todo.task}</div>
      <div onClick={() => removeTodo(todo.id)}>X</div>
    </div>
  );
}
