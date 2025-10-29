import React from "react";

const TodoItem = ({ task, toggleTask, deleteTask }) => {
  return (
    <div className="todo-item">
      <span
        className={task.done ? "done" : ""}
        onClick={toggleTask}
      >
        {task.text}
      </span>
      <button onClick={deleteTask}>❌</button>
    </div>
  );
};

export default TodoItem;
