import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTask } from "../Redux/taskReducer/action";

const initialValue = {
  title: "",
  description: "",
};
const AddTask = () => {
  const [form, setForm] = useState(initialValue);

  const { token } = useSelector((state) => state.userReducer);
  console.log(token);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createTask(form, token));
  };
  return (
    <div className="flex justify-center mt-5">
    <div className="border-2 border-gray-400  shadow-md h-auto pb-4 px-4 rounded-2xl w-[40%]">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter title"
          name="title"
          value={form.title}
          onChange={handleChange}
          className="w-full border-2 rounded-md my-4 px-2"
        />
        <br />
        <textarea
          type="text"
          placeholder="Enter Description"
          name="description"
          value={form.description}
          onChange={handleChange}
          rows={4}
          cols={50}
          className="w-full px-2 mb-6"
        />
        <br />
        <input type="submit" name="Submit" className="bg-green-400 hover:bg-green-700 cursor-pointer text-white w-full rounded-md px-6 font-semibold py-2 "/>
      </form>
      </div>
    </div>
  );
};

export default AddTask;
