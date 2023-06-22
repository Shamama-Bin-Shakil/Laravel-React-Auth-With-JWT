import { useEffect, useState } from "react";
import AuthUser from "./AuthUser";
import Navbar from "./Navbar";

const Dashboard = () => {
  const { user, http } = AuthUser();
  const [userDetail, setUserDetail] = useState('');

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = () => {
    http.post("/me").then((res) => {
      setUserDetail(res.data);
    });
  };

  function dataRender() {
    if (userDetail) {
      return (
        <>
          <Navbar />
          <div className="container">
            <h1>Dashboard</h1>
            <hr />
            <h3>Name</h3>
            <h6>{userDetail.name}</h6>
            <h3>Email</h3>
            <h6>{userDetail.email}</h6>
          </div>
        </>
      );
    } else {
      return <p>Loading...</p>;
    }
  }

  return <div>{dataRender()}</div>;
};

export default Dashboard;
