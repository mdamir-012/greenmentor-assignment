import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTasks } from "../Redux/taskReducer/action";
import ShowTask from "./ShowTask";

const TaskList = () => {
  const { tasks } = useSelector((state) => state.taskReducer);
  console.log(tasks);
  const store = useSelector((state) => state.taskReducer);
  console.log(store);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTasks);
  }, [dispatch]);

  return (
    <div className=" mt-20 ">
      {tasks?.map((elem) => (
        <ShowTask key={elem._id} {...elem} />
      ))}
    </div>
  );
};

export default TaskList;
