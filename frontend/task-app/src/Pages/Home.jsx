import React, { useState } from "react";
import AddTask from "../Components/AddTask";
import TaskList from "../Components/TaskList";

const Home = () => {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <div className="text-center mr-8 mt-20">
      
      <div>
        <button
          className="text-lg font-semibold bg-yellow-200 px-6 rounded-md"
          onClick={handleToggle}
        >
          Add Task
        </button>
      </div>

      {show ? <AddTask /> : ""}
      <br />

      <div>
        <TaskList />
      </div>
    </div>
  );
};

export default Home;
