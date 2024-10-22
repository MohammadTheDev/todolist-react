import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    e.preventDefault();

    addTodo(value);
    setValue("")
  };

  return (
    <form className="TodoForm" onSubmit={handleChange}>
      <input
        type="text "
        value={value}
        className="todo-input"
        placeholder="what is the task today?"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};
