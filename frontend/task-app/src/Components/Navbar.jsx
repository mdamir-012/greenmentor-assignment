import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { isAuth } from "../Redux/userReducer/action";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {  isLogin } = useSelector((state) => state.userReducer);
  console.log(isLogin);
  // const links = [
  //   { path: "/", title: "Home" },
  //   { path: "/signup", title: "Signup" },
  //   { path: "/login", title: "Login" },
  //   { path: "/tasklist", title: "TaskList" },
  //   { path: "/addtask", title: "AddTask" },
  // ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("User logged out");
    setTimeout(() => {
      navigate("/login");
    }, 2000);
    dispatch(isAuth(false));
  };

  useEffect(()=>{
    if(localStorage.getItem("mytoken")){
      dispatch(isAuth(true))
    }
  },[])

  return (
    <div className="">
      <nav className="bg-emerald-900 fixed top-0 w-full py-4">
        <div className="flex justify-around items-center ">
          <Link className="text-white text-xl font-semibold" to={"/tasklist"}>Tasks List</Link>

 
          {isLogin ? (
            <div className="flex items-center">
              <Link className="text-white text-xl" to={"/profile"}>Profile</Link>{" "}
              <button  className="text-lg text-white px-4 py-2 bg-red-600 rounded-full font-semibold mx-2" onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <div>
              <Link className="text-xl font-semibold text-white" to={"/login"}>Login</Link>
            </div>
          )}
        </div>
      </nav>

      <br />
      {/* {links.map((elem) => (
        <Link key={elem.path} to={elem.path}>
          {elem.title}
        </Link>
      ))} */}
    </div>
  );
};

export default Navbar;
