import Signin from "./Components/Signin/Signin";
import Home from "./Components/Home/Home";
import Signup from "./Components/sign-up/Signup";
import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./Components/Services/ProtectedRoutes";

function App() {
  return (
    <Routes>
      <Route path="/signin" element={<Signin />} />

      <Route path="/" element={<Signup />} />

      <Route path="/" element={<ProtectedRoutes/>} >
        <Route path="/" element={<Home />}/>
      </Route>
      {/* OR <Route path="/home" element={<Home />}/> */}
    </Routes>
  );
}

function Navigation() {
  return (
    <nav>
      <NavLink to="/home">Home</NavLink>

      <NavLink to="/about">About</NavLink>
    </nav>
  );
}

export default App;
