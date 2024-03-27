import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  postUserError,
  postUserReq,
  postUserSuccess,
} from "../Redux/userReducer/action";
import { Link } from "react-router-dom";
const initialValue = {
  name: "",
  email: "",
  password: "",
};
const Signup = () => {
  const [formData, setFormData] = useState(initialValue);
  const dispatch = useDispatch();

  const fetchData = async (formData) => {
    try {
      dispatch(postUserReq());
      const response = await fetch("http://localhost:8000/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log("Success:", result);
      dispatch(postUserSuccess(result));
      alert("Signup Successful!")
    } catch (error) {
      console.error("Error:", error);
      dispatch(postUserError());
      throw(error)
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetchData(formData);
  };

  // useEffect(()=>{
  //   if(localStorage.getItem("token"))

  // })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="mt-20 flex justify-center ">
      <div className="border-2 border-gray-400  shadow-md h-auto pb-4 px-4 rounded-2xl w-[40%]">
        <form onSubmit={handleSubmit}>
          <h1 className="text-3xl font-mono  font-semibold mb-4">Signup</h1>

          <input
            type="text"
            placeholder="Enter name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border-2 rounded-md my-4 px-2"
          />
          <br />
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border-2 rounded-md mb-4 px-2"
          />
          <br />
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border-2 rounded-md mb-6 px-2"
          />
          <br />
          <input type="submit" name="Submit" className="bg-green-400 hover:bg-green-700 cursor-pointer text-white w-full rounded-md px-6 font-semibold py-2 "/>
          <Link className="text-sky-900 mt-2  underline"  to={"/login"}>Login</Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
