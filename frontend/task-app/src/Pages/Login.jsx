import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  isAuth,
  postUserError,
  postUserReq,
  postUserSuccess,
} from "../Redux/userReducer/action";
import { Link, useNavigate } from "react-router-dom";

const initialValue = {
  email: "",
  password: "",
};

const Login = () => {
  const [loading,setLoading]=useState(false);
  const [formData, setFormData] = useState(initialValue);

  const navigate=useNavigate();
  const dispatch = useDispatch();

  const fetchData = async (formData) => {
    try {
      dispatch(postUserReq());
      const response = await fetch("https://agile-eel-button.cyclic.app/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log("Success:", result);
      dispatch(postUserSuccess(result));
      console.log(result.token)
      if(result.token){
        localStorage.setItem("mytoken",result.token)
      }
      alert("Login Successfull!")
      navigate("/")
    } catch (error) {
      console.error("Error:", error);
      dispatch(postUserError());
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetchData(formData);
  };


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(()=>{
    if(localStorage.getItem("mytoken")){
      dispatch(isAuth(true))
    }
  })
  return (
    <div className=" mt-20 flex justify-center ">
    
    <div className=" border-2 border-gray-400  shadow-md h-auto pb-4 px-4 rounded-2xl w-[40%]">
      <form onSubmit={handleSubmit} className=" ">
        <h1 className="text-3xl font-mono  font-semibold mb-4">Login</h1>

        <input
          type="email"
          placeholder="Enter email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border-2 rounded-md my-4 px-2"
          required
        />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border-2 rounded-md mb-6 px-2"
          required
        />
        <br />
        <input type="submit" name="Submit" className="bg-green-400 hover:bg-green-700 cursor-pointer text-white w-full rounded-md px-6 font-semibold py-2 "/>
        <Link className="text-sky-900   underline" to={"/signup"}>New User</Link>
      </form>
      </div>
    </div>
  );
};

export default Login;
