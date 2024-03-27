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
        />
        <br />
        <input
          type="text"
          placeholder="Enter description"
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

export default EditTask;
