import { Flex } from "@chakra-ui/react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./componants/Dashboard";
import Hof from "./componants/Hof";
import Login from "./componants/Login";
import Signup from "./componants/Signup";

function App() {
  return (
    <div className="App">
      <Flex
        border="1px solid grey"
        mt={"10px"}
        h="50px"
        margin="auto"
        bg={"grey"}
        alignItems={"center"}
        justifyContent={"space-around"}
      >
        {" "}
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </Flex>
      <Routes>
        <Route path="login" element={<Login />}></Route>
        <Route path="signup" element={<Signup />}></Route>
        <Route
          path="dashboard"
          element={
            <Hof>
              <Dashboard />
            </Hof>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
