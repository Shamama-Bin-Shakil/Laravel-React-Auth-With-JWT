import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import AuthUser from "../components/AuthUser";
import Guest from "./guest";

function Auth() {
  const { getToken } = AuthUser();
  if (!getToken()) {
    return <Guest />;
  }
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </>
  );
}

export default Auth;
