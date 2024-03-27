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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter title"
          name="title"
          value={form.title}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="Enter Description"
          name="description"
          value={form.description}
          onChange={handleChange}
        />
        <br />
        <input type="submit" name="Submit" />
      </form>
    </div>
  );
};

export default AddTask;
