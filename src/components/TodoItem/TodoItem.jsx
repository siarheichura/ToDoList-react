import styles from "./TodoItem.module.css";

export function TodoItem({ todo, removeTodo, doneTodo, markTodo, editTodo }) {
  const onBtnDoneClick = (event) => {
    doneTodo(todo.id);
    event.stopPropagation();
  };

  const onBtnCloseClick = (event) => {
    removeTodo(todo.id);
    event.stopPropagation();
  };

  const todoClasses = [
    `${styles.todoItem}`,
    todo.isCompleted ? `${styles.todoItemDone}` : ``,
    todo.isMarked ? `${styles.todoItemMarked}` : ``,
  ];

  return (
    <div
      onDoubleClick={() => markTodo(todo.id)}
      className={todoClasses.join(" ")}
      key={todo.id}
    >
      <div
        contentEditable={todo.isEditable ? true : false}
        className={styles.todoText}
      >
        {todo.task}
      </div>
      <button className={styles.todoDoneBtn} onClick={onBtnDoneClick}></button>
      <button
        className={styles.todoEditBtn}
        onClick={() => editTodo(todo.id)}
      ></button>
      <button
        className={styles.todoCloseBtn}
        onClick={onBtnCloseClick}
      ></button>
    </div>
  );
}
