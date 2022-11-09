import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./componants/Login";
import Signup from "./componants/Signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="login" element={<Login />}></Route>
        <Route path="signup" element={<Signup />}></Route>
      </Routes>
    </div>
  );
}

export default App;
