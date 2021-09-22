import styles from "./TodoItem.module.css";

export function TodoItem({ todo, removeTodo, toggleTodo }) {
  return (
    <div
      onClick={() => toggleTodo(todo.id)}
      className={
        todo.isCompleted
          ? `${styles.todoItem} ${styles.todoItemDone}`
          : `${styles.todoItem}`
      }
      key={todo.id}
    >
      <div>{todo.task}</div>
      <div onClick={() => removeTodo(todo.id)}>x</div>
    </div>
  );
}
