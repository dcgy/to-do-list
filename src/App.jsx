import { useState } from "react";
import reactLogo from "./assets/react.svg";

//components

import Time from "./components/Time";
import Form from "./components/Form";
import Item from "./components/Item";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks((prevState) => [...prevState, task]);
  };

  const removeTask = (id) => {
    setTasks((prevState) => prevState.filter((task) => task.id !== id));
  };

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="section">
        <div className="container">
          <Time />
          <Form addTask={addTask} />
          <Item tasks={tasks} removeTask={removeTask} />
        </div>
      </div>
    </div>
  );
}

export default App;
