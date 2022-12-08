import React, { useState } from "react";

function Form({ addTask }) {
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({
      name: task,
      checked: false,
      id: Date.now(),
    });

    setTask("");
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onInput={handleChange}
          value={task}
        ></input>
        <button type="submit">+</button>
      </form>
    </div>
  );
}

export default Form;
