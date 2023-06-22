import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import Home from "./Home";

function Guest() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sign" element={<Register />}></Route>
      </Routes>
    </>
  );
}

export default Guest;
