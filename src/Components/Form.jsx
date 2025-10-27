import React, { useState } from "react";

export default function Form({ styles, onSubmit }) {
  const [value, setValue] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (typeof onSubmit === "function") onSubmit(value);
    setValue("");
  }
  return (
    <form className={styles.taskForm} onSubmit={(e) => handleSubmit(e)}>
      <input
        className="form-input"
        type="text"
        placeholder="Add a task"
        value={value ?? ""}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="icon-button" type="submit">
        <span className={`material-symbols-outlined add_circle`}>
          add_circle
        </span>
      </button>
    </form>
  );
}
