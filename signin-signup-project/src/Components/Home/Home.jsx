import Signin from "../Signin/Signin";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/signin");
  };

  const userName = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="home">
      <div className="content">
        <h1>Home Page</h1>
        <br />
        <p className="para">
          
          <span>Welcome : </span> {userName.email}     
        </p>
        <br />
        <button onClick={handleLogout} type="button">
          Log out
        </button>
      </div>
    </div>
  );
}
export default Home;
