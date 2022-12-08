import React, { useState } from "react";

function Item({ tasks, removeTask }) {
  const [checked, setChecked] = useState(false);

  return tasks.map((task) => {
    return (
      <div className="item" key={task.id}>
        <div className="item_radiobutton">
          <input
            type="radio"
            checked={checked}
            onChange={() => setChecked(!checked)}
            onClick={() => removeTask(task.id)}
          ></input>
        </div>
        <div className="item_details">
          <div className="name">
            <h2>{task.name}</h2>
          </div>
          <div className="time">
            <div className="time-wrapper_content">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                width="16"
                height="16"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
                  clipRule="evenodd"
                />
              </svg>
              <p>{task.id}</p>
            </div>
          </div>
        </div>
      </div>
    );
  });
}

export default Item;
