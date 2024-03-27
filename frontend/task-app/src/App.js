import AllRoutes from "./AllRoutes/AllRoutes";
import "./App.css";
import Navbar from "./Components/Navbar";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  return <div className="App">
  
  {/* <Signup/>
  <Login/> */}
  
  <Navbar/>
  <AllRoutes/>

  </div>;
}

export default App;
