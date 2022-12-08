import React from "react";

function Time() {
  const d = new Date();
  let hh = d.getHours();
  let mm = d.getMinutes();
  let ss = "AM";

  if (hh == 0) {
    hh = 12;
  }
  if (hh > 12) {
    hh = hh - 12;
    ss = "PM";
  }

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  return (
    <div className="time-wrapper">
      <div className="time-wrapper_header">
        <h1>Today</h1>
      </div>
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
        <p>{`${hh}:${mm} ${ss}`}</p>
      </div>
    </div>
  );
}

export default Time;
