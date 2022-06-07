import { Route } from "react-router-dom";
import { BrowserRouter as Router, Routes} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";
import UserProf from "./Pages/ProfileTwo/UserProf";
import Register from "./Pages/Register/Register";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/login" exact element={<Login/>}/>
          <Route path="/register" exact element={<Register/>}/>
          <Route path="/profile/:username" exact element={<UserProf/>}/> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
