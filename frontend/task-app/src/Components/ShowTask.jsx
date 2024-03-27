import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditTask from "./EditTask";
import { deleteTaskData, deleteTaskSuccess } from "../Redux/taskReducer/action";

const ShowTask = ({ title, description, _id }) => {
  const [edit, setEdit] = useState(false);

  const { token } = useSelector((state) => state.userReducer);
  console.log(token);
  const dispatch = useDispatch();

  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleDelete = (_id, token) => {
    dispatch(deleteTaskData(_id, token));
  };

  return (
    <div className="border-2 border-gray-400 flex justify-between  shadow-md my-4 rounded-md mx-4">
      <div className="text-left px-6 py-4">
        {edit ? (
          <EditTask editFun={handleEdit} _id={_id} />
        ) : (
          <div>
            <p className="font-semibold text-lg">Title : {title}</p>
            <p className="text-base">Description : {description}</p>
          </div>
        )}
      </div>
      <div className="px-4 text-center flex justify-center items-center ">
        <button className="px-4 font-semibold bg-green-400 rounded-md  text-white" onClick={handleEdit}>Edit </button>
        <button className=" font-semibold bg-red-600 px-6 rounded-md ml-4 text-white" onClick={() => handleDelete(_id)}>Delete</button>
      </div>
    </div>
  );
};

export default ShowTask;
