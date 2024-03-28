import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTask } from "../Redux/taskReducer/action";

const initialValue = {
  title: "",
  description: "",
};
const EditTask = ({ _id, editFun }) => {
  const [form, setForm] = useState(initialValue);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = () => {
    dispatch(updateTask(_id, form));
  };
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault(handleSubmit(editFun()))}>
        <input
          type="text"
          placeholder="Enter title"
          name="title"
          value={form.title}
          onChange={handleChange}
          className="border-2 border-gray-400 rounded-md mb-1 pl-2 "
        />
        <br />
        <input
          type="text"
          placeholder="Enter description"
          name="description"
          value={form.description}
          onChange={handleChange}
          className="border-2 border-gray-400 rounded-md pl-2"
        />
        <br />
        <input type="submit" name="Submit" className="bg-lime-600 hover:bg-green-600 rounded-md text-white px-4 cursor-pointer mt-3"/>
      </form>
    </div>
  );
};

export default EditTask;
